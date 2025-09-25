import { StyleSheet, Text } from 'react-native';

export default function Title(props) {
    return <Text style={StyleSheet.title}>{props.children}</Text>;
}

const styles = StyleSheet.create({
    title: {
        fontSize: 60,
        textAlign: 'center',
    },
});
