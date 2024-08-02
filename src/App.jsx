import './css/index.css';
import './css/indexmax.css';
import './css/indexmin.css';
import { Headers } from './components/header.jsx';
import { Slider } from './components/slider.jsx';
import { About } from './components/about.jsx';
import { Cards, StacksList, Title } from './components/Generic.jsx';


function App() {
  const infoCard = [
    {
      img: 'proyectos/innovatechcol.png',
      description: 'Plataforma web para la venta de productos tecnológicos con implementación de carrito de compras',
      technologies: ['Laravel', 'MySQL', 'Bootstrap', 'JavaScript', 'JQuery'],
      git: 'https://github.com/Dragnell27/InnovaTech-web',
      url: 'https://innovatechcol.com.co/'
    },
    {
      img: 'proyectos/MiChat.png',
      description: 'Aplicación de chat en tiempo real que utiliza Socket.IO para mensajería instantánea. Incluye inicio de sesión seguro con prevención de sesiones duplicadas.',
      technologies: ['Socket.io', 'MySQL', 'PHP', 'JavaScript', 'Node'],
      git: 'https://github.com/Dragnell27/MiChat',
      url: 'https://michat-production-a5c7.up.railway.app/'
    },
  ]
  return (
    <>
      <Headers />
      <Slider />
      <main className='experience'>
        <About />
        <Title text={'Tecnologías'} id={'technologies'}></Title>
        <StacksList />
        <Title text={'Portafolio'} id={'briefcase'} />
        <div className='container_card'>
          {
            infoCard.map((card, i) => (
              <Cards key={i} img={card.img} description={card.description} technologies={card.technologies} git={card.git} url={card.url} />
            ))
          }
        </div>
      </main>
    </>
  );
}

export default App;