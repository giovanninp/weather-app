import React, { useState } from "react";
import { Card, FAB } from "react-native-paper";
import { View, Text } from "react-native";
import style from "./style";
import Icon  from "react-native-vector-icons/MaterialCommunityIcons";
import weatherIconFinder from "../../utils/weatherIconFinder";
import { TouchableOpacity } from "react-native-gesture-handler";
import { useDispatch, useSelector } from "react-redux";

export default function LocationCard({location,navigation}) {
    const dispatch = useDispatch();
    const favourites = useSelector(state => state.session.favourites);
    const [open,setOpen] = useState(false);
    console.log("local",location.meteo.main)

    const {weather,main} = location.meteo;
    const icon = weatherIconFinder[weather[0].main];
    

    function remove() {
       const newFavs = favourites.filter(_location => (
           _location.title != location.title
       ));
       dispatch({type:"UPDATE_SESSION_FAVOURITES",favourites:newFavs})
    }

    return(
        <TouchableOpacity onLongPress={() => setOpen(open ? false : true)}>
            <Card key={`${location.title}_card`} style={open ? style.openCard : style.card}>
                <Card.Content>
                    <View style={style.container}>
                        <View style={style.main}>
                            <View style={style.textual}>
                                <Text style={style.title}>{location.title}</Text>
                                <Text style={style.description}>{weather[0].description}</Text>
                            </View>
                            <View style={style.media}>
                                <Icon name={icon} size={111}/>
                                <Text style={style.temp}>{`${(main.temp /  10) ^ 1}º`}</Text>
                            </View>
                        </View>
                        {
                            open 
                            ?(
                                <View style={style.openContent}>
                                    <View style={style.extra}>
                                        <View style={style.small}>
                                            <Text style={style.description}>Umid.</Text>
                                            <Text style={style.description}>{`${main.humidity}%`}</Text>
                                        </View>
                                        <View style={style.small}>
                                            <Text style={style.description}>Temp. Max</Text>
                                            <Text style={style.description}>{`${main.humidity}%`}</Text>
                                        </View>
                                    </View>
                                    <View style={style.delete}>
                                        <FAB label="remover" onPress={remove} />
                                    </View>
                                </View>
                            )
                            :null
                        }
                    </View>
                </Card.Content>
            </Card>
        </TouchableOpacity>
    )
}