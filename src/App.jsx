import './css/index.css';
import './css/indexmax.css';
import './css/indexmin.css';
import { Headers } from './components/header.jsx';
import { Slider } from './components/slider.jsx';
import { About } from './components/about.jsx';
import { Experience, Projects, StacksList, Title } from './components/Generic.jsx';
import { Footer } from './components/footer.jsx';


function App() {
  return (
    <>
      <Headers />
      <Slider />
      <main className='main'>
        <About />
        <Title text={'Experiencia'} id={'experience'}></Title>
        <Experience/>
        <Title text={'Proyectos'} id={'briefcase'} />
        <Projects />
        <Title text={'Tecnologías'} id={'technologies'}></Title>
        <StacksList />
      </main>
        <Footer/>
    </>
  );
}

export default App;