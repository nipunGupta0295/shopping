import React from 'react'
import { View, Image, ScrollView, StyleSheet, Alert } from 'react-native'

const styles = StyleSheet.create({
    imgBackground: {
        alignItems: "center",
        justifyContent: "center",
        padding: 100,
        backgroundColor: "grey",
        height: "10%",
        width: "50%",
        marginTop: 10,
        marginBottom: 10

    },
    img: {
        width: 200,
        height: 200
    }
})

function Banner(props) {
    return (
        <View
            style={styles.imgBackground}
            onStartShouldSetResponder={() => true}
            onResponderRelease={() => console.log(props.navigation.navigate("Products"))}
        >
            <Image style={styles.img} source={props.src} />
        </View>

    )
}

export default Banner
