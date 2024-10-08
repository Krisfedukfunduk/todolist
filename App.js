import React, {useState} from "react";
import { ImageBackground,FlatList, StyleSheet, View } from "react-native";
import Header from "./components/header";
import ListItem from "./components/list";
import Form from "./components/form";

export default function App() {
  const [listOfItems, setListOfItems] = useState([
    { text: "Купить ...", key:"1" },
    { text: "Помыть...", key:"2" },
    { text: "Сдать...", key:"3" },
  ]);
  const image = {uri: 'https://images.unsplash.com/photo-1496715976403-7e36dc43f17b?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'};

  const addHandler = (text) => {
    setListOfItems((list) => {
      return[
        { text: text,key: Math.random().toString(36).substring(7)},
        ...list,
      ];
    });
  }; 

  const deleteHandler = (key) => {
    setListOfItems((list) => {
      return list.filter((listOfItems)=> listOfItems.key !=key);
    });
  };

  return(
    <View style={styles.header}>
      <ImageBackground source ={image} resizeMode="cover" style={styles.image}>
          <Header/>
          <Form addHandler={addHandler}/>
          <View>
            <FlatList
              data={listOfItems}
              renderItem={({ item }) => (
                <ListItem el={item} deleteHandler={deleteHandler}/>
              )}
            />
          </View>
        </ImageBackground>
      </View>
  );
}

const styles = StyleSheet.create({
  
  header:{
    flex:1,
    backgroundColor:"#000000",
  },
  image:{
     flex:1,
     justifyContent:'center',

  },
});
