import React, { useEffect } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import {useDispatch, useSelector} from "react-redux";
import deviceLocation from "../components/utils/deviceLocation";

import Home from '../containers/Home';
import Canvas from '../containers/Canvas';

const Stack = createStackNavigator();

const debug = false;

export default function mainNavigation () {
    const dispatch = useDispatch();
    const device = useSelector(state => state.device);

    function updateDevicePermission() {
        deviceLocation.requestPermission()
            .then(response => (
                dispatch({type:"UPDATE_DEVICE_GRANTED",granted:true})
            ))
    }

    function updateDevicePosition() {
        function updatePosition(position) {
            dispatch({type:"UPDATE_DEVICE_POSITION",position:position})
        }
        deviceLocation.getPosition(updatePosition);
    }

    useEffect(() => {
        updateDevicePermission();
        if(device.granted) {
            updateDevicePosition();
        }
    },[device.granted])


    if(debug) {
        console.log("MainRoute",device);
    }

    return(
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name="Home" component={Home} />
                <Stack.Screen name="Canvas" component={Canvas} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}