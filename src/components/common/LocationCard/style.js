import {StyleSheet} from "react-native";

export default StyleSheet.create({
    container:{
        flex:1,
        flexDirection:"column"
    },
    main:{
        width:"100%",
        flex:1,
        flexDirection:"row"
    },
    card:{
        height:193,
        width:"100%"
    },
    openCard:{
        height:"auto",
        width:"100%"
    },
    textual:{
        width:"60%"
    },
    title:{
        fontSize:36
    },
    description:{
        fontSize:24
    },
    media:{
        flex:1,
        flexDirection:"column",
        alignItems:"center"
    },
    temp:{
        fontSize:36
    },
    openContent:{
        flex:1,
        flexDirection:"column",
    },
    extra: {
        flex:1,
        flexDirection:"row"
    },
    small:{
        margin:10,
    },
    delete: {
        width:"100%"
    }

})