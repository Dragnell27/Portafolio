import './css/index.css';
import './css/indexmax.css';
import './css/indexmin.css';
import { Headers } from './components/header.jsx';
import { Slider } from './components/slider.jsx';
import { About } from './components/about.jsx';
import { Projects, StacksList, Title } from './components/Generic.jsx';
import { Footer } from './components/footer.jsx';


function App() {
  return (
    <>
      <Headers />
      <Slider />
      <main className='experience'>
        <About />
        <Title text={'Proyectos'} id={'briefcase'} />
        <Projects />
        {/* <Title text={'Experiencia'} id={'experience'}></Title> */}
        <Title text={'Tecnologías'} id={'technologies'}></Title>
        <StacksList />
      </main>
        <Footer/>
    </>
  );
}

export default App;