export const useRuntime = () => {
    const runtimeConfig = useRuntimeConfig()
    const weatherAppUrl = runtimeConfig.weatherAppApiUrl
    const weatherAppApiKey = runtimeConfig.weatherAppApiKey
    const geoDbAppUrl = runtimeConfig.geoDbAppApiUrl
    const restCountryAppApiUrl = runtimeConfig.restCountryAppApiUrl

    return {
        weatherAppUrl,
        weatherAppApiKey,
        geoDbAppUrl,
        restCountryAppApiUrl
    }
}