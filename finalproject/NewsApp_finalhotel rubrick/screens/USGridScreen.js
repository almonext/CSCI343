import { FlatList } from "react-native";
import CountryGridTile from "../components/CountryGridTile";
import { US_REGIONS } from "../data/US_Regions";

export default function USGridScreen({ navigation }) {
  function renderRegion(itemData) {
    function pressHandler() {
      navigation.navigate("USHotelsByState", {
        stateId: itemData.item.id,
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
      data={US_REGIONS}
      keyExtractor={(item) => item.id}
      renderItem={renderRegion}
      numColumns={2}
    />
  );
}