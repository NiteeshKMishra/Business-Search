import React from "react";
import { View, Text, FlatList, Image, StyleSheet } from 'react-native';

const BusinessGallery = ({ photos }) => {

    return (
        <View style={styles.imageContainer}>
            <Text style={styles.imageHeader}>Gallery</Text>
            <FlatList
                keyExtractor={photo => photo}
                data={photos}
                renderItem={({ item }) => <Image style={styles.businessImage} source={{uri: item}}/>
                }
                showsVerticalScrollIndicator={false}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    imageContainer: {
        width: '100%',
        flex: 1
    },
    imageHeader: {
        width: '70%',
        textAlign: 'center',
        fontSize: 16,
        alignSelf: 'center',
        marginBottom: 16,
        backgroundColor: '#6DF8CA',
        elevation: 5
    },
    businessImage: {
        width: '70%',
        height: 200,
        marginBottom: 16,
        alignSelf: 'center'
    },
})

export default BusinessGallery;