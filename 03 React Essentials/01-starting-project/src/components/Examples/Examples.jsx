import { useState } from 'react';
import { EXAMPLES } from "../../data";
import { TabButton } from '../TabButton/TabButton';
import { Section } from '../Section/Section';

export function Examples() {
    const [ selectedTopic, setSelectedTopic ] = useState();

    function handleSelect(selectedButton) {
        setSelectedTopic(selectedButton);
        console.log(selectedButton);
    }

    return (
        <Section id="examples"
                 title="Examples">
          <menu>
            <TabButton  isSelected={selectedTopic === 'components'} 
                        onClick={() => handleSelect('components')}>Components</TabButton>
            <TabButton  isSelected={selectedTopic === 'jsx'}
                        onClick={() => handleSelect('jsx')}>JSX</TabButton>
            <TabButton  isSelected={selectedTopic === 'props'}
                        onClick={() => handleSelect('props')}>Props</TabButton>
            <TabButton  isSelected={selectedTopic === 'state'} 
                        onClick={() => handleSelect('state')}>State</TabButton>
          </menu>
          {!selectedTopic ? <p>Please select a topic.</p> : null}
          {selectedTopic ? (
            <div id="tab-content">
              <h3>{EXAMPLES[selectedTopic].title}</h3>
              <p>{EXAMPLES[selectedTopic].description}</p>
              <pre>
                <code>
                {EXAMPLES[selectedTopic].code}
                </code>
              </pre>
            </div>
          ) : null}
        </Section>
    );
}