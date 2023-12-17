import Carcard from "../../components/commen/cards/Carcard"
import Sectiontitel from "../../components/commen/Sectiontitel"
import styles from "../../styles/styles"

const Ideal = () => {
  return (
    <>
    <section className="my-3">
    <Sectiontitel title={"Trouvez votre voiture d'occasion idéale"} to={""} link={false} />
    <section className={`${styles.card_grids} gap-4`}>
        <Carcard imgrsc={""} catograyName={"Familiale"} numberofcars={"30 345"} />
        <Carcard imgrsc={""} catograyName={"Familiale"} numberofcars={"30 345"} />
        <Carcard imgrsc={""} catograyName={"Familiale"} numberofcars={"30 345"} />
        <Carcard imgrsc={""} catograyName={"Familiale"} numberofcars={"30 345"} />
    </section>
    </section>
    </>
  )
}

export default Ideal