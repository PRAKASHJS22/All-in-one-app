import React from 'react';
import { Text, View } from 'react-native';
import {Card} from  'react-native-shadow-cards';


function Cards({desc,amount}) {
    return (
        <View>
        <Card style={{padding: 10, margin: 10}}>
          <Text style={{fontSize: 15, fontWeight: 'bold'}}>{desc} {amount}</Text>
        </Card>
        
      </View>
    )
}

export default Cards
