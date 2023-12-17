import React from "react"
import { Cartype } from "../../../types/Types"
import Custom_button from "../Custom_button"
import { BsHeart } from "react-icons/bs";



const Carinfo:React.FC<Cartype> = (props) => {
  return (
    <div className="mx-auto mt-11 w-80 transform overflow-hidden rounded-lg bg-white dark:bg-slate-800 shadow-md duration-300 hover:scale-105 hover:shadow-lg">
        <span className="absolute top-3 right-3 p-3 rounded-full bg-lcui_white text-lcui_white"><BsHeart size={25} className='border-2 border-solid' /></span>
        <img className="h-48 w-full object-cover object-center"  src={props.carImges} alt="product image" />
    <div className="px-5 pb-5">
                <h3 className="text-gray-900 font-semibold text-xl tracking-tight dark:text-white">
                    {props.carName}</h3>
                <h4 className="text-gray-400 font-semibold text-base tracking-tight dark:text-white">
                    {props.carModel}</h4>
                    <div className="py-3  border-b border-lcui_veil_black">
                        <span className="text-lcui_vehiculeblack mr-1 pr-1 border-r border-lcui_vehiculeblack">{props.year} </span>
                        <span className="text-lcui_vehiculeblack mr-1 pr-1 border-r border-lcui_vehiculeblack">{props.Kilométrage} </span>
                        <span className="text-lcui_vehiculeblack mr-1 pr-1 border-r border-lcui_vehiculeblack">{props.Boite_de_vitesse} </span>
                        <span className="text-lcui_vehiculeblack ">{props.Energie } </span>
                    </div>
                    <p className="my-2">{props.carPrice} € 
                        {props.IsCredit && <span>ou des {props.Credit}€ / moin</span>}
                    </p>
                    <div className='w-full mx-auto'>
                    <Custom_button type={"submit"}  isLoading={false}>
                    Voir l'annonce
                    </Custom_button>
                    </div>
    </div>
</div>
  )
}

export default Carinfo