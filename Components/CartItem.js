import React from 'react'
import { View, Image, Text, StyleSheet, Button } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import * as action from '../redux/shoppingActions';
import { useToast } from "react-native-toast-notifications";


const styles = StyleSheet.create({
    outerContainer: {
        padding: 20,
        marginTop: 20,
        marginBottom: 20,
        backgroundColor: "rgba(100, 52, 52, 0.8)"
    },

    container: {
        flexDirection: 'row',
        marginBottom: 10
    },
    imgContainer: {
        alignItems: "center",
        justifyContent: "center",
        marginLeft: 20,
        backgroundColor: "grey",
        width: "30%",

    },
    img: {
        resizeMode: "contain",
        width: 100,
        height: 100
    },
    details: {
        marginLeft: 20,
        justifyContent: 'center'
    }
})

// const dispatch = useDispatch();
function CartItem(props) {
    const dispatch = useDispatch();
    let toast = useToast();
    return (
        <View style={styles.outerContainer}>
            <View style={styles.container}>
                <View style={styles.imgContainer}>
                    <Image style={styles.img} source={props.item.item.src} />
                </View>
                <View style={styles.details}>
                    <Text>{props.item.item.id}</Text>
                    <Text>Name: {props.item.item.name}</Text>
                    <Text>Price: {props.item.item.Price}</Text>
                    <Text>Quantity: {props.item.item.qty}</Text>
                </View>
            </View>

            <View>
                <Button title="remove from cart" onPress={() => {
                    dispatch(action.removeFromCart(props.item.item.id));
                    
                }
                } />
            </View>

        </View>
    )
}

export default CartItem
