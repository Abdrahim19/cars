import Custom_button from "../../components/commen/Custom_button"
import styles from "../../styles/styles"
import { Cartype } from "../../types/Types"
import { IoCallOutline } from "react-icons/io5";


const Carditals:React.FC<Cartype> = (props) => {
  return (
    <div className="pt-4 grid-cols-4 pb-5 px-4 text-center rounded-[21px] bg-white shadow-lcui_shadow9">
      <h3>{props.carName}</h3>
      <p>{props.carModel}</p>
      <div className="my-1">
      <span className="text-lcui_vehiculeblack  mr-1 pr-1 border-r border-lcui_vehiculeblack">{props.year} </span>
      <span className="text-lcui_vehiculeblack mr-1 pr-1 border-r border-lcui_vehiculeblack">{props.Kilométrage} </span>
      <span className="text-lcui_vehiculeblack mr-1 pr-1 border-r border-lcui_vehiculeblack">{props.Boite_de_vitesse} </span>
      <span className="text-lcui_vehiculeblack ">{props.Energie } </span>
      </div>
      <div className={`${styles.flexBetween}`}>
      <p className="my-2 underline duration-150 hover:text-opacity-40 font-normal">{props.carPrice} € </p>
        <p className=" my-4">Publiée il y a 18 jours</p>
      </div>
        <Custom_button beforeicon={<IoCallOutline color='text-lcui_vehiculeblue border-2 border-white' /> } type={"button"} isLoading={false}>
        N° téléphone
        </Custom_button>

    </div>
  )
}

export default Carditals