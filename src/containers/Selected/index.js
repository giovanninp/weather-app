import React from "react";
import {View} from "react-native";
import Section from "../../components/common/Section";
import ReturnButton from "../../components/common/ReturnButton";
import style from "./style";
import { useDispatch, useSelector } from "react-redux";


export default function Selected({navigation}) {
    const dispatch = useDispatch();
    const selected = useSelector(state => state.selected);

    return(
        <View style={style.drawer}>
            <View style={style.container}>
                <View style={style.returnFab}>
                    <ReturnButton />
                </View>
                
                <Section>

                </Section>

            </View>
        </View>
    )
};