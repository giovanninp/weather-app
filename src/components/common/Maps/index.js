import React, { useState, useEffect } from "react";
import { View, StyleSheet } from "react-native";
import MapView, { PROVIDER_GOOGLE, Marker } from "react-native-maps";
import styles from "./style";

export default ({setters,coords,submit,device = null}) => {
    const { region, marker } = coords;

    function handleChangeMarker(event) {
        let newMarker = marker;
        newMarker.data = event.x;
        submit(newMarker);
    };

    function handleChangeRegion(region) {
        handleChangeMarker({x : {latitude:region.latitude,longitude:region.longitude}})
        let {latitude,longitude} = region;
        const newMarker = {
            title:marker.title,
            data:{latitude,longitude}};
            submit(newMarker)
        setters.setRegion(region);
    }

    useEffect(() => {
        console.log("UpdatePos")
    })

    return(
        <View style={styles.container}>
            <MapView
                style={styles.map}
                provider={PROVIDER_GOOGLE}
                onRegionChangeComplete={handleChangeRegion}
                region={region}
            >
                <Marker 
                title={marker.title}
                coordinate={marker.data}
                onDragEnd={(e) => handleChangeMarker({x: e.nativeEvent.coordinate})}
                />
            </MapView>
        </View>
    )
};
