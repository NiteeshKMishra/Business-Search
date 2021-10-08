import React, { useCallback, useState, useEffect } from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { useDispatch, useSelector } from 'react-redux'

import BusinessList from '../components/BusinessList'

import SearchBar from '../components/SearchBar'
import { loadBusiness } from '../store/actions/business'

const BusinesssSearch = () => {
    const [searchText, setSearchText] = useState('')
    const [defaultSearch, setDefaultSearch] = useState('hotels')

    const businessList = useSelector(state => state.businesses.businesses)
    const dispatch = useDispatch()

    useEffect(() => {
        if(defaultSearch){
            dispatch(loadBusiness(defaultSearch))
        }
    }, [])

    const toggleSearchText = useCallback(
        (textValue) => {
            setSearchText(textValue)
            if(defaultSearch){
                setDefaultSearch('')
            }
        }
    , [])

    const onTextSubmit = useCallback(
        async () => {
            setSearchText('')
            await dispatch(loadBusiness(searchText))
        }
    , [searchText])

    return (
        <View>
            <SearchBar
                searchText={searchText}
                toggleSearchText={toggleSearchText}
                onTextSubmit={onTextSubmit}
            />
            {Boolean(defaultSearch) && <Text style={styles.defaultSearchText}>We are showing some {defaultSearch} for you</Text>}
            <BusinessList businessList={businessList} />
        </View>
    )
}

const styles = StyleSheet.create({
    defaultSearchText: {
        fontSize: 12,
        alignSelf: 'center'
    }
})

export default BusinesssSearch