import { StyleSheet, Dimensions } from "react-native";

const { width } = Dimensions.get('window')

const styles = StyleSheet.create({

    favorite: {
        width: width * 0.28
    },
    favoriteView: {
        width: width * 0.26,
        height: width * 0.26

    },
    favoriteImage: {
        width: width * 0.26,
        height: width * 0.26,
        borderRadius: 10
    },



})

export default styles;