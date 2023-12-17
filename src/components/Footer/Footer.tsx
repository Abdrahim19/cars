import { Link } from "react-router-dom";
import List from "../commen/List";
import styles from "../../styles/styles";

const Footer = () => {
  return (
    <footer className={`${styles.footer_grid} mx-auto`}>
      <List
        array={[
          'Qui sommes nous ?',
          'Nos offres demploi', 
          'Pub La Centrale ®',
          'Devenir annonceur pub',
          'Devenir partenaire pro'
        ]}
        titel={"A propos de la Centrale"}
      />
      <List
        array={[
          'Services',
          'Conseils',
          'Annuaire des professionnels'
        ]}
        titel={"Nos services"}
      />
      <List
        array={[
          'Rechercher et consulter les annonces',
          'Déposer et gérer mes annonces',
          'Contacter un vendeur',
          'Gérer mon compte'
        ]}
        titel={"FAQ"}
      />
      <List
        array={[
          'Conditions générales',
          'Mentions légales',
          'Information sur le classement',
          'Charte cookies',
          'Politique de confidentialité',
          'Charte rédactionnelle'
        ]}
        titel={"Informations légales"}
      />
      <List
        array={[
          'Caradisiac',
          'Caradisiac Forum Auto',
          'Promoneuve'
        ]}
        titel={"Sites du groupe"}
      />
        <div className="w-full px-4">
        <h2 className="mb-3 text-sm font-medium tracking-widest text-gray-900 uppercase title-font">Télécharger l'application</h2>
        <Link to={""}>
        <img src="/appli-android.png" alt="appli-android." className="mt-3" />
        </Link>
        <Link to={""}>
        <img src="/appli-ios.png" alt="appli-ios" className="mt-3" />
        </Link>
        </div>

    </footer>
  );
};

export default Footer;