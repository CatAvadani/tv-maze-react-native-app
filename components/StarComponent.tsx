import React, { useEffect, useRef } from 'react';
import { Animated, StyleSheet } from 'react-native';

const Star = ({ size, top, left }) => {
  const opacity = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    // Randomize the animation parameters
    const minOpacity = Math.random() * 0.5 + 0.5; // Between 0.5 and 1
    const flickerDuration = Math.random() * 1500 + 500; // Between 500ms and 2000ms
    const startDelay = Math.random() * 3000; // Up to 3000ms delay

    const flicker = () => {
      Animated.sequence([
        Animated.timing(opacity, {
          toValue: minOpacity,
          duration: flickerDuration,
          useNativeDriver: true,
        }),
        Animated.timing(opacity, {
          toValue: 0.2, // Faded state
          duration: flickerDuration,
          useNativeDriver: true,
        }),
      ]).start(() => {
        flicker(); // Repeat the animation to simulate flickering
      });
    };

    // Start the flickering animation with a delay
    const timeout = setTimeout(flicker, startDelay);

    // Cleanup on component unmount
    return () => clearTimeout(timeout);
  }, [opacity]);

  return (
    <Animated.View
      style={[
        styles.star,
        {
          width: size,
          height: size,
          top: top,
          left: left,
          opacity: opacity,
        },
      ]}
    />
  );
};

const styles = StyleSheet.create({
  star: {
    position: 'absolute',
    backgroundColor: '#9d9b9b',
    borderRadius: 50,
  },
});

export default Star;
