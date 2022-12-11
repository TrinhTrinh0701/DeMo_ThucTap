import React from "react";

import { useController } from "react-hook-form";
import PropTypes from "prop-types";

const ContactUsInputHook = (props) => {
  const { control, name, type, placeholder } = props;
  const { field } = useController({
    control,
    name,
    defaultValue: "",
  });
  return (
    <input
      placeholder={placeholder}
      className="p-5 w-[353px] h-[54px] bg-[#F5F5F5] rounded-[39px] font-normal text-base mb-3 mt-3"
      {...field}
      type={type}
    ></input>
  );
};

ContactUsInputHook.propTypes = {
  name: PropTypes.string.isRequired,
  type: PropTypes.string,
  control: PropTypes.any.isRequired,
  placeholder: PropTypes.string,
};

export default ContactUsInputHook;
