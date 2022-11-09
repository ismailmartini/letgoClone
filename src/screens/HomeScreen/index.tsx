import React, { useEffect, useState } from 'react'
import { ScrollView } from "react-native"
import productsAssets from '../../../assets/products'
import FavoriteProducts from '../../components/FavoriteProducts'
import { Product } from '../../models/index'
import MainProducts from '../../components/MainProducts'
import CategoryFilter from '../../components/CategoryFilter'
import MessageNotification from '../../components/MessageNotification'
function index() {

    const [products, setProducts] = useState<Product[]>([])
    useEffect(() => {
        setProducts(productsAssets)

    }, [])


    return (

        <ScrollView style={{ backgroundColor: 'white', height: '100%' }}>
            <MessageNotification />
            <CategoryFilter />
            <FavoriteProducts />
            <MainProducts mainProducts={products} />
        </ScrollView>
    )
}

export default index