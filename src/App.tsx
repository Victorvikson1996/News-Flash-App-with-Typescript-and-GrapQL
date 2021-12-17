import React from 'react'
import { Text, StyleSheet, View, StatusBar } from 'react-native'
import { createClient, Provider as UrqlProvider } from 'urql'
import Stories from '../src/Stories'


const client = createClient({
    url: 'http://localhost:3000/graphql',
})


const App = () => {
    return (
        <UrqlProvider value={client} >
            <Stories />
        </UrqlProvider>

    )

}




export default App