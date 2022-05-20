import { useState } from "react";
import axios from 'axios';

function App() {

  const [petData, setPetData] = useState({});

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setPetData(values => ({...values, [name]: value}));
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(petData);

    axios.post('http://localhost:8888/t2_assessment_one_api/addPet', petData)
    .then(function(res) {
      console.log(res);
    })
    .catch(function(err) {
      console.log(err);
    })
  }

  return (
    <div className="App">
        <div className="formCon">

          <h1>Expawts: Pet Relocation</h1>
          <p>Sign up below and we will send you a quote!</p>

          <form>
            <input name="pet_name" placeholder="Name of Pet" onChange={handleChange}/>

            <select name="pet_species" onChange={handleChange} >
              <option defaultValue disabled hidden> Species of Pet </option>
              <option>Canine</option>
              <option>Feline</option>
              <option>Equine</option>
              <option>Rodent</option>
              <option>Avian</option>
              <option>Reptile</option>
            </select>

            <select name="pet_sex" onChange={handleChange}>
              <option defaultValue disabled hidden > Gender/Sex of Pet </option>
              <option>Male</option>
              <option>Female</option>
            </select>

            <input name="pet_age" placeholder="Age of Pet (years) " onChange={handleChange}/>
            <input name="pet_micro_id" type="number" placeholder="Pet MicroChip Id" onChange={handleChange}/>
            <input name="owner_name" placeholder="Pet Owner Name" onChange={handleChange}/>
            <input name="owner_id" type="number" placeholder="Pet Owner ID Number" onChange={handleChange}/>
            <input name="origin" placeholder="Export Origin" onChange={handleChange}/>
            <input name="destination" placeholder="Export Destination" onChange={handleChange}/>

            <button onClick={handleSubmit} type="submit" >Lets Export That Pet!</button>

          </form>

        </div>
    </div>
  );
}

export default App;
