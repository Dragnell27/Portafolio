import './css/index.css';
import './css/indexmax.css';
import './css/indexmin.css';
import {Headers} from './components/header.jsx';
import { Slider } from './components/slider.jsx';
import { About } from './components/about.jsx';
import { Cards, StacksList, Title } from './components/Generic.jsx';


function App() {
  return (
      <>
        <Headers/>
        <Slider/>
        <main className='experience'>
          <About/>
          <Title text={'Tecnologías'} id={'technologies'}></Title>
          <StacksList/>
          <Title text={'Portafolio'} id={'briefcase'}/>
          <Cards/>
        </main>
      </>
  );
}

export default App;