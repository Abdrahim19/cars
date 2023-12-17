import SectionTitle from "../../../components/commen/Sectiontitel"
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Carinfo from "../../../components/commen/cards/Carinfo";

const Hilightcars = () => {
    const responsive = {
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 4,
          slidesToSlide: 4 // optional, default to 1.
        },
        tablet: {
          breakpoint: { max: 1024, min: 768 },
          items: 4,
          slidesToSlide: 2 // optional, default to 1.
        },
        mobile: {
          breakpoint: { max: 767, min: 464 },
          items: 2,
          slidesToSlide: 1 // optional, default to 1.
        }
      };
  return (
    <section className="my-6 ">
    <SectionTitle title={"Notre sélection de véhicules d’occasion"} link={true} to="hamza"/>
    <Carousel 
   infinite={true}
   autoPlay={true}
   autoPlaySpeed={4000}
    responsive={responsive}
    removeArrowOnDeviceType={["tablet", "mobile","desktop"]}>
    <Carinfo carImges={"https://image-annonce.lacentrale.fr/352x264/W102834170_STANDARD_0.jpg?version=1701789650"}
     carModel={"2.0 35 150 DESIGN "} carName={"AUDI A4 V "} carPrice={2017} year={2009} garantie={""} Energie={"Diesel"}
     Boite_de_vitesse={"Automatique"} IsCredit={false} Credit={"300"} Kilométrage={"81 613 km"} />
         <Carinfo carImges={"https://image-annonce.lacentrale.fr/352x264/W102834170_STANDARD_0.jpg?version=1701789650"}
     carModel={"2.0 35 150 DESIGN "} carName={"AUDI A4 V "} carPrice={2017} year={2009} garantie={""} Energie={"Diesel"}
     Boite_de_vitesse={"Automatique"} IsCredit={false} Credit={"300"} Kilométrage={"81 613 km"} />
         <Carinfo carImges={"https://image-annonce.lacentrale.fr/352x264/W102834170_STANDARD_0.jpg?version=1701789650"}
     carModel={"2.0 35 150 DESIGN "} carName={"AUDI A4 V "} carPrice={2017} year={2009} garantie={""} Energie={"Diesel"}
     Boite_de_vitesse={"Automatique"} IsCredit={false} Credit={"300"} Kilométrage={"81 613 km"} />
         <Carinfo carImges={"https://image-annonce.lacentrale.fr/352x264/W102834170_STANDARD_0.jpg?version=1701789650"}
     carModel={"2.0 35 150 DESIGN "} carName={"AUDI A4 V "} carPrice={2017} year={2009} garantie={""} Energie={"Diesel"}
     Boite_de_vitesse={"Automatique"} IsCredit={false} Credit={"300"} Kilométrage={"81 613 km"} />
         <Carinfo carImges={"https://image-annonce.lacentrale.fr/352x264/W102834170_STANDARD_0.jpg?version=1701789650"}
     carModel={"2.0 35 150 DESIGN "} carName={"AUDI A4 V "} carPrice={2017} year={2009} garantie={""} Energie={"Diesel"}
     Boite_de_vitesse={"Automatique"} IsCredit={false} Credit={"300"} Kilométrage={"81 613 km"} />
    </Carousel>
    </section>
  )
}

export default Hilightcars