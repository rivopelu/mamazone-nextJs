import React from 'react'
import Head from 'next/head'
import { AppBar, Container, Toolbar, Typography } from '@mui/material'
const LayoutComp = ({ children }) => {
    return (
        <>
            <Head>
                <title>Mamazone || </title>
            </Head>

            <AppBar position='static'>
                <Toolbar>
                    <Typography>Mamazone</Typography>
                </Toolbar>
            </AppBar>
            <Container>
                {children}
            </Container>

            <footer>
                <Typography>
                    All right reseved. Mamazone
                </Typography>
            </footer>
        </>
    )
}

export default LayoutComp