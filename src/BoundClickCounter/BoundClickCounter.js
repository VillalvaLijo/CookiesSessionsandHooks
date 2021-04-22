import React, {Component} from 'react';
import axios from 'axios';

class BoundClickCounter extends Component{

    constructor(props){
        super(props);
        this.clickCounter = this.clickCounter.bind(this)
    }

    state = {
        count: 0
    }

    componentDidUpdate(prevstate){

        // console.log("inside componentDidUpdate, this.state", this.state);
        if (prevstate != this.state){
            this.postClick()
        };
    }

    clickCounter(){
        this.setState({
            count: this.state.count + 1,
        })

    // this.postClick()
    }

    postClick(){
        // console.log("Inside postClick, thi.state.count", this.state.count);
        axios({
            method: 'post',
            url: '/api/clickCounter/thirdCounter',
            data: {
              thirdbuttonclicks: this.state.count
            }
          });
    }


    render(){
        return(
            <div>
                <p>This is the BoundClickCounter, it is different from the previous click counter, it binds, this
                    to the click counter function
                </p>
                <p>You have clicked BoundClickCounter {this.state.count} times</p>
                <button onClick={this.clickCounter}>Click Me</button>
            </div>
        )
    }
}

export default BoundClickCounter;