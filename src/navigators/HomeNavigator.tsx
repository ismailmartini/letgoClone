import React from 'react'
import { createStackNavigator } from "@react-navigation/stack";
import HomeScreen from '../screens/HomeScreen';
import { TouchableOpacity, Image, TextInput, Text, SafeAreaView } from 'react-native';


const Stack = createStackNavigator();

const MainHeaderComponent = () => {
    return (
        <SafeAreaView
            style={{
                flexDirection: "row",
                alignItems: "center",
                width: "90%",
                marginHorizontal: "5%",
                marginBottom: 10,

            }}>
            <TouchableOpacity>
                <Image style={{ height: 38, width: 38, borderRadius: 19 }} source={{ uri: "https://www.looper.com/img/gallery/why-the-professor-from-money-heist-looks-so-familiar/intro-1587390568.jpg" }} />


            </TouchableOpacity>
            <TextInput style={{ backgroundColor: '#e5e5e5', flex: 1, marginHorizontal: 10, height: 35, borderRadius: 10, paddingLeft: '32%', fontSize: 15 }} placeholder='Ara... ' />
            <Text style={{ color: '#FF1840', fontSize: 18 }}>Filtrele</Text>
        </SafeAreaView>
    )

}


function HomeNavigator() {
    return (
        <Stack.Navigator>
            <Stack.Screen
                name='Home'
                component={HomeScreen}
                options={{
                    header: () => (
                        <MainHeaderComponent />
                    )
                }}
            />



        </Stack.Navigator>
    )
}

export default HomeNavigator