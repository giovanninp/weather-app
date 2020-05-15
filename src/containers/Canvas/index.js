import React,{useState, useEffect} from "react";
import {View, Text, StyleSheet, Button} from "react-native";
import Maps from "../../components/common/Maps";
import styles from "./style";
import {getByCoords} from "../../services/open_weather";
import meteoElement from "../../components/utils/meteoElement";
// import Geolocation from "@react-native-community/geolocation";
import deviceLocation from "../../components/utils/deviceLocation";

// const geo = Geolocation.setRNConfiguration(config); 

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
    },
    device:null
}

export default function Canvas() {
    const [region,setRegion] = useState(DEFAULT_COORDS.region);
    const [marker,setMarker] = useState(DEFAULT_COORDS.marker);
    const [geoPermission,setGeoPermission] = useState(false);
    const [devicePos,setDevicePos] = useState(DEFAULT_COORDS.device);

    function handleGetWeather() {
        console.log('Requested')
        const result = getByCoords(marker.data.latitude,marker.data.longitude)
            .then(response => {
                const newEl = meteoElement.create(null,response.data);
                alert(response.data.name);
            });
    }
    
    function handleGetCurrentPosition() {
        deviceLocation.getPosition(setDevicePos);
    }

    function handlePointDevicePosition() {
        console.log("device",devicePos);
        const { latitude, longitude } = devicePos;
        console.log("device2",{latitude,longitude});
        let newMarker = marker;
        newMarker.data = {
            latitude,
            longitude
        };
        setMarker(newMarker);
    }

    const DevicePositionFab = () => {
        return (
            <View style={styles.submitBtn}>
                <Button title="Dispositivo" onPress={handlePointDevicePosition}/>
            </View>
        )
    } 

    const SubmitFab = () => {
        return(
            <View style={styles.submitBtn}>
                <Button title="Submit Position"  onPress={handleGetWeather} />
            </View>
            ) 
    }


    useEffect(() => {
        const permission = deviceLocation.requestPermission()
            .then(response => setGeoPermission(response));

        if(permission) 
            handleGetCurrentPosition();
    },[])

    return(
        <View style={styles.container}>
            <View style={styles.maps}>
                <View style={styles.fab}>
                    <SubmitFab />
                    {
                        geoPermission && devicePos
                        ? <DevicePositionFab />
                        : null
                    }
                </View>
                <Maps 
                coords={{marker,region,devicePos}} 
                setters={{setRegion,setMarker}} 
                />
            </View>
        </View>
    )
}

