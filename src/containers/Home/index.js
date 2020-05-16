import React, { useState } from "react";
import {View, Text,ListView} from "react-native";
import AddTargetBtn from "../../components/common/AddTarget";
import {FAB} from "react-native-paper";
import style from "./style";
import Section from "../../components/common/Section";
import { useSelector } from "react-redux";

export default function Home({navigation}) {

    const device = useSelector(state => state.device);
    const session = useSelector(state => state.session);

    console.log("Home - FAvs",session.favourites)

    return (
        <View style={style.container}>
            <Section>
                <Text style={style.title}>Lista vazia</Text>
            </Section>
            <Section>
            </Section>
            <FAB
                icon="plus"
                style={style.fab}
                onPress={() => navigation.navigate("Canvas")}
            />
        </View>
    )
};