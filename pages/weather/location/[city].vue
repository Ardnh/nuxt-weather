<template>
    <Toast/>
    <div v-if="isLoading" class="mx-auto">
        <div class="flex justify-content-center">
            <ProgressSpinner/>
        </div>
        <div class="text-center text-xl text-bluegray-500">Fetching data...</div>
    </div>
    <div v-else>
        <div v-if="cityData !== null" class="my-4 border-round-xl bg-bluegray-900 p-4 mx-7">
            <div class="grid">
                <div class="md:col-4 col-12">
                    <img class="ml-6" src="/abs-1.svg" width="300" height="250">
                </div>
                <div class="md:col-8 col-12">
                    <div class="text-5xl font-bold mt-7">{{ cityData.name }}</div>
                    <div class="grid mt-4">
                        <div class="col-4">
                            <div class="p-3 border-1 border-gray-400 border-round-xl mx-2">
                                <div class="text-2xl font-bold">{{ cityData.population }}</div>
                                <div class="text-base text-gray-400">Population</div>
                            </div>
                        </div>
                        <div class="col-4">
                            <div class="p-3 border-1 border-gray-400 border-round-xl mx-2">
                                <div class="text-2xl font-bold">{{ cityData.region }}</div>
                                <div class="text-base text-gray-400">Region</div>
                            </div>
                        </div>
                        <div class="col-4">
                            <div class="p-3 border-1 border-gray-400 border-round-xl mx-2">
                                <div class="text-2xl font-bold">{{ cityData.country }}</div>
                                <div class="text-base text-gray-400">Country</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div v-if="currentWeather !== null" class="my-4 border-round-xl p-4 mx-7">
            <div class="grid">
                <div class="col-4">
                    <WeatherItemWeather title="Temperature" :score="currentWeather.current?.temp_c" color="blue-400">
                        <SvgTemperatureSvg/>
                    </WeatherItemWeather>
                </div>
                <div class="col-4">
                    <WeatherItemWeather title="UV Index" :score="currentWeather.current?.uv" color="teal-400">
                        <SvgUvSvg/>
                    </WeatherItemWeather>
                </div>
                <div class="col-4">
                    <WeatherItemWeather title="Wind Speed (km/h)" :score="currentWeather.current?.wind_kph" color="red-400">
                        <SvgWindSvg/>
                    </WeatherItemWeather>
                </div>
                <div class="col-4">
                    <WeatherItemWeather title="Humidity" :score="currentWeather.current?.humidity" color="purple-400">
                        <SvgHumiditySvg/>
                    </WeatherItemWeather>
                </div>
                <div class="col-4">
                    <WeatherItemWeather title="Precipitation (mm)" :score="currentWeather.current?.precip_mm" color="green-400">
                        <SvgPrecipSvg/>
                    </WeatherItemWeather>
                </div>
                <div class="col-4">
                    <WeatherItemWeather title="Pressure (mb)" :score="currentWeather.current?.pressure_mb" color="primary-400">
                        <SvgPressureSvg/>
                    </WeatherItemWeather>
                </div>
            </div>
        </div>
        <div v-if="astroTime !== null" class="my-4 border-round-xl bg-bluegray-900 p-4 mx-7">
            <div class="grid">
                <div class="col-4 flex flex-wrap justify-content-center">
                    <div class="bg-gray-900 m-3 border-round-2xl p-3 w-20rem h-25rem">
                        <img src="/day.svg" width="270" height="270" class="ml-2">
                        <div v-if="astroTime.value?.is_moon_up === 1 && astroTime.value?.is_sun_up === 0">
                            <div class="text-center mt-3 text-xl font-bold">{{ astroTime.value?.moon_phase }}</div>
                            <div class="text-center mt-1 text-lg text-gray-400 font-base">Moon Phase</div>
                        </div>
                        <div v-else>
                            <div class="text-center mt-1 text-lg text-gray-400 font-base">Daylight</div>
                        </div>
                    </div>
                </div>
                <div class="col-8">
                    <div class="mt-7 mx-4 text-4xl font-bold">Astronomical Time</div>
                    <div class="mx-4 text-base font-light">Astronomical Time is based on the repetition of astronomical events for setting frequency standards.</div>
                    <div class="flex mt-8 flex-wrap justify-content-start align-items-center">
                        <div class="mx-4">
                            <div class="text-3xl">{{ astroTime.value?.sunrise }}</div>
                            <div class="text-lg text-gray-400">Sunrise</div>
                        </div>
                        <div class="mx-4">
                            <div class="text-3xl">{{ astroTime.value?.sunset }}</div>
                            <div class="text-lg text-gray-400">Sunset</div>
                        </div>
                        <div class="mx-4">
                            <div class="text-3xl">{{ astroTime.value?.moonrise }}</div>
                            <div class="text-lg text-gray-400">Moonrise</div>
                        </div>
                        <div class="mx-4">
                            <div class="text-3xl">{{ astroTime.value?.moonset }}</div>
                            <div class="text-lg text-gray-400">Moonset</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="mx-7 bg-bluegray-900 border-round-xl p-2">
            <p class="text-center text-5xl font-bold">Explore more weather elsewhere in the world!</p>
            <div class="flex flex-wrap justify-content-center mb-5">
                <Button @click="goToExplore" label="Explore" class="text-gray-900"/>
            </div>
        </div>
        <div>
            <div class="text-5xl font-base mt-7 mb-3 text-center">City nearby {{ $route.params.city }}</div>
            <NearbyCities :nearby="nearbyCities"/>
        </div>
    </div>
</template>
<script setup>
import { useToast } from 'primevue/usetoast';
const { fetchCurrentWeather, fetchAstronomicalTime, astronomicalData, weatherData } = useWeather()
const { fetchNearCities, nearbyCities, cityData, fetchCityDetail } = useLocation()
const toast = useToast();
const route = useRoute();
const isLoading = ref(false)
const city = useCity()
const currentWeather = reactive(weatherData)
const astroTime = reactive(astronomicalData)

const getData = async () => {
    isLoading.value = true
    await Promise.all([
        fetchCurrentWeather(route.query.latitude, route.query.longitude, route.params.city),
        fetchNearCities(route.query.latitude, route.query.longitude),
        fetchAstronomicalTime(route.query.latitude, route.query.longitude, route.params.city),
        fetchCityDetail(city.value)
    ]).then(() => {
        toast.add({ severity: 'info', summary: 'Info', detail: 'Success fetch current weather', life: 3000 });
        isLoading.value = false
    }).catch(err => {
        toast.add({ severity: 'error', summary: 'Error', detail: err.message, life: 3000 });
        isLoading.value = false
    })
}

const goToExplore = () => {
    navigateTo("/explore")
}

onMounted(async () => {
    await getData()
})
</script>