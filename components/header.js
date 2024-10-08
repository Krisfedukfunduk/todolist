import React from "react";
import { StyleSheet, View, Text } from "react-native";

export default function Header() {
    return(
        <View style={styles.main}>
            <Text style={styles.text}>Список дел</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    main:{
        backgroundColor:"#dda0dd",
        padding:20,
        },
    text:{
        textAlign:"center",
        fontFamily:"Montserrat",
        fontSize:36,
        color:"#fffafa",
        },
});