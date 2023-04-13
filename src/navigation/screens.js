import React from "react";
import { NavigationContainer } from '@react-navigation/native';
import Register from "../screens/Register";
import SignIn from "../screens/SignIn";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

const MainStack = createNativeStackNavigator();

export default function Screens() {

    return (
        <NavigationContainer>
            <MainStack.Navigator
                initialRouteName="Register"
                screenOptions={{
                    headerShown: false,
                }}
            >
                <MainStack.Screen name="Register" component={Register} />
                <MainStack.Screen name="SignIn" component={SignIn} />
            </MainStack.Navigator>
        </ NavigationContainer>
    )
}