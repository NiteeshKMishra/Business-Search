import axios from 'axios'
import * as Config from '../../config'

export default axios.create({
    baseURL: Config.BASE_URL,
    headers: {
        Authorization: `Bearer ${Config.API_KEY}`
    },
    params: {
        limit: Config.DEFAULT_LIMIT,
        location: Config.DEFAULT_LOCATION
    }
})