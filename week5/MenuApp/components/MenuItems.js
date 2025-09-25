import { View, Image, StyleSheet, Text } from "react-native";

export default function EventItem(props) {
    return (
    <View style={styles.itemContainer}>
        <View style={styles.titleContainer}>
            <Text style={styles.title}>{props.name}</Text>
        </View>
        <View style={styles.imageContainer}>
            <Image style={styles.image} source={props.image} />
        </View>
        <View style={styles.priceContainer}>
            <Text style={styles.price}>{props.price}</Text>
        </View>
    </View>
    );
}

const styles = StyleSheet.create({
    itemContainer: {
        marginBottom: 20
    },
    titleContainer: {
        borderWidth: 5,
        borderRadius: 5
    },
    title: {
        fontSize: 30,
        textAlign: "center",
    },
    imageContainer: {
        alignItems: "center",
        borderWidth: 3,
        borderRadius: 5,
        backgroundColor: "black"
    },
    image: {
        width: "100%",
        height: 230,
        resizeMode: "cover",
    },
    priceContainer: {
        borderWidth: 3,
        borderRadius: 5,
    },
    price: {
        fontSize: 30,
        textAlign: "center",
    }
});