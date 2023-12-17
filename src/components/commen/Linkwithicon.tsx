import React from "react"
import styles from "../../styles/styles"

const Linkwithicon = ({icon , text}:{icon:React.ReactNode , text:string}) => {
  return (
    <div className={`${styles.flexitems} gap-2`}>
      <span className="p-2 rounded-full  bg-lcui_primary100">
    {icon && <span className=" w-4 h-4 text-lcui_lightBlue ">{icon}</span>}
      </span>
    {text && <p className="text-normal text-base">{text}</p>}
    </div>
  )
}

export default Linkwithicon