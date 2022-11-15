import React from "react";
import "./SignUp.css";
import "../login.css";
import { useFormState } from "../../hooks/useFormState";
import TextInput from "../../components/TextInput";
import { createUser, selectUser } from "./authSlice";
import { useAppDispatch, useAppSelector } from "../../app/hooks";

export default function SignUp() {
  const [state, handleChange] = useFormState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const dispatch = useAppDispatch();
  const user = useAppSelector(selectUser);

  const handleSubmit = (e: any) => {
    e.preventDefault();
    if (state.password === state.confirmPassword) {
      console.log(state);
      dispatch(createUser(state));
    } else {
      alert("Passwords do not match");
    }
  };

  return (
    <main className='form-signin w-100 m-auto'>
      <form>
        <h1 className='h3 mb-3 fw-normal'>Sign Up</h1>
        <p>Please fill out this form to create an account!</p>

        <TextInput
          label='First Name'
          name='firstName'
          value={state.firstName}
          handleChange={handleChange}
        />

        <TextInput
          label='Last Name'
          name='lastName'
          value={state.lastName}
          handleChange={handleChange}
        />

        <TextInput
          label='Email'
          name='email'
          value={state.email}
          handleChange={handleChange}
        />

        <TextInput
          label='Password'
          name='password'
          value={state.password}
          handleChange={handleChange}
        />

        <TextInput
          label='Confirm Password'
          name='confirmPassword'
          value={state.confirmPassword}
          handleChange={handleChange}
        />

        <button
          className='w-100 btn btn-lg btn-primary'
          type='button'
          onClick={handleSubmit}
        >
          Join now
        </button>

        <p className='mt-5 mb-3 text-muted'>© 2022 deandraper.dev</p>
      </form>
    </main>
  );
}
