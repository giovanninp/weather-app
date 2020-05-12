import React from "react";
import {View, Text} from "react-native";
import AddTargetBtn from "../../components/common/AddTarget";

export default function Home({navigation}) {
    return (
        <View>
            <Text>Hello Home</Text>
            <AddTargetBtn event={() => navigation.navigate("Canvas")} />
        </View>
    )
};