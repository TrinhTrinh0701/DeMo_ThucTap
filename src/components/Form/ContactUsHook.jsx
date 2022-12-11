import { yupResolver } from "@hookform/resolvers/yup";
import React from "react";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import Button from "../Button/Button";
import InputHook from "../Input/InputHook";
import Textarea from "../Textarea/Textarea";

const schema = yup
  .object({
    name: yup.string().required("Please enter your name"),
    email: yup
      .string()
      .email("Please enter valid email address")
      .required("Please enter your email address"),
    message: yup.string().required("Please enter your message"),
  })
  .required();

const ContactUsHook = () => {
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
          name: "",
          email: "",
          message: "",
        });
      }, 2000);
    });
  };
  return (
    <form onSubmit={handleSubmit(onSubmitHandler)} autoComplete="off">
      <div className="w-full h-full text-center">
        <h3 className="text-xl font-bold h-[28px] mb-10">Contact Us</h3>
        <InputHook
          name="name"
          placeholder="Your Name"
          id="name"
          control={control}
          type="text"
          className="w-[353px] mb-3 mt-3"
        ></InputHook>
        {errors.name && (
          <p className="text-sm text-red-500">{errors.name.message}</p>
        )}
        <InputHook
          name="email"
          placeholder="Your Email"
          id="email"
          control={control}
          type="email"
          className="w-[353px] mb-3 mt-3"
        ></InputHook>
        {errors.email && (
          <p className="text-sm text-red-500 ">{errors.email.message}</p>
        )}
        <Textarea
          name="message"
          placeholder="Your Message"
          id="message"
          control={control}
          type="text"
        ></Textarea>
        {errors.message && (
          <p className="text-sm text-red-500 ">{errors.message.message}</p>
        )}
        <div className="flex">
          <div className=" flex h-[130px] ">
            <Button
              className={`w-[145px] font-normal mt-3 ${
                isSubmitting ? "opacity-50" : ""
              }`}
              disabled={isSubmitting}
            >
              {isSubmitting ? (
                <div className="w-5 h-5 mx-auto border-2 border-t-2 border-white rounded-full border-t-transparent animate-spin"></div>
              ) : (
                "Send"
              )}
            </Button>
          </div>
        </div>
      </div>
    </form>
  );
};

export default ContactUsHook;
