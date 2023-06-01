<template>
    <Fieldset class="bg-bluegray-900">
        <template #legend>
            <div class="flex align-items-center text-primary">
                <span class="pi pi-caret-right mr-2"></span>
                <span class="font-bold text-xl text-bluegray-400">{{props.country[0].name?.common}}</span>
            </div>
        </template>
        <div class="m-3 grid">
            <div class="md:col-8 col-12">
                <div class="grid">
                    <div class="col-12">
                        <div class="p-3 mt-5">
                            <div class="text-8xl">{{ props.country[0].name?.common }}</div>
                            <div class="text-xl text-bluegray-400 mt-5">Country</div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="md:col-4 col-12">
                <div class="flex flex-wrap justify-content-center align-items-center w-full h-full">
                    <img :src="props.country[0].flags?.svg" width="300">
                </div>
            </div>
        </div>
        <div class="bg-gray-900 border-round-xl p-5">
            <div class="grid mt-2">
                <div class="md:col-3 col-12">
                    <div class="m-3">
                        <div class="text-2xl">{{ props.country[0].capital[0] }}</div>
                        <div class="text-base text-bluegray-400 mt-4">Capital</div>
                    </div>
                </div>
                <div class="md:col-3 col-12">
                    <div class="m-3">
                        <div class="text-2xl">{{ props.country[0].region }}</div>
                        <div class="text-base text-bluegray-400 mt-4">Region</div>
                    </div>
                </div>
                <div class="md:col-3 col-12">
                    <div class="m-3">
                        <div class="text-2xl">{{ props.country[0].subregion }}</div>
                        <div class="text-base text-bluegray-400 mt-4">Sub Region</div>
                    </div>
                </div>
                <div class="md:col-3 col-12">
                    <div class="m-3">
                        <div class="text-2xl">{{ props.country[0].latlng[0] }} / {{ props.country[0].latlng[1] }}</div>
                        <div class="text-base text-bluegray-400 mt-4">Lat / Lon</div>
                    </div>
                </div>
                <div class="md:col-3 col-12">
                    <div class="m-3">
                        <div class="text-2xl">{{ props.country[0].population }}</div>
                        <div class="text-base text-bluegray-400 mt-4">Population</div>
                    </div>
                </div>
                <div class="md:col-3 col-12">
                    <div class="m-3">
                        <div class="text-2xl">{{ props.country[0].area }}</div>
                        <div class="text-base text-bluegray-400 mt-4">Area</div>
                    </div>
                </div>
                <div class="md:col-3 col-12">
                    <div class="m-3">
                        <div class="text-2xl">{{ props.country[0].continents[0]}}</div>
                        <div class="text-base text-bluegray-400 mt-4">Continents</div>
                    </div>
                </div>
                <div class="md:col-3 col-12">
                    <div class="m-3">
                        <div class="text-2xl">{{ props.country[0].timezones[0] }}</div>
                        <div class="text-base text-bluegray-400 mt-4">Timezones</div>
                    </div>
                </div>
            </div>
        </div>
    </Fieldset>
</template>
<script setup>
const props = defineProps(['country'])
</script>