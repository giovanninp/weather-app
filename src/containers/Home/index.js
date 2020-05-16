import React, { useState, useEffect } from "react";
import {View, Text,ListView} from "react-native";
import AddTargetBtn from "../../components/common/AddTarget";
import {FAB, Title} from "react-native-paper";
import style from "./style";
import Section from "../../components/common/Section";
import { useSelector } from "react-redux";
import LocationsList from "../../components/common/LocationsList";

export default function Home({navigation}) {

    const device = useSelector(state => state.device);
    const session = useSelector(state => state.session);

    
    useEffect(() => {
        console.log("Home - FAvs",session.favourites);
    },[device,session.favourites])

    return (
        <View style={style.drawer}>
            <View style={style.container}>
                <Section>
                    <Title style={style.title}>Clean Weather</Title>
                </Section>
                <Section>
                    <LocationsList locations={session.favourites} />
                </Section>
                <FAB
                    icon="plus"
                    style={style.fab}
                    onPress={() => navigation.navigate("Canvas")}
                />
            </View>
        </View>
    )
};