import React, { useEffect } from "react";
import { withNavigation } from "react-navigation";
import { useDispatch, useSelector } from "react-redux";

import { loadCurrentBusiness } from '../store/actions/business'

import BusinessDetails from "../components/BusinessDetails";

const BusinessOverview = ({ navigation }) => {
    const businessId = navigation.getParam('id');

    const business = useSelector(state => state.businesses.currentBusiness)
    const dispatch = useDispatch()

    useEffect(() => {
        if(business.id !== businessId){
            dispatch(loadCurrentBusiness(businessId))
        }
    }, [])

    return (<>
        {business && business.id ?
            <BusinessDetails
                business={business}
            />
         : null}
    </>)
}

export default withNavigation(BusinessOverview);