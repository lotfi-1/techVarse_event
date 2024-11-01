/** @format */
import { useState } from "react";

interface FormerStateProps {
  action: (data: FormData) => Promise<FormeState>;
  initialState: FormeState;
  onCheck: (data: FormData) => FormeState;
  onSubmit?: () => any;
}

export default function useCustomFormeState({
  action,
  initialState,
  onCheck,
  onSubmit,
}: FormerStateProps) {
  const [state, setState] = useState(initialState);

  const formAction = async (e: any) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const check = onCheck(formData);
    if (check.success) {
      onSubmit && onSubmit();
      if (!check.data) return;
      const response = await action(check.data);
      if (response) {
        setState(response);
      }
    } else {
      setState(check);
    }
  };

  return { formAction, state };
}
