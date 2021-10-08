import React from "react";
import { FlatList, StyleSheet, View, Text } from 'react-native';

import BusinessCard from "./BusinessCard";

const BusinessList = ({ businessList}) => {

    return(
        <View style={styles.listContainer}>
            {businessList.length > 0 && (<Text style={styles.listText}>Showing top {businessList.length} results</Text>)}
            <FlatList 
                keyExtractor={business => business.id}
                data={businessList}
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