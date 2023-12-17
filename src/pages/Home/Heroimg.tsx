import { Suspense } from "react";
import { vehicleDate } from "../../context/vehicleContext";
import Loding from "../../components/loding/Loding";

const Heroimg = () => {
  const { selected } = vehicleDate();
  let chosenImg = 'carheroimg.png';
  switch (selected) {
      case 'Utilitaires':
        chosenImg = 'ForgoneHeroimg.png';
        break;
        case 'Motos':
        chosenImg = 'moterheroimg.png';
        break;
    case 'Voitures':
        chosenImg = 'carheroimg.png';
      break;
    default:
      break;
  }

  return (
    <Suspense fallback={<Loding />}>
      <img src={`/heroimages/${chosenImg}`} alt="hero" />
    </Suspense>
  );
}

export default Heroimg;