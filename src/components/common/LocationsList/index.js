import React from "react";
import { View, FlatList } from "react-native";
import LocationCard from "../LocationCard";
import style from "./style";

export default function LocationsList({locations}) {

    return(
        <View style={style.continer}>
            <FlatList
                data={locations}
                renderItem={({item}) => (
                    <View style={style.line} key={`${item.title}_line`}>
                        <LocationCard key={`${item.title}_line`} location={item}/>
                    </View>
                )}
            />
        </View>
    )
}