import React from "react";
import { View, StyleSheet, Button } from "react-native";
import MapView, { PROVIDER_GOOGLE, Marker } from "react-native-maps";

export default ({setters,coords}) => {

    function handleChangeMarker(event) {
        let newMarker = coords.marker;
        newMarker.data = event.x;
        console.log(newMarker);
        setters.setMarker(newMarker);
    };

    return(
        <View style={styles.container}>
            <MapView
                style={styles.map}
                provider={PROVIDER_GOOGLE}
                region={coords.region}
            >
                <Marker draggable
                title={"Local"}
                coordinate={coords.marker.data} 
                onDragEnd={(e) => handleChangeMarker({x: e.nativeEvent.coordinate})}
                />
            </MapView>
        </View>
    )
};

const styles = StyleSheet.create({
    container: {
        ...StyleSheet.absoluteFillObject,
        height: "100%",
        width: "100%",
        justifyContent: 'flex-end',
        alignItems: 'center',
    },
    map: {
        ...StyleSheet.absoluteFillObject,
        zIndex:1
    },
});