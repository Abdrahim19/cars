import Custom_button from "../../components/commen/Custom_button"

const Seel = () => {
  return (
    <div className="text-center">
      <h1 className="max-w-2xl mb-3">Obtenez une offre de rachat express par un professionnel</h1>
      <Custom_button type={"submit"} isLoading={false}>
      Faire racheter mon véhicule
      </Custom_button>
      <div className="my-3 flex items-center px-3">
        <hr className="w-full border-slate-600" />
        <span className="mx-3 text-slate-500">or</span>
        <hr className="w-full border-slate-600" />
      </div>
      <h1 className="max-w-2xl mb-3">Déposez une annonce sur La Centrale</h1>
      <Custom_button type={"submit"} isLoading={false}>
      Déposer mon annonce
      </Custom_button>
    </div>
  )
}

export default Seel