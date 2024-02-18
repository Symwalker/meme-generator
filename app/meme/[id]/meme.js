'use client'

import { useState } from "react"

const Meme = () => {
    const [fInput, setFInput] = useState()
    const [sInput, setSInput] = useState()
    const handleGenerateMeme = () =>{
        console.log(sInput, fInput);
    }
  return (
    <div>
      <input placeholder="First Input" className="p-3 border-black border-2 rounded-md" onChange={(e)=>setFInput(e.target.value)}/>
      <input placeholder="First Input" className="p-3 border-black border-2 rounded-md" onChange={(e)=>setSInput(e.target.value)}/>
      <button onClick={handleGenerateMeme} className="bg-blue-600 text-white font-bold p-3 rounded-md">Generate meme</button>
    </div>
  )
}

export default Meme
