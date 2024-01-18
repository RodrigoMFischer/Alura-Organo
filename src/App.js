import { useState } from 'react';
import './App.css';
import Banner from './componentes/Banner/banner';
import Form from './componentes/Form/Index';
import Time from './componentes/Time';
import Rodape from './componentes/Rodape';
import Card from './componentes/Card';

function App() {

  const times = [
    {
      nome: 'Programação',
      corPrimaria: '#57c278',
      corSecundaria: '#D9F7E9'
    },
    {
      nome: 'Front-End',
      corPrimaria: '#82cffa',
      corSecundaria: '#E8F8FF'
    },
    {
      nome: 'Data Science',
      corPrimaria: '#a6d157',
      corSecundaria: '#F0F8E2'
    },
    {
      nome: 'Devops',
      corPrimaria: '#E06b69',
      corSecundaria: '#FDE7E8'
    },
    {
      nome: 'UX e Design',
      corPrimaria: '#db6ebf',
      corSecundaria: '#FAE9F5'
    },
    {
      nome: 'Mobile',
      corPrimaria: '#ffba05',
      corSecundaria: '#FFF5D9'
    },
    {
      nome: 'Inovação e Gestão',
      corPrimaria: '#ff8a29',
      corSecundaria: '#FFEEDF'
    }    
  ]

  const [colaboradores, setColaboradores] = useState([])

  const cadastroNovoColaborador = (colaborador) => {
    //console.log(colaborador)
    setColaboradores([...colaboradores, colaborador])
    console.log(colaboradores)
  }

  return (
    //<Card name={'Nome do Fluxo'} description={'Descrição da atividade'} teams={'Equipes Responsaveis'}/>
    
    <div className="App">
      <Banner />
      <Form times={times.map(time => time.nome)} aoCadastrar={colaborador => cadastroNovoColaborador(colaborador)}/>

      {times.map( time => <Time  
        key={time.nome} 
        nome={time.nome} 
        corPrimaria={time.corPrimaria} 
        corSecundaria={time.corSecundaria}
        colaboradores={colaboradores.filter( colaborador => colaborador.time === time.nome)}        
      />)}
      <Rodape />

    </div>
  );
}

export default App;
