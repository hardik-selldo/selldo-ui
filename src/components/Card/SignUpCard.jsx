import React from 'react'

const AuthForm = () => (
  <div className='wrapper auth-form-wrapper'>
    <div className="logo-container"></div>

    <p>Sign in to your account</p>

    <form>
      <div className='form-group required' id='email'>
        <div className='needs-validation'>
          <input
            name='email'
            id='input-email'
            type='text'
            step='1'
            placeholder='Email'
            className='form-control'
            autoComplete='off'
          />
        </div>
      </div>

      <div className='form-group required my-3' id='password'>
        <div className='needs-validation password-container'>
          <input
            name='password'
            id='input-password'
            type='password'
            step='1'
            placeholder='Password'
            className='form-control form-control--password'
            autoComplete='off'
          />
          <i className='password-icon fas fa-eye'></i>
        </div>
      </div>

      <a href='#' className='link'>Forgot Password?</a>

      <button
        type='submit'
        className='btn btn-md w-100 mb-3 mt-auto btn-primary my-3'
        id='loginBtn'
        label='loginBtn'
        intlid='L10N_BTN_NEXT'
      >
        Sign In
      </button>
    </form>
  </div>
)


const Promotion = () => (
  <div className='wrapper promotional-wrapper'>
    <div data-bs-interval='3000' className='carousel slide' data-bs-ride="carousel">
      <div className='carousel-inner'>
        <div className='carousel-item active'>
          <img alt='promotion' draggable='false' className='d-block w-100' src='https://dummyimage.com/524x524'/>
        </div>
        <div className='carousel-item'>
          <img alt='promotion' draggable='false' className='d-block w-100' src='https://dummyimage.com/524x524'/>
        </div>
        <div className='carousel-item'>
          <img alt='promotion' draggable='false' className='d-block w-100' src='https://dummyimage.com/524x524'/>
        </div>
      </div>
    </div>
  </div>
)

export default function SignUpCard() {
  return (
    <div className='signup-card' >
      <AuthForm />
      <Promotion />
    </div>
  )
}
