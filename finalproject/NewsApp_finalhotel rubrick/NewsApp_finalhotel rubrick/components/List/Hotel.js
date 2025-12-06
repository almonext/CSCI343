import { View, StyleSheet, FlatList} from "react-native";
import HotelItem from "./HotelItem";



export default function Hotel(props) {
 function renderHotelItem(itemData) {
    const HotelItemprops = {
        id: itemData.item.id,
        type: itemData.item.type,
        regionIds: itemData.item.regionIds,
        name: itemData.item.name,
        description: itemData.item.description,
        imageUrl: itemData.item.imageUrl,
        listIndex: itemData.index,
    };
    return <HotelItem {...HotelItemprops} />;
    }

    return (
        <View style={styles.container}>
            <FlatList 
                data={props.news}
                keyExtractor={(item) => item.id}
                renderItem={renderHotelItem} 
                showsVerticalScrollIndicator={false}
                />
                
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 16,
        backgroundColor: "black"
    }
});
