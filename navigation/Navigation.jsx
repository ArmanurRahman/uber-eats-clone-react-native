import { createStackNavigator } from "@react-navigation/stack";
import React from "react";
import { Platform } from "react-native";
import HomeScreen from "../screens/shop/HomeScreen";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons";
import SearchFoorScreen from "../screens/food/SearchFood";
import OrderScreen from "../screens/user/OrdersScreen";
import AccountScreen from "../screens/user/AccountScreen";
import EatPassScreen from "../screens/other/EatPassScreen";

const defaultHeaderOptions = {
    headerStyle: {
        backgroundColor: {},
    },
};
const ShopStackNavigator = createStackNavigator();

export const ShopNavigator = () => {
    return (
        <ShopStackNavigator.Navigator>
            <ShopStackNavigator.Screen
                name='HomeScreen'
                component={HomeScreen}
            />
        </ShopStackNavigator.Navigator>
    );
};

const SearchStackNavigator = createStackNavigator();

export const SearchNavigator = () => {
    return (
        <SearchStackNavigator.Navigator>
            <SearchStackNavigator.Screen
                name='HomeScreen'
                component={SearchFoorScreen}
            />
        </SearchStackNavigator.Navigator>
    );
};

const OrderStackNavigator = createStackNavigator();

export const OrderNavigator = () => {
    return (
        <OrderStackNavigator.Navigator>
            <OrderStackNavigator.Screen
                name='HomeScreen'
                component={OrderScreen}
            />
        </OrderStackNavigator.Navigator>
    );
};

const AccountStackNavigator = createStackNavigator();

export const AccountNavigator = () => {
    return (
        <AccountStackNavigator.Navigator>
            <AccountStackNavigator.Screen
                name='HomeScreen'
                component={AccountScreen}
            />
        </AccountStackNavigator.Navigator>
    );
};

const EatPassStackNavigator = createStackNavigator();

export const EatPassNavigator = () => {
    return (
        <EatPassStackNavigator.Navigator>
            <EatPassStackNavigator.Screen
                name='HomeScreen'
                component={EatPassScreen}
            />
        </EatPassStackNavigator.Navigator>
    );
};

const MenuTabNavigator = createBottomTabNavigator();

export const MenuNavigator = () => {
    return (
        <MenuTabNavigator.Navigator
            screenOptions={({ route }) => ({
                tabBarIcon: ({ focused, color, size }) => {
                    let iconName;
                    if (route.name === "Home") {
                        iconName = "ios-home";
                    } else if (route.name === "Search") {
                        iconName = "ios-search";
                    } else if (route.name === "Order") {
                        iconName = "ios-list";
                    } else if (route.name === "Acount") {
                        iconName = "md-person";
                    } else if (route.name === "EatPass") {
                        iconName = "md-card";
                    }
                    return <Ionicons name={iconName} size={23} color='black' />;
                },
            })}
        >
            <MenuTabNavigator.Screen name='Home' component={ShopNavigator} />
            <MenuTabNavigator.Screen
                name='Search'
                component={SearchNavigator}
            />
            <MenuTabNavigator.Screen name='Order' component={OrderNavigator} />
            <MenuTabNavigator.Screen
                name='Acount'
                component={AccountNavigator}
            />
            <MenuTabNavigator.Screen
                name='EatPass'
                component={EatPassNavigator}
            />
        </MenuTabNavigator.Navigator>
    );
};
