import React, {Component} from 'react';
import './css/Content.css';

class Content extends Component {
    constructor(){
        super();
        // console.log(this.props);
        this.state = {
            count: 0,
            number1: 0,
            number2: 0,
            result: 0
        };
        // pasa el this al contexto de nuestras funciones
        this.handleCountClick = this.handleCountClick.bind(this);
        this.handleResultClick = this.handleResultClick.bind(this);
        this.handleInputChanged = this.handleInputChanged.bind(this);
    }
    // método par comprobar sí el componente ya cargó
    componentDidMount(){
        this.setState({
            count: this.state.count + 1
        })
    };

    handleCountClick(e){
        // console.log(e);
        if (e.target.id === 'add') {
            this.setState({
                count: this.state.count  + 1
            })
        } else if(e.target.id === 'substract' && this.state.count > 0){
            this.setState({
                count: this.state.count - 1
            })
        } else {
            this.setState({
                count: this.state.count = 0
            })
        }
    };

    handleResultClick(e){
        this.setState({
            result: this.state.number1 + this.state.number2
        })
    }

    handleInputChanged(e){
        if (e.target.id === 'number1') {
            console.log(e.target.id);
            this.setState({
                number1: Number(e.target.value)
            });
        }else{
            console.log(e.target.id);

            this.setState({
                number2: Number(e.target.value)
            });
        }
    }

    render(){
        // Cada que el state cambia el render
        // se vuelve a ejecutar
        console.log("Ejecuta render");
        return (
            <div>
                <h2>Counter: {this.state.count}</h2>
                <p>
                    <button id='add' onClick={this.handleCountClick}>+</button>
                    <button id='substract' onClick={this.handleCountClick}>-</button>
                    <button id='reset' onClick={this.handleCountClick}>Reset</button>
                </p>

                <h2>Calculator</h2>
                <p>
                    <input id="number1" type="number" value={this.state.number1} onChange={this.handleInputChanged} />
                    +
                    <input id="number2" type="number" value={this.state.number2} onChange={this.handleInputChanged} />

                    <button id='result' onClick={this.handleResultClick}>=</button>

                    {this.state.result}
                </p>
            </div>
        )
    }
}

export default Content;
