import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import * as Font from 'expo-font';
import AppLoading from 'expo-app-loading';
import Navigator from './Routes/drawer';
import { AppNavigator } from './Routes/drawer';
import { NavigationContainer } from '@react-navigation/native';

const getFonts = () =>  Font.loadAsync({
    'nunito-regular': require('./assets/Fonts/Nunito-Regular.ttf'),
    'nunito-bold': require('./assets/Fonts/Nunito-Bold.ttf')
  });


export  default function App() {
 
  const [ fontsLoaded, setFontsLoaded ] = useState(false);

  if(fontsLoaded){
    return(
       <Navigator /> 
    );
  } else {
    return(
        <AppLoading 
          startAsync={getFonts}
          onFinish={() => setFontsLoaded(true)}
          onError={() => console.log('error')}
        />
    )
  }
}


