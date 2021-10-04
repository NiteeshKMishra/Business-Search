import React from 'react'
import { View, StyleSheet, TextInput } from 'react-native'
import { Feather } from '@expo/vector-icons'

const SearchBar = ({searchText, toggleSearchText, onTextSubmit}) => {
    return(
        <View style={styles.container}>
            <Feather name={'search'} size={25}/>
            <TextInput 
                style={styles.searchInput}
                placeholder={'search'}
                autoCapitalize={'none'}
                autoCorrect={false}
                value={searchText}
                onChangeText={toggleSearchText}
                onEndEditing={onTextSubmit}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        backgroundColor: '#F4FAF8',
        padding: 16,
        borderRadius: 5,
        height: 50,
        marginHorizontal: 16,
        marginVertical: 24,
        alignItems: 'center',
        },
        searchInput: {
            fontSize: 18,
            flex: 1,
            height: 40,
            padding: 8,
            borderWidth: 1,
            borderColor: 'transparent',
            marginLeft: 8,
        }
})

export default SearchBar;