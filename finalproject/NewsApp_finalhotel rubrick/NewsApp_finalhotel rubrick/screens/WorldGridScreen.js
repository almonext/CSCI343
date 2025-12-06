import { FlatList } from "react-native";
import CountryGridTile from "../components/CountryGridTile";
import { WORLD_REGIONS } from "../data/WorldRegions";

export default function WorldGridScreen({ navigation }) {
  function renderRegion(itemData) {
    function pressHandler() {
      navigation.navigate("HotelsByCountry", {
        countryId: itemData.item.id,
        
      });
    }

    return (
      <CountryGridTile
        name={itemData.item.name}
        color={itemData.item.color}
        onPress={pressHandler}
      />
    );
  }

  return (
    <FlatList
      data={WORLD_REGIONS}
      keyExtractor={(item) => item.id}
      renderItem={renderRegion}
      numColumns={2}
    />
  );
}