import './App.css'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import PokedexById from './pages/PokedexById'
import Pokedex from './pages/Pokedex'
import ProtectedRoutes from './pages/ProtectedRoutes'
import Footer from './assets/components/shared/Footer'
import Pokedex404 from './assets/components/pokedexId/Pokedex404'


function App() {
  
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Home />} />


        <Route element={<ProtectedRoutes />}>
          <Route path='/pokedex/:id/pokemon/:id' element={<PokedexById />} />
          <Route  path='/pokedex/:id' element={<Pokedex />} />
          <Route  path='/error404' element={<Pokedex404 />} />
         
        </Route>

        
      </Routes>
      <Footer />
    </div>
  )
}

export default App
