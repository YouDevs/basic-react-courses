class Counter extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            count: 0
        }
    }

    upCount = (e) => {
        e.preventDefault();
        this.setState(function(preveState){
            return {
                count: preveState.count + 1
            }
        })
    }

    downCount = (e) => {
        e.preventDefault();
        this.setState(function(preveState){
            if (preveState.count >= 1) {
                return {
                    count: preveState.count - 1
                }
            }
        })
    }

    resetCount = (e) => {
        e.preventDefault();
        this.setState({count:0});
    }

    render(){
        return (
            <div className="counter">
                <div className="count">{this.state.count}</div>
                <div>
                    <a href="#" onClick={this.upCount} className="">Up</a>
                    <a href="#" onClick={this.downCount} className="">Down</a>
                    <a href="#" onClick={this.resetCount} className="">Reset</a>
                </div>
            </div>
        )
    }
}


ReactDOM.render(<Counter/>, document.getElementById('app'));
