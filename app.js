import { animals } from './animals';
import React from 'react';
import ReactDOM from 'react-dom'

const title='';

//can call one JSX element in another by using curly braces. 
const background=<img className="background" alt="ocean" src="/images/ocean.jpg"/>
//hold the JSX expression to contain the title;
const animalFacts=(
    <div>
        <h1>{title===''? 'Click an animal for a fun fact.': title }</h1> 
        {background} 
    </div>
)

ReactDOM.render(
    animalFacts,
    document.getElementById('root')
);