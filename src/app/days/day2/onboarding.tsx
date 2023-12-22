import { View, Text, StyleSheet, SafeAreaView, Pressable } from 'react-native'
import React, { useState } from 'react'
import { Link, Stack, router } from 'expo-router'
import { FontAwesome5 } from '@expo/vector-icons';

const onboardingSteps = [
    {
        icon: 'laptop-house',
        title: 'Welcome #Daddy',
        description: 'Here you can see some projects I worked or I am currently working on',

    },
    {
        icon: 'chalkboard-teacher',
        title: 'Learn and grow together',
        description: 'I learn by building projects with React Native and Expo',

    },
    {
        icon: 'folder-open',
        title: 'Personal Portfolio',
        description: 'Here I am displaying my knowledge and skills through my different project ',

    },

]

export default function OnboardingScreen() {
    const [screenIndex, setScreenIndex] = useState(0);

    const data = onboardingSteps[screenIndex];

    const onContinue = () => {
        const isLastScreen = screenIndex === onboardingSteps.length - 1
        if (isLastScreen) {
            endOnboarding();

        } else {
            setScreenIndex(screenIndex + 1);
        }
    };

    const endOnboarding = () => {
        setScreenIndex(0);
        router.back();
    }

    return (
        <SafeAreaView style={style.page}>
            <Stack.Screen options={{ headerShown: false }} />

            <View style={style.pageContent}>


                <FontAwesome5
                    style={style.image}
                    name={data.icon}
                    size={100}
                    color="#CEF205"
                />
                <View style={style.footer}>
                    <Text style={style.title}>{data.title}</Text>
                    <Text style={style.description}>{data.description}</Text>

                    <View style={style.buttonsRow}>
                        <Text onPress={endOnboarding} style={style.buttonText}>Skip</Text>

                        <Pressable onPress={onContinue} style={style.button}>
                            <Text style={style.buttonText}>Continue</Text>
                        </Pressable>



                    </View>

                </View>

            </View>



        </SafeAreaView>
    )
}

const style = StyleSheet.create({
    page: {
        //alignItems:'center',
        justifyContent: 'center',
        flex: 1,
        backgroundColor: '#15141A',

    },
    pageContent: {
        padding: 20,
        flex: 1,

    },
    image: {
        alignSelf: 'center',
        margin: 20,
    },
    title: {
        color: '#FDFDFD',
        fontSize: 50,
        fontFamily: 'InterBlack',
        letterSpacing: 1.3,
        marginVertical: 10,
    },
    description: {
        color: 'gray',
        fontSize: 20,
        fontFamily: 'Inter',
        lineHeight: 28,
    },
    footer: {
        marginTop: 'auto'
    },
    button: {
        backgroundColor: '#302E38',
        //padding:15,
        borderRadius: 50,
        alignItems: 'center',
        flex: 1

    },
    buttonsRow: {
        marginTop: 20,
        flexDirection: 'row',
        alignItems: 'center',
        gap: 20


    },
    buttonText: {
        color: '#FDFDFD',
        fontFamily: 'InterSemi',
        fontSize: 16,

        padding: 15,
        paddingHorizontal: 25,

    }

})

