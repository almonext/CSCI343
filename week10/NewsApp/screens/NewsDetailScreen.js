import { StyleSheet, Text, View, Image } from 'react-native';
import { useLayoutEffect, useState } from 'react';
import { LISTINGS } from '../models/dummy_data';
import Colors from '../constants/colors';
import BookmarkButton from '../components/BookmarkButton';

export default function NewsDetailScreen(props) {
    const NewsId = props.route.params.newsId;
    const selectedNews = LISTINGS.find((news) => news.id === NewsId);

    const [pressed, setPressed] = useState(false);

    function headerButtonPressHandler() {
        setPressed(!pressed);
    }

    useLayoutEffect(() => {
        props.navigation.setOptions({
            title: "Current News",
            headerRight: () => {
                return (
                    <BookmarkButton pressed={pressed} onPress={headerButtonPressHandler} />
                );
        
    },
    })
    

}, [props.navigation, headerButtonPressHandler, pressed]);

  return (
    <View style={styles.rootContainer}>
        <View style={styles.ImageContainer}>
            <Image style={styles.image} source={{ uri: selectedNews.imageUrl }} />
        </View>

        <View style={styles.infoContainer}>
            <Text style={styles.headline}>{selectedNews.headline}</Text>
            <Text style={styles.dateAuthorAgency}>
                {selectedNews.date} | {selectedNews.author} | {selectedNews.agency}
            </Text>
            <Text style={styles.description}>{selectedNews.description}</Text>
    </View>
    </View>

  );
}

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
  },
    ImageContainer: {
        marginVertical: 10,
        height: 300,
    },
    image: {
        height: "100%",
        resizeMode: "cover",
        borderRadius: 7,
    },
    infoContainer: {
        borderRadius: 7,
        backgroundColor: Colors.primary500o8,
        flex: 1,
        alignItems: "center",
    },
    headline: {
        color: Colors.primary300,
        fontSize: 35,
        fontFamily: "playfairBold",
        paddingBottom: 5
    },
    dateAuthorAgency: {
        color: Colors.primary300,
        fontSize: 25,
        fontFamily: "playfair",
        paddingBottom: 5
    },
    description: {
        color: Colors.primary300,
        width: "100%",
        textAlign: "justify",
        fontSize: 15,
        fontFamily: "playfair",

    },

});
