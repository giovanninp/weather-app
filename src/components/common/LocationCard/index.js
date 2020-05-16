import React from "react";
import { Card, Title } from "react-native-paper";
import { View, Text } from "react-native";
import style from "./style";
import Icon  from "react-native-vector-icons/MaterialCommunityIcons";
import weatherIconFinder from "../../utils/weatherIconFinder";

export default function LocationCard({location}) {
    console.log("local",location.meteo.main)

    const {weather,main} = location.meteo;
    const icon = weatherIconFinder[weather[0].main];

    return(
        <Card key={`${location.title}_card`} style={style.card}>
            <Card.Content>
                <View style={style.container}>
                    <View style={style.textual}>
                        <Text style={style.title}>{location.title}</Text>
                        <Text style={style.description}>{weather[0].description}</Text>
                    </View>
                    <View style={style.media}>
                        <Icon name={icon} size={111}/>
                        <Text style={style.temp}>{(main.temp /  10) ^ 1}</Text>
                    </View>
                </View>
            </Card.Content>
        </Card>
    )
}