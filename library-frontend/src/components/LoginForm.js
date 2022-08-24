import { useState } from 'react';
import PropTypes from 'prop-types';
const LoginForm = ({ loginFormSubmit, user, signUpFormSubmit }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [newUser, setNewUser] = useState('');
  const [newName, setNewName] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [displaySignUp, setDisplaySignUp] = useState(false);
  const [warning, setWarning] = useState(null);
  const [accountCreated, setAccountCreated] = useState(null);

  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };
  const handleNewUserChange = (e) => {
    setNewUser(e.target.value);
  };
  const handleNewPasswordChange = (e) => {
    setNewPassword(e.target.value);
  };
  const handleNewNameChange = (e) => {
    setNewName(e.target.value);
  };

  const backToLogin = (e) => {
    e.preventDefault();
    setDisplaySignUp(false);
  };
  const showSignUp = (e) => {
    e.preventDefault();
    setDisplaySignUp(true);
  };

  const signUpClicked = async (e) => {
    e.preventDefault();
    if (newUser.length < 3) {
      setWarning('Username must be atleast 3 characters');
    } else if (newName.length < 3) {
      setWarning('Name must be atleast 3 characters');
    } else if (newPassword.length < 3) {
      setWarning('password must be atleast 3 characters');
    } else {
      await signUpFormSubmit(e, newUser, newName, newPassword);
      setNewUser('');
      setNewPassword('');
      setNewName('');
      setWarning('');
      setAccountCreated('Account has been created, sign in here');
      setDisplaySignUp(false);
      setTimeout(() => {
        setAccountCreated(null);
      }, 10000);
    }
  };

  if (user === null) {
    if (!displaySignUp) {
      return (
        <form className="flex flex-col w-96 gap-6 mt-12 p-8 lg:mt-64 bg-info/40 rounded-3xl mx-auto">
          {accountCreated ? (
            <p className="text-green-400 text-center">{accountCreated}</p>
          ) : null}
          <p className="text-center font-bold text-lg">Sign In</p>
          <label>
            <p className="text-secondary mb-1">UserName:</p>
            <input
              type={'text'}
              name={'username'}
              value={username}
              onChange={handleUsernameChange}
              className="input input-bordered input-info w-full max-w-xs"
            />
          </label>
          <label>
            <p className="text-secondary mb-1">Password:</p>
            <input
              type={'password'}
              name={'password'}
              value={password}
              onChange={handlePasswordChange}
              className="input input-bordered input-info w-full max-w-xs"
            />
          </label>
          <button
            className="btn btn-primary"
            onClick={(e) => loginFormSubmit(e, username, password)}
          >
            Login
          </button>

          <button
            onClick={(e) => showSignUp(e)}
            className="btn btn-sm btn-info hover:btn-warning"
          >
            Create account
          </button>
        </form>
      );
    } else {
      return (
        <form className="flex flex-col w-96 gap-6 mt-12 p-8 lg:mt-64 bg-info/40 rounded-3xl mx-auto">
          <button
            onClick={(e) => backToLogin(e)}
            className="btn w-1/2 hover:btn-primary"
          >
            Back to Login
          </button>
          <p className="text-center font-bold text-lg">Create an account</p>

          <label>
            <p className="text-secondary mb-1">UserName:</p>
            <input
              type={'text'}
              name={'newuser'}
              value={newUser}
              onChange={handleNewUserChange}
              className="input input-bordered input-info w-full max-w-xs"
            />
          </label>
          <label>
            <p className="text-secondary mb-1">Name:</p>
            <input
              type={'text'}
              name={'newname'}
              value={newName}
              onChange={handleNewNameChange}
              className="input input-bordered input-info w-full max-w-xs"
            />
          </label>
          <label>
            <p className="text-secondary mb-1">Password:</p>
            <input
              type={'password'}
              name={'password'}
              value={newPassword}
              onChange={handleNewPasswordChange}
              className="input input-bordered input-info w-full max-w-xs"
            />
          </label>
          {warning ? (
            <p className="text-red-400 text-center">{warning}</p>
          ) : null}
          <button
            onClick={(e) => signUpClicked(e)}
            className="btn  btn-info hover:btn-warning"
          >
            Create account
          </button>
        </form>
      );
    }
  } else {
    setPassword('');
    setUsername('');
  }
};
LoginForm.propTypes = {
  loginFormSubmit: PropTypes.func.isRequired,
};

export default LoginForm;
