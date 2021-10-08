import React from "react";
import { View, Text, StyleSheet } from 'react-native';

import BusinessParticulars from "./BusinessParticulars";
import BusinessGallery from "./BusinessGallery";

const businessDetails = ({business}) => {
    const { name, photos, price, phone, transactions, categories, location: { display_address } } = business
    const type = categories.map(category => {
        if(typeof category === 'string') return category
        else return category.title
    }).join(',')

    return(
    <View style={styles.detailsContainer}>
        <Text style={styles.businessName}>{name}</Text>
        <BusinessParticulars 
            price={price}
            phone={phone}
            type={type}
            address={display_address && display_address.length ? display_address.join(',') : ''}
            services={transactions.join(',')}
        />
        <BusinessGallery
            photos={photos}
        />
    </View>
    )
}

const styles = StyleSheet.create({
    detailsContainer: {
        flex: 1,
        alignItems: 'center'
    },
    businessName: {
        fontSize: 16,
        fontWeight: 'bold',
        marginVertical: 16
    }
})

export default businessDetails