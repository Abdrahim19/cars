import Custom_button from "../../components/commen/Custom_button"
import Carditals from "./Carditals"
import Carscarsoul from "./Carscarsoul"
import { MdArrowBack } from "react-icons/md";


const Carpage = () => {
  return (
    <>
    <Custom_button type={"submit"} beforeicon={<MdArrowBack color={'text-black'} />} isLoading={false}>
      Retour
    </Custom_button>
    <div className="grid w-full justify-between ">
      <Carscarsoul />
      <Carditals carImges={"https://image-annonce.lacentrale.fr/352x264/W102834170_STANDARD_0.jpg?version=1701789650"}
     carModel={"2.0 35 150 DESIGN "} carName={"AUDI A4 V "} carPrice={2017} year={2009} garantie={""} Energie={"Diesel"}
     Boite_de_vitesse={"Automatique"} IsCredit={false} Credit={"300"} Kilométrage={"81 613 km"} />
    </div>
     </>
  )
}

export default Carpage