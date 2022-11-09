import React, { useState, useEffect } from 'react'
import { ScrollView, TouchableOpacity, Text, Image } from 'react-native'

import categoriesData from "../../../assets/categories"
import { Category } from '../../models'
import styles from './style'
function index() {
    const [categories, setCategories] = useState<Category[]>([])


    useEffect(() => {
        setCategories(categoriesData)
        return () => {
            setCategories([])
        }
    }, [])


    return (
        <ScrollView
            bounces={true}
            horizontal={true}
            showsHorizontalScrollIndicator={false}
            style={styles.scrollStyle}
        >

            {categories.map((item: Category) => (

                <TouchableOpacity style={styles.center} key={item.id}>
                    <Image source={item.src} style={styles.image} />
                    <Text style={{ fontSize: 11, color: '#767575', fontWeight: 'bold' }}>{item.name}</Text>

                </TouchableOpacity>
            ))}

        </ScrollView>

    )
}

export default index