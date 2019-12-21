import React from 'react'
import {BrowserRouter} from 'react-router-dom'
import CssBaseline from '@material-ui/core/CssBaseline'
import MuiThemeProvider from '@material-ui/core/styles/MuiThemeProvider'
import createMuiTheme from '@material-ui/core/styles/createMuiTheme'

const theme = createMuiTheme({
    palette: {
        theme:"dark"
        
    }
})

export default function Wrapper(props) {
    return (
        <BrowserRouter>
            <CssBaseline />
            <MuiThemeProvider theme={theme}>
                {props.children} 
            </MuiThemeProvider>
        </BrowserRouter>
    )
}