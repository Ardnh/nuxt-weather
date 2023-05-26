<template>
    <div v-if="props.nearby !== null" class="flex flex-wrap justify-content-center mx-7">
        <div v-for="item in props.nearby" :key="item.id" @click="fetchCurrentWeather(item)" class="cursor-pointer p-3 m-2 w-23rem hover:cursor-pointer border-round-xl bg-bluegray-900">
            <div class="text-3xl font-bold">{{ item.name }}</div>
            <div class="flex flex-wrap align-items-center bg-gray-900 mx-2 my-1 text-md border-round-xl">
                <i class="pi pi-users m-2 bg-indigo-400 p-2 border-round-xl" style="color: #222861; font-size: 2rem"></i>
                <div>
                    <div class="text-lg text-indigo-400">
                        {{ item.population }}
                    </div>
                    <div class="text-sm text-gray-500">
                        Population
                    </div>
                </div>
            </div>
            <div class="flex flex-wrap align-items-center bg-gray-900 mx-2 my-1 text-md  border-round-xl">
                <i class="pi pi-map-marker m-2 bg-cyan-400 p-2 border-round-xl" style="color: #282936; font-size: 2rem"></i>
                <div>
                    <div class="text-lg text-cyan-400">
                        {{ item.distance.toFixed(1).toString() }} Km
                    </div>
                    <div class="text-sm text-gray-500">
                        Distance
                    </div>
                </div>
            </div>
            <div class="flex flex-wrap align-items-center bg-gray-900 mx-2 my-1 text-md border-round-xl">
                <i class="pi pi-map m-2 bg-purple-400 p-3 border-circle" style="color: #282936; font-size: 1.5rem"></i>
                <div>
                    <div class="text-lg text-purple-400">
                        {{ item.region }}
                    </div>
                    <div class="text-sm text-gray-500">
                        Region
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script setup>
const city = useCity()
const props = defineProps(["nearby"])

const fetchCurrentWeather = (item) => {
    city.value = item.id
    navigateTo({
        path: `/weather/location/${ item.city }`,
        query: {
            latitude: item.latitude,
            longitude: item.longitude
        }
    })
}

</script>