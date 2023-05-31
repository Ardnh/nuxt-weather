<template>
    <div class="grid mt-5">
        <div class="md:col-4 col-12">
            <div class="bg-bluegray-900 p-5 border-round-xl h-15rem">
                <div class="text-lg text-bluegray-500">Location</div>
                <div class="text-6xl font-bold mt-4">{{ props.location.name }}</div>
                <div class="mt-2 mb-0">{{ props.location.region }} - {{ props.location.country }}</div>
                <div class="text-bluegray-500 mb-0">{{ props.location.localtime }}</div>
            </div>
        </div>
        <div class="md:col-4 col-12">
            <div class="bg-bluegray-900 p-5 border-round-xl h-15rem">
                <div class="text-lg text-bluegray-500">Temperature</div>
                <div class="text-6xl font-bold mt-4">{{ props.current.temp_c }} &#8451;</div>
                <div class="mt-2 mb-0">{{ props.current.condition?.text }}</div>
            </div>
        </div>
        <div class="md:col-4 col-12">
            <div class="bg-bluegray-900 p-5 border-round-xl h-15rem">
                <div class="text-lg text-bluegray-500">Wind Status</div>
                <div class="flex flex-wrap align-items-end">
                    <div class="text-6xl font-bold mt-4">{{ props.current.wind_kph }}</div>
                    <div class="mb-2 ml-2 text-xl">km/h</div>
                </div>
                <div class="mt-2 mb-0">Wind direction {{ props.current.wind_dir }}</div>
            </div>
        </div>
        <div class="md:col-4 col-12">
            <div class="bg-bluegray-900 p-5 border-round-xl h-15rem">
                <div class="text-lg text-bluegray-500">UV Index</div>
                <div class="text-6xl font-bold mt-4">{{ props.current.uv }}</div>
                <div class="mt-2 mb-0">UV Index status: "{{ uvIndexComputed }}"</div>
            </div>
        </div>
        <div class="md:col-4 col-12">
            <div class="bg-bluegray-900 p-5 border-round-xl h-15rem">
                <div class="text-lg text-bluegray-500">Humidity</div>
                <div class="text-6xl font-bold mt-4">{{ props.current.humidity }}</div>
            </div>
        </div>
        <div class="md:col-4 col-12">
            <div class="bg-bluegray-900 p-5 border-round-xl h-15rem">
                <div class="text-lg text-bluegray-500">Precipitation</div>
                <div class="flex flex-wrap align-items-end">
                    <div class="text-6xl font-bold mt-4">{{ props.current.precip_mm }}</div>
                    <div class="mb-2 ml-2 text-xl">Milimetres</div>
                </div>
            </div>
        </div>
    </div>
</template>
<script setup>
const props = defineProps(["current", "location"])

const uvIndexComputed = computed(() => {
    let uvIndexStatus = ""
    let uvIndex = +props.current.uv

    switch (true) {
        case uvIndex >= 0 && uvIndex <= 2:
            uvIndexStatus = "Low"
            break;
        case uvIndex >= 3 && uvIndex <= 5:
            uvIndexStatus = "Moderate"
            break;
        case uvIndex >= 6 && uvIndex <= 7:
            uvIndexStatus = "High"
            break;
        case uvIndex >= 8 && uvIndex <= 10:
            uvIndexStatus = "Very High"
            break;
        case uvIndex >= 11:
            uvIndexStatus = "Extreme"
            break;
        default:
            uvIndexStatus = "Invalid UV Index"
            break;
    }

    return uvIndexStatus
})
</script>