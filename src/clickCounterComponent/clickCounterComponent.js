import React, {Component} from 'react';
import axios from 'axios';

class clickCounterComponent extends Component{
    state ={
        count: 0
    }

    componentDidUpdate(prevstate){
        console.log("Inside componentDidUpdate, clickCounterComponent, this.state", this.state);

        if(prevstate != this.state){
            this.postSecoundClick()
        }
    }

    clickCount(){
        this.setState({
            count: this.state.count + 1,
        })

        // this.state.count +=1;

    

        // console.log("clickCount, this.state.count:", this.state.count);
    };

    postSecoundClick(){
        console.log("postSecoundCLick, this.state:", this.state)

        axios({
            method: 'post',
            url: '/api/clickCounter/secoundCounter',
            data: {
              scoundbuttonclicks: this.state.count
            }
          });
    }


    render(){
        return (
            <div>
                <p>This Button is the click counter in Component Form, Click It!</p>
                <p>This button has been click {this.state.count} times</p>
                <button onClick={()=> {this.clickCount()}}>Click Me!</button>
            </div>
        );
    }
}

export default clickCounterComponent;