import *as React from "react"
import {Text, View, StyleSheet} from "react-native"
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"
import Feed from '../Screens/Feed.js'
import CreateStory from '../Screens/CreateStory.js'

const Tab = createBottomTabNavigator()
const BottomTab = ()=>{
    return(
        <Tab.Navigator>
            <Tab.Screen name = "feed" component = {Feed}/>
            <Tab.Screen name = "create story" component = {CreateStory}/>
        </Tab.Navigator>
    )
}
export default BottomTab