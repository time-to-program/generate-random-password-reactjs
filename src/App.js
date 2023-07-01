import React, { useState } from "react";

function App() {
  const [options, setOptions] = useState({
    length: 10,
    uppercase: false,
    lowercase: false,
    number: false,
    symbols: false,
    isError: false,
  });

  const [isError, setIsError] = useState(false);
  const [generatedPassword, setGeneratedPassword] = useState("");

  const generateRandomPassword = () => {
    if (
      !options?.uppercase &&
      !options?.lowercase &&
      !options?.number &&
      !options?.symbols
    ) {
      setIsError(true);
      return;
    }

    setIsError(false);

    const uppercaseChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const lowercaseChars = "abcdefghijklmnopqrstuvwxyz";
    const numberChars = "0123456789";
    const symbolChars = '!@#$%^&*()_+-={}[]|:;"<>,.?/~';

    let passwordChars = "";
    let password = "";

    if (options.uppercase) {
      passwordChars += uppercaseChars;
    }

    if (options.lowercase) {
      passwordChars += lowercaseChars;
    }

    if (options.number) {
      passwordChars += numberChars;
    }

    if (options.symbols) {
      passwordChars += symbolChars;
    }

    const passwordLength = options.length;

    for (let i = 0; i < passwordLength; i++) {
      const randomIndex = Math.floor(Math.random() * passwordChars.length);
      password += passwordChars[randomIndex];
    }

    setGeneratedPassword(password);
  };

  return (
    <div className="container">
      <div className="card">
        <div className="card-header">
          <p className="title">Generate Random Password</p>
        </div>

        <div className="card-body">
          <label>Password length</label>
          <input
            value={options.length}
            onChange={({ target }) => {
              setOptions({ ...options, length: target.value });
            }}
            name="confirmPassword"
            type="number"
            placeholder="Password length"
            min={4}
          />

          <div className="row">
            <div className="checkbox-container">
              <input
                type="checkbox"
                name="languages"
                checked={options.uppercase}
                onChange={() => {
                  setOptions({ ...options, uppercase: !options.uppercase });
                }}
              />
              <label>Uppercase</label>
            </div>
            <div className="checkbox-container">
              <input
                type="checkbox"
                name="languages"
                checked={options.lowercase}
                onChange={() => {
                  setOptions({ ...options, lowercase: !options.lowercase });
                }}
              />
              <label>Lowercase</label>
            </div>
          </div>

          <div className="row">
            <div className="checkbox-container">
              <input
                type="checkbox"
                name="languages"
                checked={options.number}
                onChange={() => {
                  setOptions({ ...options, number: !options.number });
                }}
              />
              <label>Number</label>
            </div>

            <div className="checkbox-container">
              <input
                type="checkbox"
                name="languages"
                checked={options.symbols}
                onChange={() => {
                  setOptions({ ...options, symbols: !options.symbols });
                }}
              />
              <label>Symbols</label>
            </div>
          </div>

          {isError && (
            <span className="error">Please selete atleast one option</span>
          )}

          <button className="btn" onClick={generateRandomPassword}>
            Generate Password
          </button>
        </div>
      </div>

      {generatedPassword && (
        <div className="password">
          <label>Generated Password:</label>
          <p>{generatedPassword}</p>
        </div>
      )}
    </div>
  );
}

export default App;
