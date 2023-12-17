const Commencard = ({Name ,img}:{Name:string , img:string}) => {
    return (
      <div className="w-fit">
          <img src={img || "/motostest.png"} alt="motoCard" className="mx-auto" />
          <div className="rounded-lg shadow-lcui_shadow9 bg-white h-[45px] -mt-[10px] grid place-items-center">
              <h1 className="text-xl capitalize duration-200 transition-transform hover:underline cursor-pointer">{Name}</h1>
          </div>
      </div>
    ) 
  }
  
  export default Commencard