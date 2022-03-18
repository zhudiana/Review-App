import React, { useState } from 'react';
import { StyleSheet, View, Text, FlatList, TouchableOpacity } from 'react-native';
import { globalStyles } from '../Styles/Global';

export default function Home({navigation}){

    const [reviews, setReviews] =  useState([
        { title: 'Nani is the best' , rating: 5, body: 'lorem ipsum', key: '1'},
        { title: 'I love you' , rating: 4, body: 'lorem ipsum', key: '2'},
        { title: 'Not so fast' , rating: 3, body: 'lorem ipsum', key: '3'},
    ]);
       

    return(
        <View style={globalStyles.container}>
            <FlatList 
                data={reviews}
                renderItem={({ item })=> (
                    <TouchableOpacity onPress={() => navigation.navigate('ReviewDetails',item)}>
                        <Text style={globalStyles.titleText}>{item.title}</Text>
                    </TouchableOpacity>
                    
                )}
            />
            
        </View>
    )
}

