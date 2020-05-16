import React from "react";
import {FAB} from "react-native-paper";
import style from "./style";

export default function ReturnButton({navigation}) {
    return(
        <FAB
                icon="arrow-left"
                style={style.fab}
                onPress={() => navigation.goBack()}
            >
        </FAB>
    )
};
