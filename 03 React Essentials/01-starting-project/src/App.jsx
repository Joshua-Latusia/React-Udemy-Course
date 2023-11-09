import { useState } from 'react';

import { CORE_CONCEPTS, EXAMPLES } from './data.js';
import { Header } from './components/Header/Header.jsx';
import { CoreConcepts } from './components/CoreConcepts/CoreConcepts.jsx';
import { TabButton } from './components/TabButton/TabButton.jsx';
import { Examples } from './components/Examples/Examples.jsx';

function App() {
  const [ selectedTopic, setSelectedTopic ] = useState();

  function handleSelect(selectedButton) {
    setSelectedTopic(selectedButton);
    console.log(selectedButton);
  }

  return (
    <div>
      <Header />
      <main>
        <CoreConcepts/>
        <Examples/>
      </main>
    </div>
  );
}

export default App;
