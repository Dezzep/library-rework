import { useState } from 'react';
import PropTypes from 'prop-types';
const LoginForm = ({ loginFormSubmit, user }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  if (user === null) {
    return (
      <form className='flex flex-col w-96 gap-6 mt-64 p-6 bg-info/40 rounded-3xl mx-auto'
        
      >
        <label>
          <p className='text-secondary mb-1'>UserName:</p>
          <input
            type={'text'}
            name={'username'}
            value={username}
            onChange={handleUsernameChange}
            className='input input-bordered input-info w-full max-w-xs'
          />
        </label>
        <label>
          <p className='text-secondary mb-1'>Password:</p>
          <input
            type={'password'}
            name={'password'}
            value={password}
            onChange={handlePasswordChange}
            className='input input-bordered input-info w-full max-w-xs'
          />
        </label>
        <button className='btn btn-primary' onClick={(e) => loginFormSubmit(e, username, password)}>
          Login
        </button>
      </form>
    );
  } else {
    setPassword('');
    setUsername('');
  }
};
LoginForm.propTypes = {
  loginFormSubmit: PropTypes.func.isRequired,
};

export default LoginForm;
