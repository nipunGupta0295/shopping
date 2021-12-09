import React from 'react'
import { FlatList, ScrollView, View } from 'react-native'
import { useSelector, useDispatch } from 'react-redux';
import CartItem from './CartItem';
import BuyCart from './BuyCart';
function Cart() {
    const state = useSelector(state => state)
    const cart = state.cart;
    console.log("cart", cart);

    let totalval = 0;
    cart.forEach((item) => {
        totalval += item.qty*item.Price;
    })
    return (
        <View>
            <BuyCart totalprice={totalval}/>
            <FlatList
                data={cart}
                renderItem={(item) => <CartItem item={item}/>}
                keyExtractor={(item) => item.id}
            />
        </View>
    )
}

export default Cart
