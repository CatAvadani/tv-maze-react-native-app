import React from 'react';
import { FlatList, Text, View } from 'react-native';

const TrendingMovies = ({ movies }) => {
  return (
    <FlatList
      data={movies}
      renderItem={({ item }) => (
        <View>
          <Text>{item.title}</Text>
        </View>
      )}
      keyExtractor={(item) => item.id.toString()}
    />
  );
};

export default TrendingMovies;
