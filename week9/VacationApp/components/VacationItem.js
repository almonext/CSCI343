import { Pressable, View, StyleSheet, Image, Text} from "react-native";
import { useState } from "react";
import ImageViewModal from "../modal/ImageViewModal";


export default function VacationItem(props){
    const [modalIsVisible, setModalIsVisible] = useState(false);

    function viewImageHandler(){
        setModalIsVisible(true);
    }

    function closeImageHandler(){
        setModalIsVisible(false);
    }

    return (
        <View style={[styles.itemContainer,
            { backgroundColor: props.listIndex % 2 === 0 ? "#CCC" : "#fff"}
        ]}>
            <Pressable
            style={({ pressed }) => [
                styles.button,
                pressed ? styles.buttonPressed : null,
            ]}
            android_ripple={{ color: "#CCC" }}
            onPress={viewImageHandler}
            >
                <View style={styles.rowContainer}>
                    <Image style={styles.image} source={{ uri: props.imageUrl}} />
                    <View style={styles.infoContainer}>
                        <Text numberOfLines={2} style={styles.name}>{props.name}</Text>
                        <View style={styles.innerRowContainer}>
                            <Text numberOfLines={1} style={styles.sites}>Average cost: {props.avgCost}
                            </Text>
                            <Text style={styles.year}>
                                {props.foundedYear}
                            </Text>
                        </View>
                        <Text style={styles.rating}>Rating: {props.rating} / 5</Text>
                    </View>
                </View>
            </Pressable>
        

        <ImageViewModal
        isVisible={modalIsVisible}
        imageUrl={props.imageUrl}
        onClose={closeImageHandler}/>
        </View>
    );
}

const styles = StyleSheet.create({
    itemContainer: {
        paddingHorizontal: 5,
        paddingTop: 3,
        marginBottom: 3,
        borderRadius: 7
    },
    button: {
        flex: 1,
    },
    buttonPressed: {
        opacity: 0.5
    },
    rowContainer: {
        height: 100,
        flexDirection: "row",
        alignItems: "center",
        marginBottom: 10
    },
    image: {
        width: "25%",
        height: "100%",
        resizeMode: "contain",
        borderRadius: 15
    },
    infoContainer: {
        width: "85%",
        paddingLeft: 20,
    },
    name: {
        fontWeight: "bold",
        textAlign: "left",
        fontSize: 20,
        width: "90%"
    },
    sites: {
        maxWidth: "85%",
        fontSize: 14
    },
    year: {
        fontsize: 14,
        fontWeight: "bold",
    },
    innerRowContainer: {
        width: "85%",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
    },
    rating: {
        fontSize: 13,
        fontStyle: "italic"
    }

    
});