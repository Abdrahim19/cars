import  { useCallback, useMemo, useState } from 'react';
import styles from '../../styles/styles';
import { navlinks } from '../../data/navlinks';
import { CiHeart , CiSearch , CiMenuFries } from "react-icons/ci";
import { IoPersonCircleSharp } from "react-icons/io5";
import { MdOutlineClose } from "react-icons/md";

import Link from '../commen/Link';
import Navbarmenu from './Navbarmenu';




const Navbar = () => {

    const [toggle, setToggle] = useState(false);

    const handleClick = useCallback(() => {
      setToggle((prevToggle) => !prevToggle);
    }, []);

    console.log(toggle);
    
  
    const memoizedHandleClick = useMemo(() => handleClick, [handleClick]);

  return (
    <nav className={`${styles.flexBetween} sticky transition-all duration-500 ease-in h-[72px]`}>
      <section className={`${styles.flexitems}`}>
        {toggle ? <MdOutlineClose onClick = {memoizedHandleClick} size={35} className = 'cursur-pointer lg:hidden mr-2' /> 
        :<CiMenuFries onClick = {memoizedHandleClick} size={30} className = 'cursur-pointer lg:hidden mr-2' /> }
    <h1 className='text-3xl font-bold text-[#00df9a] mr-4'>REACT.</h1>
    {/* <img src="logo.svg" alt="site_logo" /> */}
    <ul className={`xl:flex hidden items-center`}>
        {navlinks.map(navlink => (
          <Link link={navlink.name} to={navlink.link} />
        ))} 
    </ul>
    <Navbarmenu state={toggle} />
      </section>
    <div className={`${styles.flexitems} gap-1`}>
    <CiSearch className='cursor-pointer' size={30} />
    <CiHeart className='cursor-pointer' size={30} />
    <IoPersonCircleSharp className='cursor-pointer' size={30} />
    </div>
    </nav>
  )
}

export default Navbar 