import React, {Component} from 'react';
import axios from 'axios';

//material-ui imports
import { withStyles } from '@material-ui/styles'
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import Box from '@material-ui/core/Box';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Paper from '@material-ui/core/Paper';
import clickCounterComponent from '../clickCounterComponent/clickCounterComponent';

//light greens I want to eperiemnt with

//#84e184 light green
//#99ff99 light green



const useStyles = theme => ({
    rootBox: {
        display: 'flex',


    },
    titleBox:{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
    },
    title: {
        // width: '100%',
        'align-self': 'center',
    },
    leftBox: {
        // height:'100vh',
        width: '50%',
        display: 'flex',
        "flex-direction": 'column',
        // justifyContent: 'center',
        justifyContent: 'space-evenly',
        'align-items': 'center'
        
    },
    rightBox: {
        // height:'100vh',
        width: '50%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
    },
    paperBox: {
        width: 500,
    },
    leftPaper: {
        backgroundColor: '#84e184',
        width: 500,
        height: 200,
        display: 'flex',
        justifyContent: 'center'

    },
    count: {
        fontSize: 300,
    }


});

class BoundClickCounter extends Component{



    constructor(props){

        //super refers to parent class constructor in OOP(React.Component)
        //JavaScript will not let you use this, until after you have called
        //the parent constructor with super
        
        //this allows us to set up the context of 'this'. 'this' context 
        //goes back to the parent class constructor React.Component, parent class.
        //Javascript enforces that if you want to use this in a constructor you have to call super first, 
        // this creates the instance of 'this' 

        super(props);

        //inside constructor pobject, Instance of 'this' in the original context of
        //The comonent, bound to the clickCounter, otherwise the counter dosen't work. 
        //binding the instance of click counter allows me to have accesses to the state object, 
        //it allows the 'this' of clickCounter' and the 'this' of the state object to
        //be in the same context.

        //the result of this.clickCounter.bind(this) is a special function-like
        //exotic object that is callable as a function and passes 'this' to the clickCounter function


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

        //if the prevState is not equal to the current state, (Counter button has been clicked),
        //Post the change in data server side, with axios POST method in postClick()
        if (prevstate != this.state){

            //console.log("Inside ComponentDidUpdate BoundClickCounter, this.state",this.state);
            
            this.postClick()
        };
    }

    getThirdCounterClicks(){
        axios.get('/api/thirdClickCounter').then(resp => {

            console.log("This is the third clicker get request response",resp.data);
            
            //place response from server in container variable
            let thirdCounterClick = resp.data.thirdCounterClicks;

            
            //In order to make sure the number is not null we have to test that it is not a number
            //And since NAN != NAN we test the return data, thirdCounterClick aganist itself
            //so we know it is not NAN.
            if(typeof(thirdCounterClick) === 'number' && thirdCounterClick === thirdCounterClick){
                //making sure that the response data is a valid number and not NaN
                

                //Set response from server, (Number conatined in the cookie) to state of the 
                //component.
                this.setState({
                    count: thirdCounterClick
                });
            };

        }).catch(error => {
            console.log('error making third counter click get', error);
        });

    }
   

    clickCounter(){
        //Add plus one to state, when counter button is clicked.

        //this function needs to be bound to itself so that it can accesses the state object,
        //otherwise it wouldn't be able to find the context of 'this' that contains state,
        //you reccieve the error, 'this' is undefined
        this.setState({
            count: this.state.count + 1,
        })
        // console.log("INside Bound CLick counter click Counter function")
    }

    postClick(){
        // console.log("Inside postClick, thi.state.count", this.state.count);

        //Post clicks from state object to the server to be stored with cookie-session
        axios({
            method: 'post',
            url: '/api/thirdClickCounter',
            data: {
              thirdbuttonclicks: this.state.count
            }
          });
    }


    render(){
        //import styles in from higher order component withStyles
        const {classes} = this.props;
        

        return(

            <Box>
                <CssBaseline/>
                <Container maxwidth="lg">
                    <Typography component='div' style={{height:'100vh',
                                                        // backgroundColor:'#d580ff' //too bright
                                                        // backgroundColor: '#dd99ff' // too bright
                                                        backgroundColor: '#ecb3ff',
                                                        // display: 'flex',
                                                        }}>
                    {/* Header */}
                        <Box className={classes.titleBox}>
                            <Typography variant="h3" className={classes.title} style={{
                                                                    
                            }}>
                                Bound Click Counter Class Component
                            </Typography>
                        </Box>
                {/* <p>This is the BoundClickCounter, it is different from the previous click counter, it binds, this
                    to the click counter function
                </p>
                <p>You have clicked BoundClickCounter {this.state.count} times</p> */}


                {/* This is the left side box that extends down to the bottom of the screen */}
                <Box className={classes.rootBox}>
                <Box className= {classes.leftBox}>
                <Box className={classes.paperBox}>
                    <Paper elevation={5} className={classes.leftPaper}>
                        <Typography variant="body1" style={{
                                                            width: 450,
                                                            'align-self': 'center',
                        }}>
                            This click counter is a React class component that uses a binding inside the class to bind the function to the instance of 'this' in the class.
                            Without binding the instance of 'this' to the function the button would be unable to access state where the count is stored.
                         
                        </Typography>
                        
                    </Paper>
                </Box>
                <Button variant="contained" color= "secondary" onClick={this.clickCounter}>Click Me</Button>
                
                </Box>

                {/* This is the right side of the screen box that extends to the bottom of the page and
                displays the Count */}
                <Box className={classes.rightBox}>
                    <Typography variant="h1" className = {classes.count}>
                        {this.state.count}
                    </Typography>
                </Box>
                </Box>
                </Typography>
                </Container>
            </Box>
        )
    }
}

export default withStyles(useStyles)(BoundClickCounter);