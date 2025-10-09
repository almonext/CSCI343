<<<<<<< HEAD
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { StyleSheet, View, ScrollView, Text} from "react-native";

import Title from "../components/Title"
import Colors from "../constants/colors";



export default function OrderReviewScreen(props) {
    const insets = useSafeAreaInsets()

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
                <Title>Order Summary</Title>
                </View>
                <ScrollView style={styles.scrollContainer}>

                    <View style={styles.subTitleContainer}>
                        <Text style={styles.subTitle}>
                            your order has been placed with your order details below
                        </Text>
                    </View>

                    <View style={styles.repairTimeContainer}>
                        <Text style={styles.repairTime}>service Time:</Text>
                        <Text style={styles.subRepairTime}>{props.repairTime}</Text>
                        <Text style={styles.service}>service:</Text>
                        {props.services.map((item) => {
                            if (item.value){
                                return (
                                    <Text key={item.id} style={styles.subRepairTime}>
                                        {item.name}
                                    </Text>
                                )
                            }
                        })}
                        
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
  subTitleContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginVertical: 10

  },
  subTitle: {
    fontSize: 22,
    fontWeight: "bold",
    textAlign: "center",
    color: Colors.primary500
  },
 repairTimeContainer: {
    flex:3
  },
  repairTime: {
    fontSize: 20,
    color: Colors.primary500,
    fontFamily: "Note"
  },
  service: {
    fontSize: 20,
    color: Colors.primary500,
    fontFamily: "Note"
  },
  subRepairTime: {
  textAlign: "center",
  fontSize: 17,
  color: Colors.primary500,
  fontWeight: "bold"
  }
=======
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { StyleSheet, View, ScrollView, Text} from "react-native";

import Title from "../components/Title"
import Colors from "../constants/colors";
import NavButton from "../components/NavButton";
import { LinearGradient } from "expo-linear-gradient";



export default function OrderReviewScreen(props) {
    const insets = useSafeAreaInsets()

    return (
        <LinearGradient
        colors={[Colors.accent500, Colors.primary800, Colors.accent500, Colors.primary800]}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 1 }}
        style={styles.container}
>
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
                <Title>Order Summary</Title>
                </View>
                <ScrollView style={styles.scrollContainer}>

                    <View style={styles.subTitleContainer}>
                        <Text style={styles.subTitle}>
                            your order has been placed with your order details below
                        </Text>
                    </View>

                    <View style={styles.repairTimeContainer}>
                        <Text style={styles.repairTime}>Service Time:</Text>
                        <Text style={styles.subRepairTime}>{props.repairTime}</Text>
                        <Text style={styles.service}>Service:</Text>
                        {props.services.map((item) => {
                            if (item.value){
                                return (
                                    <Text key={item.id} style={styles.subRepairTime}>
                                        {item.name}
                                    </Text>
                                )
                            }
                        })}
                        
                        
                    </View>
                    <Text style={styles.repairTime}>Newsletter:</Text>
                        <Text style={styles.subRepairTime}>
                            {props.newsletter ? "Newsletter" : ""}
                        </Text>
                    <Text style={styles.repairTime}>Membership:</Text>
                        <Text style={styles.subRepairTime}>
                            {props.rentalMembership ? "Rental Membership" : ""}
                        </Text>

                        <View style={styles.subTitleContainer}>
                            <Text style={styles.subTitle}>SubTotal: ${props.price.toFixed(2)}</Text>
                            <Text style={styles.subTitle}>Sales Tax: ${(props.price * 0.06).toFixed(2)}</Text>
                            <Text style={styles.subTitle}>Total: ${(props.price + props.price * 0.06).toFixed(2)}</Text>
                            
                        </View>

                <View style={styles.buttonContainer}>
                    <NavButton onPress={props.onNext}>Return Home</NavButton>
                </View>


                </ScrollView>
            </View>
        </LinearGradient>
    );
}

const styles = StyleSheet.create({
    container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    width: "100%"
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
  subTitleContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginVertical: 10

  },
  subTitle: {
    fontSize: 22,
    fontWeight: "bold",
    textAlign: "center",
    color: Colors.primary500
  },
 repairTimeContainer: {
    flex:3
  },
  repairTime: {
    fontSize: 20,
    color: Colors.primary500,
    fontFamily: "Note"
  },
  service: {
    fontSize: 20,
    color: Colors.primary500,
    fontFamily: "Note"
  },
  subRepairTime: {
  textAlign: "center",
  fontSize: 17,
  color: Colors.primary500,
  fontWeight: "bold"
  },
  buttonContainer: {
    alignItems: "center"
  }
>>>>>>> bf287a4 (Work on week 7 and update 5 & 6)
})