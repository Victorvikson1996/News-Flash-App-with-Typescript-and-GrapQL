import React from 'react'
import { Text, StyleSheet, View, StatusBar } from 'react-native'

import { gql, useQuery } from 'urql'


const STORIES_QUERY = gql`
query AllStories {
	stories {
		id
		title  
		author
		summary
	}
}
`

const Stories = () => {
    const result = useQuery({ query: STORIES_QUERY })
    console.log(result)

    return (
        <View style={styles.container}>
            <StatusBar hidden />
            <Text>Hello, World</Text>
        </View>
    )
}



const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
})

export default Stories
