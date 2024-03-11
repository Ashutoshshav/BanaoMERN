import Navbar from './components/Navbar'
import Hero from './components/Hero'
import NavbarSecond from './components/NavbarSecond'
import Cards from './components/Cards'
import Sidenav from './components/Sidenav'
import Cards2 from './components/Cards2'

function App() {
  return (
    <>
      <header>
        <Navbar />
        <Hero />
      </header>
      <main className='container'>
        <NavbarSecond />
        <div className='d-block d-sm-flex'>
          <div>
            <Cards />
            <Cards2 />
          </div>
          <Sidenav />
        </div>
      </main>
    </>
  )
}

export default App
