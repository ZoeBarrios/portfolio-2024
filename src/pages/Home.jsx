import About from "../sections/about";
import Main from "../sections/main";
import Proyects from "../sections/proyects";
import Header from "../sections/header";

function Home() {
  return (
    <div className='min-h-screen' >
      <Header />
      <Main />
      <About />
      <Proyects />

    </div >
  )
}

export default Home;