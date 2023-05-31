<template>
    <div class="">
        <Menubar :model="items" class="fixed w-full top-0 border-noround">
            <template #start>
                <div class="text-3xl mx-3 font-bold">WeNews</div>
            </template>
        </Menubar>
        <slot />
    </div>
</template>
<script setup>
import { ref } from "vue";

const items = ref([
    {
        label: 'Home',
        to: '/'
    },
    {
        label: 'Explore',
        to: '/explore'
    },  
    {
        label: 'About',
        to: '/about'
    }
]);
</script>
<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@100;200;300;400;500;600&family=Nunito:wght@300;500;700&family=Poppins:wght@300;500;700&display=swap');
.p-menubar {
    background-color: #1C1B22;
    border: none;
}
*{
  font-family: 'Nunito';
}
</style>