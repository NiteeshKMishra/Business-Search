import * as ActionTypes from '../actionTypes/business'

const initialState = {
    businesses: [],
    loadingBusiness: false,
    loadingBusinessErr: null
}

export default (state = initialState, {type, data}) => {
    switch(type){
        case ActionTypes.LOADING_BUSINESS:
            return {
                ...state,
                loadingBusiness: data.loadingBusiness
            };
        case ActionTypes.LOADING_BUSINESS_ERROR:
                return {
                    ...state,
                    loadingBusinessErr: data.loadingBusinessErr
                };
        case ActionTypes.LOADED_BUSINESS:
            return {
                ...state,
                loadingBusinessErr: null,
                businesses: data.businesses
            };
        default:
            return state
    }
}