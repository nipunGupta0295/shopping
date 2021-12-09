import React from 'react'
import { View, Text, ScrollView, StyleSheet } from 'react-native'
import Banner from './Banner'
import img from '../assets/images/shop.png'
import { useSelector, useDispatch } from 'react-redux'
import NavBar from './NavBar'

const styles = StyleSheet.create({
    ScrollView:{
        alignItems: "center"
    }
})

function Home({navigation}) {
    console.log("banner", img);
    return (
        <>
        <NavBar />
        <ScrollView contentContainerStyle={styles.ScrollView}>
            <Banner src={img} navigation={navigation} />
        </ScrollView>
        </>
    )
}

export default Home
