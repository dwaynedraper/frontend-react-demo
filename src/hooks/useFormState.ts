import { useState } from "react";

/**
 * useformState captures the state of a controlled component and updates the state.
 * @param initialState An object that represents the initial state of the form.
 * @returns [object, (event: React.ChangeEvent<HTMLInputElement>) => void] - The first value is the state of the form, the second value is a function to update the state of the form.
 */
export function useFormState(initialState: any): [any, (event: any) => void] {
  const [state, setState] = useState<any>(initialState);

  const handleChange = (event: any) => {
    const { name, value } = event.target;
    setState({ ...state, [name]: value });
  };

  return [state, handleChange];
}
