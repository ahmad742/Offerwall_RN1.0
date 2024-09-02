import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, ScrollView, Image, TouchableOpacity, ImageSourcePropType } from 'react-native';

interface ButtonProps {
    title: string;
    description: string;
    image: string;
}

const Offers: React.FC<ButtonProps> = (props) => {
    const { title, description, image } = props;
    return (
        <View style={styles.offerContainer} >
            <Image source={{ uri: image }} style={styles.offerImage} />
            <Text style={styles.offerTitle}>{title}</Text>
            <Text style={styles.offerDescription}>{description}</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 10,
    },
    offerContainer: {
        backgroundColor: '#fff',
        borderRadius: 10,
        padding: 15,
        marginVertical: 10,
        shadowColor: '#000',
        shadowOpacity: 0.2,
        shadowRadius: 5,
        shadowOffset: { width: 0, height: 2 },
    },
    offerImage: {
        width: '100%',
        height: 150,
        borderRadius: 10,
    },
    offerTitle: {
        fontSize: 18,
        fontWeight: 'bold',
        marginVertical: 10,
        color: '#666',
    },
    offerDescription: {
        fontSize: 14,
        color: '#666',
    },
});


export default Offers