import {PermissionsAndroid} from "react-native"
import Geolocation from "@react-native-community/geolocation";


const deviceLocation = {
    requestPermission: async () => {
        try{
          const granted = await PermissionsAndroid.request(
            PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,{
              'title': 'Location Access Required',
              'message': 'This App needs to Access your location'
            }
          )
          if (granted === PermissionsAndroid.RESULTS.GRANTED) {
            console.log("yeeep");
            return true;
          } else {
              alert("Permission Denied");
          }
        } catch (err) {
            alert("err",err);
            console.warn(err);
        }
        return false;
    },
    getPosition: (setter) => {
      return Geolocation.getCurrentPosition((position => (
         setter(position.coords)
      )));
      
    }
};

export default deviceLocation;