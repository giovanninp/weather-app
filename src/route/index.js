import React from "react";
import { View,Text } from "react-native";
import {Provider} from 'react-redux'
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import Home from '../containers/Home';
import Canvas from '../containers/Canvas';

import store from '../store/';


const Stack = createStackNavigator();

export default function Route() {

    return(
        <Provider store={store}>
            <NavigationContainer>
                <Stack.Navigator>
                    <Stack.Screen name="Home" component={Home} />
                    <Stack.Screen name="Canvas" component={Canvas} />
                </Stack.Navigator>
            </NavigationContainer>
        </Provider>
    )

};