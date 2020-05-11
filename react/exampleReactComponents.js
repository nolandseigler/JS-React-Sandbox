import React from 'react';
import ReactDOM from 'react-dom';

class MyQuoteComponent extends React.Component {
    render() {
        return (
            <blockquote>
                <p>
                    What is important now is to recover our senses.
                </p>
                <cite>
                    <a target="_blank" href="https://en.wikipedia.org/wiki/Susan_Sontag">Susan Sontag</a>
                </cite>
            </blockquote>
        );
    }
}

ReactDOM.render(<MyQuoteComponent/>, document.getElementById('app'));

import React from 'react';
import ReactDOM from 'react-dom';


const owl = {
    title: 'Excellent Owl',
    src: 'https://s3.amazonaws.com/codecademy-content/courses/React/react_photo-owl.jpg'
};

// Component class starts here:
class Owl extends React.Component {
    render() {
        return (
            <div>
                <h1>{owl.title}</h1>
                <img src={owl.src} alt={owl.title} />
            </div>
        );
    }
}

ReactDOM.render(<Owl />, document.getElementById('app'));