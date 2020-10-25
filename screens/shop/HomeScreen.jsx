import React from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";
import Banner from "../../conponents/Baner";
import { dummyData } from "../../data/banner-data";
import SlideOptions from "../../conponents/SlideOptions";

const HomeScreen = (props) => {
    return (
        <ScrollView style={styles.screen}>
            <Banner data={dummyData} />
            <SlideOptions />
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    screen: {
        backgroundColor: "white",
    },
});

export default HomeScreen;
