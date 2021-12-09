import React from 'react';
import { Text, View, StyleSheet, Button } from 'react-native';
import { useToast } from 'react-native-toast-notifications';
import { useDispatch } from 'react-redux';
import * as action from '../redux/shoppingActions'

const styles = StyleSheet.create({
    container: {
        width: "100%",
        justifyContent: "center",
        alignItems: "center",
        marginBottom: 20
    },  
    buycart: {
        marginTop: 50,
        backgroundColor: "lightgrey",
        alignItems: 'center',
        width: "70%",
        padding: 20,
        borderRadius: 20
    },
    text: {
        fontSize: 20,
        marginBottom: 15,

    }
})

function BuyCart(props) {

    const dispatch = useDispatch();
    const toast = useToast();

    return (
        <View style={styles.container}>
            <View style={styles.buycart}>
                <Text style={styles.text}>Total Cart value: Rs.{props.totalprice}</Text>
                {props.totalprice != 0 && <Button title="     Buy      " onPress={() => {
                    dispatch(action.emptyCart())
                    toast.show("purchase successful", { type: "success" });
                }} />}
            </View>
        </View>

    )
}

export default BuyCart
