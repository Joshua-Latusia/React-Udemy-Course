import reactImg from './assets/react-core-concepts.png';
import componentsImg from './assets/components.png';
import configImg from './assets/config.png';
import jsxUiImg from './assets/jsx-ui.png';
import stateImg from './assets/state-mgmt.png';

const reactDescriptions = ['Fundamental', 'Crucial', 'Core', 'Learn'];

function getRandomInt(max) {
  return Math.floor(Math.random() * (max + 1));
}

function Header() {
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

function CoreConcepts(props) {
  return (
    <li>
      <img src={props.img} alt="..." />
      <h3>{props.title}</h3>
      <p>{props.description}</p>
    </li>
  );
}

function App() {
  return (
    <div>
      <Header />
      <main>
        <section id="core-concepts">
          <h2>Core Concepts</h2>
          <ul>
          <CoreConcepts title="Components"
                        description="The core UI building block."
                        img={componentsImg} />
          <CoreConcepts title="Config"
                        description="Configuration is key."
                        img={configImg}/>
          <CoreConcepts title="Jsx UI"
                        description="JSX UI is the hot topic of 2023."
                        img={jsxUiImg}/>
          <CoreConcepts title="State MGMT"
                        description="The state of the art is MGMT."
                        img={stateImg}/>
          </ul>
        </section>
      </main>
    </div>
  );
}

export default App;
