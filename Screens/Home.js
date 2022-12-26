import *as React from "react"
import {Text, View, StyleSheet} from "react-native"


export default class App extends React.Component{
    render(){
        return(
            <View style={styles.container}>
                <Text>Home Page</Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({

        container: { flex: 1, backgroundColor: 'blue'}

});