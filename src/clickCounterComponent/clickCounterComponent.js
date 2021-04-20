import React, {Component} from 'react';


class clickCounterComponent extends Component{
    state ={
        count: 0
    }

    clickCount(){
        this.setState({
            count: this.state.count + 1,
        })

        // this.state.count +=1;

        

        console.log("clickCount, this.state.count:", this.state.count);
    };


    render(){
        return (
            <div>
                <p>This Button is the click counter in Component Form, Click It!</p>
                <p>This button has been click {this.state.count} times</p>
                <button onClick={this.clickCount}>Click Me!</button>
            </div>
        );
    }
}

export default clickCounterComponent;