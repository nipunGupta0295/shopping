import React from 'react'
import { View, Image, FlatList, StyleSheet } from 'react-native'
import { useSelector } from 'react-redux';
import img from '../assets/images/pencil.png';
import Product from './Product';
import NavBar from './NavBar';
const styles = StyleSheet.create({
    list: {
        alignItems: "center"
    }
})

function Products(props) {
    let data = useSelector(state => state);
    return (
        <>
        <NavBar />
        <View>
            <FlatList
                contentContainerStyle={styles.list}
                data={data.products}
                renderItem={(item) => <Product item={item} navigation={props.navigation} />}
                keyExtractor={item => item.id}
            />
        </View>
        </>
    )
}

export default Products
