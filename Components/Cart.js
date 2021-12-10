import React from 'react'
import { FlatList, ScrollView, View, StyleSheet } from 'react-native'
import { useSelector, useDispatch } from 'react-redux';
import CartItem from './CartItem';
import BuyCart from './BuyCart';

let styles = StyleSheet.create({
    container: {
        justifyContent: "center",
        alignItems: "center"
    },
    cartitem: {
        marginBottom: 100
    }
})

function Cart() {
    const state = useSelector(state => state)
    const cart = state.cart;
    console.log("cart", cart);

    let totalval = 0;
    cart.forEach((item) => {
        totalval += item.qty*item.Price;
    })
    return (
        <View style={styles.container}>
            <BuyCart totalprice={totalval}/>
            <FlatList
                style={styles.cartitem}
                data={cart}
                renderItem={(item) => <CartItem item={item}/>}
                keyExtractor={(item) => item.id}
            />
        </View>
    )
}

export default Cart
