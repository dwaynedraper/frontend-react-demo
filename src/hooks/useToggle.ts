import { useCallback, useState } from "react";

/**
 * useToggle is a custom hook that returns a boolean value and a function to toggle the value.
 * @param initialState The initial state of the boolean value.
 * @returns [boolean, () => void] - The first value is the boolean value, the second value is a function to toggle the boolean value.
 */
export const useToggle = (
  initialState: boolean = false
): [boolean, () => void] => {
  const [state, setState] = useState<boolean>(initialState);

  const toggle = useCallback((): void => setState((state) => !state), []);

  return [state, toggle];
};
