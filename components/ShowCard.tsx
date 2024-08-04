import { Ionicons } from '@expo/vector-icons';
import React from 'react';
import { Image, Text, View } from 'react-native';

interface ShowCardProps {
  show: {
    name: string;
    image: { medium: string };
    summary: string;
  };
}

const ShowCard = ({ show }: ShowCardProps) => {
  return (
    <View className=' bg-white/10 rounded-lg mb-4 pb-10'>
      {show.image && (
        <Image
          source={{ uri: show.image.medium }}
          className='w-full h-40 rounded-t-lg'
        />
      )}
      <View className='flex flex-row justify-between items-center p-4'>
        <Text className='text-lg font-bold text-white'>{show.name}</Text>
        <Ionicons name='heart-outline' size={24} color='white' />
      </View>
      <Text className='text-sm text-gray-400 p-4' numberOfLines={3}>
        {show.summary
          ? show.summary.replace(/<[^>]+>/g, '')
          : 'No summary available'}
      </Text>
    </View>
  );
};

export default ShowCard;
