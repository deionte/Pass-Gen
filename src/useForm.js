import { useState } from "react";

export function useForm(initialValue) {
  const [values, setValues] = useState(initialValue);
  return [
    values,
    (e) => {
      console.log(e.target.type);
      setValues({
        ...values,
        [e.target.name]:
          e.target.type === "checkbox" ? e.target.checked : e.target.value,
      });
    },
  ];
}
