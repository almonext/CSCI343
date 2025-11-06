import { View, Text, Pressable, Image, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';

export default function NewsItem(props) {
    const navigation = useNavigation();
    function selectNewsItemHandler() {
        navigation.navigate('NewsDetail', {
            newsId: props.id,
        });
    }
    return (
        <View
            style={[
                styles.newsItemContainer,
                { backgroundColor: props.listIndex % 2 == 0 ? "#CCC" : "#fff"},
]}>
            <Pressable onPress={selectNewsItemHandler}>
                <View style={styles.ImageContainer}>
                    <Image style={styles.image} source={{ uri: props.imageUrl }} />
                </View>
                <View style={styles.infoContainer}>
                    <Text style={styles.headline}>{props.headline}</Text>
                    <Text style={styles.dateAuthorAgency}>
                        {props.date} | {props.author} | {props.agency}
                    </Text>
                    <Text style={styles.description}>{props.description}</Text>

                </View>
            </Pressable>
        </View>
    );
}

const styles = StyleSheet.create({
    newsItemContainer: {
        paddingHorizontal: 5,
        paddingTop: 5,
        paddingBottom: 10,
        borderRadius: 7,
    },
    ImageContainer: {
        paddingHorizontal: 5,
        paddingTop: 5,
        marginBottom: 10,
        borderRadius: 7
    },
    ImageContainer: {
        height: 300
    },
    image: {
        height: "100%",
        resizeMode: "cover",
        borderRadius: 7
    },
    infoContainer: {
        flex: 1,
        alignItems: "center"
    },
    headline: {
        fontSize: 35,
        fontFamily: "playfairBold",
        paddingBottom: 5
    },
    dateAuthorAgency: {
        fontSize: 20,
        fontFamily: "playfair",
        paddingBottom: 5
    },
    description: {
        textAlign: "center",
        width: "100%",
        fontsize: 15,
        fontfamily: "playfair",
        paddingBottom: 5
    }

});

