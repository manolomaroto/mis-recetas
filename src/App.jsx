import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Menu from './components/Menu'

function App() {

  return (
    <>
      <Menu />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          {/* <Route path="/receta/:id" element={<DetalleReceta />} />
          <Route path="/favoritos" element={<Favoritos />} />
          <Route path="/nueva" element={<NuevaReceta />} /> */}
        </Routes>
      </main>
    </>
  )
}

export default App
