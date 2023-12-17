import Select from "react-select/base";
import { vehicleDate } from "../../context/vehicleContext";
import { styles } from "../../styles/styles"
import Custom_button from "../../components/commen/Custom_button";

const Bay = () => {
    const { list, selected, onselected } = vehicleDate();
    const options = [
      { value: "blues", label: "Blues" },
      { value: "rock", label: "Rock" },
      { value: "jazz", label: "Jazz" },
      { value: "orchestra", label: "Orchestra" },
    ];

    console.log(list);
    console.log(selected);
    
    
  return (
    <>
    <ul className={`${styles.flexCenter} gap-4`}>
    {list.map(item => (
      <li key={item} onClick={() => onselected(item)} className={`${styles.hover_Link}
      ${selected === item ? 'after:scale-x-100' : ''} `}>{item}</li>
      ))}
  </ul>
  <div className={`${styles.responsiv_flexBetween}`}>
  <Select
  placeholder='Marques'
    isMulti
    name="colors"
    options={options}
  />
  <Select
  placeholder='modele'
    isMulti
    name="colors"
    options={options}
  />
  </div>
  <div className={`${styles.responsiv_flexBetween}`}>
  <Select
  placeholder='Prix'
    isMulti
    name="colors"
    options={options}
  />
  <Select
  placeholder='categorie'
    isMulti
    name="colors"
    options={options}
  />

</div>
{selected === 'Utilitaires' && <div className={`${styles.responsiv_flexBetween}`}>
  <Select
  placeholder='Enirgie'
    isMulti
    name="colors"
    options={options}
  />
  <Select
  placeholder='localisation'
    isMulti
    name="colors"
    options={options}
  />

</div>}
<Custom_button type={"submit"} isLoading={false}>
  Rechercher (17 675)
</Custom_button>
      </>
  )
}

export default Bay