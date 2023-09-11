import React, { useState } from 'react';

const PasswordGenerator = () => {
  const [length, setLength] = useState(8); // Default password length
  const [includeDigits, setIncludeDigits] = useState(true);
  const [includeSymbols, setIncludeSymbols] = useState(true);
  const [password, setPassword] = useState('');

  const generatePassword = () => {
    const charset = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const digits = '0123456789';
    const symbols = '!@#$%^&*()_-+=<>?';

    let characters = charset;
    if (includeDigits) characters += digits;
    if (includeSymbols) characters += symbols;

    let newPassword = '';
    for (let i = 0; i < length; i++) {
      const randomIndex = Math.floor(Math.random() * characters.length);
      newPassword += characters.charAt(randomIndex);
    }
    setPassword(newPassword);
  };

  return (
    <div>
      <h1>Password Generator</h1>
      <div>
        <label>Password Length:</label>
        <input
          type="number"
          value={length}
          onChange={(e) => setLength(e.target.value)}
        />
      </div>
      <div>
        <label>
          <input
            type="checkbox"
            checked={includeDigits}
            onChange={() => setIncludeDigits(!includeDigits)}
          />
          Include Digits
        </label>
      </div>
      <div>
        <label>
          <input
            type="checkbox"
            checked={includeSymbols}
            onChange={() => setIncludeSymbols(!includeSymbols)}
          />
          Include Symbols
        </label>
      </div>
      <button onClick={generatePassword}>Generate Password</button>
      <div>
        <label>Generated Password:</label>
        <input type="text" value={password} readOnly />
      </div>
    </div>
  );
};

export default PasswordGenerator;
