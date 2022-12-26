import *as React from "react"
import {Text, View, StyleSheet} from "react-native"
import { createDrawerNavigator } from "@react-navigation/drawer"
import BottomTab from "./BottomTab.js"
import Profile from "../Screens/Profile.js"

const Drawer = createDrawerNavigator()
const DrawerNavigator = ()=>{
    return(
        <Drawer.Navigator>
            <Drawer.Screen name = "home" component = {BottomTab}/>
            <Drawer.Screen name = "profile" component = {Profile}/>
        </Drawer.Navigator>
    )
}
export default DrawerNavigator