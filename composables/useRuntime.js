export const useRuntime = () => {
    const runtimeConfig = useRuntimeConfig()
    const weatherAppUrl = runtimeConfig.weatherAppApiUrl
    const weatherAppApiKey = runtimeConfig.weatherAppApiKey
    const geoDbAppUrl = runtimeConfig.geoDbAppApiUrl

    return {
        weatherAppUrl,
        weatherAppApiKey,
        geoDbAppUrl
    }
}