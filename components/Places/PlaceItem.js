import { Image, StyleSheet, Text, View } from "react-native";
import { Colors } from "../../constants/colors";

function PlaceItem({ place, onSelect }) {
  return (
    <Pressable
      style={({ presed }) => [styles.item, presed && styles.presed]}
      onPress={onSelect.bind(this, place.id)}
    >
      <Image style={styles.image} source={{ uri: place.imageUri }} />
      <View>
        <Text style={styles.title}> {place.title} </Text>
        <Text style={styles.adress}> {place.address} </Text>
      </View>
    </Pressable>
  );
}

export default PlaceItem;

const styles = StyleSheet.create({
  item: {
    flexDirection: "row",
    alignItems: "flex-start",
    borderRadius: 6,
    marginVertical: 12,
    backgroundColor: Colors.primary500,
    elevation: 2,
    shadowColor: "black",
    shadowOffset: { width: 1, height: 1 },
    shadowOpacity: 0.15,
    shadowRadius: 2,
  },
  presed: {
    opacity: 0.9,
  },
  image: {
    flex: 1,
    borderBottomLeftRadius: 4,
    borderTopLeftRadius: 4,
    height: 100,
  },
  info: {
    flex: 2,
    padding: 12,
  },
  title: {
    fontWeight: "bold",
    fontSize: 18,
    color: Colors.gray700,
  },
  adress: {
    fontSize: 12,
    color: Colors.gray700,
  },
});
