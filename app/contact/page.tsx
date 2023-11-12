'use client';

import { useEffect } from "react";
import { redirect } from "next/navigation";
import { useFormState } from "react-dom";
import Button from "../../src/components/Button";
import Input from "../../src/components/Input";
import {
  IContactFormItem,
  personalContactFormItems,
  businessContactFormItems,
  businessMarketingContactFormItems,
} from "../../src/static/contactFormItems";
import Select from "../../src/components/Select";
import { submitPersonalInfo, submitBusinessInfo } from "../../src/api/contacts-api";
import ArrowButton from "../../src/components/ArrowButton";


export default function Contact({
  params,
}: {
  params: {
    slug: "personal-info" | "business-info" | "business-marketing-info";
  };
}) {
  const { slug } = params;

  useEffect(() => {
    if (
      slug !== "personal-info" &&
      slug !== "business-info" &&
      slug !== "business-marketing-info"
    ) {
      redirect("/contact/personal-info");
    }
  }, [slug]);

  const formMap = {
    "personal-info": personalContactFormItems,
    "business-info": businessContactFormItems,
    "business-marketing-info": businessMarketingContactFormItems,
  };

  const initialState = {
    currentForm: formMap[slug],
    message: null,
  };

  const [state, formAction] = useFormState(submitPersonalInfo, initialState);

  return (
    <div className="container mx-auto">
      <div className="gray-rounded-section">
        <form action={formAction} className="flex flex-col">
          <h2 className="mb-10">We&apos;re super stoked to hear from you!</h2>
          <div className="grid grid-cols-6 md:grid-cols-12 my-10 gap-6 xl:mx-32">
            {/* {state.currentForm.map((item: IContactFormItem) => {
              const { type, id } = item;
              return type === "select" ? (
                <Select key={id} {...item} />
              ) : (
                <Input key={id} {...item} />
              );
            })} */}
          </div>
          <input
            type="text"
            name="faxNumber"
            className="absolute left-[-5000px]"
            aria-hidden="true"
            tabIndex={-1}
          />
          <div className="flex gap-4 justify-between md:ml-auto mt-10">
            <Button variant="outline">
              <ArrowButton direction="left" size="sm" className="mr-2" /> Prev
            </Button>
            <Button buttonType="submit">
              Next{" "}
              <ArrowButton
                direction="right"
                size="sm"
                className="ml-2"
                color="white"
              />{" "}
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
}

// function PersonalInfoForm() {

//   return (
//     <form action={formAction} className="grid grid-cols-6 md:grid-cols-12 my-10 gap-6 xl:mx-32">
//       {personalContactFormItems.map((item) => {
//         const { type, id } = item;
//         // return type === "select" ? (
//         //   <Select key={id} {...item} />
//         // ) : (
//         //   <Input key={id} {...item} />
//         // );
//         return type !== "select" && <Input key={id} {...item} />;
//       })}
//     </form>
//   );
// }
