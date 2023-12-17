import SectionTitle from "../../components/commen/Sectiontitel"
import MarqsCard from "../../components/commen/cards/MarqsCard"

const Marques = () => {
  return (
    <section className="my-6 ">
    <SectionTitle title={"Les modèles les plus demandés "} link={true} to="hamza"/>
    <section className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-6 gap-4`}>
    <MarqsCard markIcon={"/audi_test.svg"} marqName={"audi"} />
    <MarqsCard markIcon={"/audi_test.svg"} marqName={"audi"} />
    <MarqsCard markIcon={"/audi_test.svg"} marqName={"audi"} />
    <MarqsCard markIcon={"/audi_test.svg"} marqName={"audi"} />
    <MarqsCard markIcon={"/audi_test.svg"} marqName={"audi"} />

    </section>
    </section>
  )
}

export default Marques