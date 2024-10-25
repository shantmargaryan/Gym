import Header from "/src/components/Header"
import Hero from "/src/components/Hero"
import Join from "/src/components/Join"
import Membership from "/src/components/Membership"
import About from "/src/components/About"
import Trainers from "/src/components/Trainers"
import Footer from "/src/components/Footer"

function App() {

  return (
    <>
      <Header />

      <main className="main">
        <Hero />
        <Join/>
        <Membership/>
        <About/>
        <Trainers/>
      </main>

      <Footer/>
    </>
  )
}

export default App
