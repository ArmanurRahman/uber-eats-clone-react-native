import React from "react";
import { View, Text, StyleSheet } from "react-native";
import Banner from "../../conponents/Baner";
import { dummyData } from "../../data/banner-data";

const HomeScreen = (props) => {
    return (
        <View>
            <Banner data={dummyData} />
        </View>
    );
};

const styles = StyleSheet.create();

export default HomeScreen;
