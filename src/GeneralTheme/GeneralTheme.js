import { createMuiTheme } from '@material-ui/core/styles';
import purple from '@material-ui/core/colors/purple';
import green from '@material-ui/core/colors/green';

import cyan from '@material-ui/core/colors/cyan';

const GeneralTheme = createMuiTheme({
//   palette: {
//     primary: {
//       main: purple[500],
//     },
//     secondary: {
//       main: green[500],
//     },
//   },
    palette: {
      primary: cyan,
      secondary: {
        main: '#ffeb3b',
      },
    },


});

export default GeneralTheme;