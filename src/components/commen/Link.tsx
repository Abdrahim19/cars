import { NavLink } from "react-router-dom";

type prop = {
    link: string,
    to: string
    styles?:string
  }
  
  const Link = ({ link, to , styles }: prop) => {
    return (
      <NavLink key={link} to={to} className= {`rounded p-2 cursor-pointer text-xs font-medium uppercase leading-normal text-primary transition duration-150 ease-in-out hover:bg-neutral-100 hover:text-primary-600 focus:text-primary-600 focus:outline-none focus:ring-0 active:text-primary-700 dark:hover:bg-neutral-700 block ${styles}`}>
        {link}
      </NavLink>
    )
  }
   
  export default Link;