import React from "react"
import { Link } from "react-router-dom"

type prop = {
    array:string[],
    titel:string
}
const List:React.FC<prop> = ({array , titel}) => {
  return (
    <div className="w-full px-4">
    <h2 className="mb-3 text-sm font-medium tracking-widest text-gray-900 uppercase title-font">{titel}</h2>
    <nav className="mb-10 list-none">
    {array.map(item => (
        <li  className={`mt-3`} key={item}>
          <Link to={titel} className="text-gray-500 cursor-pointer hover:text-gray-900">{item}</Link>
          </li>
        ))}
    </nav>
</div>
        )    
}

export default List