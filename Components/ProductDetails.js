import React from 'react'
import { View, Image, Text, StyleSheet, Button } from 'react-native';
import {useSelector, useDispatch} from 'react-redux';
import * as action from '../redux/shoppingActions';
import NavBar from './NavBar'

let styles = StyleSheet.create({
    container: {
        alignItems: "center"
    },
    imgContainer: {
        alignItems: "center",
        justifyContent: "center",
        padding: 100,
        marginLeft: 20,
        backgroundColor: "grey",
        height: "10%",
        width: "90%",
    },

    img: {
        resizeMode: "contain",
        width: 200,
        height: 200
    },

    title: {
        fontSize: 40,
        // marginLeft: 100,
        // marginBottom: 20
    },

    price: {
        fontSize: 30,
        // marginLeft: 80
    },
    details: {
        alignItems: "center"
    }
})

function ProductDetails(props) {
    const dispatch = useDispatch();
    let details = props.route.params.details;
    return (
        <>
        <NavBar />
        <View styles={styles.container}>
            <View style={styles.imgContainer}>
                <Image style={styles.img} source={details.src} />
            </View>
            <View style={styles.details}>
                <Text style={styles.title}>{details.name}</Text>
                <Text style={styles.price}>Price:  Rs.{details.Price}</Text>
            </View>

            <Button title="Add to cart" onPress={() => dispatch(action.addToCart(details.id))} />
        </View>
        </>
    )
}

export default ProductDetails;
