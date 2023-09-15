import { useState } from 'react';
import './App.css'


function Alkometri() {
  const [Weight, setWeight] = useState("")
  const [Bottles, setBottles] = useState("")
  const [Result, setResult] = useState(0)
  const [Time, setTime] = useState("")
  const [gender, setGender] = useState("")
  const litres = Bottles * 0.33;
  const grams = litres * 8 * 4.5;
  //const burning = Weight / 10
  //const gramsleft = grams - (burning * Time)

  const handleSubmit = (e) => {  
    e.preventDefault()
    let alcohol = 0;
    if (gender === 'male'){
      alcohol = grams / (Weight * 0.7)
    } 
    else {
      alcohol = grams / (Weight * 0.6)
    }            
    setResult(alcohol)      
}
  return (
<form onSubmit={handleSubmit}>  
  <div id="box"><h3>Amount of alcohol in blood</h3>
  <div>
    <label>Weight</label>  
    <input name='weight' type='number' value={Weight} onChange={e => setWeight(e.target.value)}/>
  </div>
  <div>
    <label>Bottles</label>
    <select id='bottles' value={Bottles} required onChange={e => setBottles(e.target.value)}>
        <option value="0">0</option>
        <option value="1">1</option>
        <option value="2">2</option>
        <option value="3">3</option>
        <option value="4">4</option>
    </select>
  </div>
  <div>
      <label>Time</label>
      <select id='time' value={Time} onChange={e => setTime(e.target.value)}>
        <option value="0">0</option>
        <option value="1">1</option>
        <option value="2">2</option>
        <option value="3">3</option>
        <option value="4">4</option>
        <option value="5">5</option>
        <option value="6">6</option>
        <option value="7">7</option>
        <option value="8">8</option>
        <option value="9">9</option>
      </select>
  </div>
    <label>Gender</label>
    <input type='radio' required value="Male" name='gender' onChange={e => setGender(e.target.value)}/><label>Male</label>
    <input type='radio' required value="Female" name='gender' onChange={e => setGender(e.target.value)}/><label>Female</label>
  <div/>
  <div>
    <label>Result</label>
    <output>{Result.toFixed(2)}</output>
  </div>
  <div>
    <button>Calculate</button>
  </div>
  </div>
</form>
  );
}
export default Alkometri;
