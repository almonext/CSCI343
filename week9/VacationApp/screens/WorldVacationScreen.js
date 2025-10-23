import { View, Text, FlatList, StyleSheet } from "react-native";
import { useLayoutEffect } from "react";
import { CAMPGROUNDS, STATES } from "../data/dummy-data"
import VacationItem  from "../components/VacationItem";


export default function WorldVacationScreen(props){
    const stateId = props.route?.params?.stateId;

    useLayoutEffect(() => { 
            const state = STATES.find((state) => state.id === stateId);
            props.navigation?.setOptions({title: state ? state.name : null});
        }, [stateId, props.navigation]);

        const displayedVacations = CAMPGROUNDS.filter((vacationItem) => {
            return vacationItem.stateId === stateId;
        })

        function renderVacationItem(itemData){
            const vacationItemProps = {
                name: itemData.item.name,
                imageUrl: itemData.item.imageUrl,
                avgCost: itemData.item.avgCost,
                foundedYear: itemData.item.foundedYear,
                rating: itemData.item.rating,
                listIndex: itemData.index
            };
            return <VacationItem {...vacationItemProps}/>
        }
    

    return (
        <View style={styles.container}>
            <FlatList 
            data={displayedVacations}
            keyExtractor={(item) => item.id}
            renderItem={renderVacationItem}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 16
    }
})