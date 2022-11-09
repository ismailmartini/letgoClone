import React, { useEffect, useState } from 'react'
import { View, ScrollView, Text } from "react-native"
import styles from './style'
import { AntDesign } from '@expo/vector-icons';
import productsAssets from '../../../assets/products'
import FavoriteProductItem from '../../components/FavoriteProductItem'
import { Product } from '../../models/index'
function index() {

    const [products, setProducts] = useState<Product[]>([])
    useEffect(() => {
        setProducts(productsAssets)

    }, [])


    return (

        <View style={styles.productsContainer}>
            {/* Render Header */}
            <View style={styles.titleProducts}>
                <Text style={styles.topicTitle}>
                    Vitrin İlanları
                </Text>
                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                    <Text style={styles.detailTitle}>Hepsini Gör</Text>
                    <AntDesign name="right" size={18} color="#F24E61" />
                </View>

            </View>

            {/* Render Favorite products */}
            <ScrollView
                bounces={true}
                horizontal={true}
                showsHorizontalScrollIndicator={false}
            >
                {products.map((item) => {
                    return <FavoriteProductItem prodType='favorite' key={item.id} product={item} />
                })}


            </ScrollView>
        </View>
    )
}

export default index