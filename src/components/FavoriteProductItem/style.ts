import { StyleSheet, Dimensions } from "react-native";

const { width } = Dimensions.get('window')

const styles = StyleSheet.create({

    favorite: {
        width: width * 0.29
    },
    favoriteView: {
        width: width * 0.27,
        height: width * 0.27

    },
    favoriteImage: {
        width: width * 0.27,
        height: width * 0.27,
        borderRadius: 10
    },
    LabeledFav: {
        transform: [{ rotate: "45deg" }],
        position: 'absolute',
        right: -25,
        top: 12,
        backgroundColor: 'white',
        paddingVertical: 3,
        paddingHorizontal: 20
    },


    //---------

    main: {
        width: width * 0.46,
        height: width * 0.46,
        //backgroundColor: 'red',
        alignItems: 'center'
    },
    mainView: {
        width: width * 0.42,
        height: width * 0.42
    },
    mainImage: {
        width: width * 0.43,
        height: width * 0.43,
        borderRadius: 12
    },
})

export default styles;