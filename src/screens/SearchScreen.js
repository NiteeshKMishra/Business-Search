import React, { useCallback, useState } from 'react'
import {View, StyleSheet} from 'react-native'

import SearchBar from '../components/SearchBar'

const SearchScreen = () => {
    const [searchText, setSearchText] = useState('')

    const toggleSearchText = useCallback(
        (textValue) => {
            setSearchText(textValue)
        }
    , [])

    const onTextSubmit = useCallback(
        () => {
            console.log(searchText)
            //TODO: configure Call to action
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