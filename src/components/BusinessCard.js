import React from 'react';
import { View, Image, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { withNavigation } from 'react-navigation';

const BusinessCard = ({business, navigation}) => {
    const { id, is_closed } = business

    const onShowDetails = () => {
        navigation.navigate('Details', {
            id
        })
    }

    return(
        <TouchableOpacity onPress={onShowDetails}>
        <View style={styles.detailContainer}>
            <Image style={styles.businessImage} source={{uri: business.image_url}}/>
            <Text style={styles.businessName}>{business.name}</Text>
            <View style={styles.reviewsAndRatingsContainer}>
                <Text style={styles.reviewsAndRatingsText}>Rating: {business.rating} stars</Text>
                <Text style={styles.reviewsAndRatingsText}>Reviews: {business.review_count}</Text>
            </View>
            <Text style={[styles.statusTag, !is_closed ? { backgroundColor: '#5EE700' } : { backgroundColor: '#FF1414' }]}> {!is_closed ? 'Open' : 'closed'} </Text>
        </View>
        </TouchableOpacity>
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
    statusTag: {
        position: 'absolute',
        padding: 8,
        fontSize: 12,
        borderRadius: 5,
        fontWeight: 'bold',
        right: 2,
        top: 2,
        zIndex: 2
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

export default withNavigation(BusinessCard)