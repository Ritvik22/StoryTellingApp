import *as React from "react"
import {Text, View, StyleSheet} from "react-native"


export default class Feed extends React.Component{
    render(){
        return(
            <View style={styles.container}>
                <Text>See Feed</Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({

        container: { flex: 1, backgroundColor: 'blue'}

});