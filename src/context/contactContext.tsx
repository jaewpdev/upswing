"use client";

import React, { createContext, useContext, useState, ReactNode } from "react";

const retrieveFormDataFromSessionStorage = () => {
  if (typeof window !== "undefined") {
    const existingFormData = sessionStorage.getItem("formData");
    const formData = existingFormData ? JSON.parse(existingFormData) : {};
    return formData;
  }
  // Return a default value if not in the browser environment
  return {};
};

const createAndStoreToken = () => {
  if (!sessionStorage.getItem("token")) {
    const array = new Uint8Array(16);
    window.crypto.getRandomValues(array);
    const token = Array.from(array, (byte) =>
      byte.toString(16).padStart(2, "0")
    ).join("");

    sessionStorage.setItem("token", token);
  }

  return sessionStorage.getItem("token");
};

type ContactContextType = {
  isLoading: boolean;
  setIsLoading: (isLoading: boolean) => void;
  retrieveFormDataFromSessionStorage: any;
  createAndStoreToken: any;
};

const ContactContext = createContext<ContactContextType>({
  isLoading: false,
  setIsLoading: () => {},
  retrieveFormDataFromSessionStorage,
  createAndStoreToken
});

export const ContactProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [isLoading, setIsLoading] = useState(false);

  return (
    <ContactContext.Provider
      value={{ isLoading, setIsLoading, retrieveFormDataFromSessionStorage, createAndStoreToken }}
    >
      {children}
    </ContactContext.Provider>
  );
};

export const useContactContext = (): ContactContextType => {
  const context = useContext(ContactContext);
  if (context === undefined) {
    throw new Error("useContactContext must be used within a ContactProvider");
  }
  return context;
};
