import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import { Blog } from './components/blog/blog'
import { About } from './components/about/about'
import { Servicos } from './components/services/servicos/Servicos'
import { Informacoes } from './components/information/Informacoes'
import { Capa } from './components/header/Capa'
import { Navbar } from './components/header/Navbar'
import { Button } from './components/button/Button'
import { Footer } from './components/footer/footer'
import { Formulario } from './components/services/forms/formulario'



function App() {
  const [count, setCount] = useState(0)

  return (

    <body>
      <>
        <Button />
        <Navbar />
        <Capa />
        <Informacoes />
        <About />
        <Servicos />
        <Blog />
        <Formulario />
        <Footer />
      </>
    </body>
  )
}
export default App