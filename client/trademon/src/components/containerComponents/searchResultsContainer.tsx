import React, {useEffect, useState} from 'react'
import { getTrades} from '../../utils/rest'
import StandardTile from '../tileComponents/standardTileComponent'
interface trades {
  tradeID:number,
  numViews:number, 
  seller:string, 
  pokeNum:number, 
  pokeName:string, 
  pokeGen:number, 
  pokeLvl:number, 
  fastMove:string, 
  chargeMove:string, 
  isShiny:boolean ,
  appraisal:number, 
  price:number, 
  tax:number
}
export default function SearchResultsContainer() {
const [trades,setTrades] = useState <trades[]>()

useEffect(():any => {
  
 getTrades()
  .then(res =>setTrades(res))
  // .then(res => setTrades(res))
   
}, [])
 

console.log('trades after useEffect', trades)

  return (
    <div className="search-results">
      {trades && trades.map(trade => <StandardTile trade={trade}></StandardTile>)}
     
    </div>
  )
}