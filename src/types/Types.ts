export type vehicleTypes = {
    list:string[]
    selected: string;
    onselected: (selected: string) => void;
}

type Features_type = {
Origin ?:string
Release ?:number
First_hand ?:boolean
Number_of_owners?:number,
Odometer_reading?: string,
Color?: string,
Number_of_places ?: number
}

export type Cartype = {
carImges:string,
carModel:string
carName:string,
carPrice:number,
year: number,
owner_phone?:string,
livraison?:boolean,
garantie:string,
boonaffaire?:boolean,
Energie:string
Boite_de_vitesse:string,
IsCredit:boolean,
Credit:string
Kilométrage:string
}