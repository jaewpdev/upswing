'use client';

import { useForm, SubmitHandler } from "react-hook-form";
import { useRouter } from "next/navigation";

import ArrowButton from "@/src/components/ArrowButton";
import Button from "@/src/components/Button";
import Input from "@/src/components/Input";
import { useContactContext } from "@/src/context/contactContext";
import { businessContactFormItems } from "@/src/static/contactFormItems";

type IFormInputs = {
  businessName: string;
  industry: string;
  companyRole: string;
  websiteURL?: string;
  businessGoals?: string;
  painPoints?: string;
};

export default function BusinessInfoContactForm() {

  const {push} = useRouter();
  const  { isLoading, setIsLoading, retrieveFormDataFromSessionStorage } = useContactContext();

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

      setIsLoading(false);
      push("/contact/business-marketing-info");
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
      {businessContactFormItems.map((props) => (
        <Input key={props.id} {...props} register={register} errors={errors} />
      ))}

      <div className=" flex col-span-6 md:col-span-12 justify-end mt-10 gap-6">
      <Button onClick={() => push('/contact/personal-info')} variant="outline" disabled={isLoading}>
          <ArrowButton
            direction="left"
            size="sm"
            className="mr-2"
            color="black"
          />
          Back
        </Button>
        <Button buttonType="submit" disabled={isLoading}>
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
