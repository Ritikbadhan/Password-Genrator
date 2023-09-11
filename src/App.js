import { Checkbox, Slider, Typography } from "@mui/material";
import "./App.css";
import TextField from "@mui/material/TextField";
import { useEffect, useState } from "react";

function App() {
  const [lenght, setLength] = useState(8);
  const [isNumberChecked, setIsNumberChecked] = useState();
  const [isSymbolsCheked, setIsSymbolChecked] = useState();
  const [password, setPassword] = useState("");

  useEffect(()=>{
    const abc = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const number = "0123456789";
    const symbols = "!@#$%^&*()_-+=<>?";

    let characters = abc;
    if (isNumberChecked) characters += number;
    if (isSymbolsCheked) characters += symbols;

    let newPassword = "";
    for (let i = 0; i < lenght; i++) {
      const randomPassword = Math.floor(Math.random() * characters.length);
      newPassword += characters.charAt(randomPassword);
    }
    setPassword(newPassword);
  },[lenght,isNumberChecked,isSymbolsCheked])


  return (
    <div className="card">
      <Typography fontSize={40} margin={2} fontWeight="bolder">
        Password Generator
      </Typography>
      <div className="input">
        <TextField
          type="text"
          className="textfield"
          placeholder="Password"
          InputProps={{
            readOnly: false,
          }}
          value={password}
        />

      </div>
      <div className="slider">
        <Slider
          aria-label="Temperature"
          defaultValue={8}
          valueLabelDisplay="auto"
          step={2}
          marks
          min={8}
          max={20}
          sx={{ width: 100, m: 1 }}
          value={lenght}
          onChange={(e) => setLength(e.target.value)}
        />{" "}
        Length
        <Checkbox
          checked={isNumberChecked}
          onChange={() => setIsNumberChecked(!isNumberChecked)}
        />
        Number
        <Checkbox
          checked={isSymbolsCheked}
          onChange={() => setIsSymbolChecked(!isSymbolsCheked)}
        />{" "}
        Symbols
      </div>
    </div>
  );
}

export default App;
