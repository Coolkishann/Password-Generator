import React, { useState } from 'react';

function App() {
  const [length, setLength] = useState(12);
  const [useNumbers, setUseNumbers] = useState(true);
  const [useSymbols, setUseSymbols] = useState(true);
  const [useUppercase, setUseUppercase] = useState(true);
  const [useLowercase, setUseLowercase] = useState(true);
  const [password, setPassword] = useState('');

  const generatePassword = () => {
    const numbers = '0123456789';
    const symbols = '!@#$%^&*()_+-=[]{}|;:,.<>?';
    const uppercaseLetters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const lowercaseLetters = 'abcdefghijklmnopqrstuvwxyz';
    let charset = '';
    if (useNumbers) charset += numbers;
    if (useSymbols) charset += symbols;
    if (useUppercase) charset += uppercaseLetters;
    if (useLowercase) charset += lowercaseLetters;

    if (charset === '') {
      setPassword('Please select at least one option to generate a password.');
      return;
    }

    let newPassword = '';
    for (let i = 0; i < length; i++) {
      const randomIndex = Math.floor(Math.random() * charset.length);
      newPassword += charset.charAt(randomIndex);
    }

    setPassword(newPassword);
  };

  const handleCheckboxChange = (e) => {
    const { name, checked } = e.target;
    switch (name) {
      case 'useNumbers':
        setUseNumbers(checked);
        break;
      case 'useSymbols':
        setUseSymbols(checked);
        break;
      case 'useUppercase':
        setUseUppercase(checked);
        break;
      case 'useLowercase':
        setUseLowercase(checked);
        break;
      default:
        break;
    }
  };

  return (
    <div>
      <div className="head">
      <h2 className='title'>--- Password Generator Tool ---</h2>
      <p className='subtitle'>Instantly generate a secure, random password with the LastPass online tool</p>
      </div>
      <div className="main">
      <div className='m1'>
      <button onClick={generatePassword} className='button'>Generate Password</button>
        <div className='genpass'>{password}</div>
        <div className="copybtn">
          
        </div>
        {/* <strong>Password:</strong> */}
      </div>
      <div className="m2">
      <div>
        <h1>Customization for password</h1>
        <label>
          Password Length:
          <input type="number" value={length} onChange={(e) => setLength(e.target.value)} />
        </label>
      </div>
      <div>
        <label>
          Include Numbers:
          <input type="checkbox" name="useNumbers" checked={useNumbers} onChange={handleCheckboxChange} />
        </label>
      </div>
      <div>
        <label>
          Include Symbols:
          <input type="checkbox" name="useSymbols" checked={useSymbols} onChange={handleCheckboxChange} />
        </label>
      </div>
      <div>
        <label>
          Include Uppercase:
          <input type="checkbox" name="useUppercase" checked={useUppercase} onChange={handleCheckboxChange} />
        </label>
      </div>
      <div>
        <label>
          Include Lowercase:
          <input type="checkbox" name="useLowercase" checked={useLowercase} onChange={handleCheckboxChange} />
        </label>
      </div>
      </div>

      </div>
    </div>
  );
}

export default App;
