import * as ActionTypes from '../actionTypes/business'
import {searchApi} from '../../api/apis'

export const loadingBusiness = (loadingBusiness) => ({
    type: ActionTypes.LOADING_BUSINESS,
    data: {
        loadingBusiness
    }
})

export const loadBusinessErr = (loadingBusinessErr) => ({
    type: ActionTypes.LOADING_BUSINESS_ERROR,
    data: {
        loadingBusinessErr
    }
})

export const loadedBusiness = (businesses) => ({
    type: ActionTypes.LOADED_BUSINESS,
    data: {
        businesses
    }
})

export const loadBusiness = (term) => async (
    dispatch
) => {
    try {
        await dispatch(loadingBusiness(true))
        const {res, err} = await searchApi(term);
        if(err){
            await dispatch(loadBusinessErr(err))
        }else{
            await dispatch(loadedBusiness(res))
        }
        await dispatch(loadingBusiness(false))
    } catch (error) {
        await dispatch(loadingBusiness(false))
        await dispatch(loadBusinessErr(error.message))
    }

}