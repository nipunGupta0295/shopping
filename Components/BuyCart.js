import React from 'react';
import { Text, View, StyleSheet, Button } from 'react-native';
import { useToast } from 'react-native-toast-notifications';
import { useDispatch } from 'react-redux';
import * as action from '../redux/shoppingActions'

const styles = StyleSheet.create({
    buycart: {
        backgroundColor: "grey",
        alignItems: 'center'
    },
    text: {
        fontSize: 20

    }
})

function BuyCart(props) {

    const dispatch = useDispatch();
    const toast = useToast();

    return (
        <View style={styles.buycart}>
            <Text style={styles.text}>Total Cart value: Rs.{props.totalprice}</Text>
            {props.totalprice != 0 && <Button title="Buy" onPress={() => {
                dispatch(action.emptyCart())
                toast.show("purchase successful", { type: "success" });
            }} />}
        </View>
    )
}

export default BuyCart
