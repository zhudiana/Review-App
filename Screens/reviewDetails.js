import { NavigationRouteContext } from '@react-navigation/native';
import React from 'react';
import { StyleSheet, View, Text,Button } from 'react-native';
import { globalStyles } from '../Styles/Global';

export default function ReviewDetails({ navigation }){

    return(
        <View style={globalStyles.container}>
            <Text>{navigation.getParam('title')}</Text>
            <Text>{navigation.getParam('body')}</Text>
            <Text>{navigation.getParam('rating')}</Text>
        </View>
    )
}

