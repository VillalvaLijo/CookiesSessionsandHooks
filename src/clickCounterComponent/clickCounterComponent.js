import React, {Component} from 'react';
import axios from 'axios';

//material-ui dependencies
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import Box from '@material-ui/core/Box';
import {makeStyles} from '@material-ui/styles'
//Importing Card from material-ui
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';


const useStyles = makeStyles((theme)=>({
    root: {

    },
    button: {

    }
}))

class clickCounterComponent extends Component{
    classes = useStyles();
    state ={
        count: 0
    }

    componentDidMount(){
        this.getSecoundCounterClicks()
    }

    componentDidUpdate(prevstate){
        //console.log("Inside componentDidUpdate, clickCounterComponent, this.state", this.state);

        //If prevState does not match current state send new state (Click Count)
        //server side with a post request so it can be stored in seession data.
        if(prevstate != this.state){
            this.postSecoundClick()
        }
    }

    clickCount(){
        //Inside JSX tags clickCount is called with an empty arrow functio ()=>{clickCount()}
        //that is why you don't have to bind the instance of this to the function.
        //It recives 'this' (state) from the outer lexical environment and calls it normally
        // this is called a wrapper

        this.setState({
            count: this.state.count + 1,
        })

        // this.state.count +=1;

    

        // console.log("clickCount, this.state.count:", this.state.count);
    };

    getSecoundCounterClicks(){
        axios.get('/api/secoundClickCounter').then(resp => {

            console.log("This is the get request response",resp.data);
            this.setState({
                count: resp.data.secoundCounterClicks
            })

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

    clickCounterButtonJSX(){
        return(
            <Box style={{backgroundColor: '#6fbf73'}}>
            <p>This Button is the click counter in Component Form, Click It!</p>
            <p>This button has been click {this.state.count} times</p>
            <button onClick={()=> {this.clickCount()}}>Click Me!</button>
            </Box>
        )
    }

    render(){
        return (
            <div>
                <CssBaseline/>
                <Container maxwidth="lg">
                    <Typography component="div" style={{backgroundColor: '#ffee33', 
                                                        height:'100vh',
                                                        display:'flex'}}>
                                                            {/* Writing display flex, pushes edge of 
                                                            container to the navbar on the top of the page */}

               
                    {this.clickCounterButtonJSX()}
                
                </Typography>
                {/* this set up on the following line dosen't work becuase click count
                cannot accesses state with out the wrapper function allowing it to grab state from the overhead 
                lexical environmnet */}

                {/* You Need the wrapper function ()=>{this.clickCount} */}

                {/* <button onClick={this.clickCount}>Click Me!</button> */}

                </Container>
            </div>
        );
    }
}

export default clickCounterComponent;