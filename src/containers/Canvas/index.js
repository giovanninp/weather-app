import React,{useState} from "react";
import { useSelector, useDispatch } from "react-redux";
import {View} from "react-native";
import Maps from "../../components/common/Maps";
import styles from "./style";
import AddFavouriteButton from "../../components/common/AddFavouriteButton";
import ReturnButton from "../../components/common/ReturnButton";

import meteoElement from "../../components/utils/meteoElement";
import {getByCoords} from "../../services/open_weather";

const DEFAULT_COORDS = {
    region: {
        latitude: -8.0522404,
        longitude: -34.9286096,
        latitudeDelta: 0.0922,
        longitudeDelta: 0.0421,
    },
    marker:{
        title:"Loading...",
        data: {
            latitude: -8.0522404,
            longitude: -34.9286096,
        }
    },
    device:null
}

export default function Canvas({navigation}) {
    const dispatch = useDispatch();
    const device = useSelector(state => state.device);
    const [region,setRegion] = useState(device && device.position.latitude ? (
        {
            latitude:device.position.latitude,
            longitude:device.position.longitude,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421,
        }
    ) : DEFAULT_COORDS.region);

    const [marker,setMarker] = useState(DEFAULT_COORDS.marker);
    const [actualMeteo,setActualMeteo] = useState({});
    const favourites = useSelector(state => state.session.favourites);

    function handleAddFavourite() {
        const exists = favourites.some(fav => (
            fav.title === actualMeteo.title
        ))
        if(!exists) {
            let newFavourites = favourites;
            newFavourites.push(actualMeteo);
            dispatch({type:"UPDATE_SESSION_FAVOURITES",favourites:newFavourites})
            navigation.navigate("Home");
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

    return(
        <View style={styles.container}>
            <View style={styles.maps}>
                <View style={styles.fab}>
                    <AddFavouriteButton
                        onPress={handleAddFavourite}
                        marker={marker}
                     />
                </View>
                <View style={styles.returnFab}>
                    <ReturnButton navigation={navigation} />
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

