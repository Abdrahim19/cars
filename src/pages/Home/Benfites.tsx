import Linkwithicon from "../../components/commen/Linkwithicon"
import { AiFillAlert } from "react-icons/ai";


const Benfites = () => {
  return (
    <section className={`md:flex justify-between items-center`}>
        <div className="mb-4 md:mb-0">
          <img src="https://www.lacentrale.fr/static/fragment-landing/media/usp_index.5b88ddd5.png" alt="" />
        </div>
        <div>
            <h2 className="text-2xl mb-4 font-semibold">Notre expertise à votre service</h2>
            <ul className="flex flex-col gap-4 justify-end">
              <Linkwithicon icon={<AiFillAlert />} text={"Une analyse objective des prix"} />
              <Linkwithicon icon={<AiFillAlert />} text={"Une analyse objective des prix"} />
              <Linkwithicon icon={<AiFillAlert />} text={"Une analyse objective des prix"} />
              <Linkwithicon icon={<AiFillAlert />} text={"Une analyse objective des prix"} />
              <Linkwithicon icon={<AiFillAlert />} text={"Une analyse objective des prix"} />

            </ul> 
        </div>
   </section>
  )
}

export default Benfites