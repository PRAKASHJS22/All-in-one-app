import React from 'react';
import { View,Text,StyleSheet } from 'react-native';

import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';

 function ResponsiveScreen() {
    return (
      <View style={styles.container}>
        <View style={styles.textWrapper}>
          <Text style={styles.myText}>Login</Text>
          <Text>Hi hello whats app</Text>
        </View>
      </View>
    );
  }

const styles = StyleSheet.create({
  container: { flex: 1 },
  textWrapper: {
    height: hp('70%'), // 70% of height device screen
    width: wp('80%'),   // 80% of width device screen
    
  },
  myText: {
    fontSize: hp('12%') // End result looks like the provided UI mockup
  }
});

export default ResponsiveScreen;