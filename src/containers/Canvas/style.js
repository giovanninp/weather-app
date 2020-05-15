import {StyleSheet} from "react-native";

export default StyleSheet.create({
    container:{
        flex:1
    },
    maps:{
        width:'100%',
        flex:1,
        zIndex:0
    },
    fab:{
        bottom:10,
        marginTop:10,
        marginLeft:10,
        marginRight:10,
        zIndex:2,
        flexDirection:"row",
    },
    submitBtn:{
        marginBottom:10,
        borderRadius:50,
        overflow:'hidden',
        flex:1
    },
    devicebtn:{
        width:30,
        flex:4
    }
});