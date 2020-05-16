import React from "react";
import { View,Text } from "react-native";
import {Provider} from "react-redux";
import { Provider as PaperProvider } from "react-native-paper";
import Theme from "../theming/theme";

import MainNavigation from "./main";

import store from '../store';

export default function Route() {

    return(
        <Provider store={store}>
            <PaperProvider theme={Theme}>
                <MainNavigation />
            </PaperProvider>
        </Provider>
    )

};