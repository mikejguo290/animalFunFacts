import { animals } from './animals';
import React from 'react';
import ReactDOM from 'react-dom'

const title='';

//can call one JSX element in another by using curly braces. 
const background=<img className="background" alt="ocean" src="/images/ocean.jpg"/>
//this variable controls whether the background is shown using && operator. x && js expression. the RHS of the operator always evaluates to true. overal, depends on truthiness of x. 
const showBackgroun = false;

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
        onClick={displayFact}
        role='button'
        />
        )
  );
}
//function to select a random fact for the clicked on animal.
const displayFact =(e)=>{
    const animal=e.target.alt;
    const chosenAnimal=animals[animal]; // returns an animal object
    const randIndex=Math.floor(Math.random()*chosenAnimal.facts.length);
    const randFact=chosenAnimal.facts[randIndex];
    document.getElementById('fact').innerHTML=randFact;
}
//hold the JSX expression to contain the title;
const animalFacts=(
    <div>
        <h1>{title===''? 'Click an animal for a fun fact.': title }</h1> 
        {showBackground && background}
        <div className="animals">
            {images}
        </div>
        <p id="fact"></p>
    </div>
)


ReactDOM.render(
    animalFacts,
    document.getElementById('root')
);