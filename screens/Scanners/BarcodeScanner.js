import React, { useState,useEffect,useRef } from 'react';

import {
  StyleSheet,
  Text,
  TouchableOpacity,
  Linking,View
} from 'react-native';

import QRCodeScanner from 'react-native-qrcode-scanner';
import { RNCamera } from 'react-native-camera';

export const BarcodeScanner=()=> {

    const scanner=useRef(null);
    const[scan,setScan]=useState(false);
    const[result,setResult]=useState(null);

    useEffect(()=>{
        setResult(null);
    },[])

    const onSuccess = (e) => {

        setResult(e);
        setScan(false);
        // if(e.data.substring(0,4)==='http')
        if(e.data)
        {
            alert(e.data)
        }
      
        // {
        //   Linking.openURL(e.data)
        //       // .catch(()=>alert("Error occurred"))
        // }
  }

//   {JSON.stringify(result,null,2)}
    return !scan ? (
        <View style={styles.container}>
        {/* {result && <Text>{result}</Text>} */}
             <TouchableOpacity style={styles.buttonTouchable} onPress={()=> setScan(true)}>
             <Text style={styles.buttonText}>Start scan</Text>
           </TouchableOpacity>
        </View>
    ): 
    (
      <QRCodeScanner
        onRead={onSuccess}
        ref={scanner}
        // flashMode={RNCamera.Constants.FlashMode.torch}
        reactivate={true}
        showMarker={true}
        // fadeIn={false}
        // topContent={
        //   <Text style={styles.centerText}>
        //     Go to{' '}
        //     <Text style={styles.textBold}>Scan</Text>
        // }
        bottomContent={
            <>
          <TouchableOpacity style={styles.buttonTouchable} onPress={()=> scanner.current.reactive}>
            <Text style={styles.buttonText}>OK. Got it!</Text>
          </TouchableOpacity>
                <TouchableOpacity style={styles.buttonTouchable} onPress={()=> setScan(false)}>
                 <Text style={styles.buttonText}>Stop</Text>
            </TouchableOpacity>
            </>
   }
      />
    )
  
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'center',
        alignItems:'center',
        flexDirection:'column'
    },
  centerText: {
    flex: 1,
    fontSize: 18,
    padding: 32,
    color: '#777'
  },
  textBold: {
    fontWeight: '500',
    color: '#000'
  },
  buttonText: {
    fontSize: 21,
    color: 'rgb(0,122,255)'
  },
  buttonTouchable: {
    padding: 16
  }
});
