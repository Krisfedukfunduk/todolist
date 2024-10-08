import React, { useState } from "react";
import { StyleSheet, TextInput, Text, Button, View } from "react-native";

export default function Form({addHandler}){
    const [text, setValue] = useState("");

    const onChange = (text) =>{
        setValue(text);
    };
    return(
        <View>
            <TextInput 
            style= {styles.input} 
            onChangeText={onChange} 
            placeholder="Впишите задачу..."
            />
            <Button
                color="#AA96DA"
                onPress={()=> addHandler(text)}
                title="Добавить задачу"
            />
        </View>
    );
}

const styles = StyleSheet.create({
    input: {
        backgroundColor: "#fff",
        color:"#dda0dd",
        textAlign:"center",
        margin:15,
        height:40,
        fontSize:20,
    },

});