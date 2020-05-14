import React from 'react';
import ReactDOM from 'react-dom';

const green = '#39D1B4';
const yellow = '#FFD712';

class Toggle extends React.Component {

    constructor(props) {
        super(props);
        this.state = { color: green };
        //when you write a component class method that uses this you need to bind it
        this.changeColor = this.changeColor.bind(this);
    }

    changeColor() {
        this.setState({
            color: this.state.color == green ? yellow : green
        });
    }


    render() {
        return (
            <div style={{ background: this.state.color }}>
                <h1>
                    Change my color
                </h1>
                <button onClick={this.changeColor}>
                    Change color
                </button>
            </div>
        );
    }
}

ReactDOM.render(<Toggle />, document.getElementById('app'));