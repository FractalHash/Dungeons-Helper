
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import HomePage from "./pages/HomePage"
import Nav from './components/Nav'
import "./App.scss"
import CharactersPage from './pages/CharactersPage'


function App() {

  return (
    <BrowserRouter>
      <Nav />
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/characters' element={<CharactersPage />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
