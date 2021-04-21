import React, {Component} from 'react';

class BoundClickCounter extends Component{

    constructor(props){
        super(props);
        this.clickCounter = this.clickCounter.bind(this)
    }

    state = {
        count: 0
    }

    clickCounter(){
        this.setState({
            count: this.state.count + 1,
        })
    }

    render(){
        return(
            <div>
                <p>This is the BoundClickCounter, it is different from the previous click counter, it binds, this
                    to the click counter function
                </p>
                <p>You have clicked BoundCLickCounter {this.state.count} times</p>
                <button onClick={this.clickCounter}>Click Me</button>
            </div>
        )
    }
}

export default BoundClickCounter;