import React from "react";
import {FAB} from "react-native-paper";
import style from "./style";

export default function AddFavouriteButton({onPress=null,marker}) {
    return(
        marker.title === "Loading..."
            ?(
                <FAB 
                    disabled
                    label={"Loading"}
                    icon="av-timer"
                    style={style.fab}
                >
                </FAB>
            )
            :(
                <FAB 
                    
                    label={marker.title}
                    icon="plus"
                    style={style.fab}
                    onPress={onPress}
                >
                </FAB>
            )
    )
};
