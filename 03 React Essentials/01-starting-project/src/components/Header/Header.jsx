import reactImg from './../../assets/components.png';
import './Header.css'

const reactDescriptions = ['Fundamental', 'Crucial', 'Core', 'Learn'];

function getRandomInt(max) {
    return Math.floor(Math.random() * (max + 1));
  }

export function Header() {
    const description = reactDescriptions[getRandomInt(3)];
  
    return (
      <header>
          <img src={reactImg} alt="Stylized atom" />
          <h1>React Essentials</h1>
          <p>
            {description} React concepts you will need for almost any app you are
            going to build!
          </p>
      </header>
    );
  }