import { yupResolver } from "@hookform/resolvers/yup";
import React from "react";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import Button from "../Button/Button";
import InputHook from "../Input/InputHook";

const schema = yup
  .object({
    email: yup
      .string()
      .email("Please enter valid email address")
      .required("Please enter your email address"),
  })
  .required();

const InputFormHook = () => {
  const {
    handleSubmit,
    control,
    reset,

    formState: { errors, isValid, isSubmitting },
  } = useForm({ resolver: yupResolver(schema), mode: "onChange" });

  const onSubmitHandler = (values) => {
    if (!isValid) return; // nếu vẫn còn lỗi thì sẽ dừng chương trình ko làm gì cả
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve();
        console.log(values);
        reset({
          email: "",
        });
      }, 2000);
    });
  };
  return (
    <form onSubmit={handleSubmit(onSubmitHandler)} autoComplete="off">
      <div className="w-full mt-9">
        <InputHook
          name="email"
          placeholder="Your Email"
          id="email"
          control={control}
          type="email "
        ></InputHook>
        <Button
          className={`w-[175px] ml-2 ${isSubmitting ? "opacity-50" : ""}`}
          disabled={isSubmitting}
        >
          {isSubmitting ? (
            <div className="w-5 h-5 mx-auto border-2 border-t-2 border-white rounded-full border-t-transparent animate-spin"></div>
          ) : (
            "Subscribe"
          )}
        </Button>
        {errors.email && (
          <p className="p-3 text-sm text-red-500">{errors.email.message}</p>
        )}
      </div>
    </form>
  );
};

export default InputFormHook;
