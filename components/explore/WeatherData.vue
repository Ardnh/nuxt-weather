<template>
    <div class="grid">
        <div class="md:col-8 col-12 ">
            <div class="grid mt-8">
                <div class="md:col-4 col-12">
                    <div class="border-2 border-bluegray-400 border-round-xl p-3">
                        <div class="text-4xl text-center">{{ props.weather.current?.wind_kph }}</div>
                        <div class="text-xl text-center text-bluegray-400">Wind Speed (km/h)</div>
                    </div>
                </div>
                <div class="md:col-4 col-12">
                    <div class="border-2 border-bluegray-400 border-round-xl p-3">
                        <div class="text-4xl text-center">{{ props.weather.current?.wind_dir }}</div>
                        <div class="text-xl text-center text-bluegray-400">Wind Direction</div>
                    </div>  
                </div>
                <div class="md:col-4 col-12">
                    <div class="border-2 border-bluegray-400 border-round-xl p-3">
                        <div class="text-4xl text-center">{{ props.weather.current?.precip_mm }}</div>
                        <div class="text-xl text-center text-bluegray-400">Precipitation (mm)</div>
                    </div>
                </div>
                <div class="md:col-4 col-12">
                    <div class="border-2 border-bluegray-400 border-round-xl p-3">
                        <div class="text-4xl text-center">{{ props.weather.current?.humidity }}</div>
                        <div class="text-xl text-center text-bluegray-400">Humidity</div>
                    </div>
                </div>
                <div class="md:col-4 col-12">
                    <div class="border-2 border-bluegray-400 border-round-xl p-3">
                        <div class="text-4xl text-center">{{ props.weather.current?.uv }}</div>
                        <div class="text-xl text-center text-bluegray-400">UV Index</div>
                    </div>  
                </div>
                <div class="md:col-4 col-12">
                    <div class="border-2 border-bluegray-400 border-round-xl p-3">
                        <div class="text-4xl text-center">{{ props.weather.current?.pressure_mb }}</div>
                        <div class="text-xl text-center text-bluegray-400">Pressure (mb)</div>
                    </div>
                </div>
            </div>
        </div>
        <div class="md:col-4 col-12  flex flex-wrap justify-content-center align-items-center">
            <div class="bg-gray-900 p-5 border-round-xl h-25rem w-20rem">
                <div class="text-7xl mt-7 text-center">{{ props.weather.current?.temp_c }} &#8451;</div>
                <div class="text-base mt-7 text-center text-bluegray-400">{{ props.weather.current?.last_updated }}</div>
                <div class="text-3xl text-center">{{ props.weather.current?.condition?.text }}</div>
            </div>
        </div>
    </div>
</template>
<script setup>
const props = defineProps(['weather'])
</script>