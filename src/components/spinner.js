import React from 'react'
import { View, StyleSheet, Text,ActivityIndicator } from 'react-native'
import { THEME } from '../theme'


const Spinner = () =>{

    return(

            <View style={[styles.container, styles.horizontal]}>
                <ActivityIndicator size="large" color={THEME.LOADING_COLOR} />
            </View>


    )
}

const styles = StyleSheet.create({

        container: {
          flex: 1,
          justifyContent: 'center',
          alignItems:'center',
          marginTop:200
        },
        horizontal: {
          flexDirection: 'row',
          justifyContent: 'space-around',
          padding: 10
        }
})

export default Spinner

