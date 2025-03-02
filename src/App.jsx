import { AboutUs, Hero, NavBar } from "./components";

function App() {
  return (
    <div className="w-full overflow-hidden">
      <header className="flex__center paddingX py-1 bg-black relative">
        <div className="boxWidth">
          <NavBar />
        </div>
      </header>
      <div className="paddingX pb-18 bg-black">
        <div className="boxWidth">
          <Hero />
        </div>
      </div>
      <div className="">
        <div className="flex flex-col items-center app__bg">
          <AboutUs />
        </div>
      </div>
    </div>
  );
}

export default App;
