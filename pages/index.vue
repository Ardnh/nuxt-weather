<template>
    <Toast/>
    
    <div class="mt-4 grid">
        <div class="col-12 md:col-6">
            <div class="flex flex-wrap md:align-content-center md:justify-content-start justify-content-center md:h-30rem md:mt-1 mt-8 ml-0 md:ml-8">
                <div class="">
                    <div class="md:text-8xl md:text-left text-center text-5xl font-bold">WeNews</div>
                    <div class="md:text-3xl md:text-left text-center text-2xl font-normal">Your daily weather news</div>
                    <Button @click="goToExplore" class="z-0 mt-3 w-full text-white font-bold" label="Explore" size="small"/>
                </div>
            </div>
        </div>
        <div class="col-12 md:col-6">
            <div class="h-30rem">
                <Carousel :value="weatherList" circular :show-navigators="false" :show-indicators="false" :autoplayInterval="5000" :numVisible="1" :numScroll="1" orientation="vertical" verticalViewPortHeight="500px"
                 containerClass="w-20rem" contentClass="flex flex-wrap align-content-center mt-3">
                    <template #item="slotProps">
                        <div class="m-2 text-center py-5 px-3">
                            <div class="mb-1">
                                <img :src="slotProps.data.icon" class="w-18rem" />
                            </div>
                            <div>
                                <h4 class="mb-1 text-2xl">{{ slotProps.data.text }}</h4>
                            </div>
                        </div>
                    </template>
                </Carousel>
            </div>
        </div>
        <div class="col-12">
            <div class="mt-8">
                <div v-if="isLoading" class="mx-auto">
                    <div class="flex justify-content-center">
                        <ProgressSpinner/>
                    </div>
                    <div class="text-center text-xl text-bluegray-500">Loading...</div>
                </div>
                <div v-if="currentWeather === null" class="mx-auto w-30rem">
                    <p class="text-center">
                        You will receive current weather information if this app is allowed to access your location
                    </p>
                    <div class="flex flex-wrap justify-content-center">
                        <Button @click="getLocation" class="mt-3 text-white font-bold" label="Allow access location" size="small"/>
                    </div>
                </div>
                <div v-else class="border-round-xl md:mx-7">
                    <div class="text-4xl md:text-left text-center">Today's Highlights</div>
                    <TabView class="mt-5">
                        <TabPanel header="Today">
                            <CurrentWeather :current="currentWeather" :location="locationWeather" />
                        </TabPanel>
                        <TabPanel header="Air Quality">
                            <AirQuality :air="airQuality"/>
                        </TabPanel>
                        <TabPanel header="Astronomy">
                            <AstronomicalTime :astronomy="astronomicalData"/>
                        </TabPanel>
                    </TabView>
                </div>
            </div>
        </div>
        <div class="col-12">
            <div v-if="locationWeather !== null" class="md:mx-8 mx-2 mt-4 mb-3 text-4xl md:text-left text-center">City near {{ locationWeather.name }}</div>
            <NearbyCities :nearby="nearbyCities" />
        </div>
    </div>
</template>
<script setup>
import { useToast } from 'primevue/usetoast';
const toast = useToast();
const { fetchCurrentWeather, fetchAstronomicalTime, astronomicalData, weatherData } = useWeather()
const { fetchNearCities, nearbyCities } = useLocation()
const locationPermission = ref(false)
const currentWeather = ref(null)
const locationWeather = ref(null)
const airQuality = ref(null)
const asData = ref(null)
const isLoading = ref(false)
const nearby = ref(null)
const weatherList = ref([
    {
        id: 1,
        icon: "/day.svg",
        text: "Day"
    },
    {
        id: 2,
        icon: "/cloudy-day-3.svg",
        text: "Cloudy day"
    },
    {
        id: 3,
        icon: "/cloudy-night-3.svg",
        text: "Cloudy night"
    },
    {
        id: 4,
        icon: "/rainy-7.svg",
        text: "Rainy"
    },
    {
        id: 5,
        icon: "/snowy-3.svg",
        text: "Snowy"
    },
    {
        id: 6,
        icon: "/night.svg",
        text: "Night"
    }
])

useHead({
    title: "Home | Weather news app"
})

const goToExplore = () => {
    navigateTo("/explore")
}

const getLocation = () => {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(showPosition);
    } else {
        console.log("Geolocation is not supported by this browser.");
    }
}

const showPosition = async (position) => {
    let latitude = position.coords.latitude
    let longitude = position.coords.longitude
    
    locationPermission.value = true
    isLoading.value = true

    await Promise.all([
        fetchCurrentWeather(latitude, longitude, null),
        fetchAstronomicalTime(latitude, longitude, null),
        fetchNearCities(latitude, longitude)
    ]).then(() => {
        isLoading.value = false
        toast.add({ severity: 'info', summary: 'Info', detail: 'Success fetch current weather', life: 3000 });
    }).catch(err => {
        isLoading.value = false
        toast.add({ severity: 'error', summary: 'Error', detail: err.message, life: 3000 });
    })

    currentWeather.value = weatherData.value.current
    locationWeather.value = weatherData.value.location
    airQuality.value = weatherData.value.current.air_quality
    asData.value = astronomicalData.value.astronomy
    nearby.value = nearbyCities.value.data
}

onMounted(() => {
    if (currentWeather.value === null){
        getLocation()
    }

    console.log("on Mounted home run")
})
</script>