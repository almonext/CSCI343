import { View, StyleSheet, FlatList} from "react-native";
import NewsItem from "./NewsItem";

export default function News(props) {
 function renderNewsItem(itemData) {
    const newsItemprops = {
        id: itemData.item.id,
        type: itemData.item.type,
        headline: itemData.item.headline,
        date: itemData.item.date,
        imageUrl: itemData.item.imageUrl,
        description: itemData.item.description,
        author: itemData.item.author,
        agency: itemData.item.agency,
        listIndex: itemData.index,
    };
    return <NewsItem {...newsItemprops} />;
    }

    return (
        <View style={styles.container}>
            <FlatList 
                data={props.news}
                keyExtractor={(item) => item.id}
                renderItem={renderNewsItem} 
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
