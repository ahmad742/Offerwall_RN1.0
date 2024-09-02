import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, ScrollView, Image, TouchableOpacity, FlatList } from 'react-native';
import { styles } from './styles';
import Offers from '../../components/offers';
import { fetchData } from '../../constants/api_functions/offersAPI';

interface Offer {
    id: string;
    image: string;
    title: string;
    description: string;
}

const Offerwall: React.FC = () => {
    const [offers, setOffers] = useState<Offer[]>([]);

    useEffect(() => {
        fetchData()
    }, []);

    const _offersRenderItem = () => {
        return (
            <Offers
                title='Laptop'
                description=' offer.description offer.description offer.description\ noffer.description offer.description offer.description'
                image="https://fastly.picsum.photos/id/0/5000/3333.jpg?hmac=_j6ghY5fCfSD6tvtcV74zXivkJSPIfR9B8w34XeQmvU"

            />
        )
    }

    return (
        <FlatList
            style={styles.container}
            data={[1, 2, 3, 4, 5]}
            renderItem={_offersRenderItem}
            keyExtractor={(item, index) => `${item},${index}`}
        />
    );
};

export default Offerwall