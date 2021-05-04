import { animals } from './animals';
import React from 'react';
import ReactDOM from 'react-dom'

const title='';

//can call one JSX element in another by using curly braces. 
const background=<img className="background" alt="ocean" src="/images/ocean.jpg"/>

// for each animal in animals imported above, add a new <img /> to that array. 
const images = [];
// pseudocode is - for key in obj
for (let animal in animals){
  images.push( 
      (<img 
        key={animal}
        className='animal'
        alt={animal}
        src={animals[animal].image}
        aria-label={animal}
        role='button'
        />
        )
  );
}

//hold the JSX expression to contain the title;
const animalFacts=(
    <div>
        <h1>{title===''? 'Click an animal for a fun fact.': title }</h1> 
        {background}
        <div className="animals">
            {images}
        </div>
    </div>
)

ReactDOM.render(
    animalFacts,
    document.getElementById('root')
);