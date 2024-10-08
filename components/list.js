import React from "react";
import { StyleSheet, TouchableOpacity, Text, TouchableOpacityBase } from "react-native";

export default function ListItem({ el, deleteHandler }) {
    return (
        <TouchableOpacity onPress={()=> deleteHandler(el.key)}>
            <Text style={styles.text}>{el.text}</Text>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    text: {
        padding:20,
        textAlign: "center",
        borderRadius: 5,
        backgroundColor:"#dda0dd",
        borderWidth:3,
        borderColor:"#fffafa",
        marginTop:20,
        width: "60%",
        marginLeft:"20%",
        color:"#fffafa",
        fontSize:18,
    },
});