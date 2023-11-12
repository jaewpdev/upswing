"use client";

import { useForm, SubmitHandler } from "react-hook-form";
import { useRouter } from "next/navigation";

import ArrowButton from "@/src/components/ArrowButton";
import Button from "@/src/components/Button";
import Input from "@/src/components/Input";
import { useContactContext } from "@/src/context/contactContext";
import { personalContactFormItems } from "@/src/static/contactFormItems";
import { useEffect } from "react";

type IFormInputs = {
  firstName: string;
  lastName: string;
  email: string;
  phoneNumber: string;
};

export default function PersonalInfoContactForm() {
  const { push } = useRouter();
  const {
    setIsLoading,
    retrieveFormDataFromSessionStorage,
    createAndStoreToken,
  } = useContactContext();

  // const setInitialValues = (): IFormInputs => {
  //   const formData = retrieveFormDataFromSessionStorage();

  //   if (Object.keys(formData).length === 0 && formData.constructor === Object) {
  //     return {
  //       firstName: "",
  //       lastName: "",
  //       email: "",
  //       phoneNumber: "",
  //     };
  //   } else {
  //     return formData.personalInfo;
  //   }
  // };

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IFormInputs>({
    values: retrieveFormDataFromSessionStorage(),
  });

  const onSubmit: SubmitHandler<IFormInputs> = (data) => {
    try {
      setIsLoading(true);

      const formData = retrieveFormDataFromSessionStorage();
      const updatedFormData = {
        ...formData,
        ...data,
      };
      sessionStorage.setItem("formData", JSON.stringify(updatedFormData));

      createAndStoreToken();
      setIsLoading(false);
      push("/contact/business-info");
    } catch (error: any) {
      setIsLoading(false);
      console.error(error.message);
    }
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="grid grid-cols-6 md:grid-cols-12 my-10 gap-6 xl:mx-32"
    >
      {personalContactFormItems.map((props) => (
        <Input key={props.id} {...props} register={register} errors={errors} />
      ))}

      <div className=" flex col-span-6 md:col-span-12 justify-end mt-10">
        <Button buttonType="submit" className="w-full md:w-auto">
          Next
          <ArrowButton
            direction="right"
            size="sm"
            className="ml-2"
            color="white"
          />
        </Button>
      </div>
    </form>
  );
}
