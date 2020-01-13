import React,{Component} from 'react'
import { View, TouchableWithoutFeedback,Keyboard,StyleSheet } from 'react-native'
import PersonFilter from '../components/PersonFilter'
import PersonListContainer from '../components/PersonList'



class MainScreen extends Component{

    render(){
        return(
            <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
                <View style={styles.center}>
                    <PersonFilter/>
                    <PersonListContainer />
                </View>
            </TouchableWithoutFeedback>
        )
    }
}

const styles = StyleSheet.create({
    center:{}
})
export{ MainScreen }