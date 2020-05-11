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

import React from 'react';
import ReactDOM from 'react-dom';


const friends = [
    {
        title: "Yummmmmmm",
        src: "https://s3.amazonaws.com/codecademy-content/courses/React/react_photo-monkeyweirdo.jpg"
    },
    {
        title: "Hey Guys!  Wait Up!",
        src: "https://s3.amazonaws.com/codecademy-content/courses/React/react_photo-earnestfrog.jpg"
    },
    {
        title: "Yikes",
        src: "https://s3.amazonaws.com/codecademy-content/courses/React/react_photo-alpaca.jpg"
    }
];

// New component class starts here:
class Friend extends React.Component {
    render() {
        const friend = friends[0];
        return (
            <div>
                <h1>{friend.title}</h1>
                <img src={friend.src} />
            </div>
        );
    }
}

ReactDOM.render(<Friend />, document.getElementById('app'));


import React from 'react';
import ReactDOM from 'react-dom';

class TodaysPlan extends React.Component {
    render() {
        let task;
        if (!apocalypse) {
            task = 'learn React.js'
        } else {
            task = 'run around'
        }
        return <h1>Today I am going to {task}!</h1>;
    }
}

ReactDOM.render(
    <TodaysPlan />,
    document.getElementById('app')
);
