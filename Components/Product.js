import React from 'react'
import { View, StyleSheet, Alert, Image } from 'react-native'
import NavBar from './NavBar'
const styles = StyleSheet.create({
    imgBackground: {
        alignItems: "center",
        justifyContent: "center",
        padding: 10,
        backgroundColor: "white",
        width: "70%",
        marginTop: 10,
        marginBottom: 10,
        borderRadius: 20
    },
    img: {
        resizeMode: "contain",
        width: 200,
        height: 200
    }
})

function Product(props) {
    //console.log("pro", props);
    return (
        <>
            <View
                style={styles.imgBackground}
                onStartShouldSetResponder={() => true}
                onResponderRelease={() => props.navigation.navigate("ProductDetails", { details: props.item.item })}
            >
                <Image style={styles.img} source={props.item.item.src} />
            </View>
        </>
    )
}

export default Product
