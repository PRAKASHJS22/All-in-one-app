import React, { useEffect } from 'react'
// import PushNotificationIOS from "@react-native-community/push-notification-ios";
import PushNotification from "react-native-push-notification";
import Firebase from "@react-native-firebase/app"
import { View,Text, TouchableOpacity,StyleSheet } from 'react-native';


// var Firebase = require('firebase/app');
export default DemoPushNotification =()=> {

   
    useEffect(() => {
        
        Firebase.initializeApp(this) 
      
    PushNotification.configure({
        onRegister: function (token) {
        console.log("TOKEN:", token);
      },
    
      // (required) Called when a remote is received or opened, or local notification is opened
      onNotification: function (notification) {
        console.log("NOTIFICATION:", notification);
    
        // process the notification
    
        // (required) Called when a remote is received or opened, or local notification is opened
      //   notification.finish(PushNotificationIOS.FetchResult.NoData);
      },
    
      // (optional) Called when Registered Action is pressed and invokeApp is false, if true onNotification will be called (Android)
      onAction: function (notification) {
        console.log("ACTION:", notification.action);
        console.log("NOTIFICATION:", notification);
    
        // process the action
      },
    
      // (optional) Called when the user fails to register for remote notifications. Typically occurs when APNS is having issues, or the device is a simulator. (iOS)
      onRegistrationError: function(err) {
        console.error(err.message, err);
      },
    permissions:{
        alert:true,
        badge:true,
        sound:true
    },
    
      // Should the initial notification be popped automatically
      // default: true
      popInitialNotification: true,
    
      /**
       * (optional) default: true
       * - Specified if permissions (ios) and token (android and ios) will requested or not,
       * - if not, you must call PushNotificationsHandler.requestPermissions() later
       * - if you are not using remote notification or do not have Firebase installed, use this:
       *     requestPermissions: Platform.OS === 'ios'
       */
      requestPermissions: true,
    });
  
          //Local notifcati
        // return () => {
        //     cleanup
        // }
    }, [])
  
    const localNotification=()=>{
        PushNotification.localNotification({
        title: "HDFC BANK", 
        message: "One Billion is credited to your acc.", 
       
      });
    }

    const scheduledNotification=()=>{
        PushNotification.localNotificationSchedule({
            title: "Schedule Notification", 
            message: "My Notification Message", // (required)
            date: new Date(Date.now() + 2* 1000), // in 60 secs
            allowWhileIdle: false, // (optional) set notification to work while on doze, default: false
          
            /* Android Only Properties */
            repeatTime: 1, // (optional) Increment of configured repeatType. Check 'Repeating Notifications' section for more info.
          });
          
    }

        return (
            
            <View style={styles.container}>
                <Text style={styles.textPush}>Push notification using Firebase</Text>
               <TouchableOpacity onPress={localNotification} style={styles.pushButton}>
               <Text style={styles.textStyle}> Local Notification</Text>
                </TouchableOpacity>

                <TouchableOpacity onPress={scheduledNotification} style={styles.pushButton}>
               <Text style={styles.textStyle}>Scheduled Notification</Text>
                </TouchableOpacity>
            </View>
        )
        
        
}
const styles =StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:"#2C3D63",
    },
    textPush:{
        flexDirection:'row',
       textAlign:'center',
       marginVertical:20,
       fontSize:30,
       color:"white"
    },
    pushButton:{
        flexDirection:'row',
        justifyContent:"center",
        // alignItems:'center',
        backgroundColor:"cyan",
        width:"50%",
        height:"10%",
        borderRadius:50,
        alignSelf:"center",
        marginVertical:20,   
    },
    textStyle:{
        flexDirection:"row",
        fontSize:20,
        fontWeight:'bold',
        alignSelf:"center"
    }

})