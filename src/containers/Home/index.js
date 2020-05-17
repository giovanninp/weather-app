import React, { useState, useEffect } from "react";
import {View, Text,ListView} from "react-native";
import AddTargetBtn from "../../components/common/AddTarget";
import {FAB, Title} from "react-native-paper";
import style from "./style";
import Section from "../../components/common/Section";
import { useSelector, useDispatch } from "react-redux";
import LocationsList from "../../components/common/LocationsList";
import asyncStore from "../../store/async";

export default function Home({navigation}) {
    const dispatch = useDispatch();
    const device = useSelector(state => state.device);
    const session = useSelector(state => state.session);

    
    useEffect(() => {
        asyncStore.getItem("session")
            .then(response => (
                response
                ? dispatch({type:"UPDATE_SESSION",session:response})
                : null
            ))
        console.log("Home - FAvs",session.favourites);
    },[])

    useEffect(() => {
        asyncStore.setItem("session",session);
    })

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