import React from 'react';
import { Dimensions, StyleSheet, View } from 'react-native';
import Star from './StarComponent';

const StarsBackground = () => {
  const stars = Array.from({ length: 30 }).map((_, index) => {
    const size = Math.random() * 3 + 1;
    const top = (Math.random() * Dimensions.get('window').height) / 6;
    const left = Math.random() * Dimensions.get('window').width;
    return <Star key={index} size={size} top={top} left={left} />;
  });

  return <View style={styles.container}>{stars}</View>;
};

const styles = StyleSheet.create({
  container: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'transparent',
  },
});

export default StarsBackground;
