import { useState } from 'react'
import './App.css'
import Card from './components/Card/Card'

function App() {

  const [itens, setItens] = useState([])

 async function carregarDadosApi(){
  const apiUrl = 'https://rickandmortyapi.com/api/character/'

  const response= await fetch(apiUrl)

//console.log(response)

  const body = await response.json()

  console.log(body)

  const results = body.results

  console.log(results)

  setItens(results)
}

carregarDadosApi()

  return (
    <>
      <div className="cards">
        {/* <Card item={item1} />
        <Card item={item2} />
        <Card item={item3} /> */}
        {itens.map((item, i) => <Card item={item} key={i} />)}
      </div>
    </>
  )
}

export default App