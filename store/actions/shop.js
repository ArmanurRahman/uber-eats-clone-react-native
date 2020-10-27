export const FETCH_SHOP = "FETCH_SHOP";
export const SET_SHOP = "SET_SHOP";
import shopModel from "../../models/shop";

export const fetchShop = () => {
    return async (dispatch) => {
        try {
            const response = await fetch(
                "https://uber-eats-clone-react-native.firebaseio.com/shop.json"
            );
            if (!response.ok) {
                throw new Error("Something went wrong");
            }

            const resData = await response.json();
            console.log(resData);
            dispatch({
                type: SET_SHOP,
                shops: resData,
            });

            const shops = [];
            for (const key in resData) {
                shops.push(
                    new shopModel(
                        key,
                        resData[key].address,
                        resData[key].deliveryFee,
                        resData[key].category,
                        resData[key].deliveryTome
                    )
                );
            }
        } catch (err) {
            throw err;
        }
    };
};