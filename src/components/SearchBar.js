import React from 'react'
import {View, StyleSheet, TextInput} from 'react-native'
import {Feather} from '@expo/vector-icons'

const SearchBar = ({searchText, toggleSearchText, onTextSubmit}) => {
    return(
        <View style={styles.container}>
            <Feather name={'search'} size={25}/>
            <TextInput 
                style={styles.searchIUnput}
                placeholder={'search'}
                autoCapitalize={'none'}
                autoCorrect={false}
                value={searchText}
                onChangeText={toggleSearchText}
                onBlur={onTextSubmit}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        backgroundColor: '#F0EEEE',
        padding: 16,
        borderRadius: 5,
        height: 50,
        marginHorizontal: 16,
        marginVertical: 24,
        alignItems: 'center',
        },
        searchIUnput: {
            fontSize: '1.2rem',
            flex: 1,
            height: 40,
            padding: 8,
            borderWidth: 1,
            borderColor: 'transparent',
            marginLeft: 8,
        }
})

export default SearchBar;