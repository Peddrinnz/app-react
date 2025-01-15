import { useState } from 'react';
import Banner from './components/Banner/Banner.js';
import Forms from './components/Forms';

function App() {
  const [devs, setDevs] = useState([]);

  const newDev = (dev) => {
    console.log(dev);
    setDevs([...devs, dev]);
  }

  return (
    <div className="App">
      <Banner />
      <Forms devCadastrados={dev => newDev(dev)}/>
    </div>
  );
}

export default App;
