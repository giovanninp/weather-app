import React,{useState, useEffect} from "react";
import {View, Text, StyleSheet, Button} from "react-native";
import Maps from "../../components/common/Maps";
import styles from "./style";
import {getByCoords} from "../../services/open_weather";
import meteoElement from "../../components/utils/meteoElement";

const DEFAULT_COORDS = {
    region: {
        latitude: -8.0522404,
        longitude: -34.9286096,
        latitudeDelta: 0.0922,
        longitudeDelta: 0.0421,
    },
    marker:{
        title:"Local",
        data: {
            latitude: -8.0522404,
            longitude: -34.9286096,
        }
    }
}

export default function Canvas() {
    const [region,setRegion] = useState(DEFAULT_COORDS.region);
    const [marker,setMarker] = useState(DEFAULT_COORDS.marker);

    function handleGetWeather() {
        console.log('Requested')
        const result = getByCoords(marker.data.latitude,marker.data.longitude)
            .then(response => {
                const newEl = meteoElement.create(null,response.data)
                console.log("newEl",newEl);
            })
        // const newEl = result;
        // console.log("newel",newEl);
    }

    const SubmitFab = () => {
        return <Button title="Submit Position" onPress={handleGetWeather} />
    }

    return(
        <View style={styles.container}>
            <View style={styles.maps}>
                <View style={styles.fab}>
                    <SubmitFab />
                </View>
                <Maps 
                coords={{marker,region}} 
                setters={{setRegion,setMarker}} 
                />
            </View>
        </View>
    )
}

