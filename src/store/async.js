import AsyncStorage from "@react-native-community/async-storage";

export default {
    setItem: async (key,content) => {
        await AsyncStorage.setItem(
            key,
            JSON.stringify(content)
        )
    },
    getItem: async (key) => {
        return await AsyncStorage.getItem(key)
            .then(response => JSON.parse(response))
    }
}