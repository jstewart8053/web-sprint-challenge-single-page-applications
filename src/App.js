import React, { useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import './App.css'
import Home from "./Home";
import Order from './Order'
import Nav from "./Nav";
import * as yup from 'yup'
import axios from 'axios'



let schema = yup.object().shape({
    size: yup
      .string()
      .required('Please select a size'),
    sauce: yup
      .string()
      .required('Please select a sauce'),
    toppings: yup
      .string()
      .required('Please enter a password'),
    specialInstructions: yup
      .string()
  });
  
  const formData = {
    size: '',
    sauce: '',
    toppings: {

    },
    specialInstructions: '',
  }
  
  const App = () => {
    const [inputValue, setInputValue] = useState(formData);
    const [pizza, setPizza] = useState([])
    const [formErrors, setFormErrors] = useState([]);
  
  
    const formSubmit = (event) => {
      event.preventDefault();
  
      schema.validate(inputValue)
        .then(valid => {
          setInputValue(inputValue)
          axios.post('https://reqres.in/api/users', { inputValue })
            .then(res => {
              setPizza([...pizza, res.data.inputValue])
              setInputValue(formData)
            })
        })
        .catch(err => {
          console.log(err)
        })
  
  
    }
    const checkboxChange = (name, isChecked) => {
            setInputValue({
          ...inputValue,
          toppings: {
            ...inputValue.toppings,
            [name]: isChecked,
          }
        })
      }
  
    const formChange = (name, value) => {
      yup.reach(schema, name).validate(value)
        .then(msg => {
          setFormErrors({ ...formErrors, [name]: '' })
        })
        .catch(err => {
          setFormErrors({ ...formErrors, [name]: err.errors[0] })
        })
  
  
      setInputValue({
        ...inputValue,
        [name]: value,
      })
      console.log(inputValue)
    }
    return (
      <Router>
        <div className="App">
          <Nav />
  
          <Switch>
            <Route exact path='/'>
              <Home />
            </Route>
            <Route exact path='/pizza'>
              <Order submit={formSubmit} updateInput={formChange}
                errors={formErrors} pizza={pizza}
                value={inputValue} checkboxChange={checkboxChange}
              />
            </Route>
          </Switch>
  
        </div>
      </Router>
    );
  };
  export default App;