<template>
    <div class="flex flex-wrap justify-content-center">
        <div>
            <img src="/undraw-3.svg" width="300" height="300">
            <form @submit="getData">
                <span class="p-input-icon-left">
                    <i class="pi pi-search" />
                    <InputText v-model="query" placeholder="Search" />
                    smal
                </span>
            </form>
            <Button label="Search" />
        </div>
    </div>
</template>
<script setup>
const query = ref("")

const getData = () => {

}

</script>
<style scoped>
.p-inputtext{
    background-color: #040D19;
}
</style>