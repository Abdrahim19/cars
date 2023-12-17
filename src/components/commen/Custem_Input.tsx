import React, { ChangeEvent } from "react";
import { FieldError, FieldErrorsImpl, Merge, RegisterOptions, UseFormRegisterReturn } from "react-hook-form";
import { MdErrorOutline } from "react-icons/md";

type InputProps = {
  name: string;
  type: 'text' | 'password';
  label?: string;
  value?: string | number;
  placeholder: string;
  error?: string | FieldError | Merge<FieldError, FieldErrorsImpl<any>> | undefined;
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
  styles?: string;
  register?: (rules?: RegisterOptions) => UseFormRegisterReturn;
};

const Custom_Input: React.FC<InputProps> = (props) => {
  return ( 
    <div >
    <div className="relative bg-inherit">
        <input    required
          value={props.value}
          type={props.type}
          id={props.name}
          {...props.register}
          name={props.name}  className={`${props.error && '!border-red-500'} peer bg-transparent h-10 w-72 rounded-lg placeholder-transparent ring-2 px-2 ring-gray-500 focus:ring-sky-600 focus:outline-none focus:border-rose-600`}
          placeholder="Type inside me"/><label htmlFor="username" className="absolute cursor-text left-0 -top-3 bg-white text-sm text-gray-500 bg-inherit mx-1 px-1 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-500 peer-placeholder-shown:top-2 peer-focus:-top-3 peer-focus:text-sky-600 peer-focus:text-sm transition-all">{props.label}</label>
    </div>
    {props.error && props.error && (
        <span className={`${props.error === "success" ? "text-[#2e69ff]" : "text-red-500"} font-medium flex items-center gap-2 tracking-wide text-sm mt-2 ml-1`}>
          <MdErrorOutline color={'#ff5555'} size={30} />
          {props.error as string}
        </span>
      )}
</div>
  );
};

export default Custom_Input;