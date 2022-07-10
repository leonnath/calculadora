const { Component } = React

class App extends Component {
    state = { history: '', display: 0 }

    handleButtonClick = event => {
        const key = event.target.innerText

        if ( key != '=')
        this.setState({ history: this.state.history + key })
        else
        this.setState({ display: eval(this.state.history) })
    }

    render() {
        return <div className="App">
            <div className="App__display">{this.state.display}</div>
            <div className="App__ac Button Button--gray" onClick={this.handleButtonClick}>AC</div>
            <div className="App__sign Button Button--gray" onClick={this.handleButtonClick}>+/-</div>
            <div className="App__percent Button Button--gray" onClick={this.handleButtonClick}>%</div>
            <div className="App__div Button Button--orange" onClick={this.handleButtonClick}>/</div>
            <div className="App__seven Button" onClick={this.handleButtonClick}>7</div>
            <div className="App__eight Button" onClick={this.handleButtonClick}>8</div>
            <div className="App__nine Button" onClick={this.handleButtonClick}>9</div>
            <div className="App__mul Button Button--orange" onClick={this.handleButtonClick}>x</div>
            <div className="App__four Button" onClick={this.handleButtonClick}>4</div>
            <div className="App__five Button" onClick={this.handleButtonClick}>5</div>
            <div className="App__six Button" onClick={this.handleButtonClick}>6</div>
            <div className="App__sub Button Button--orange" onClick={this.handleButtonClick}>-</div>
            <div className="App__one Button" onClick={this.handleButtonClick}>1</div>
            <div className="App__two Button" onClick={this.handleButtonClick}>2</div>
            <div className="App__three Button" onClick={this.handleButtonClick}>3</div>
            <div className="App__add Button Button--orange" onClick={this.handleButtonClick}>+</div>
            <div className="App__zero Button" onClick={this.handleButtonClick}>0</div>
            <div className="App__comma Button" onClick={this.handleButtonClick}>,</div>
            <div className="App__equal Button Button--orange" onClick={this.handleButtonClick}>=</div>
            </div>
    }
}