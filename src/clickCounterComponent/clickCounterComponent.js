import React, {Component} from 'react';
import axios from 'axios';

class clickCounterComponent extends Component{
    state ={
        count: 0
    }

    componentDidMount(){
        this.getSecoundCounterClicks()
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

    getSecoundCounterClicks(){
        axios.get('/api/secoundClickCounter').then(resp => {

            console.log("This is the get request response",resp.data);
            // this.setState({
            //     count: resp.data
            // })
        }).catch(error => {
            console.log('error making secound counter click get', error);
        });
    }
    postSecoundClick(){
        console.log("postSecoundCLick, this.state:", this.state)

        // axios.get('/api/clickCounter').then(resp => {

        //     console.log("This is the get request response",resp.data);
        // });

        // axios({
        //     method: 'get',
        //     url: '/api/clickCounter'
        // })

        // axios({
        //     method: 'head',
        //     url: '/api/clickCounter'
        // })

        axios({
            method: 'post',
            url: '/api/secoundClickCounter',
            data: {
              secoundCounterClicks: this.state.count
            }
          });


        //   axios.all([
        //     axios.get('/api/clickCounter'),
        //     axios.post({ url: '/api/clickCounter/secoundCounter', 
        //                 data: {
        //                     secoundbuttonclicks: this.state.count
        //                 }})
        //   ]);
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