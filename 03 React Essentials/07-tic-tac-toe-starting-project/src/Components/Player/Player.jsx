import { useState } from "react";

export function Player({name, symbol}) {
const [isEditing, setIsEditing ] = useState(false);

function handleClick() {  
    setIsEditing((isEditing) => !isEditing);  
    console.log("IsEditing was: Changed");
}

let playerName =  <span className='player-name'>{name}</span>;
//let btnCaption = 'edit';

if(isEditing) {
  playerName =  <input type="text" requierd value={name}></input>
  //btnCaption = 'save'
}

    return (
        <li>
            <span className="player">
              {playerName}
              <span className="player-symbol">{symbol}</span>
            </span>
            <button onClick={handleClick}>
              {isEditing ? 'Save':'Edit'}
            </button>
          </li>
    );
}