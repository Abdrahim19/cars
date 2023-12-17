import { useState } from "react"
import Hero from "./Hero"
import Ideal from "./Ideal";
import Dmaned from "./Dmaned";
import Marques from "./Marques";
import Model from "./Model";
import Benfites from "./benfites";
import Hilightcars from "./components/Hilightcars";

const Home = () => {
  const data = ['Acheter' , 'Vendre'];

  

  const [selected, setselected] = useState<string>(data[0])
  return (
    <>
    <Hero data={data} selected = {selected} setselected = {setselected}   />
    <Ideal />
    <Dmaned />
    <Marques />
    <Benfites />
    <Model />
    <Hilightcars />
    </>
  )
}

export default Home