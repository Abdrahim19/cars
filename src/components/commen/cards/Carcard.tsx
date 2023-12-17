
const Carcard = ({imgrsc,
    catograyName,
    numberofcars}:{imgrsc:string,
        catograyName:string,
        numberofcars:string}) => {
  return (
    <div className="lcui_shadow9 bg-lcui_backgroundSoft shadow-lcui_shadow9 rounded-[21px]">
        <div className={`py-5 pr-2 `}>
            <img src={imgrsc || '/cartesting.png'} alt="car_img" />
        </div>
        <div className="px-4 py-3 rounded-b-[21px] bg-gray-200">
            <h4 className="text-lg tex-black leading-[22px] mb-1 cursor-pointer hover:underline hover:text-opacity-70">{catograyName} </h4>
            <p className="text-gray-600 text-base">{numberofcars} {' '}  véhicules</p>
        </div>
    </div>
  )
}

export default Carcard