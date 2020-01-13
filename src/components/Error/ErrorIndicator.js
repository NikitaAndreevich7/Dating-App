import React from 'react';
import { View, Text, StyleSheet,Image } from 'react-native';

export const ErrorIndicator = () =>{
    
    return(
        <View style={styles.errorWrap}>
            <Image
                style={styles.img}
                source={{uri:'https://image.flaticon.com/icons/png/512/149/149032.png'}} />
            <Text style={styles.textWrap}>Oopss.. Error</Text>
            <Text style={styles.textDetails}>Don't worry our drones are out to help</Text>
        </View>
    )
}


const styles = StyleSheet.create({
    errorWrap:{
        width:'100%',
        height: '100%',
        justifyContent: 'center',
        alignItems:'center'
    },
    img:{
        width:100,
        height:100
    },
    textWrap:{
        color: 'tomato',
        fontSize: 25
    },
    textDetails:{
        color: 'grey',
        fontSize: 15
    }
})