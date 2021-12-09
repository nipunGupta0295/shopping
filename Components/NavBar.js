import React from 'react'
import { View, StyleSheet, Button, Pressable } from 'react-native'
import * as RootNavigation from './RootNavigation';


const styles = StyleSheet.create({
    nav: {
        // height: 60,
        // backgroundColor: "red"
        marginBottom: 20,
    },

    cartbtn: {
        flex: 1,
        width: 10,
        height: 100
    }
})

function NavBar(props) {
    return (
        <View style={styles.nav}>
            <Button style={styles.cartbtn} title="Cart" onPress={() => RootNavigation.navigate("Cart")}/>
        </View>
    )
}

export default NavBar
