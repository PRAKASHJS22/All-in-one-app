import React,{useState,useEffect} from 'react';
import { Text, View, TextInput, FlatList, Button} from 'react-native';
import Cards from '../../components/Cards';
import styles from './StyleItems';


let DATA=[];

function Items() {

const[id,setID]=useState(0);
const[description,setDescription]=useState('');
const[amount,setAmount]=useState();
const[total,setTotal]=useState(0);

let handleSubmit=()=> {

    setID(id+1)
    setDescription(text => text)
    setAmount(number => number)
    setTotal(+(+total) + (+amount))
    
    DATA.push({id,description,amount,total});

    console.log(DATA)
    console.log(DATA.length)
}
//  const[item,setItem]= useState({
    //     id: 0,
    //     description:"",
    //     amount:0,
    //     total:0,
    // })
    
    // let DATA=[];
    
    // let handleSubmit= () => {
        
    //     setItem({
    //         id:item.id + 1,
    //         description:item.description,
    //         amount:item.amount,
    //         total: +((item.total) + (item.amount))
    //     })
        
    //     DATA.push(item)
    //     console.log(DATA)
    // }

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
                <Text style={styles.logo}>Total Amount: {total} </Text>
                <View style={styles.card}>
                    <View style={styles.inputView} >
                        <TextInput  
                            style={styles.inputText}
                            placeholder="Item Description..." 
                            placeholderTextColor="#003f5c"
                         onChangeText={setDescription}
                        />
                    </View>
                    <View style={styles.inputView} >
                        <TextInput
                            keyboardType='numeric'
                            style={styles.inputText}
                            placeholder="Amount..." 
                            placeholderTextColor="#003f5c"
                             onChangeText={setAmount}
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
