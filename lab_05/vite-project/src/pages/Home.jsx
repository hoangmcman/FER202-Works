import Navbar from "../components/Navbar"
import Carousel from "../components/Carousel"
import Menu from "../components/Menu"

const Home = () => {
  return (
    <div className="homepage">
      <Navbar/>
      <Carousel/>
      <Menu/>
      <h1 style={{color: "red"}}>This is home page</h1>
    </div>
  )
}

export default Home
