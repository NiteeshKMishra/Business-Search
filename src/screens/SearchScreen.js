import React, { useCallback, useState, useEffect } from 'react'
import { View, StyleSheet } from 'react-native'
import { useDispatch } from 'react-redux'

import BusinessList from '../components/BusinessList'

const DEFAULT_TEXT = 'pasta'

import SearchBar from '../components/SearchBar'
import { loadBusiness } from '../store/actions/business'

const SearchScreen = () => {
    const [searchText, setSearchText] = useState('')

    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(loadBusiness(DEFAULT_TEXT))
    }, [])

    const toggleSearchText = useCallback(
        (textValue) => {
            setSearchText(textValue)
        }
    , [])

    const onTextSubmit = useCallback(
        async () => {
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
            <BusinessList />
        </View>
    )
}

const styles = StyleSheet.create({})

export default SearchScreen