import { Link } from "react-router-dom"
import Custom_Input from "../../components/commen/Custem_Input"
import Custom_button from "../../components/commen/Custom_button"
import { useForm } from "react-hook-form";

const Rigister = () => {
  const { register, 
    handleSubmit, 
    watch, 
    formState: { errors } 
   } = useForm();

   const formSubmit = (data:{}) => {
    console.log("Form Submitted: ", data);
  };


  return (
<div className="p-10 bg-white rounded-xl">
    <h1 className="mb-8 font-extrabold text-4xl">Register</h1>
        <form onSubmit={handleSubmit(formSubmit)} className="flex flex-col gap-4">
            <Custom_Input  {...register("email", {
            required: "Email is required",
            pattern: {
              value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
              message: "Invalid email address"
            }
          })}  name={"email"} type={"text"} placeholder="user@example.com" error={errors.password && errors.email?.message} label="Email" />
            <Custom_Input {...register("password", {
            required: "Password is required",
            minLength: {
              value: 8,
              message: "Password must be at least 8 characters"
            }
          })}  name={"password"} type={"password"} placeholder={""} error={errors.password && errors.password.message} label="Password" />
            <Custom_Input {...register("confirmPassword", {
            required: "Please confirm your password",
            validate: (value) =>
              value === watch("password") || "Passwords do not match"
          })} name={"re-password"} type={"password"} placeholder={""} error={errors.password && errors.confirmPassword?.message} label="Confirm Password" />
            <div className="grid grid-cols-1 gap-4 items-center mt-2">
                <Custom_button  type={"submit"} isLoading={false}>
                Register
                </Custom_button>
                <footer className="mt-4">
        <Link to={''} className="text-indigo-700 hover:text-pink-700 text-sm float-left">Forgot Password?</Link>
        <Link to={'/connexion'} className="text-indigo-700 hover:text-pink-700 text-sm float-right">Login</Link>
      </footer> 
            </div>
        </form>
</div>
  )
}

export default Rigister

function useState(arg0: { email: string; password: string; confirmPassword: string; }): [any, any] {
  throw new Error("Function not implemented.");
}
