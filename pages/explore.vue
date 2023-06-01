<template>
    <Toast/>
    <div class="flex flex-wrap justify-content-center" :class="isTranslate ? 'align-items-start mt-7' : 'align-items-center h-screen'">
        <div class="">
            <p class="text-center text-4xl font-bold">Explore more weather elsewhere in the world!</p>
            <div :class="isTranslate ? 'flex flex-wrap justify-content-center align-items-center' : ''">
                <form class="text-center">
                    <span class="p-input-icon-left">
                        <i class="pi pi-search" />
                        <InputText v-model="query" placeholder="ex: Japan" />
                    </span>
                </form>
                <div class="flex flex-wrap justify-content-center" :class="isTranslate ? 'mx-3' : 'mt-3'">
                    <Button @click="getData" :disabled="query ===''" label="Search" />
                </div>
            </div>
        </div>
    </div>
    <div v-if="isLoading" class="">
        <div class="flex justify-content-center">
            <ProgressSpinner/>
        </div>
        <div class="text-center text-xl text-bluegray-500">Loading...</div>
    </div>
    <div v-if="weatherData !== null" class="my-5">
        <div class="p-4 my-4 border-round-xl mx-7">
            <div class="grid">
                <div class="md:col-3 col-12">
                    <div class="border-round-xl bg-bluegray-900 p-4">
                        <div class="md:text-start mb-5 text-2xl">
                            {{ weatherData.location?.name }}
                        </div>
                        <div class="text-bluegray-400 text-xl font-light">Location</div>
                    </div>
                </div>
                <div class="md:col-3 col-12">
                    <div class="border-round-xl bg-bluegray-900 p-4">
                        <div class="md:text-start mb-5 text-2xl">
                            {{ weatherData.location?.country }}
                        </div>
                        <div class="text-bluegray-400 text-xl font-light">Country</div>
                    </div>
                </div>
                <div class="md:col-3 col-12">
                    <div class="border-round-xl bg-bluegray-900 p-4">
                        <div class="md:text-start mb-5 text-2xl">
                            {{ weatherData.location?.region }}
                        </div>
                        <div class="text-bluegray-400 text-xl font-light">Region</div>
                    </div>
                </div>
                <div class="md:col-3 col-12">
                    <div class="border-round-xl bg-bluegray-900 p-4">
                        <div class="md:text-start mb-5 text-2xl">
                            {{ weatherData.location?.lat }} / {{ weatherData.location?.lon }}
                        </div>
                        <div class="text-bluegray-400 text-xl font-light">Lat / Lon</div>
                    </div>
                </div>
            </div>
        </div>
        <div class="p-4 mx-7 my-4 bg-bluegray-900 border-round-xl">
            <ExploreWeatherData :weather="weatherData" />
        </div>
        <AstronomicalTime :astronomy="astronomicalData"/>
        <div class="my-4 mx-7">
            <div v-if="countryData === null" class="flex flex-wrap justify-content-center">
                <Button @click="getCountryDetail(weatherData.location?.country)" label="Country details" class="mx-auto mb-4"/>
            </div>
            <div v-if="isCountryLoading">
                <div class="flex flex-wrap mt-5 justify-content-center">
                    <ProgressSpinner/>
                </div>
                <div class="text-bluegray-900 text-center text-xl">Loading...</div>
            </div>
            <ExploreCountryDetail v-if="countryData !== null" :country="countryData"/>
        </div>
    </div>
</template>
<script setup>
import { useToast } from 'primevue/usetoast';
const toast = useToast();
const { fetchCurrentWeather, fetchAstronomicalTime, astronomicalData, weatherData } = useWeather()
const { fetchCountryDetail, countryData } = useLocation()
const query = ref("")
const isTranslate = ref(false)
const isLoading =  ref(false)
const isCountryLoading = ref(false)

useHead({
    title: "Explore | Weather news app"
})

const getCountryDetail = async (name) => {
    isCountryLoading.value = true
    await fetchCountryDetail(name)
        .then(() => {
            toast.add({ severity: 'info', summary: 'Info', detail: 'Success fetch country details', life: 3000 });
            isCountryLoading.value = false
        }).catch(err => {
            toast.add({ severity: 'error', summary: 'Error', detail: err.message, life: 3000 });
            isCountryLoading.value = false
        })
}

const getData = async () => {
    isLoading.value = true
    isTranslate.value = true
    countryData.value = null
    await Promise.all([
        fetchCurrentWeather(null, null, query.value),
        fetchAstronomicalTime(null, null, query.value),
    ]).then(() => {
        toast.add({ severity: 'info', summary: 'Info', detail: 'Success fetch current weather', life: 3000 });
        isLoading.value = false
    }).catch(err => {
        toast.add({ severity: 'error', summary: 'Error', detail: err.message, life: 3000 });
        isLoading.value = false
    })
}

</script>
<style scoped>
.p-inputtext{
    background-color: #040D19;
    width: 30rem;
}

.p-fieldset {
    border-radius: 0.8rem;
    border-color: #282E38;
}
</style>