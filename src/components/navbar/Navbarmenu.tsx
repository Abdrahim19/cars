import { navlinks } from "../../data/navlinks"
import styles from "../../styles/styles"
import Link from "../commen/Link"

const Navbarmenu = ({state}:{state:boolean}) => {
  return (
    <ul className={`${styles.mobilmenu} ${state ? 'top-[72px]' : '-top-[999rem]'}`}>
       {navlinks.map(navlink => (
         <Link link={navlink.name} to={navlink.link} />
       ))} 
   </ul>
  )
}

export default Navbarmenu