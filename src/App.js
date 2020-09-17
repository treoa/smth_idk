import React, {useState } from 'react';
import axios from 'axios'
import './App.css';

function App () {
  const [image, setImage] = useState("")

  const handleChange = () => {
    axios.get('https://api.generated.photos/api/v1/faces?api_key=0sT83f_ZLkNEK3xjz-Ik8A&gender=female&hair_length=long').then(res => {
      const url = res.data.faces[0].urls[4][512];
      url && setImage(url);
    }).catch(err => {
      console.log(err.message);
    })
  }

  return (
    <div className='App'>
      <h1>Treo's AI Photo Generator</h1>
      <p>This AI will generate for you random long haired female person</p>
      {image && <img src={image} alt="Generated Face" />}
      <button type='button' onClick={handleChange}>
        Generate another
      </button>
    </div>
  )
}

export default App;
