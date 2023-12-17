import styles from "../../styles/styles"
import { Dispatch, SetStateAction } from "react"
import Bay from "./Bay"
import Seel from "./Seel"
import Heroimg from "./Heroimg"

const Hero = ({data,
  selected,
  setselected}:{data:string[]  ,  selected:string , setselected: Dispatch<SetStateAction<string>>}) => {
  return (
    <section className={`${styles.grid_two_cols} w-full gap-[72px] px-8 pt-8 pb-4 rounded-[32px] my-5 bg-[#f6f6f9]`}>
        <div className="p-5 rounded-[21px] bg-white">
        <div className={`rounded-[2.0625rem] bg-[#f6f6f9] mb-2 grid grid-cols-2 p-1 ${styles.flexBetween}`}>
            {data.map((item) => (
          <p
            onClick={() => setselected(item)}
            className={`${selected == item ?"bg-white duration-1000 ease-in-out" :''} text-[#5057f4] py-1 px-14 
            rounded-[2.0625rem] text-base not-italic font-normal text-center cursor-pointer leading-[normal] ${styles.flexCenter}`}
          >
            {item}
          </p>

            ))}
        </div>
        {selected === 'Acheter' ? <Bay  /> : <Seel />}
        </div>
        <div>
            <h1 className="text-2xl mb-3 ">Nous sélectionnons les meilleures voitures d'occasion pour vous.</h1>
            <Heroimg />
        </div>
    </section>
  )
}

export default Hero