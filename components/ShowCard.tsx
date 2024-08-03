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
    <View className='p-4 bg-white/10 rounded-lg mb-4'>
      {show.image && (
        <Image
          source={{ uri: show.image.medium }}
          className='w-full h-40 rounded-lg'
        />
      )}
      <Text className='text-lg font-bold text-white mt-2'>{show.name}</Text>
      <Text className='text-sm text-gray-400' numberOfLines={3}>
        {show.summary
          ? show.summary.replace(/<[^>]+>/g, '')
          : 'No summary available'}
      </Text>
    </View>
  );
};

export default ShowCard;
