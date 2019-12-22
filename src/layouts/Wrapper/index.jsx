import React from 'react'
import {BrowserRouter} from 'react-router-dom'
import CssBaseline from '@material-ui/core/CssBaseline'
import MuiThemeProvider from '@material-ui/core/styles/MuiThemeProvider'
import createMuiTheme from '@material-ui/core/styles/createMuiTheme'
import { makeStyles } from '@material-ui/core'

const theme = createMuiTheme({
    palette: {
        type:"dark"
        
    }
})

const globalStyle = makeStyles(theme => ({
    '@global': {
        'body,html': {
            background: theme.palette.background.paper
        }
    },
}))

export function GlobalStyles() {
    globalStyle()
    return <></>
}

export default function Wrapper(props) {
    return (
        <BrowserRouter>
            <CssBaseline />
            <MuiThemeProvider theme={theme}>
                <GlobalStyles />
                {props.children} 
            </MuiThemeProvider>
        </BrowserRouter>
    )
}