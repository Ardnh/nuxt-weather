// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    modules: [
        '@nuxt/image-edge',    
    ],
    runtimeConfig: {
        public: {
            weatherAppApiUrl: process.env.NUXT_WEATHER_APP_API_URL,
            weatherAppApiKey: process.env.NUXT_WEATHER_APP_API_KEY,
            geoDbAppApiUrl: process.env.NUXT_GEODB_APP_API_URL,
            restCountryAppApiUrl: process.env.NUXT_RESTCOUNTRY_APP_API_URL
        }
    },
    css: [
        "primevue/resources/themes/lara-dark-blue/theme.css",
        "primevue/resources/primevue.css",
        "primeicons/primeicons.css",
        "/node_modules/primeflex/primeflex.css"
    ],
	build: {
		transpile: ["primevue"]
	}
})
