import React from "react";

export default function Login(props) {
  const onSubmit = props.onSubmit;
  return (
    <main className='form-signin w-100 m-auto'>
      <form onSubmit={onSubmit}>
        <h1 className='h3 mb-3 fw-normal'>Please sign in</h1>

        <div className='form-floating item-on-top'>
          <input
            type='email'
            className='form-control'
            id='floatingInput'
            placeholder='name@example.com'
            style={{ width: "330px" }}
          />
          <label htmlFor='floatingInput'>Email address</label>
        </div>

        <div className='form-floating item-on-bottom'>
          <input
            type='password'
            className='form-control'
            id='floatingPassword'
            placeholder='Password'
            style={{ width: "330px" }}
          />
          <label htmlFor='floatingPassword'>Password</label>
        </div>

        <div className='checkbox mb-3'>
          <label>
            <input type='checkbox' value='remember-me' /> Remember me
          </label>
        </div>

        <button className='w-100 btn btn-lg btn-primary' type='submit'>
          Sign in
        </button>

        <p className='mt-5 mb-3 text-muted'>© 2022 deandraper.dev</p>
      </form>
    </main>
  );
}
