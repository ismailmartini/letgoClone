import React from 'react'
import { View, TouchableOpacity, Text, Image } from 'react-native'
import { Product } from '../../models'
import styles from './style'
import { AntDesign } from '@expo/vector-icons';


type productProps = {
    product: Product
}

function index({ product }: productProps) {
    return (
        <TouchableOpacity style={styles.favorite}>
            <View style={styles.favoriteView}>
                <Image
                    source={{ uri: product.image }}
                    resizeMode="stretch"
                    style={styles.favoriteImage}
                />
                <TouchableOpacity>
                    <AntDesign style={{ position: 'absolute', right: 4, bottom: 5 }} name="heart" size={24} color="white" />
                </TouchableOpacity>

            </View>
        </TouchableOpacity>

    )
}

export default index