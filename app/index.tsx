import { LinearGradient } from 'expo-linear-gradient';
import { useRouter } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import React, { useEffect, useRef } from 'react';
import { Animated, ScrollView, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

const Welcome = () => {
  const router = useRouter();
  const fadeAnim = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 2000,
      useNativeDriver: true,
    }).start();

    const timer = setTimeout(() => {
      router.push('home');
    }, 5000);

    return () => clearTimeout(timer);
  }, [fadeAnim, router]);

  return (
    <>
      <SafeAreaView style={{ flex: 1 }}>
        <ScrollView
          contentContainerStyle={{
            flex: 1,
          }}
        >
          <LinearGradient
            colors={['#7737dd', '#2e0128', '#3d2285']}
            style={{
              position: 'absolute',
              left: 0,
              right: 0,
              top: 0,
              height: '100%',
            }}
          >
            <View
              style={{
                flex: 1,
                justifyContent: 'center',
                alignItems: 'center',
                paddingHorizontal: 16,
              }}
            >
              <View style={{ marginTop: 20 }}>
                <Animated.Text
                  style={{
                    opacity: fadeAnim,
                    fontSize: 48,
                    color: 'white',
                    fontWeight: 'bold',
                    textAlign: 'center',
                  }}
                >
                  TVmaZe
                </Animated.Text>
                <Animated.Text
                  style={{
                    opacity: fadeAnim,
                    fontSize: 18,
                    color: 'rgba(255, 255, 255, 0.5)',
                    fontWeight: 'bold',
                    textAlign: 'center',
                    marginTop: 40,
                  }}
                >
                  Experience the best TV shows and movies on the go!
                </Animated.Text>
              </View>
            </View>
          </LinearGradient>
        </ScrollView>
        <StatusBar backgroundColor='#161622' style='light' />
      </SafeAreaView>
    </>
  );
};

export default Welcome;
