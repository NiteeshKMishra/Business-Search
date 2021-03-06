import axios from './axios'

export const searchApi = async (term) => {
    try {
        const businessesResult = await axios.get('/search', {
            params: {
                term
            }
        })
        return {res: businessesResult.data.businesses, err: null}
    } catch (error) {
        return {res: [], err: error.message}
    }
}

export const getBusinessApi = async (id) => {
    try {
        const businessResult = await axios.get(`/${id}`)
        return {res: businessResult.data, err: null}
    } catch (error) {
        return {res: {}, err: error.message}
    }
}