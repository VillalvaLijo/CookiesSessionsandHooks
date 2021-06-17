import { createTheme } from '@material-ui/core/styles'
import cyan from '@material-ui/core/colors/cyan'

const GeneralTheme = createTheme({
    palette: {
        primary: {
            main: cyan[500],
        },
        secondary: {
            main: "#ffea00",
        }
    }
})

export default GeneralTheme;

//#ffea00 yellow
//#00bcd4 cyan