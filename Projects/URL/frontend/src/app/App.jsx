import { useState } from 'react'
import './App.css'


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
    shortCode: "SDFDD"
  },
  {
    _id:"3",
    originalUrl: "https://www.amazon.com/Ultimate-Controller-Joysticks-Remappable-Gaming-Console/dp/B0D739FJLG/ref=sr_1_24?_encoding=UTF8&sr=8-24",
    shortCode: "SDFDD"
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
      <div className='w-full max-w-4xl p-2 '></div>
      {
        urls.map(url=>{
          return (

          )
        })
      }
    </main>
  )
}

export default App
