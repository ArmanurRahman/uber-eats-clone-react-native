import React from "react";
import { View, Text, StyleSheet, Image, FlatList } from "react-native";
import slideOptionData from "../../data/slide-option-data";
import SearchGridTile from "../../conponents/SearchGridTile";

const SearchFoodScreen = (props) => {
    const renderItem = (itemDate) => {
        return (
            <View style={styles.screen}>
                <SearchGridTile
                    title={itemDate.item.title}
                    imageURL={itemDate.item.imageURL}
                />
            </View>
        );
    };
    return (
        <View>
            <FlatList
                data={slideOptionData}
                keyExtractor={(item, index) => item.title}
                renderItem={renderItem}
                numColumns={2}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
});

export default SearchFoodScreen;
