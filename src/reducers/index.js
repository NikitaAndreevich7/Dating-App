const initialState = {
    allList:[],
    loading: true,
    error: false,
    gender: '',
    firstAge: null,
    lastAge:null,
    searchName: '',
    genderArray: []
}

const reducer = (state = initialState, action) =>{

    switch(action.type){

        //ПОЛУЧЕНИЕ И ЗАГРУЗКА ДАННЫХ

        case 'FETCH_DATSERVICE_REQUEST':
            return{
                ...state,
                allList: [],
                loading: true,
                error: null
            }
        case 'FETCH_DATSERVICE_SUCCESS':

            return{
                ...state,
                allList: action.payload,
                loading: false,
                error: null
            }
        case 'FETCH_DATSERVICE_FAILURE':
            return{
                ...state,
                allList: [],
                loading: false,
                error: action.payload
            }
        
        // ФИЛЬТР

        case 'INPUT_NAME':
            return{
                ...state,
                searchName: action.payload
            }

            //сброс всех фильтров
        case 'RESET_ALL_FIELD':
            return{
                ...state,
                firstAge: null,
                lastAge: null,
                gender: '',
                searchName: '',
            }
            
            //флаг gender
        case 'FILTER_GENDER':

                return{
                    ...state,
                    gender: action.payload
                }

                //первое окно возраста
        case 'AGE_FIRST_FIELD':
            return{
                ...state,
                firstAge: action.payload
            }
            //второе окно возраста
        case 'AGE_LAST_FIELD':
            return{
                ...state,
                lastAge: action.payload
            }
        
        default:
            return state
    }

}

export default reducer;




