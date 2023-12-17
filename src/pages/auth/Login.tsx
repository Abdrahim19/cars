import { Link } from "react-router-dom"
import Custom_Input from "../../components/commen/Custem_Input"
import Custom_button from "../../components/commen/Custom_button"

const Login = () => {
  return (

<div className="p-10 bg-white rounded-xl">
    <h1 className="mb-8 font-extrabold text-4xl">Logi in</h1>
        <form className="flex flex-col gap-4">
            <Custom_Input name={"email"} type={"text"} placeholder={""} error={""} label="Email" />
            <Custom_Input name={""} type={"password"} placeholder={""} error={""} label="Password" />
            <div className="grid grid-cols-1 mt-2">
                <Custom_button type={"submit"} isLoading={false}>
                Register
                </Custom_button>
                <footer className="mt-4">
        <Link to={''} className="text-indigo-700 hover:text-pink-700 text-sm float-left" >Forgot Password?</Link>
        <Link to={'rigster'} className="text-indigo-700 hover:text-pink-700 text-sm float-right" >Create Account</Link>
      </footer> 
            </div>
        </form>
</div>
  )
}

export default Login