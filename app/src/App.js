import './App.css';
import React from "react";
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import { makeStyles } from '@material-ui/core/styles';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";

const axios = require('axios'); //for autocomplete

const instance = axios.create({
  baseURL: 'http://localhost:3001/',
  // timeout: 1000,
  headers: {
    'Access-Control-Allow-Headers': 'Content-Type',
    'Content-Type': 'application/json'}
});

function App() {

  // try {
    // const [data, setData] = React.useState("");
    const [username, setName] = React.useState("");
    const [email, setEmail] = React.useState("");
    const [password, setPassword] = React.useState("");
    const [emailLogin, setEmailLogin] = React.useState("");
    const [passwordLogin, setPasswordLogin] = React.useState("");

    // Sanity check
    // React.useEffect(() => {
    //   instance.get("/api")
    //     .then((res) => {
    //       console.log(res);
    //       setData(res.data.message)});

    // }, []);
    // const classes = useStyle(); 
    const classes = makeStyles(theme => ({
      formBtn: {
        margin: theme.spacing(1),
      },
      formBox: {
        padding: 6.25,
        display:'flex',
        border: '1px dashed grey',
        position: 'absolute',
        left: '50%',
        top: '50%',
        transform: 'translate(-50%, -50%)',
        flexDirection: 'column',
        width: '400px',
        overflow: auto,
      },
    }));

    function onRegister() {
      console.log("POSTING INFO");
      instance.post("/register", { email, username, password })
        .then(response => {
          console.log(response);
        });
    }
    
    function onLogin() {
      console.log("LOGGING IN");
      instance.post("/login", { emailLogin, passwordLogin })
        .then(response => {
          console.log(response);
        });
    }
    
    function Register() {
      return (
        <Box className={`${classes.formBox}`}>
          <TextField
            required
            label="Name"
            variant="standard"
            value={username}
            onChange={(event) => setName(event.target.value)}
          />
          <br/>
          <TextField
            required
            label="Email"
            variant="standard"
            onChange={(event) => setEmail(event.target.value)}
          />
          <br/>
          <TextField
            label="Password"
            type="password"
            variant="standard"
            autoComplete="current-password"
            onChange={(event) => setPassword(event.target.value)}
          />
          <br/>
          <Button variant="outlined" onClick={onRegister} className={`${classes.formBtn}`}>Register</Button>
          <Button component={Link} to="/login" color="primary" variant="outlined" className={`${classes.formBtn}`}>Login Instead</Button>
        </Box>
      );
    }
    
    function Login(){
      return (
        <Box className="formBox">
          <TextField
            required
            label="Email"
            variant="standard"
            onChange={(event) => setEmailLogin(event.target.value)}
          />
          <br/>
          <TextField
            label="Password"
            type="password"
            variant="standard"
            autoComplete="current-password"
            onChange={(event) => setPasswordLogin(event.target.value)}
          />
          <br/>
          <Button variant="outlined" onClick={onLogin} className={`${classes.formBtn}`}>Login</Button>
          <Button component={Link} to="/register" color="primary" variant="outlined" className={`${classes.formBtn}`}>Register Instead</Button>
        </Box>
      );
    }
    
    return (
      <Router>
        <div>
          <Routes>
            <Route exact path="/register" element={<Register/>}/>
            <Route exact path="/login" element={<Login/>}/>
            <Route exact path="/" element={<Register/>}/>
          </Routes>
        </div>
      </Router>
    );
  // }
  // catch (err) {
  //   console.log(err);
  // }
}

export default App;
