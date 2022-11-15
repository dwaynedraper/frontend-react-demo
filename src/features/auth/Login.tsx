import React from "react";
import TextInput from "../../components/TextInput";
import { useFormState } from "../../hooks/useFormState";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { login, selectUser } from "./authSlice";

export default function Login() {
  const [state, handleChange] = useFormState({
    email: "",
    password: "",
  });
  const user = useAppSelector(selectUser);
  const dispatch = useAppDispatch();

  const handleSubmit = (e: any) => {
    console.log(state);
    if (state.email === user?.email && state.password === user?.password) {
      console.log("success");
      dispatch(login());
    }
  };

  return (
    <main className='form-signin w-100 m-auto'>
      <form>
        <h1 className='h3 mb-3 fw-normal'>Please sign in</h1>

        <TextInput
          name='email'
          label='Email address'
          value={state.email}
          placeholder="name@example.com"
          handleChange={handleChange}
        />

        <TextInput
          name='password'
          label='Password'
          value={state.password}
          placeholder="Password"
          handleChange={handleChange}
        />

        <div className='checkbox mb-3'>
          <label>
            <input type='checkbox' value='remember-me' /> Remember me
          </label>
        </div>

        <button className='w-100 btn btn-lg btn-primary' type="button" onClick={handleSubmit}>
          Sign in
        </button>

        <p className='mt-5 mb-3 text-muted'>© 2022 deandraper.dev</p>
      </form>
    </main>
  );
}
