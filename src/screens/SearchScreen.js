import React, { useCallback, useState } from 'react'
import {View, StyleSheet} from 'react-native'
import { useDispatch } from 'react-redux'

import SearchBar from '../components/SearchBar'
import { loadBusiness } from '../store/actions/business'

const SearchScreen = () => {
    const [searchText, setSearchText] = useState('')

    const dispatch = useDispatch()

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
        </View>
    )
}

const styles = StyleSheet.create({})

export default SearchScreen