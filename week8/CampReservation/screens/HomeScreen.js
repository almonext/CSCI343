import { ImageBackground, Modal, Pressable, StyleSheet, View, Platform, Button, Text } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import DateTimePicker from "@react-native-community/datetimepicker";
import { useState } from "react";

import Title from "../components/Title";
import NavButton from "../components/NavButton";
import Colors from "../constants/colors";






export default function HomeScreen(){
    // set safe area Screen Boundries
    const insets = useSafeAreaInsets();

    //Check In State and Functions
    const [checkIn, setCheckIn] = useState(new Date());
    const [showCheckIn, setShowCheckIn] = useState(false);

    function showCheckInPicker(){
        setShowCheckIn(true);
    }

    function hideCheckInPicker(){
        setShowCheckIn(false);
    }

    function onChangeCheckIn(event, selectedDate){
        const currentDate = selectedDate;
        if (Platform.OS === "android"){
            hideCheckInPicker();
        }
        setCheckIn(currentDate);
    }

     //Check Out State and Functions
    const [checkOut, setCheckOut] = useState(new Date());
    const [showCheckOut, setShowCheckOut] = useState(false);

    function showCheckOutPicker(){
        setShowCheckOut(true);
    }

    function hideCheckOutPicker(){
        setShowCheckOut(false);
    }
    function onChangeCheckOut(event, selectedDate){
        const currentDate = selectedDate;
        if (Platform.OS === "android"){
            hideCheckOutPicker();
        }
        setCheckOut(currentDate);
    }

    //Guest Count State and Functions
    const guestCounts = [1,2,3,4,5,6,7,8];
    const [numGuests, setNumGuests] = useState(0);
    const [showNumGuests, setShowNumGuests] = useState(false);
  
  
    function showNumGuestsPicker(){
        setShowNumGuests(true);
    }

    function hideNumGuestsPicker(){
        setShowCheckOut(false);
    }
     function onChangeNumGuests(index){
        setNumGuests(index);
    }
 //Bed Count State and Functions
 const bedCounts = [1, 2, 3, 4];
 const [numBeds, setNumBeds] = useState(0);
 const [showNumBeds, setShowNumBeds] = useState(false);

    function showNumBedsPicker(){
        setShowNumGuests(true);
    }

    function hideNumBedsPicker(){
        setShowCheckOut(false);
    }
     function onChangeNumBeds(index){
        setNumGuests(index);
    }

    return (
        <ImageBackground
        source={require("../assets/images/camping.jpg")}
        resizeMode="cover"
        style={styles.rootContainer}
        imageStyle={styles.backgroundImage}
        >

            <View
                style={[
                    styles.rootContainer,
                    {
                        paddingTop: insets.top,
                        paddingBottom: insets.bottom,
                        paddingLeft: insets.left,
                        paddingRight: insets.right,
                    },
                ]}
            >
                <View style={styles.titleContainer}>
                    <Title>Mountain Retreat</Title>
                </View>

                <View style={styles.rowContainer}>
                    <View style={styles.dateContainer}>
                        <Text style={styles.dateLabel}>Check In:</Text>
                        <Pressable onPress={showCheckInPicker}>
                            <Text style={styles.dateText}>{checkIn.toDateString()}</Text>
                        </Pressable>
                    </View>

                    <View style={styles.dateContainer}>
                        <Text style={styles.dateLabel}>Check Out:</Text>
                        <Pressable onPress={showCheckOutPicker}>
                            <Text style={styles.dateText}>{checkOut.toDateString()}</Text>
                        </Pressable>
                    </View>
                </View>

                <View>
                    {showCheckIn && Platform.OS === "android" && (
                        <DateTimePicker 
                            testID="dateTimePicker1"
                            value={checkIn}
                            mode={"date"}
                            display="spinner"
                            onChange={onChangeCheckIn}
                            />
                    )}

                    {showCheckIn && Platform.OS === "ios" && (
                        <Modal
                        animationType="slide"
                        transparent={true}
                        supportedOrientations={["portrait", "landscape"]}
                        >
                            <View style={styles.centerModalView}>
                                <View style={styles.modalView}>
                                    <DateTimePicker 
                                        testID="dateTimePicker2"
                                        value={checkIn}
                                        mode={"date"}
                                        display="spinner"
                                        onChange={onChangeCheckIn}
                                        />

                                        <Button title="Confirm" onPress={hideCheckInPicker} />
                                </View>
                            </View>
                        </Modal>
                    )}
                    
                    {showCheckOut && Platform.OS === "android" && (
                        <DateTimePicker 
                            testID="dateTimePicker3"
                            value={checkOut}
                            mode={"date"}
                            display="spinner"
                            onChange={onChangeCheckOut}
                            />
                    )}

                    {showCheckIn && Platform.OS === "ios" && (
                        <Modal
                        animationType="slide"
                        transparent={true}
                        supportedOrientations={["portrait", "landscape"]}
                        >
                            <View style={styles.centerModalView}>
                                <View style={styles.modalView}>
                                    <DateTimePicker 
                                        testID="dateTimePicker4"
                                        value={checkIn}
                                        mode={"date"}
                                        display="spinner"
                                        onChange={onChangeCheckOut}
                                        />

                                    <Button title="Confirm" onPress={hideCheckOutPicker} />
                                </View>
                            </View>
                        </Modal>
                    )}
                </View>

                <View style={styles.rowContainer}>
                    <Text style={styles.dateLabel}>
                        Number of Guests:
                    </Text>
                    <Pressable onPress={showNumGuestsPicker}>
                        <View style={styles.dateTextContainer}>
                            <Text style={styles.dateText}>{guestCounts[numGuests]}</Text>
                        </View>
                    </Pressable>
                </View>
            </View>
        </ImageBackground>

        
    )
}

const styles = StyleSheet.create({
    rootContainer: {
        flex: 1,
        alignItems: "center"
    },
    backgroundImage: {
        opacity: 0.3
    },
    titleContainer: {
        padding: 7,
        marginVertical: 30,
        marginHorizontal: 30,
        borderWidth: 2,
        borderRadius: 5,
        borderColor: Colors.primary500,
        backgroundColor: Colors.primary300,
        width: 400
    },
    scrollContainer: {

    },
    rowContainer: {
        flexDirection: "row",
        justifyContent: "space-around",
        alignItems: "center",
        paddingBottom: 20,
        marginBottom: 20
    },
    dateContainer: {
        backgroundColor: Colors.primary300o5,
        padding: 10
    },
    dateLabel: {
        color: Colors.primary500,
        fontFamily: "Camp",
        textShadowColor: "black",
        textShadowOffset: { width: 2, height: 2},
        textShadowRadius: 2,
    },
    dateTextContainer: {
        backgroundColor: Colors.primary300o5,
        padding: 10,
        paddingHorizontal: 30
    },
    dateText: {
        color: Colors.primary800,
        fontSize: 20,
        fontWeight: "bold"
    },
    centerModalView: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        marginTop: 22
    },
    modalView: {
        margin: 20,
        backgroundColor: Colors.primary300,
        borderRadius: 20,
        padding: 35,
        alignItems: "center",
        shadowColor: "#000",
        shadowOffset: {width: 0, height: 2},
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5
    }
});