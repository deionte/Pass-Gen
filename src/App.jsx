import React, { useState } from "react";
import { FaClipboard } from "react-icons/fa";
import { useForm } from "./useForm";
import {
  getRandomLowercase,
  getRandomNum,
  getRandomSymbol,
  getRandomUppercase,
} from "./utils";
import { toast } from "react-hot-toast";

function App() {
  const [values, setValues] = useForm({
    length: 6,
    uppercase: true,
    lowercase: true,
    numbers: true,
    symbols: true,
  });

  const [result, setResult] = useState("");

  const fieldsArray = [
    {
      field: values.uppercase,
      getChar: () => getRandomUppercase(),
    },

    {
      field: values.lowercase,
      getChar: () => getRandomLowercase(),
    },

    {
      field: values.numbers,
      getChar: () => getRandomNum(),
    },

    {
      field: values.symbols,
      getChar: () => getRandomSymbol(),
    },
  ];

  const handleOnSubmit = (e) => {
    e.preventDefault();
    let generatePassword = "";
    const checkedFields = fieldsArray.filter(({ field }) => field);

    for (let i = 0; i < values.length; i++) {
      const index = Math.floor(Math.random() * checkedFields.length);
      const letter = checkedFields[index]?.getChar();

      if (letter) {
        generatePassword += letter;
      }
    }

    if (generatePassword) {
      setResult(generatePassword);
    } else {
      toast.error("Please select at least one option");
    }
  };

  const handleClipboard = async () => {
    if (result) {
      await navigator.clipboard.writeText(result);
      toast.success("Copied to clipboard");
    } else {
      toast.error("No password to copy");
    }
  };

  return (
    <section>
      <div class="title">
        <img src="/PassGen.png" alt="PassGen Icon" height="175px" />
      </div>
      <div className="container">
        <form id="pg-form" onSubmit={handleOnSubmit}>
          <div className="result">
            <input
              type="text"
              id="result"
              placeholder="Min 6 Characters"
              readOnly
              value={result}
            />
            <div className="clipboard" onClick={handleClipboard}>
              <FaClipboard></FaClipboard>
            </div>
          </div>
          <div>
            <div className="field">
              <label htmlFor="length">Length</label>
              <input
                type="number"
                id="length"
                min={6}
                max={12}
                name="length"
                value={values.length}
                onChange={setValues}
              />
            </div>

            <div className="field">
              <label htmlFor="uppercase">Uppercase Letters</label>
              <input
                type="checkbox"
                id="uppercase"
                name="uppercase"
                checked={values.uppercase}
                onChange={setValues}
              />
            </div>

            <div className="field">
              <label htmlFor="lowercase">Lowercase Letters</label>
              <input
                type="checkbox"
                id="lowercase"
                name="lowercase"
                checked={values.lowercase}
                onChange={setValues}
              />
            </div>

            <div className="field">
              <label htmlFor="numbers">Numbers</label>
              <input
                type="checkbox"
                id="numbers"
                name="numbers"
                checked={values.numbers}
                onChange={setValues}
              />
            </div>

            <div className="field">
              <label htmlFor="symbols">Symbols</label>
              <input
                type="checkbox"
                id="symbols"
                name="symbols"
                checked={values.symbols}
                onChange={setValues}
              />
            </div>
          </div>

          <button type="submit">Generate Password</button>
        </form>
      </div>
    </section>
  );
}

export default App;
