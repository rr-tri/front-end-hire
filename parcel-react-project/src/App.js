import React, { useState } from 'react'
import HolyGrail from './HolyGrail'
export function App() {
   const [display, setdisplay] = useState(true)
    return (<>
   {display && <button  onClick={()=>setdisplay(!display)}>click to view Holy Grail</button>}
    {!display && <HolyGrail disp={setdisplay}/>}
    </>)
}
