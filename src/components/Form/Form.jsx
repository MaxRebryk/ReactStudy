import { useId } from 'react';

export default function Form({ onLogin }) {
  const loginId = useId();
  const passwordId = useId();
  const handleSubmit = event => {
    event.preventDefault();
    const form = event.target;
    const { login, password } = form.elements;
    if (login.value == '' || password.value == '') {
      alert('Please write in form');
    } else {
      onLogin({
        login: login.value,
        password: password.value,
      });

      form.reset();
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor={loginId}>Login</label>
      <input type="text" name="login" id={loginId} />
      <label htmlFor={passwordId}>Password</label>
      <input type="password" name="password" id={passwordId} />
      <button type="submit">Login</button>
    </form>
  );
}
