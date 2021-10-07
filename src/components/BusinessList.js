import React from "react";
import { FlatList, StyleSheet, View, Text } from 'react-native';
import { useSelector } from "react-redux";

import BusinessCard from "./BusinessCard";

const BusinessList = () => {
    const businesses = useSelector(state => state.businesses.businesses)

    return(
        <View style={styles.listContainer}>
            {businesses.length > 0 && (<Text style={styles.listText}>Showing top {businesses.length} results</Text>)}
            <FlatList 
                keyExtractor={business => business.id}
                data={businesses}
                renderItem={({item}) => (
                    <BusinessCard business={item} />
                )}
                showsVerticalScrollIndicator={false}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    listContainer: {
        alignItems: 'center',
        marginTop: 8,
        marginHorizontal: 8
    },
    listText: {
        marginBottom: 12
    }
})

export default BusinessList;