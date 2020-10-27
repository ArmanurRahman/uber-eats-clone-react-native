import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";
import Banner from "../../conponents/Banner/Baner";
import { dummyData } from "../../data/banner-data";
import SlideOptions from "../../conponents/SlideOption/SlideOptions";
import CardHolder from "../../conponents/CardHolder";
import cardData from "../../data/card-data";
import { useDispatch, useSelector } from "react-redux";
import * as shopActions from "../../store/actions/shop";

const HomeScreen = (props) => {
    const dispatch = useDispatch();

    const availableShops = useSelector((state) => state.shop.shops);
    console.log(availableShops);
    useEffect(() => {
        dispatch(shopActions.fetchShop());
    }, []);
    return (
        <ScrollView style={styles.screen}>
            <Banner data={dummyData} />
            <View style={styles.container}>
                <SlideOptions />
                <CardHolder legend='Your Favorite' data={cardData} />
            </View>
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    screen: {
        backgroundColor: "#ededed",
    },
    container: {},
});

export default HomeScreen;
