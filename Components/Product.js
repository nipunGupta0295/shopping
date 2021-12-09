import React from 'react'
import { View, StyleSheet, Alert, Image } from 'react-native'
import NavBar from './NavBar'
const styles = StyleSheet.create({
    imgBackground: {
        alignItems: "center",
        justifyContent: "center",
        padding: 100,
        backgroundColor: "grey",
        height: "10%",
        marginTop: 10,
        marginBottom: 10

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
