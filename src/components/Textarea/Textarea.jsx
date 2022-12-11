import React from "react";
import { useController } from "react-hook-form";
import PropTypes from "prop-types";

const Textarea = (props) => {
  const { control, name, placeholder, type } = props;
  const { field } = useController({
    control,
    name,
    defaultValue: "",
  });
  return (
    <textarea
      type={type}
      placeholder={placeholder}
      className="p-6 w-[353px] h-[193px] bg-[#F5F5F5] order-3  font-normal text-[16px] mb-3 mt-3 "
      {...field}
    ></textarea>
  );
};
Textarea.propTypes = {
  name: PropTypes.string.isRequired,
  type: PropTypes.string,
  control: PropTypes.any.isRequired,
  placeholder: PropTypes.string,
};
export default Textarea;
