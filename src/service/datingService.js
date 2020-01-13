export default class DatingService  {

  getResource = async() =>{
    const respons = await fetch('https://gorest.co.in/public-api/users?_format=json&access-token=ktGMG1hqF60l65Y2gDeWQjUFzUPiwcl-CtSv')
    let data =  await respons.json();
    return data.result.map(this._getPeople).sort(function(a, b){
      var nameA = a.first_name.toLowerCase(), nameB = b.first_name.toLowerCase()
      if(nameA < nameB){
          return -1
      }
  })
  }


  _getPeople = (person) => {
    return{
        id: person.id,
        first_name: person.first_name,
        last_name: person.last_name,
        gender: person.gender,
        dob: person.dob,
        status: person.status,
    }
  }

}

