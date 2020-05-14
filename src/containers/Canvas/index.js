import React,{useState, useEffect} from 'react';
import {View, Text, StyleSheet, Button} from 'react-native';
import Maps from '../../components/common/Maps';

const DEFAULT_COORDS = {
    region: {
        latitude: -8.0522404,
        longitude: -34.9286096,
        latitudeDelta: 0.0922,
        longitudeDelta: 0.0421,
    },
    marker:{
        title:'Local',
        data: {
            latitude: -8.0522404,
            longitude: -34.9286096,
        }
    }
}

export default function Canvas() {
    const [coords,setCoords] = useState(DEFAULT_COORDS);

    const [region,setRegion] = useState(DEFAULT_COORDS.region);
    const [marker,setMarker] = useState(DEFAULT_COORDS.marker);

    const SubmitFab = () => {
        return <Button title='Add local' onPress={() => alert('hello')} />
    }

    return(
        <View style={styles.container}>
            <View style={styles.maps}>
                <View style={styles.fab}>
                    <SubmitFab />
                </View>
                <Maps coords={{marker,region}} setters={{setRegion,setMarker}} />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flex:1
    },
    maps:{
        width:'100%',
        flex:1,
        zIndex:0
    },
    fab:{
        zIndex:2
        
    }
})