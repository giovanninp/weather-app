import React,{useState, useEffect} from "react";
import {View, Text, StyleSheet, Button} from "react-native";
import Maps from "../../components/common/Maps";
import styles from "./style";
import {getByCoords} from "../../services/open_weather";
import meteoElement from "../../components/utils/meteoElement";
// import Geolocation from "@react-native-community/geolocation";
import deviceLocation from "../../components/utils/deviceLocation";

import {FAB} from "react-native-paper";
import { useSelector, useDispatch } from "react-redux";

const DEFAULT_COORDS = {
    region: {
        latitude: -8.0522404,
        longitude: -34.9286096,
        latitudeDelta: 0.0922,
        longitudeDelta: 0.0421,
    },
    marker:{
        title:"Loding...",
        data: {
            latitude: -8.0522404,
            longitude: -34.9286096,
        }
    },
    device:null
}

export default function Canvas() {
    const dispatch = useDispatch();
    const [region,setRegion] = useState(DEFAULT_COORDS.region);
    const [marker,setMarker] = useState(DEFAULT_COORDS.marker);
    const [actualMeteo,setActualMeteo] = useState({});
    const device = useSelector(state => state.device);
    const favourites = useSelector(state => state.session.favourites);

    function handleAddFavourite() {
        const exists = favourites.some(fav => (
            fav.title === actualMeteo.title
        ))
        if(!exists) {
            let newFavourites = favourites;
            newFavourites.push(actualMeteo);
            dispatch({type:"UPDATE_SESSION_FAVOURITES",favourites:newFavourites})
        }
    }

    async function handleGetWeather(newMarker) {
        console.log('Requested')
        await getByCoords(newMarker.data.latitude,newMarker.data.longitude)
            .then(response => {
                
                const el = meteoElement.create(null,response.data);
                console.log("meteo",el);
                setActualMeteo(el);
                let final = newMarker;
                final.title = el.title;
                setMarker(final);
            });
    };

    const SubmitFab = () => {
        return(
            <FAB 
                label={marker.title ? marker.title : "loading"}
                icon="weather-cloudy"
                style={styles.submitBtn}
                onPress={handleAddFavourite}
            >
            </FAB>
            ) 
    };

    return(
        <View style={styles.container}>
            <View style={styles.maps}>
                <View style={styles.fab}>
                    <SubmitFab />
                </View>
                <Maps 
                coords={{marker,region,device}} 
                setters={{setRegion,setMarker}}
                submit={handleGetWeather}
                />
            </View>
        </View>
    )
}

