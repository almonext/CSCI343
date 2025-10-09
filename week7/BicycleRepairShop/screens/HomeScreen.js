import { View, Text, StyleSheet, ScrollView, Switch } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context"; 
import Colors from '../constants/colors';
import Title from "../components/Title"
import NavButton from "../components/NavButton";
import BouncyCheckbox from "react-native-bouncy-checkbox";

import { RadioGroup } from "react-native-radio-buttons-group";

export default function HomeScreen(props){
    //Set safe area screen Boundaries
    const insets = useSafeAreaInsets();

    return (
        <View 
            style={[
                styles.container,
                {
                    paddingTop: insets.top,
                    paddingBottom: insets.bottom,
                    paddingLeft: insets.left,
                    paddingRight: insets.right,
                },
            ]}
        >

            <View style={styles.titleContainer}>
                <Title>Bike Repairs</Title>
            </View>

            <ScrollView style={styles.scrollContainer}>
                {/*service time options*/}
                <View style={styles.radioContainer}>
                    <Text style={styles.radioHeader}>Service Time:</Text>
                    <RadioGroup
                    radioButtons={props.repairTimeRadioButtons}
                    onPress={props.onSetRepairTimeId}
                    selectedId={props.repairTimeId}
                    layout="row"
                    containerStyle={styles.radioGroup}
                    labelStyle={styles.radioGroupLabel}
                    />
                </View>
                    {/* checkbox */}
                <View style={styles.rowContainer}>
                    {/* service options*/}
                    <View style={styles.checkBoxContainer}>
                        <Text style={styles.checkBoxHeader}>Service options: </Text>
                        <View style={styles.checkBoxSubContainer}>
                            {
                                props.services.map( (item) => {
                                    return (
                                        <BouncyCheckbox
                                        key={item.id}
                                        text={item.name}
                                        onPress={props.onSetService.bind(this, item.id)}
                                        textStyle={{
                                            textDecorationLine: "none",
                                            color: Colors.primary500,
                                            fontFamily: "Note",
                                        }}
                                        innerIconStyle={{
                                            borderRadius: 0,
                                            borderColor: Colors.primary500
                                        }}
                                        iconStyle={{borderRadius: 0}}
                                        fillColor={Colors.primary500}
                                        style={styles.checkBox}
                                        />
                                    );
                                })}
                        </View>
                    </View>
                </View>
                

                {/* form container one*/}
                <View style={styles.rowContainer}>
                    {/* newsletter */}
                    <View style={styles.newsletterContainer}>
                        <View style={styles.newsletterSubContainer}>
                            <Text style={styles.newsletterLabel}>Newsletter Sign up</Text>
                            <Switch onValueChange={props.onSetNewsletter}
                            value={props.newsletter}
                            thumbColor={
                                props.newsletter ? Colors.primary500 : Colors.primary800
                            }
                            trackColor={{false: "#767577", true: "#81b0ff"}}
                            />
                        </View>
                        <View style={styles.newsletterSubContainer}>
                            <Text style={styles.newsletterLabel}>Membership Sign up</Text>
                            <Switch onValueChange={props.onSetRentalMembership}
                            value={props.rentalMembership}
                            thumbColor={
                                props.rentalMembership ? Colors.primary500 : Colors.primary800
                            }
                            trackColor={{false: "#767577", true: "#81b0ff"}}
                            />
                        </View>
                    </View>
                </View>

                <View style={styles.buttonContainer}>
                    <NavButton onPress={props.onNext}>Submit Order</NavButton>
                </View>
            </ScrollView>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
    flex: 1,
    backgroundColor: Colors.accent500,
    alignItems: 'center',
    justifyContent: 'center',
  },
  titleContainer: {
    marginBottom: 10,
    borderWidth: 2,
    borderRadius: 5,
    paddingHorizontal: 20,
    borderColor: Colors.primary500
  },
  scrollContainer: {
    flex: 1
  },
  radioContainer: {
    justifyContent: "center",
    alignItems: "center"
  },
  radioHeader: {
    fontSize: 30,
    color: Colors.primary500,
    fontFamily: "Note"
  },
  radioGroup: {
    paddingBottom: 20,
  },
  radioGroupLabel: {
    fontSize: 15,
    color: Colors.primary500,
    fontFamily: "Note"
  },
  rowContainer: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    paddingHorizontal: 24,
    paddingBottom: 20
  },
  checkBoxContainer: {
    width: "50%",
    paddingHorizontal: 12
  },
  checkBoxHeader: {
    fontSize: 20,
    color: Colors.primary500,
    fontFamily: "Note"
  },
  checkBoxSubContainer: {
    padding: 2,
    width: "100%",
  },
  checkBox: {
    padding: 2,
    width: "100%"
  },
  checkBoxLabel: {
    textDecorationLine: "none",
    color: Colors.primary500,
    fontFamily: "Note"
  },
  newsletterContainer: {
    justifyContent: "space-between"
  },
  newsletterSubContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center"
  },
  newsletterLabel: {
    color: Colors.primary500,
    fontSize: 20,
    fontFamily: "Note"
  },
  buttonContainer: {
    alignItems: "center"
  }

});