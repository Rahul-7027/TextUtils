import './App.css';
import Navbar from './component/Navbar';
import TextForm from './component/TextForm';
import About from './component/About';
import { useState } from 'react';
import Alert from './component/Alert';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

function App() {
  const [mode, setMode] = useState("light")
  const [alert, setAlert] = useState(null)
  const [modeText, setmodeText] = useState("Enable Light Mode")

  const showAlert = (message, type) => {
    setAlert(
      {
        msg: message,
        type: type
      }
    )
    setTimeout(() => {
      setAlert(null)
    }, 1500);
  }

  const toggleMode = () => {
    if (mode === "dark") {
      setMode("light")
      setmodeText("Enable Light Mode")
      document.body.style.backgroundColor = "white";
      showAlert("Light Mode Has Been Enable", "success")
    }
    else {
      setMode('dark')
      setmodeText("Enable Dark Mode")
      document.body.style.backgroundColor = "#042743"
      showAlert("Dark Mode Has Been Enable", "danger")

    }
  }
  return (
    <Router>
      <Navbar title="TextUtils" aboutText="About US" mode={mode} toggleMode={toggleMode} modeText={modeText} />
      <Alert alert={alert} />
      <Switch>

        <Route path="/about">
          <About />
        </Route>

        <Route path="/">
        <TextForm showAlert={showAlert} heading="Enter Your Text Analyze" mode={mode} />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;



