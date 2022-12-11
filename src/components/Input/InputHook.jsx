import React from "react";
import { useController } from "react-hook-form";
import PropTypes from "prop-types";

const InputHook = (props) => {
  const { control, name, type, placeholder, className = "" } = props;
  const { field } = useController({
    control,
    name,
    defaultValue: "",
  });

  return (
    <input
      placeholder={placeholder}
      type={type}
      className={` bg-[#F4F4F4] h-[54px] rounded-[39px] font-normal text-base p-5 ${className}`}
      {...field}
    ></input>
  );
};

InputHook.propTypes = {
  name: PropTypes.string.isRequired,
  type: PropTypes.string,
  control: PropTypes.any.isRequired,
  placeholder: PropTypes.string,
};

export default InputHook;
