import React from "react";
import { View, Text, StyleSheet } from 'react-native';

const BusinessParticulars = ({ cusine, price, phone, address, services, is_closed }) => {

    return (
        <View style={styles.detailContainer}>
            <Text style={styles.detailHeader}>Details</Text>
            <View style={styles.detailSection}>
                <Text style={[styles.statusTag, !is_closed ? { backgroundColor: '#5EE700' } : { backgroundColor: '#FF1414' }]}> Currently {!is_closed ? 'Open' : 'closed'} </Text>
                <Text style={[styles.detailText, styles.detailTextHeader]}>Cusine</Text>
                <Text style={styles.detailText}>{cusine}</Text>
                <Text style={[styles.detailText, styles.detailTextHeader]}>Phone</Text>
                <Text style={styles.detailText}>{phone}</Text>
                <Text style={[styles.detailText, styles.detailTextHeader]}>Address</Text>
                <Text style={styles.detailText}>{address}</Text>
                <Text style={[styles.detailText, styles.detailTextHeader]}>Price Level</Text>
                <Text style={styles.detailText}>{price}</Text>
                <Text style={[styles.detailText, styles.detailTextHeader]}>Services Provided</Text>
                <Text style={styles.detailText}>{services}</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    detailContainer: {
        width: '100%',
    },
    detailHeader: {
        width: '70%',
        textAlign: 'center',
        fontSize: 16,
        alignSelf: 'center',
        marginBottom: 16,
        backgroundColor: '#6DF8CA',
        elevation: 5
    },
    detailSection: {
        alignSelf: 'center',
        width: '70%',
        height: 300,
        backgroundColor: '#C4E700',
        marginBottom: 16,
        padding: 16,
        paddingTop: 36,
        justifyContent: 'space-around'
    },
    statusTag: {
        position: 'absolute',
        padding: 8,
        fontSize: 12,
        borderRadius: 5,
        fontWeight: 'bold',
        right: '35%',
        top: 2,
        zIndex: 2,
    },
    detailTextHeader: {
        fontWeight: 'bold'
    },
    detailText: {
        fontSize: 14,
        alignSelf: 'center'
    }
})

export default BusinessParticulars;