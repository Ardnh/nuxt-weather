<template>
    <div class="text-lg p-3 bg-bluegray-900 border-round-xl text-bluegray-300 mb-3">An air quality index (AQI) is used by government agencies to communicate to the public how polluted the air currently is or how polluted it is forecast to become.</div>
    <div class="my-2 bg-bluegray-900 p-5 border-round-xl">US Epa Index : {{ airQualityIndexComputed }}</div>
    <div class="grid mt-5">
        <div class="md:col-4 col-12">
            <div class="bg-bluegray-900 p-5 border-round-xl h-15rem">
                <div class="text-bluegray-500">Carbon monoxide</div>
                <div class="text-6xl font-bold mt-4">{{ props.air.co.toFixed(2) }}</div>
            </div>
        </div>
        <div class="md:col-4 col-12">
            <div class="bg-bluegray-900 p-5 border-round-xl h-15rem">
                <div class="text-bluegray-500">Nitrogen Dioxide</div>
                <div class="flex flex-wrap align-items-end">
                    <div class="text-6xl font-bold mt-4">{{ props.air.no2.toFixed(2) }}</div>
                </div>
            </div>
        </div>
        <div class="md:col-4 col-12">
            <div class="bg-bluegray-900 p-5 border-round-xl h-15rem">
                <div class="text-bluegray-500">Sulfur Dioxide</div>
                <div class="text-6xl font-bold mt-4">{{ props.air.so2.toFixed(2) }}</div>
            </div>
        </div>
        <div class="md:col-4 col-12">
            <div class="bg-bluegray-900 p-5 border-round-xl h-15rem">
                <div class="text-bluegray-500">Ozone</div>
                <div class="text-6xl font-bold mt-4">{{ props.air.o3.toFixed(2) }}</div>
            </div>
        </div>
        <div class="md:col-4 col-12">
            <div class="bg-bluegray-900 p-5 border-round-xl h-15rem">
                <div class="text-bluegray-500">Particulate Matter 10</div>
                <div class="text-6xl font-bold mt-4">{{ props.air.pm10.toFixed(2) }}</div>
            </div>
        </div>
        <div class="md:col-4 col-12">
            <div class="bg-bluegray-900 p-5 border-round-xl h-15rem">
                <div class="text-bluegray-500">Particulate Matter 2.5</div>
                <div class="text-6xl font-bold mt-4">{{ props.air.pm2_5.toFixed(2) }}</div>
            </div>
        </div>
    </div>
</template>

<script setup>
const props = defineProps(["air"])

const airQualityIndexComputed = computed(() => {
    let airQualityIndexStatus = ""
    let aqIndex = +props.air["us-epa-index"]

    switch (true) {
        case aqIndex >= 0 && aqIndex <= 50:
            airQualityIndexStatus = "Good"
            break;
        case aqIndex >= 51 && aqIndex <= 100:
            airQualityIndexStatus = "Moderate"
            break;
        case aqIndex >= 101 && aqIndex <= 150:
            airQualityIndexStatus = "Unhealthy for Sensitive Groups"
            break;
        case aqIndex >= 151 && aqIndex <= 200:
            airQualityIndexStatus = "Unhealthy"
            break;
        case aqIndex >= 201 && aqIndex <= 300:
            airQualityIndexStatus = "Very Unhealthy"
            break;
        case aqIndex >= 301:
            airQualityIndexStatus = "Hazardous"
            break;
        default:
            airQualityIndexStatus = "Invalid AQ Index"
            break;
    }

    return airQualityIndexStatus
})
</script>