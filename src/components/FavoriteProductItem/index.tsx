import React from 'react'
import { View, TouchableOpacity, Text, Image } from 'react-native'
import { Product } from '../../models'
import styles from './style'
import { AntDesign } from '@expo/vector-icons';


type productProps = {
    product: Product,
    prodType: string
}

function index({ product, prodType }: productProps) {
    return (
        <TouchableOpacity style={prodType === "favorite" ? styles.favorite : styles.main}>
            <View style={prodType === "favorite" ? styles.favoriteView : styles.mainView}>
                <Image
                    source={{ uri: product.image }}
                    resizeMode="stretch"
                    style={prodType === "favorite" ? styles.favoriteImage : styles.mainImage}
                />

                {prodType === "favorite" && parseInt(product.id) % 2 == 1 && (
                    <View style={styles.LabeledFav}>
                        <Text style={{ fontSize: 9, fontWeight: '500' }}>Öne Çıkan</Text>
                    </View>)
                }

                <TouchableOpacity>
                    <AntDesign style={{ position: 'absolute', right: 4, bottom: 5 }} name="heart" size={23} color="white" />
                </TouchableOpacity>

            </View>
        </TouchableOpacity>

    )
}

export default index