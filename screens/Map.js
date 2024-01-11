import { useState } from "react";
import { StyleSheet } from "react-native";
import MapView, { Marker } from "react-native-maps";

function Map() {
  const [selectedLocation, setSelectedLocation] = useState();

  const region = {
    latitude: 37.78,
    longtitude: -122.43,
    latitudeDelta: 0.0922,
    longtitudeDelta: 0.0421,
  };

  function selectLocationHandler(event) {
    const lat = event.nativeEvent.cordinate.latitutde;
    const lng = event.nativeEvent.cordinate.longtitude;

    setSelectedLocation({ lat: lat, lng: lng });
  }

  return (
    <MapView
      style={styles.map}
      initialRegion={region}
      onPress={selectLocationHandler}
    >
      {selectedLocation && <Marker
        title="Picked Location"
        coordinate={{
          latitude: selectedLocation.lat,
          longitude: selectedLocation.lng,
        }}
      />}
    </MapView>
  );
}

export default Map;

const styles = StyleSheet.create({
  map: {
    flex: 1,
  },
});
