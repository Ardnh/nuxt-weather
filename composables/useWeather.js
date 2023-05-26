export const useWeather = () => {
    const { weatherAppUrl, weatherAppApiKey } = useRuntime()
    const weatherData = ref({})
    const astronomicalData = reactive({})

    const fetchCurrentWeather = async (latitude, longitude, name) => {
        const date = new Date().toJSON().slice(0,10)
        const query = name !== null ? name : `${ latitude + ',' + longitude }`
    
        const { data: currentWeather } = await useFetch(`${weatherAppUrl + "current.json"}`, {
            // server: false,
            method: "GET",
            params: {
                key: weatherAppApiKey,
                q: query,
                dt: date,
                aqi: "yes"
            }
        })
    
        weatherData.value = currentWeather.value
    }

    const fetchAstronomicalTime = async (latitude, longitude, name) => {
        const date = new Date().toJSON().slice(0,10)
        const query = name !== null ? name : `${ latitude + ',' + longitude }`

        const { data: astronomicalTime } = await useFetch(`${weatherAppUrl + "astronomy.json"}`, {
            // server: false,
            method: "GET",
            params: {
                key: weatherAppApiKey,
                q: query,
                dt: date,
            }
        })

        astronomicalData.value = astronomicalTime.value.astronomy.astro
    }

    return {
        fetchCurrentWeather,
        fetchAstronomicalTime,
        astronomicalData,
        weatherData
    }
}