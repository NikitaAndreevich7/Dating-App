//загрузка
const datServiceRequested = () =>{
    return{
        type: 'FETCH_DATSERVICE_REQUEST'
    }
}
//получение данных
const datServiceLoaded = (list) =>{
    return{
        type: 'FETCH_DATSERVICE_SUCCESS',
        payload: list,
    }
}
//ошибка
const datServiceError = (error) =>{
    return{
        type: 'FETCH_DATSERVICE_FAILURE',
        payload: error
    }
}

// получаем значение инпута
const  searchName = (elem) =>{
    return{
        type: 'INPUT_NAME',
        payload: elem
    }
}

// значение пола
const filterGender = (elem) =>{
    return{
        type: 'FILTER_GENDER',
        payload: elem
    }
}
// значение первой ячейки возраста
const ageFirstField = (elem) =>{
    return{
        type: 'AGE_FIRST_FIELD',
        payload: elem
    }
}
// значение последней ячейки возраста
const ageLastField = (elem) =>{
    return{
        type: 'AGE_LAST_FIELD',
        payload: elem
    }
}

//сброс всех значений
const resetAllField = () =>{
    return{
        type: 'RESET_ALL_FIELD'
    }
}

const fetchDatService = (datingService, dispatch) => () =>{
    dispatch(datServiceRequested());
    datingService.getResource()
        .then((data) => dispatch(datServiceLoaded(data)))
        .catch((err) => dispatch(datServiceError(err)))
}

export {
    fetchDatService,
    datServiceRequested,
    datServiceLoaded,
    datServiceError,
    searchName,
    filterGender,
    ageFirstField,
    ageLastField,
    resetAllField
}