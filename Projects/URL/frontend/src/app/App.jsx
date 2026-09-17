import { useState } from 'react'
import axios from 'axios'
import './App.css'


async function fetchUrls(){
   const response = await axios.get("http://localhost:3000/api/uri") 
   console.log(response)
}

fetchUrls();


const dummyUrls = [
  {
    _id:"1",
    originalUrl: "https://www.amazon.com/Ultimate-Controller-Joysticks-Remappable-Gaming-Console/dp/B0D739FJLG/ref=sr_1_24?_encoding=UTF8&sr=8-24",
    shortCode: "SDFDD",
    Clicks:9
  },
  {
    _id:"2",
    originalUrl: "https://www.amazon.com/Ultimate-Controller-Joysticks-Remappable-Gaming-Console/dp/B0D739FJLG/ref=sr_1_24?_encoding=UTF8&sr=8-24",
    shortCode: "SDFDD",
    Clicks:5
  },
  {
    _id:"3",
    originalUrl: "https://www.amazon.com/Ultimate-Controller-Joysticks-Remappable-Gaming-Console/dp/B0D739FJLG/ref=sr_1_24?_encoding=UTF8&sr=8-24",
    shortCode: "SDFDD",
    Clicks:4
  }
]



function App() {

  const [ urls, SetUrls ] = useState(dummyUrls)
  const [ inputValue, SetInputValue ] = useState("")
  const [ currentUrl, SetCurrentUrl ] = useState(null)

  return (
    <main className='p-10 flex flex-col gap-4'>
      <div className='w-full max-w-4xl p-2 '></div>
      <div className='w-full max-w-4xl p-2 '></div>
      <div className='w-full max-w-4xl p-2  flex flex-col gap-2'></div>
      {
        urls.map(url =>{
          return (
            <div className='border border- bg-neutral-200 p-2 flex gap-4 justify-evenly' >
              <p>{url.shortCode}</p>
              <p className='truncate'>{url.originalUrl}</p>
              <div className='flex gap-2'>
                <button className='p-2 rounded bg-amber-600 text-white cursor-pointer'>COPY</button>
                <button className='p-2 rounded bg-amber-600 text-white cursor-pointer'>DELETE</button>
              </div>

            </div>
          )
        })
      }
    </main>
  )
}

export default App
