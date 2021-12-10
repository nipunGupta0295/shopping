import React from 'react'
import { View, StyleSheet, Alert, Image, Text, TouchableOpacity } from 'react-native'
import { useSelector, useDispatch } from 'react-redux';
import { useToast } from 'react-native-toast-notifications';
import * as action from '../redux/shoppingActions';

const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        width: "100%",
        borderTopWidth: 0.5,
        borderBottomWidth: 0.5,
        borderColor: "lightgrey",
        fontStyle: "Mukta"
    },

    imgBackground: {
        alignItems: "center",
        justifyContent: "center",
        padding: 10,
        backgroundColor: "white",
        width: "35%",
        marginTop: 10,
        marginBottom: 10,
        borderRadius: 20
    },
    img: {
        resizeMode: "contain",
        width: 100,
        height: 100
    },
    detailContainer: {
        width: "55%",
        justifyContent: "space-between",
        padding: 20,

    },
    buybtn: {
        flexDirection: "row",
        alignItems: "center",
        borderRadius: 10,
        borderColor: "#E40046",
        borderWidth: 1,
        width: 80,
        height: 30,
    },
    plus: {
        flex: 1,
        height: 30,
        backgroundColor: "#E40046",
        alignItems: "center",
        justifyContent: "center",
        borderTopRightRadius: 10,
        borderBottomRightRadius: 10
    },

    buttonContainer: {
        flexDirection: "row",
        justifyContent: "space-between"
    },  
    buytxt: {
        flex: 2,
        height: 30,
        alignItems: "center",
        justifyContent: "center",
        borderRadius: 20,
    },

    cms: {
        backgroundColor: "rgba(0, 0, 0, 0.05)",
        width: "50%",
        borderRadius: 10,
        borderWidth: 1,
        borderColor: "grey",
        height: 30,
        alignItems: "center",
        justifyContent: "center"
    },
    offer: {
        backgroundColor: "rgba(0, 186, 101, 1)",
        height: 20,
        position: "absolute",
        paddingLeft: 3,
        paddingRight: 3,
        zIndex: 10,
        top: 7,
        left: -5

    }

})

function Product(props) {
    //console.log("pro", props);
    const state = useSelector(state=>state);
    let cart = state.cart;
    let item = cart.find((item) => {
        return item.id == props.item.item.id
    })
    console.log("state", item);
    let num = item != undefined?item.qty: 0;
    //let num = 0;
    const dispatch = useDispatch();
    let toast = useToast();
    return (
        <View style={styles.container}>
            <View style={styles.offer}>
                <Text style={{fontSize: 12}}>₹10 ऑफ</Text>
            </View>
            <View
                style={styles.imgBackground}
                onStartShouldSetResponder={() => true}
                onResponderRelease={() => props.navigation.navigate("ProductDetails", { details: props.item.item })}
            >
                <Image style={styles.img} source={props.item.item.src} />
            </View>
            <View style={styles.detailContainer}>
                <View>
                    <Text style={{ color: "black" }}>{props.item.item.name}</Text>
                    <Text style={{ color: "black" }}>₹{props.item.item.Price}</Text>
                </View>

                <View style={styles.buttonContainer}>
                    <View style={styles.cms}>
                        <Text style={{ color: "black" }}>{num}pc</Text>
                    </View>
                    <TouchableOpacity style={styles.buybtn} title="Add to cart" onPress={() => {
                        dispatch(action.addToCart(props.item.item.id))
                        toast.show("1 item added to cart", { type: "success" })
                    }}>
                        <View style={styles.buytxt}><Text style={{ color: "#E40046" }}>खरीदें</Text></View>
                        <View style={styles.plus}><Text>+</Text></View>
                    </TouchableOpacity>
                </View>

            </View>
        </View>
    )
}

export default Product
