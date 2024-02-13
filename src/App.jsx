import { useState } from 'react'
import {puppyList} from './data.js'

function App() {
  const [puppies, setPuppies] = useState(puppyList);

  console.log("puppyList: ", puppyList);

  return (
    <>
      { 
      puppies.map((puppy) => {
      return <p key={puppy.id}>{puppy.name}</p>})
      }
    </>
  )
}

export default App
