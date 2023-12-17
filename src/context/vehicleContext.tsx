import { createContext, ReactNode, useContext, useState } from "react";
import { vehicleTypes } from "../types/Types";

const vehicleContext = createContext<vehicleTypes | null>({
  list:['Voitures','Utilitaires','Motos'],
  selected:'Voitures',
  onselected:() => {},
});

export const vehicleContextProvider = ({ children }: { children: ReactNode }) => {
  const list = ['Voitures','Utilitaires','Motos'];
  const [selected, setselected] = useState(list[0])
const onselected = (selected:string) => {
  setselected(() => selected)
}
  return (
    <vehicleContext.Provider value={{list , selected , onselected}}>
      {children}
    </vehicleContext.Provider>
  );
};

export const vehicleDate = () => {
  const context = useContext<vehicleTypes | null>(vehicleContext);
  if (!context) {
    throw new Error('vehicleDate must be used inside the AuthContextProvider');
  }
  return context;
};