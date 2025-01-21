import { useState } from 'react';
import Banner from './components/Banner/Banner.js';
import Forms from './components/Forms';
import Team from './components/team/index.js';
import Footer from './components/Footer/index.js';

function App() {

  const teams = [
    {
      nome: 'Front-End',
      corPrimaria: '#9102d4',
      corSecundaria: '#f5a7b4'
    },
    {
      nome: 'Back-End',
      corPrimaria: '#57C278',
      corSecundaria: '#09F7E9'
    },
    {
      nome: 'Full-Stack',
      corPrimaria: '#E06B69',
      corSecundaria: '#FDE7E8'
    },
    {
      nome: 'Data Science',
      corPrimaria: '#A6D157',
      corSecundaria: '#F0F8E2'
    },
    {
      nome: 'UX e Design',
      corPrimaria: '#430c67',
      corSecundaria: '#FAE9F5'
    },
    {
      nome: 'Mobile',
      corPrimaria: '#FFBA05',
      corSecundaria: '#FFF5D3'
    },
    {
      nome: 'Inovação e gestão',
      corPrimaria: '#FFBA29',
      corSecundaria: '#FFFEDF'
    }
  ]

  const [devs, setDevs] = useState([]);

  const newDev = (dev) => {
    setDevs([...devs, dev]);
  }

  return (
    <div className="App">
      <Banner />
      <Forms teams={teams.map(team => team.nome)} devCadastrados={dev => newDev(dev)} />
      {teams.map(team => (
      <Team 
        key={team.nome} 
        name={team.nome} 
        corPrimaria={team.corPrimaria} 
        corSecundaria={team.corSecundaria}
        devs={devs.filter(dev => dev.time.trim() === team.nome.trim())} 
      />
    ))}
    <Footer />
    </div>
  );
}

export default App;
