import React from 'react';
import { View, Image, Text, StyleSheet } from 'react-native';

const BusinessDetail = ({business}) => {
    return(
        <View style={styles.detailContainer}>
            <Image style={styles.businessImage} source={{uri: business.image_url}}/>
            <Text style={styles.businessName}>{business.name}</Text>
            <View style={styles.reviewsAndRatingsContainer}>
                <Text style={styles.reviewsAndRatingsText}>Rating: {business.rating} stars</Text>
                <Text style={styles.reviewsAndRatingsText}>Reviews: {business.review_count}</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    detailContainer: {
        width: '100%',
        height: 200,
        marginBottom: 16,
        backgroundColor: '#D4F1E6'
    },
    businessImage: {
        width: '100%',
        height: '70%',
        borderRadius: 5
    },
    businessName: {
        fontSize: 16,
        fontWeight: 'bold',
        marginVertical: 8,
        alignSelf: 'center'
    },
    reviewsAndRatingsContainer: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center'
    },
    reviewsAndRatingsText: {
        fontSize: 12,
        fontWeight: 'normal'
    }
})

export default BusinessDetail