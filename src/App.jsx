import { useState } from 'react'
import './App.css'
import { Routes, Route } from "react-router";
import Home from './component/pages/Home';
import Work from './component/pages/Work';
import AboutMe from './component/pages/AboutMe';
import ContactMe from './component/pages/ContactMe';
import Rootlayout from './component/layouts/Rootlayout';





function App() {
  const [count, setCount] = useState(0)

  return (
    <>

      <Routes>
        
        <Route element={<Rootlayout />}>
          <Route index element={<Home />} />
          <Route path="/work" element={<Work />} />
          <Route path="/about" element={<AboutMe />} />
          <Route path="/contact" element={<ContactMe />} />
          
        </Route>
      </Routes>


    </>
  )
}

export default App
