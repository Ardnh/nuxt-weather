<template>
    <div v-if="props.astronomy !== null" class="my-4 border-round-xl bg-bluegray-900 p-4 md:mx-7 mx-1">
        <div class="grid">
            <div class="md:col-4 col-12 flex flex-wrap justify-content-center">
                <div class="bg-gray-900 m-3 border-round-2xl p-3 w-20rem h-25rem">
                    <img :src=" props.astronomy?.is_sun_up === 0 ? '/night.svg' : '/day.svg'" width="270" height="270" class="ml-2">
                    <div v-if="props.astronomy?.is_sun_up === 0">
                        <div class="text-center mt-3 text-xl font-bold">{{ props.astronomy?.moon_phase }}</div>
                        <div class="text-center mt-1 text-lg text-gray-400 font-base">Moon Phase</div>
                    </div>
                    <div v-else>
                        <div class="text-center mt-1 text-lg text-gray-400 font-base">Daylight</div>
                    </div>
                </div>
            </div>
            <div class="md:col-8 col-12">
                <div class="mt-7 mx-4 text-4xl font-bold">Astronomical Time</div>
                <div class="mx-4 text-base font-light">Astronomical Time is based on the repetition of astronomical events for setting frequency standards.</div>
                <div class="flex mt-8 flex-wrap justify-content-start align-items-center">
                    <div class="mx-4">
                        <div class="text-3xl">{{ props.astronomy?.sunrise }}</div>
                        <div class="text-lg text-gray-400">Sunrise</div>
                    </div>
                    <div class="mx-4">
                        <div class="text-3xl">{{ props.astronomy?.sunset }}</div>
                        <div class="text-lg text-gray-400">Sunset</div>
                    </div>
                    <div class="mx-4">
                        <div class="text-3xl">{{ props.astronomy?.moonrise }}</div>
                        <div class="text-lg text-gray-400">Moonrise</div>
                    </div>
                    <div class="mx-4">
                        <div class="text-3xl">{{ props.astronomy?.moonset }}</div>
                        <div class="text-lg text-gray-400">Moonset</div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script setup>
const props = defineProps(["astronomy"])

</script>