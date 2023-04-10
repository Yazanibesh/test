
import React,{useState}  from 'react'
import PokemonService from '../shared/api/service/PokemonService'


export const HomeView = () => {

  const [data, setData] = useState() 

  const [search,setSearch] = useState("")
   
  const fetchDataFromExternalAPI = () =>{

    PokemonService.searchForPokemon(search.toLocaleLowerCase())
    .then((response) => setData(response.data))
     .catch((error) => console.log(error))
     /*
     Axios.get('https://pokeapi.co/api/v2/pokemon/${search.toLowerCase()}')
     .then((response) => setData(response.data))
     .catch((error) => console.log(error)) */
  }

    const displayData = () => {
      if(data) {
        return <div>
          <h3>name: {data.name} </h3>
          <h3>id: {data.id} </h3>
          <h3>weight: {data.weight} </h3>
          <h3>hight: {data.hight} </h3>
          <h3>Type: {data.name} </h3>

        </div>
      }


    }

  return (
    <div>
        <h1>{search}</h1>
        <span>Search for pokemon:</span>
        <input onChange={(event) => setSearch(event.target.value)}/>
        <br/>
        <button onClick={() => fetchDataFromExternalAPI}>Make API call! </button>
        {displayData()} 
        
    </div>
  )
}


/*export const HomeView = () => {
  const {count,setcount} = useState(0)

  useEffect( () => {
    alert('Component is being rendered ')
    return () => {
      alert('Component is being rendered ')
    }

  },[count])

return (
  <div>
      <h1>HomeView</h1>
      
  </div>
)
}*/