export const useCity = () => useState('city', () => ({}))

export const useLocation = () => {
    const { geoDbAppUrl } = useRuntime()
    const nearbyCities = ref([])
    const cityData = ref({})

    const fetchNearCities = async (lati, long) => {
        const lat = lati.toString().includes("-") ? lati.toString() : "+" + lati.toString()
        const lon = long.toString().includes("-") ? long.toString() : "+" + long.toString()
        const url = geoDbAppUrl + "locations/" + lat + lon + "/nearbyCities"

        const { data: nearby } = await useFetch(url, {
            // server: false,
            method: "GET",
        })

        nearbyCities.value = nearby.value.data
    }

    const fetchCityDetail = async (id) => {
        const url = geoDbAppUrl + "cities/" + id

        const { data: city } = await useFetch(url, {
            // server: false,
            method: "GET",
        })

        cityData.value = city.value.data
    }

    return {
        fetchNearCities,
        fetchCityDetail,
        nearbyCities,
        cityData
    }
}
