import { View, Text, FlatList } from "react-native";
import CountryGridTile from "../components/CountryGridTile";
import { STATES } from "../data/dummy-data";


export default function HomeScreen(props){
    function renderVacationItem(itemData){
        function pressHandler(){
            props.navigation.navigate("WorldVacationScreen",{
                stateId: itemData.item.id,
            });
        }

        return (
            <CountryGridTile 
                name={itemData.item.name}
                color={itemData.item.color}
                onPress={pressHandler}
            />
        )
    }

    return (
        <View>
        <FlatList
        data={STATES}
        keyExtractor={(item) => {return item.id;}}
        renderItem={renderVacationItem}
        numColumns={2}
        />
        </View>
    );
}

