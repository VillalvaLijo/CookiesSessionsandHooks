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

    componentDidMount(){
        this.getThirdCounterClicks()
    }

    componentDidUpdate(prevstate){

        // console.log("inside componentDidUpdate, this.state", this.state);
        if (prevstate != this.state){

            console.log("Inside ComponentDidUpdate BoundClickCounter, this.state",this.state);
            this.postClick()
        };
    }

    getThirdCounterClicks(){
        axios.get('/api/thirdClickCounter').then(resp => {

            console.log("This is the third clicker get request response",resp.data);
            
            let thirdCounterClick = resp.data.thirdCounterClicks;
            // console.log("Inside third clicker get request, thirdCounterClick", thirdCounterClick);
            // console.log("Inside third Clicker get request, typeof(thirdCounterClick)", typeof(thirdCounterClick));
            if(typeof(thirdCounterClick) === 'number' && thirdCounterClick === thirdCounterClick){
                //making sure that the response data is a valid number and not NaN
                
                this.setState({
                    count: thirdCounterClick
                });
            };

            // if (resp.data.thirdCounterClick !== resp.data.thirdCounterClick ){
               
            // }else if (typeof(resp.data.thirdCounterClick) === 'number' && resp.data.thirdCounterClick === resp.data.thirdCounterClick){
            //     this.setState({
            //         count: resp.data.thirdCounterClicks
            //     })
            // }
           
            // this.setState({
            //     count: resp.data
            // })
        }).catch(error => {
            console.log('error making third counter click get', error);
        });

    }

    clickCounter(){
        this.setState({
            count: this.state.count + 1,
        })
        console.log("INside Bound CLick counter click Counter function")
        

    // this.postClick()
    }

    postClick(){
        // console.log("Inside postClick, thi.state.count", this.state.count);
        axios({
            method: 'post',
            url: '/api/thirdClickCounter',
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