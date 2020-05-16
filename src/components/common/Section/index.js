import React from "react";
import {View} from "react-native";
import style from './style';

export default class Section extends React.Component {
    render() {
        return(
            <View style={style.container}>
                {this.props.children}
            </View>
        )
    }
}