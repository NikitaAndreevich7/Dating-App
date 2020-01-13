import React,{Component} from 'react'
import {View,Text, StyleSheet,TextInput,Button,Platform} from 'react-native'
import { RadioButton } from 'react-native-paper';
import { THEME } from '../theme'
import { connect } from 'react-redux'
import  withDatingAppService  from '../components/hoc/withDatingAppService'
import { 
    searchName,
    filterGender,
    ageFirstField, 
    ageLastField, 
    resetAllField } from '../actions' 

class PersonFilter extends Component{


    render(){


        const { 
            resetField, 
            gender, 
            filterGender, 
            firstAge, 
            lastAge,
            ageFirstField,
            ageLastField,
            searchListName,
            searchDispatch } = this.props

        return(
            <View style={styles.filterWrapper}>
                <View style={styles.inputNameWrap}>
                    <TextInput
                        style={styles.input} 
                        placeholder='Write name'
                        value={searchListName}
                        onChangeText={(value) => searchDispatch(value)} />

                    <View style={styles.radioBox}>
                        <View style={styles.radioButton}>
                            <RadioButton
                                value="male"
                                color={THEME.BUTTON_COLOR}
                                status={gender === 'male' ? 'checked' : 'disabled'}
                                onPress={() => filterGender('male') }
                            />
                            <Text>Male</Text>
                        </View>
                        <View style={styles.radioButton}>
                            <RadioButton
                                value='female'
                                color={THEME.BUTTON_COLOR}
                                status={gender === 'female' ? 'checked' : 'disabled'}
                                onPress={() => filterGender('female') }
                            />
                            <Text>Female</Text>
                        </View>

                    </View>
                    <View style={styles.inputAgeWrap}>

                        <Text style={styles.ageText}>Age from </Text>
                        <TextInput
                            style={styles.age}
                            placeholder='0'
                            value={firstAge}
                            onChangeText={(value) =>  ageFirstField(value) } />

                        <Text style={styles.ageText}>to</Text>
                        <TextInput 
                            style={styles.age} 
                            placeholder='100'
                            value={lastAge}
                            onChangeText={(value) => ageLastField(value)}  />
                    </View>
                </View>
                <View style={styles.btn}>
                <Button 
                    title='reset'
                    style={{backgroundColor:'silver'}}
                    color={THEME.BUTTON_COLOR}
                    onPress={() => resetField()}
                    />
                </View>
            </View>
        )
    }
}

const mapStateToProps = ({gender, firstAge, lastAge, searchName}) =>{
    return{ gender, firstAge, lastAge, searchListName :searchName }
}
const mapDispatchToProps = (dispatch) =>{
    return{
        resetField: () => dispatch(resetAllField()),
        filterGender: (elem) => dispatch(filterGender(elem)),
        ageFirstField : (elem) => dispatch(ageFirstField(elem)),
        ageLastField : (elem) => dispatch(ageLastField(elem)),
        searchDispatch: (elem) => dispatch(searchName(elem))
    }
}

export default withDatingAppService()( connect(mapStateToProps,mapDispatchToProps)(PersonFilter))



const styles = StyleSheet.create({
    filterWrapper:{
        width:'100%',
        backgroundColor: Platform.OS === 'android' ? THEME.MAIN_COLOR : '#fff',
        paddingTop: 45,
        paddingBottom: 15,
        padding:10
    },
    inputNameWrap:{
        height: 95,
        justifyContent:'space-between',
        paddingBottom:20
    },  
    input:{
        backgroundColor:'#fff',
        borderStyle:'solid',
        borderColor: Platform.OS === 'android' ? '#fff' : THEME.MAIN_COLOR,
        borderBottomWidth: 1,
        padding:3,
    },
    inputAgeWrap:{
        flexDirection:'row',
        justifyContent:'space-between',
        width:'65%',
        alignItems:'flex-end',
        borderStyle:'solid',
        borderColor:  THEME.MAIN_COLOR,
        borderBottomWidth: 1,
    },  
    radioBox:{
        flexDirection:'row',
        width:'50%',
        justifyContent: 'space-between',
        marginTop:10,
        marginBottom:10,
    },
    radioButton:{
        flexDirection:'row',
        alignItems:'center'
    },
    age:{
        backgroundColor:'#fff',
        width:'24%',
        borderRadius: 3,
        textAlign:'center'
    },
    ageText:{
        color:'black',
        fontSize: 18,
    },
    btn:{
        width:'30%',
        marginTop:55
    }

})