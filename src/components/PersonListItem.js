import React from 'react'
import {View, Text, StyleSheet,TouchableOpacity,Alert} from 'react-native'

export const PersonListItem = ({item}) =>{
    let { 
        first_name,
        last_name,
        dob,
        status,
        gender } = item

        //преобразуем дату рождения
    const getAge = (age) =>{
        const getYear = parseInt(age.slice(0,4))
        const data = new Date()
        const year = data.getFullYear()
        return year - getYear
    }

        //модальное окно
    const invitation = () => {
        Alert.alert(
          'Приглашение',
          `Вы действительно хотите пригласить на свидание пользователя ${first_name}?`,
          [
            {
              text: 'Отменить',
              style: 'cancel'
            },
            {
              text: 'Пригласить',
              style: 'destructive',
                onPress(){
                    Alert.alert(
                        'Приглашение отправлено',
                        ''
                        [
                            {
                                text:'Ок',
                                style:'cancel'
                            }
                        ]
                    )
                }
            }
          ],
          { cancelable: false }
        )
      }


   
    let statusUser = status === 'active' ? 'black': 'grey'
    return(
        <TouchableOpacity activeOpacity={0.5} onPress={invitation}>
            <View style={styles.wrap} >
                <View style={styles.name}>
                    <Text style={{color:statusUser,marginRight:5,fontSize:17,}}>{ first_name }</Text>
                    <Text style={{color:statusUser, fontSize:17}}>{ last_name }</Text>
                </View>
                <Text style={{color:statusUser,marginLeft:15, fontSize:17}}>{getAge(dob)} year old</Text>
                <Text style={{color:statusUser,marginLeft:15, fontSize:17}}>{gender}</Text>
            </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    wrap:{
        width:'100%',
        padding:15,
        borderStyle:'solid',
        borderWidth:1,
        borderColor: 'silver',
        borderRadius:3,
        marginBottom: 7,
        flexDirection:'row',
    },
    name:{
        width:'50%',
        flexDirection: 'row'
    }
})