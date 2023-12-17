const MarqsCard = ({markIcon ,marqName }:{markIcon:string , marqName:string}) => {
  return (
    <div className="rounded-lg max-w-full shadow-lcui_shadow9 bg-white grid place-items-center">
      <div className="m-4">
    <img src={markIcon} alt="" className="h-16 w-16" />
    <h4 className="text-lg tex-black leading-[22px] text-center cursor-pointer hover:underline hover:text-opacity-70">{marqName} </h4>
      </div>
    </div>
  )
}

export default MarqsCard