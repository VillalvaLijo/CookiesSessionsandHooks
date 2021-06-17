import React, {Component} from 'react';


class HomePage extends Component{


    render(){
        return(
            <div>
                <h1>Cookie CLicker</h1>

                <p>This is a project I created to help myself understand cookies. 
                    It uses React on the front-end, and Node.js on the backend.
                    I built styling in to practice with Material-UI and JSS.
                </p>
                <br></br>
                <p>This project contains three buttons. 
                    These are counter buttons that count the number of times you click them and then display that data on the web page. 
                    I used express-session and cookie-session on the back-end to store the click data from these button components, that way if you navigate away from the page
                    the data is still stored on the server, in session data. That way when you navigate back to the page. The number of times you clicked the button is still displayed on the webpage.
                    This data is stored for an hour, then it is deleted. Try it for yourself!
                
                </p>
                <br></br>
                <p>This web app contains three buttons that allow you to click on them and store the number of times you clicked them.
                   I created three different buttons to explore three different ways in which React can create the same functionality. The 
                   Buttons are ordered from first to last, with the latest way of using the functionality first and the oldest way to create the button last.

                </p>
                <br></br>
                <p>The first button uses React Hooks to count the clicks. The Secound button uses a wrappper function inside the JSX to count the clicks
                    The last button, the third button uses a function binding to accesses state and count the clicks that way.
                </p>
                <br>
                </br>
                <h3>Sam Lijo</h3>
            </div>
        )
    }
}

export default HomePage;