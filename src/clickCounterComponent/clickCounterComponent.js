import React, {Component} from 'react';
import axios from 'axios';

//material-ui dependencies
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import Box from '@material-ui/core/Box';

//for a class component use withStyles to style the component JSX
// import { withStyles } from '@material-ui/core/styles';
import { withStyles } from '@material-ui/styles';



//Importing Card from material-ui
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';

//importing Button from material UI
import Button from '@material-ui/core/Button';

//importing paper from material-ui
import Paper from '@material-ui/core/Paper';


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
        justifyContent: 'center',
        "flex-direction": "column",
        alignItems: 'center',
        height: 460,
    },
    header: {
        'block-size': '100px',
    },
    count: {
        fontSize: 150,
        'block-size': '170px',
    },
    button: {
        maxWidth: 200,
        width: 200,
        color: "#ffea00",
        
    },
    explantion:{
        'width': 300
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
    };

    getSecoundCounterClicks(){
        axios.get('/api/secoundClickCounter').then(resp => {

            //console.log("This is the get request response",resp.data);
            this.setState({
                count: resp.data.secoundCounterClicks
            })

        }).catch(error => {
            console.log('error making secound counter click get', error);
        });
    }
    postSecoundClick(){
        //console.log("postSecoundCLick, this.state:", this.state)


        axios({
            method: 'post',
            url: '/api/secoundClickCounter',
            data: {
              secoundCounterClicks: this.state.count
            }
          });

    }

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
                                                        alignItems: 'center', 
                                                        "flex-direction": "column"}}
                                                        >
                                                            {/* Writing display flex, pushes edge of 
                                                            container to the navbar on the top of the page */}
                    <Typography variant="h3" style={{'block-size': '150px'}}>
                        Class Component Clicker
                    </Typography>

                                <Card className = {classes.root} variant="outlined">
                                <CardContent className = {classes.content}>

                                <h1 className = {classes.count}>{this.state.count}</h1>
                            
                                <Button className= {classes.button} variant="contained" color="secondary"onClick={()=> {this.clickCount()}}>Click Me!</Button>
                                                {/* this set up on the following line dosen't work becuase click count
                cannot accesses state with out the wrapper function allowing it to grab state from the overhead 
                lexical environmnet */}

                {/* You Need the wrapper function ()=>{this.clickCount} */}

                {/* <button onClick={this.clickCount}>Click Me!</button> */}
                            </CardContent>
                        </Card>
                        <Box style={{
                            maxWidth: 600,
                            paddingTop: '30px'
                            
                        }}>
                            <Paper elevation={5}style={{backgroundColor: '#ffc34d',
                                                        width: 625,
                                                        height: 100}}>
                        <Typography variant="body1" classesName={classes.explantion}gutterBottom>
                    This Clicker button uses a class component. The button increases the count by using a wrapped call to a function ( onClick = {"{"} ()=>{"{"}this.clickCount() {"}"} {"}"}  ), this allows the function clickCount
                            to accesses the state from the surrounding context inside the React Class Component. 
                        </Typography>
                        </Paper>
                        </Box>
                </Typography>


                </Container>
            </div>
        );
    }
}



//attempting to wrap styles around class component to make it a higher-order component
export default withStyles(useStyles)(clickCounterComponent);