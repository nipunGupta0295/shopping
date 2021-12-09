import React from 'react'
import { Plus } from 'react-bootstrap-icons';
import { View, Image, Text, StyleSheet, Button, TouchableOpacity, ScrollView } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import * as action from '../redux/shoppingActions';
import vector from '../assets/images/Vector.png'
import NavBar from './NavBar'
import { useToast } from 'react-native-toast-notifications';
import Carousel from 'react-native-snap-carousel';

let styles = StyleSheet.create({
    container: {
        // alignItems: "center",
        color: "black",
        fontFamily: "Mukta",
        flexGrow: 1,
        paddingBottom: 0
    },
    imgContainer: {
        alignItems: "center",
        justifyContent: "center",
        padding: 120,
        marginLeft: 20,
        height: "10%",
        width: "90%",
    },

    img: {
        resizeMode: "contain",
        width: 200,
    },

    title: {
        fontSize: 25,
        color: "black"
        // marginLeft: 100,
        // marginBottom: 20
    },

    price: {
        fontSize: 25,
        color: "black"
        // marginLeft: 80
    },
    details: {
        marginTop: 10,
        marginBottom: 10,
        justifyContent: "flex-start",
        marginLeft: 10,
        borderTopWidth: 1,
        borderBottomWidth: 1,
        borderColor: "lightgrey"
    },
    buy: {


    },
    buybtn: {
        flexDirection: "row",
        alignItems: "center",
        borderRadius: 20,
        borderColor: "#E40046",
        borderWidth: 1,
        width: 100,
        height: 50,
    },
    plus: {
        flex: 1,
        height: 50,
        backgroundColor: "#E40046",
        alignItems: "center",
        justifyContent: "center",
        borderTopRightRadius: 20,
        borderBottomRightRadius: 20
    },
    buytxt: {
        flex: 2,
        height: 50,
        alignItems: "center",
        justifyContent: "center",
        borderRadius: 20,
    },

    whbtn: {
        alignItems: "center",
        justifyContent: "center",
        borderRadius: 20,
        borderColor: "#075E54",
        borderWidth: 1,
        width: 100,
        height: 50,
    },

    buttons: {
        flexDirection: "row",
        justifyContent: "space-around",
        borderBottomWidth: 1,
        borderColor: "lightgrey",
        padding: 20
    },
    cms: {
        backgroundColor: "rgba(0, 0, 0, 0.05)",
        padding: 10,
        alignItems: "center",
        justifyContent: "center"
    },
    whbuytxt: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between"
    },
    del: {
        height: 88,
        flexDirection: "row",
        justifyContent: "space-around",
        alignItems: "center",
        borderBottomWidth: 1,
        borderColor: "lightgrey",
    },
    deldetails: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        height: 60,
        padding: 20,
        borderBottomWidth: 1,
        borderColor: "lightgrey",

    },
    description: {
        padding: 10,
        borderBottomWidth: 1,
        borderColor: "lightgrey",
    }
    ,
    dealer: {
        padding: 10,
        borderBottomWidth: 1,
        borderColor: "lightgrey",
    }
})

function ProductDetails(props) {
    const dispatch = useDispatch();
    let details = props.route.params.details;
    let toast = useToast();
    const isCarousel = React.useRef(null)
    return (
        <>
            <NavBar />
            <View>
                <ScrollView contentContainerStyle={styles.container}>
                    <View style={styles.imgContainer}>
                        <Image style={styles.img} source={details.src} />
                    </View>
                    <View style={styles.details}>
                        <Text style={styles.title}>{details.name}</Text>
                        <Text style={styles.price}>₹{details.Price}</Text>
                    </View>
                    <View style={styles.buttons}>
                        <View style={styles.cms}>
                            <Text style={{ color: "black" }}>कमीशन ₹12.88</Text>
                        </View>
                        <TouchableOpacity style={styles.whbtn} title="Add to cart">
                            <View style={styles.whbuytxt}><Image source={vector} /><Text style={{ color: "black" }}>शेयर करें</Text></View>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.buybtn} title="Add to cart" onPress={() => {
                            dispatch(action.addToCart(details.id))
                            toast.show("1 item added to cart", { type: "success" })
                        }}>
                            <View style={styles.buytxt}><Text style={{ color: "#E40046" }}>खरीदें</Text></View>
                            <View style={styles.plus}><Text>+</Text></View>
                        </TouchableOpacity>
                    </View>

                    <View style={styles.del}>
                        <View>
                            <Text style={{ color: "rgba(0, 0, 0, 0.56)" }}>इजी रेटर्नेबल</Text>
                            <Text style={{ color: "rgba(0, 0, 0, 0.56)" }}>3 दिन के अंदर</Text>
                        </View>
                        <View>
                            <Text style={{ color: "rgba(0, 0, 0, 0.56)" }}>मुफ़्त डिलीवरी</Text>
                        </View>
                        <View>
                            <Text style={{ color: "rgba(0, 0, 0, 0.56)" }}>कैश ऑन डिलीवरी</Text>
                        </View>
                    </View>

                    <View style={styles.deldetails}>
                        <View>
                            <Text style={{ color: "black" }}>Delivery by</Text>
                        </View>
                        <View>
                            <Text style={{ color: "black" }}>7 Nov, Saturday</Text>
                            <Text style={{ color: "black" }}>If ordered before 4:05 PM</Text>
                        </View>
                    </View>

                    <View style={styles.description}>
                        <Text style={{ color: "black", fontSize: 25 }}>डिस्क्रिप्शन </Text>
                        <Text style={{ color: "rgba(0, 0, 0, 0.56)" }}>Consequat nulla ea exercitation reprehenderit id adipisicing. Ipsum nostrud veniam fugiat excepteur ipsum dolore laboris.
                            Incididunt mollit laboris amet officia veniam sunt id laboris sint nostrud tempor. Ullamco ad tempor velit est velit enim tempor mollit occaecat aute culpa.</Text>
                    </View>

                    <View style={styles.dealer}>
                        <Text style={{ color: "black", fontSize: 16 }}>निर्माता का डिटेल </Text>
                        <Text style={{ color: "rgba(0, 0, 0, 0.56)" }}>Lifestyle Int Pvt Ltd, 77 Degree Town Centre, Building No. 3, West Wing, Off HAL Airport Road, Yamlur, Bangalore-560037</Text>
                    </View>
                    <View style={styles.dealer}>
                        <Text style={{ color: "black", fontSize: 16 }}>इम्पोर्टर्स डिटेल </Text>
                        <Text style={{ color: "rgba(0, 0, 0, 0.56)" }}>Lifestyle Int Pvt Ltd, 77 Degree Town Centre, Building No. 3, West Wing, Off HAL Airport Road, Yamlur, Bangalore-560037</Text>
                    </View>
                    <View style={styles.dealer}>
                        <Text style={{ color: "black", fontSize: 16 }}>पैकर्स डिटेल </Text>
                        <Text style={{ color: "rgba(0, 0, 0, 0.56)" }}>Lifestyle Int Pvt Ltd, 77 Degree Town Centre, Building No. 3, West Wing, Off HAL Airport Road, Yamlur, Bangalore-560037</Text>
                    </View>
                </ScrollView>
            </View>
        </>
    )
}

export default ProductDetails;
