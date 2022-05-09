import React from 'react'
import Head from 'next/head'
import { AppBar, Container, Toolbar, Typography } from '@material-ui/core'

const LayoutComp = ({ children }) => {

    return (
        <>
            <Head>
                <title>Mamazone || </title>
            </Head>

            <AppBar className='bg-[#203040]' position='static'>
                <Toolbar>
                    <Typography>Mamazone</Typography>
                </Toolbar>
            </AppBar>
            <Container className='min-h-[80vh]'>
                {children}
            </Container>

            <footer className='text-center bg-gray-200 min-h-[10vh] flex items-center justify-center'>
                <Typography>
                    All right reseved. Mamazone
                </Typography>
            </footer>
        </>
    )
}

export default LayoutComp