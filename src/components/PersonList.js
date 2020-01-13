import React,{Component} from 'react'
import { View,Text, StyleSheet, FlatList } from 'react-native'
import ErrorIndicator from './Error/ErrorIndicator'
import Spinner from './spinner'
import { PersonListItem } from './PersonListItem';
import { connect } from 'react-redux'
import  withDatingAppService  from '../components/hoc/withDatingAppService'
import { fetchDatService} from '../actions'


class PersonListContainer extends Component{

   componentDidMount(){
            this.props.fetchDatService()
   }

    //список
   PersonList = (list) =>{
       return(
        <View style={styles.wrapPersonBox}>
            <FlatList
                data={list}
                keyExtractor={item => item.id.toString()}
                renderItem={({item}) =>(
                    <PersonListItem item={item} />
                )}
            />
        </View>
       )
   }

   //поиск
   search = (items, term) =>{
        if(term.length === 0 ){
            return items
        }
        return items.filter(item => {
            return item.first_name
                .toLowerCase().indexOf(term.toLowerCase()) > -1;
        })
   }

   //фильтр пола
    filterGender = (items, filter) =>{
        switch(filter){
            case 'all':
               return items
            
            case 'male':
                
                return items.filter(item => item.gender == 'male')
                
            case 'female':
                return items.filter(item => item.gender =='female')
            
            default:
                return items
        }
    }

    //фильтр возраста
    filterAge = (items,first,last) =>{

        if(first === null && last === null){
            return items
        }
        if(first !== null && last !== null){
            return items.filter(item => 2020 - Number(item.dob.slice(0,4)) > Number(first) &&
                                        2020 - Number(item.dob.slice(0,4)) < Number(last))
        }
        if( first !== null ){
            return items.filter(item => 2020 - Number(item.dob.slice(0,4)) > Number(first))
        }
        if(last !== null){
            return items.filter(item => 2020 - Number(item.dob.slice(0,4)) < Number(last))
        }
    }

    render(){
        const { 
            allList,
            loading, 
            error,
            gender, 
            firstAge, 
            lastAge, 
            searchName } = this.props;

            
        this.filterAge(allList,firstAge,lastAge)
        if(loading){return <Spinner />}
        if(error){return <ErrorIndicator />}

        // const visibleItems = this.filterGender(this.search(allList, searchName),gender)

        const visibleItems = this.search(this.filterGender(this.filterAge(allList,firstAge,lastAge),gender),searchName)
        return(

            this.PersonList(visibleItems)
            
        )
    }
}


const styles = StyleSheet.create({
    wrapPersonBox:{
        padding:5
    }
})


const mapStateToProps = ({allList, loading, error, gender, firstAge, lastAge, searchName}) =>{
    return{allList, loading, error, gender, firstAge, lastAge, searchName}
}
const mapDispatchToProps =(dispatch, {datingService}) =>{

    return{
        fetchDatService: fetchDatService(datingService,dispatch),
    }
}

export default withDatingAppService()( connect(mapStateToProps,mapDispatchToProps)(PersonListContainer))
   

