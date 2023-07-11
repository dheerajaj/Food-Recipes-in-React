import React, { useState } from 'react';
import './Form.css';

const LoginForm = ({ onLogin }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleUsername = (event) => {
    setUsername(event.target.value);
  };

  const handlePassword = (event) => {
    setPassword(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (username === 'Sinchan' && password === '123') {
      onLogin(username);
      setErrorMessage('');
    } else {
      setErrorMessage('Incorrect username or password');
    }
  };

  return (
    
    <div className='dooo'>
    <div  className='form'>
      <div className="login-form-container">
      <img className='namelogo' src='https://lh3.googleusercontent.com/pw/AIL4fc-fBLEabI3GMmNpL8B-PMOE-Qtg84gxhyjl33Ykx-P_ac6TGLHoCECgXn2ABNJIFvtadoZ-BgMRavEM_3S3CNNsTx3yVra88yvuoXZWC4ZZUFwjFX93slZhvq4eZt5e5jzMh6oNTHdCKIVPW0iHzWW6P1JNAfDG3NHwxdmhTz6eUhgjnrGvHuBhDvI62uMmh6KWLWprcH7iIrfCWv6e7yhqsIt5Nkxfi66tuHPPIP-FCMYqVnTrPgkLQjr18TyNSzNaT4mZrZwfbt3SuRiqCT6DTcfo30Ffvl78uoKAwlDU_q-SgFZ0tARU37kxxdKSBjujS1LV0kimaYsMhETkaLNTI2FmQgimEiBb7sQP6_ZYxpXTBC0eOQfxWCAjdzjU2Mo9oaSa9zDh70dUMN1VzbW0GBTmmXYBzLyhUqmMYFCTy8KBCICx6MAAtoLOBFnMTcbG4TWwoX7B_VNpug-UmgIa8FNxfkJW_JkJJlXp1T6uoPFCiS5cZKIR7la0-qVhPKXC6aRjaA0raNiNkpF5rY7d3ra6Kxzz4qAHsU-RsK9SCU4UmHZ3qdriKo4sPOELzh_8XI1tixR695k21aqwWnu062uFhCR3MeZyUKoZ5ouAZwmO9RGh0SWyFXaAof0BdkjjOI9wyIBIsmLZ8O5B8lbLrwNwluK-JkK8mv3O0BM9dKBGUPoNdqvzxgBWTUBzZGGU6Fzbb5huCazrjXZJZ8aSjVo2M01xoFv0BdoxWys8-tUHv23TxXaZveH8Z2rE0gcbCFLOiwxBj1LtxqfKKAkY5hfjQb_i0jYS28H2NNMU8LaDRRDFhb1RGN36xcKB5AyocBo4ZOYGEjLEgSPiet-5i6jGkDvuwsQvNKtrXBU4pAC3abI7mxssnGOij9ZhYpvkNY5PfbQTJmgNX6aqUaU7JZZErCHcOG4LudfRdbJe4cbNk3bsCEoepulb7g=w500-h189-s-no?authuser=0' alt=''></img>
        
        <br></br><br></br><br></br>
        <h2 className='log'>Login</h2><br></br>
        <form onSubmit={handleSubmit}>

          <div>
            <input
              className="form-input"
              placeholder="Username"
              type="text"
              value={username}
              onChange={handleUsername}
            />
          </div>
          <div>
            <input
              className="form-input"
              placeholder="Password"
              type="password"
              value={password}
              onChange={handlePassword}
            />
          </div>
          <br />
          <button className="form-button" type="submit">Login</button>
          {errorMessage && <p className="error-message">{errorMessage}</p>}
        </form>
      </div>
    </div>
    </div>
  );
};

export default LoginForm;
