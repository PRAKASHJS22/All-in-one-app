import React, { useState,useEffect } from 'react';  
import { Platform, StyleSheet, View, Text, Image, TouchableOpacity, Alert } from 'react-native';  
import Login from '../Login/LoginScreen';
import Items from '../Items/Items';
import styles from './StyleSplash';

function SplashScreen() {

    const [isVisible,setIsVisible]= useState(true)

    const Hide_Splash_Screen = () => {
      setIsVisible(false)
    }

    useEffect(() => {
      setTimeout(Hide_Splash_Screen, 2000);
      },[]);

    return (
        <>
        {
        isVisible === true ?  ( 
                <View style={styles.SplashScreen_RootView}>  
                <View style={styles.SplashScreen_ChildView}>  
                    <Image 
                    source={{uri:'https://static.javatpoint.com/tutorial/react-native/images/react-native-tutorial.png'}}  
                    style={{width:'100%', height: '100%', resizeMode: 'contain'}} 
                    />  
                </View>  
                </View> 
           ):
              <View style = { styles.MainContainer }> 
                  <Text><Login/></Text>
              </View> 
        }
          </>
    ) 
}

export default SplashScreen;