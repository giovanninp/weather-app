import React from "react";
import { View, StyleSheet } from "react-native";
import MapView, { PROVIDER_GOOGLE, Marker } from "react-native-maps";
import styles from "./style";

export default ({setters,coords}) => {

    const { setRegion,setMarker } = setters;
    const { region, marker } = coords;

    function handleChangeMarker(event) {
        let newMarker = marker;
        newMarker.data = event.x;
        setMarker(newMarker);
    };

    function handleChangeRegion(region) {
        handleChangeMarker({x : {latitude:region.latitude,longitude:region.longitude}})
        setRegion(region);
    }

    return(
        <View style={styles.container}>
            <MapView
                style={styles.map}
                provider={PROVIDER_GOOGLE}
                onRegionChangeComplete={handleChangeRegion}
                // region={region}
            >
                <Marker 
                draggable
                title={marker.title}
                coordinate={marker.data} 
                onDragEnd={(e) => handleChangeMarker({x: e.nativeEvent.coordinate})}
                />
            </MapView>
        </View>
    )
};
