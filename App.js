import React from 'react';
import { StyleSheet } from 'react-native';
import SplashScreen from './screens/Splash/SplashScreen';
import Items from './screens/Items/Items';
import { BarcodeScanner } from './screens/Scanners/BarcodeScanner';
import BiometricPopup from './screens/Scanners/FingerPrintScanner';
import ResponsiveScreen from './screens/ResponsiveScreen/ResponsiveScreen';
import DemoPushNotification from './screens/PushNotification/DemoPushNotification';

function App() {
  return (
    <>
      {/* <SplashScreen/> */}
      <BarcodeScanner/>
      {/* <BiometricPopup/> */}
    {/* <ResponsiveScreen/> */}
    {/* <DemoPushNotification/> */}
    </>
  );
}

export default App;