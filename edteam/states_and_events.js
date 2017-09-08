// Componentes Sin estado.
// const Hello = props => {
//     return (
//         // Sintaxis JSX
//         <h1>{props.saludo}</h1>
//     )
// }

// ReactDOM.render(
//     <Hello saludo="Componente sin estado"/>,
//     document.getElementById('app')
// );

// Componente: Con estado
class Hello extends React.Component {
    // constructor recibe las propiedades de la clase que está extendiendo
    constructor(props) {
        super(props)
        this.state = {
            nombre: "Carlos"
        }
    }

    // Evento
    goodbye = () => {
        // alert("ADIÓS!")
        this.setState({
            nombre: 'Eduardo'
        })
    }

    render(){
        return (
            // estamos en una clase, por ende utilizamos this.
            <h1 onClick={this.goodbye}>Hola {this.state.nombre}</h1>
            // <div>
            //     <h1>{this.props.saludo}</h1>
            //     <h1>Hola {this.state.nombre}</h1>
            // </div>
        )
    }
}

// ReactDOM.render(
//     <Hello saludo="Componente con estado"/>,
//     document.getElementById('app')
// );

// Los estados solo existen en la clase,
// Por lo tanto al hacer render ya no se necesita especificar algo
// respecto al estado, sólo para propiedades.
ReactDOM.render(
    // <Hello saludo="Componente con estado"/>,
    <Hello/>,
    document.getElementById('app')
);
