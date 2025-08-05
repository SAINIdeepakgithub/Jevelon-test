import * as React from "react";
import {
  FormProvider,
  useFormContext,
  useFormState,
} from "react-hook-form";

const Form = FormProvider;

type FormFieldContextValue = {
  name: string;
};

const FormFieldContext = React.createContext<FormFieldContextValue>(
  {} as FormFieldContextValue,
);

const useFormField = () => {
  const fieldContext = React.useContext(FormFieldContext);
  const { getFieldState } = useFormContext();
  const formState = useFormState({ name: fieldContext.name });
  const fieldState = getFieldState(fieldContext.name, formState);

  if (!fieldContext) {
    throw new Error("useFormField should be used within <FormField>");
  }

  return {
    name: fieldContext.name,
    ...fieldState,
  };
};

export { useFormField, Form, FormFieldContext, type FormFieldContextValue }; 