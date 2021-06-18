import React, {Component} from 'react';
import axios from 'axios';

//material-ui dependencies
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import Box from '@material-ui/core/Box';

//Can't use make styles or useStyles hook
//becuase hooks are only availble to use for functional components

import {makeStyles} from '@material-ui/styles'

//for a class component use withStyles
// import { withStyles } from '@material-ui/core/styles';
import { withStyles } from '@material-ui/styles';



//Importing Card from material-ui
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';


//styles to be used in rendering, using withStyles Higher-order component

const useStyles = theme => ({
    root: {
      backgroundColor: '#6fbf73',
      width: 300,
      height: 460,

    },
    content: {
        backgroundColor: '#6fbf73',
        display: 'flex',
        justifyContent: 'space-between',
        "flex-direction": "column",
    },
    count: {
        fontSize: 150
    } 
  });


class clickCounterComponent extends Component{

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

    // clickCounterButtonJSX(){
    //     return(
            
    //         //use card in this clickCounterButton function to style
    //         //here and then import into the render of the class component
            
    //     )
    // }

    render(){
        //attempting to import styles into this class as a Higher-order compoenet
        const {classes} = this.props;

        return (
            <div>
                <CssBaseline/>
                <Container maxwidth="lg">
                    <Typography component="div" style={{backgroundColor: '#ffd480', 
                                                        height:'100vh',
                                                        display:'flex',
                                                        justifyContent: 'center',
                                                        alignItems: 'center' }}
                                                        >
                                                            {/* Writing display flex, pushes edge of 
                                                            container to the navbar on the top of the page */}

{/*                
                    {this.clickCounterButtonJSX()} */}
                                <Card className = {classes.root}>
                            {/* <Box style={{backgroundColor: '#6fbf73'}}> */}
                                <CardContent className = {classes.content}>
                                {/* <p>This Button is the click counter in Component Form, Click It!</p>
                                <p>This button has been click {this.state.count} times</p> */}
                                <h1 className = {classes.count}>{this.state.count}</h1>
                                <button onClick={()=> {this.clickCount()}}>Click Me!</button>
                            {/* </Box> */}
                            </CardContent>
                        </Card>
                
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

// export default clickCounterComponent;


//attempting to wrap styles around class component to make it a higher-order component
export default withStyles(useStyles)(clickCounterComponent);