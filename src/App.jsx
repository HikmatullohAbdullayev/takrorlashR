import './App.css'
import { Container } from './config/global-style'
import { Header } from './layout/header/header'
import { Home } from './page/home/home'
import { Footer } from './layout/footer/index'
import { Banner } from './page/banner/style-banner'
import { Main } from './page/banner/banner'
function App() {

  return (
    <>
      <Container>
        <Header/>
      </Container>
      
      <Main/>
      
      <Container>
        <Footer/>
      </Container>
   
    </>
  )
}

export default App
