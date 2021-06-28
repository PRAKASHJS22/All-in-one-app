import React,{useEffect, useState} from 'react';
import { Text, View, TextInput, FlatList, Button } from 'react-native';
import Cards from '../../components/Cards';
import styles from './StyleItems';




function Items() {

const[item,setItem]= useState([{
    id: 1,
    description:"",
    amount:0,
    total:0,
}])


let DATA = [];

let handleSubmit= () => {
    setItem([{
        id:item.id + 1,
        description:item.description,
        amount:item.amount,
        total: Number(item.total) + Number(item.amount)
    }])
   
    console.log(item)
    DATA.push({id:item.id ,description:item.description, amount: item.amount})
   
}

    const Item = ({ desc, amount }) => (
        <Cards desc={desc} amount={amount} />
    );
    const renderItem = ({ item}) => (
        <Item desc={item.description} amount={item.amount}/>
    );
  
        return (
        <>
          <View style={styles.container}>
                <Text style={styles.logo}>Total items: {DATA.length} </Text>
                <Text style={styles.logo}>Total Amount: {item.total} </Text>
                <View style={styles.card}>
                    <View style={styles.inputView} >
                        <TextInput  
                            style={styles.inputText}
                            placeholder="Item Description..." 
                            placeholderTextColor="#003f5c"
                            onChangeText={text => setItem({description:text})}
                        />
                    </View>
                    <View style={styles.inputView} >
                        <TextInput
                            keyboardType='numeric'
                            style={styles.inputText}
                            placeholder="Amount..." 
                            placeholderTextColor="#003f5c"
                            onChangeText={text => setItem({amount:text})}
                        />
                    </View>
                        <Button title="Submit" onPress={handleSubmit}/>
                </View>
                <FlatList
                    data={DATA}
                    renderItem={renderItem}
                    keyExtractor={item => item.id}
                />
            </View>
        </>
    )
}

export default Items;
