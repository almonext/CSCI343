
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { useState } from 'react';
import EventItem from '../components/MenuItems';
import {FlatList, StyleSheet, Text, View, Button } from 'react-native';
import Title from '../components/Title';    


export default function EventsScreen(props) {
 //Setting Safe Area Screen Boundaries   
     const insets= useSafeAreaInsets();

     const [menuItems, setMenuItems] = useState([
         { 
            id: '1', 
            name: 'pretzel bites', 
            price: '5.99',
            image: require('../assets/images/pretzel.jpg'),
         },
         { 
            id: '2', 
            name: 'quesadilla', 
            price: '8.99',
            image: require('../assets/images/quesadilla.jpg'),
         },
        { 
            id: '3', 
            name: 'reuben', 
            price: '10.99',
            image: require('../assets/images/reuben.jpg'),
         },
         { 
            id: '4', 
            name: 'smash burger', 
            price: '11.99',
            image: require('../assets/images/smashBurger.jpg'),
         },
         { 
            id: '5', 
            name: 'salad', 
            price: '7.99',
            image: require('../assets/images/salad.jpg'),
         },

     ]);
 
   return (<View 
     style={[
         styles.rootContainer,
         {
         paddingTop: insets.top, 
         paddingBottom: insets.bottom,
         paddingLeft: insets.left, 
         paddingRight: insets.right,
         },
     ]}
 >
     <View style={styles.titleContainer}>
         <Title>Menu Items</Title>
     </View>
     <View style={styles.listContainer}>
        <FlatList
        data={menuItems}
        keyExtractor={(item, index) => {
            return item.id;
        }}
        alwaysBounceVertical={false}  
        showsVerticalScrollIndicator={false}
        renderItem={(itemData) => {
            return (
                <EventItem
                name={itemData.item.name}
                price={itemData.item.price}
                image={itemData.item.image}
                />
            ) 
        }}

        />
     </View>
        <View style={styles.buttonContainer}>
            <Button title="Main Menu" onPress={props.onNext}/>
        </View>
 </View>
       )
}

const styles = StyleSheet.create({
   rootContainer: {
    flex: 1,
    alignItems: 'center'
  },
    titleContainer: {
        flex: 1,   
        justifyContent: 'center',  
    } ,
    listContainer: {
        flex: 7,
        width: 300,
    },
    buttonContainer: {
        flex: 1,
        justifyContent: 'center',
        alignContent: 'center',
        borderRadius: 40,
        width: 150,
    }
});