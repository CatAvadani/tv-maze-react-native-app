import ShowCard from '@/components/ShowCard';
import { getShowDetails } from '@/data/apiRequests';
import { useFavoriteList } from '@/store/Favorites-context';
import { useNavigation } from '@react-navigation/native';
import { LinearGradient } from 'expo-linear-gradient';
import React, { useEffect, useLayoutEffect, useState } from 'react';
import { FlatList, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

const FavoritesScreen: React.FC = () => {
  const { favoriteShowIds } = useFavoriteList();
  const [favoriteShows, setFavoriteShows] = useState<Show[]>([]);
  const navigation = useNavigation();

  useLayoutEffect(() => {
    navigation.setOptions({
      title: 'My Favorites',
    });
  }, [navigation]);

  useEffect(() => {
    const fetchFavoriteShows = async () => {
      const showDetailsPromises = favoriteShowIds.map((id) =>
        getShowDetails(id)
      );
      const shows = await Promise.all(showDetailsPromises);
      setFavoriteShows(shows);
    };

    fetchFavoriteShows();
  }, [favoriteShowIds]);

  return (
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
      <SafeAreaView>
        <Text className=' text-center p-4 font-black text-indigo-200 text-xl bg-black/50'>
          Your Favorite Shows
        </Text>
        <FlatList
          className='p-4'
          data={favoriteShows || []}
          renderItem={({ item }) => (
            <ShowCard
              key={item.id}
              show={{
                id: item.id,
                name: item.name,
                image: item.image,
                summary: item.summary || '',
              }}
            />
          )}
          keyExtractor={(item) => item.id.toString()}
          ListEmptyComponent={
            <View className='flex justify-center mt-52'>
              <Text className='text-center text-white/50 text-xl font-bold'>
                No favorites yet!
              </Text>
            </View>
          }
        />
      </SafeAreaView>
    </LinearGradient>
  );
};

export default FavoritesScreen;
