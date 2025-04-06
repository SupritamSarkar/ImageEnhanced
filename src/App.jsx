import Home from "./components/Home";

import React from 'react'

const App = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-black py-8 px-4">
      <div className="text-center ">
        <h1 className="text-5xl font-bold py-3 text-amber-50 shawow-lg shadow-blue-200 drop-shadow-[0_0_10px_rgba(173,216,230,0.6)]">Unblur Image,
        Bring Clarity Instantly</h1>
        <p className="text-lg m-6 text-blue-200">The best image sharpener for portraits. AI lets you automatically unblur image for free. Sharpen image while increasing the resolution at a time.
        </p>

      </div>

      <Home/>

      <div className="text-lg text-amber-950">
        
      </div>
       

    </div>
  )
}

export default App
