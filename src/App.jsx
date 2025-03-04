import {
  AboutUs,
  Chef,
  Contact,
  Gallery,
  Hero,
  Intro,
  Laurel,
  Menu,
  NavBar,
} from "./components";

function App() {
  return (
    <div className="w-full overflow-hidden">
      <header className="flex__center paddingX py-1 bg-black relative">
        <div className="boxWidth">
          <NavBar />
        </div>
      </header>
      <div className="paddingX pb-18 bg-black flex justify-center">
        <div className="boxWidth">
          <Hero />
        </div>
      </div>
      <div className="">
        <div className="flex flex-col items-center app__bg">
          <AboutUs />
        </div>
        <div className="flex flex-col items-center bg-black">
          <Menu />
        </div>
        <div className="flex flex-col items-center app__bg">
          <Chef />
        </div>
        <div>
          <Intro />
        </div>
        <div className="flex flex-col items-center app__bg relative">
          <Laurel />
        </div>
        <div className="flex bg-black">
          <Gallery />
        </div>
        <div className="flex flex-col items-center app__bg">
          <Contact />
        </div>
      </div>
    </div>
  );
}

export default App;
