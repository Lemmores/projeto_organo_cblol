import { useState } from 'react';
import Banner from './componentes/Banner/Banner';
import Formulario from './componentes/Formulario'; // Prestar atenção aqui que se eu usar o nome de index.js dentro do componente, o proprio react vai entender quem tem que puxar na pasta.
import Rodape from './componentes/Rodape';
import Time from './componentes/Time';



function App() {

  const times = [
    {
      nome: 'RED CANIDS KALUNGA',
      corPrimaria: '#DC0000',
      corSecundaria: '#FD8A8A'
    },

    {
      nome: 'PAIN GAMING',
      corPrimaria: '#000',
      corSecundaria: '#9D9D9D'
    },

    {
      nome: 'LOS GRANDES',
      corPrimaria: '#DC5F00',
      corSecundaria: '#FEBE8C'
    },

    {
      nome: 'LOUD',
      corPrimaria: '#16FF00',
      corSecundaria: '#CDE990'
    },

    {
      nome: 'LIBERTY',
      corPrimaria: '#31E1F7',
      corSecundaria: '#E3F6FF'
    },

    {
      nome: 'KABUM',
      corPrimaria: '#FC7300',
      corSecundaria: '#FAAB78'
    },

    {
      nome: 'FLUXO',
      corPrimaria: '#301E67',
      corSecundaria: '#D09CFA'
    },

    {
      nome: 'INTZ',
      corPrimaria: '#191825',
      corSecundaria: '#EEEEEE'
    },

    {
      nome: 'FURIA',
      corPrimaria: '#1746A2',
      corSecundaria: '#AAC4FF'
    },

    {
      nome: 'VIVO KEYD STARS',
      corPrimaria: '#AD7BE9',
      corSecundaria: '#ECC5FB'
    },
]

  const [colaboradores, setColaboradores] = useState([])

  const aoNovoColaboradorAdicionado = (colaborador) => {
    setColaboradores([...colaboradores, colaborador])
  }

  return (
    <div className="App">
      <Banner />
      <Formulario times={times.map(time => time.nome)} aoColaboradorCadastrado= {colaborador => aoNovoColaboradorAdicionado(colaborador)} />
      {times.map(time => <Time 
        key={time.nome} 
        nome = {time.nome} 
        corPrimaria = {time.corPrimaria} 
        corSecundaria = {time.corSecundaria}
        colaboradores = {colaboradores.filter(colaborador => colaborador.time === time.nome)}
      />)}
      <Rodape />

    </div>
  );
}

export default App;
