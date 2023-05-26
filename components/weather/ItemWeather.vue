<template>
    <div :class="`${'border-' + props.color}`" class="flex flex-wrap align-items-center border-1 border-round-xl p-3 mx-2 my-1">
        <div class="border-round-2xl p-2" :class="`${ 'bg-' + props.color}`">
            <slot/>
        </div>
        <div class="ml-3">
            <div class="text-5xl" :class="`${'text-' + props.color}`">
                {{ props.score}}
            </div>
            <div class="text-lg" :class="`${'text-' + props.color}`">
                {{ props.title }}
            </div>
        </div>
    </div>
</template>
<script setup>
const props = defineProps(["title", "score", "color"])
</script>