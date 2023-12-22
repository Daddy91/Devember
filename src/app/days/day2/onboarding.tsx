import {
    View,
    Text,
    StyleSheet,
    SafeAreaView,
    Pressable
} from 'react-native'
import React, { useState } from 'react'
import { Link, Stack, router } from 'expo-router'
import { FontAwesome5 } from '@expo/vector-icons';
import { StatusBar } from 'expo-status-bar';
import {
    GestureDetector,
    Gesture,
    Directions
} from 'react-native-gesture-handler';
import Animated, {
    FadeIn,
    FadeOut,
    BounceInRight,
    BounceInLeft,
    SlideInLeft,
    SlideOutRight,
    SlideInRight,
    SlideOutLeft
} from 'react-native-reanimated';


const onboardingSteps = [
    {
        icon: 'laptop-house',
        title: 'Bienvenue chez Daddy!',
        description: `Ici vous pouvez voir quelques projets sur lesquels j'ai travaillé ou sur lesquels je travaille actuellement`,

    },
    {
        icon: 'book-reader',
        title: 'Apprendre et grandir',
        description: `J'apprends en développant des projets avec React Native et Expo`,

    },
    {
        icon: 'react',
        title: 'Portfolio React Native',
        description: `Ici, j'expose mes connaissances et compétences en React Native à travers mes différents projets`,

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

    const onBack = () => {
        const isFirstScreen = screenIndex === 0
        if (isFirstScreen) {
            endOnboarding();

        } else {
            setScreenIndex(screenIndex - 1);
        }
    };

    const endOnboarding = () => {
        setScreenIndex(0);
        router.back();
    };

    const swipes = Gesture.Simultaneous(
        Gesture.Fling().direction(Directions.LEFT).onEnd(onContinue),
        Gesture.Fling().direction(Directions.RIGHT).onEnd(onBack)
    );


    return (
        <SafeAreaView style={style.page}>
            <Stack.Screen options={{ headerShown: false }} />
            <StatusBar style="light" />
            <View style={style.stepIndicatorContainer}>
                {onboardingSteps.map((step, index) => (
                    <View 
                    key={index}
                    style={[
                        style.stepIndicator, 
                        { backgroundColor: index === screenIndex ? '#CEF202' : 'grey' }]} />
                ))}

            </View>

            <GestureDetector gesture={swipes}>
                <View

                    style={style.pageContent}
                    key={screenIndex}
                >

                    <Animated.View entering={FadeIn} exiting={FadeOut}>
                        <FontAwesome5
                            style={style.image}
                            name={data.icon}
                            size={150}
                            color="#CEF205"
                        />
                    </Animated.View>

                    <View style={style.footer}>
                        <Animated.Text
                            entering={SlideInRight}
                            exiting={SlideOutLeft}
                            style={style.title}
                        >
                            {data.title}
                        </Animated.Text>
                        <Animated.Text
                            entering={SlideInRight.delay(50)}
                            exiting={SlideOutLeft}
                            style={style.description}
                        >
                            {data.description}
                        </Animated.Text>

                        <View style={style.buttonsRow}>
                            <Text onPress={endOnboarding} style={style.buttonText}>Passer</Text>

                            <Pressable onPress={onContinue} style={style.button}>
                                <Text style={style.buttonText}>Continuer</Text>
                            </Pressable>



                        </View>

                    </View>

                </View>
            </GestureDetector>



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
    //steps
    stepIndicatorContainer: {
        flexDirection: 'row',
        //gap:8,
        marginHorizontal: 15,

    },
    stepIndicator: {
        flex: 1,
        height: 3,
        backgroundColor: 'gray',
        margin: 5,
        borderRadius: 10,

    },
    image: {
        alignSelf: 'center',
        margin: 20,
        marginTop: 70,
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

