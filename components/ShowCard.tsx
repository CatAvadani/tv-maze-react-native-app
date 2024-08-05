import { RootStackParamList } from '@/data/navigation';
import { useFavoriteList } from '@/store/Favorites-context';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import React from 'react';
import { Image, Pressable, Text, View } from 'react-native';

interface ShowCardProps {
  show: {
    id: number;
    name: string;
    image: { medium: string };
    summary: string;
  };
}

const ShowCard = ({ show }: ShowCardProps) => {
  const navigation = useNavigation<StackNavigationProp<RootStackParamList>>();
  const { favoriteShowIds, addFavoriteShow, removeFavoriteShow } =
    useFavoriteList();

  const isFavorite = favoriteShowIds.includes(show.id);

  const handleShowDetails = () => {
    navigation.navigate('details', { showId: show.id });
  };

  const handleFavoriteToggle = () => {
    if (isFavorite) {
      removeFavoriteShow(show.id);
    } else {
      addFavoriteShow(show.id);
    }
  };

  return (
    <View className='bg-white/10 rounded-lg mb-4 pb-10'>
      {show.image && (
        <Image
          source={{ uri: show.image.medium }}
          className='w-full h-40 rounded-t-lg'
        />
      )}
      <View className='flex flex-row justify-between items-center p-4'>
        <Text className='text-lg font-bold text-white'>{show.name}</Text>
        <Pressable onPress={handleFavoriteToggle}>
          <Ionicons
            name={isFavorite ? 'heart' : 'heart-outline'}
            size={24}
            color='white'
          />
        </Pressable>
      </View>
      <Text className='text-sm text-gray-400 p-4' numberOfLines={3}>
        {show.summary
          ? show.summary.replace(/<[^>]+>/g, '')
          : 'No summary available'}
      </Text>
      <Pressable
        className='w-1/2 self-end p-2 mx-2 flex flex-row justify-center items-center gap-2
      '
        android_ripple={{ color: '#291d44' }}
        onPress={() => {
          handleShowDetails();
        }}
      >
        <Text className='text-white text-sm font-bold'>View Details</Text>
        <Ionicons name='chevron-forward' size={20} color='white' />
      </Pressable>
    </View>
  );
};

export default ShowCard;
