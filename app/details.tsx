import { useRoute } from '@react-navigation/native';
import { LinearGradient } from 'expo-linear-gradient';
import React, { useEffect, useState } from 'react';
import { FlatList, Image, SafeAreaView, Text, View } from 'react-native';
import { getShowCast, getShowDetails } from '../data/apiRequests';

const ShowDetails = () => {
  const route = useRoute();
  const { showId } = route.params as { showId: number };
  const [show, setShow] = useState<any>(null);
  const [cast, setCast] = useState<any[]>([]);

  useEffect(() => {
    const fetchShowDetails = async () => {
      const showDetails = await getShowDetails(showId);
      setShow(showDetails);
    };

    const fetchShowCast = async () => {
      const showCast = await getShowCast(showId);
      setCast(showCast);
    };

    fetchShowDetails();
    fetchShowCast();
  }, [showId]);

  if (!show) {
    return (
      <SafeAreaView>
        <Text>Loading...</Text>
      </SafeAreaView>
    );
  }

  const renderCastMember = ({ item }) => (
    <View key={item.person.id} className='flex flex-1 items-center m-4'>
      <Image
        source={{ uri: item.person.image.medium }}
        className='w-20 h-20 rounded-sm'
      />
      <Text className='text-sm font-bold text-white py-2'>
        {item.person.name}
      </Text>
      <Text className=' text-white/50'>as {item.character.name}</Text>
    </View>
  );

  return (
    <LinearGradient
      colors={['#7737dd', '#2e0128', '#3d2285']}
      className='h-full absolute w-full left-0 right-0 top-0'
    >
      <SafeAreaView>
        <FlatList
          ListHeaderComponent={() => (
            <>
              <Image
                source={{ uri: show.image.medium }}
                className='w-full h-52 object-cover'
              />
              <Text className='text-xl font-bold text-center p-4 text-violet-300'>
                {show.name}
              </Text>
              <Text className='text-lg font-normal text-center text-white/60 p-4'>
                {show.genres.join(', ')}
              </Text>
              <Text
                className='
                text-sm text-white/80 p-4 text-center '
              >
                {show.summary.replace(/<[^>]+>/g, '')}
              </Text>
              <Text className='text-xl font-bold text-center p-4 text-white'>
                Cast
              </Text>
            </>
          )}
          data={cast}
          renderItem={renderCastMember}
          keyExtractor={(item) => item.person.id.toString()}
          numColumns={2}
          contentContainerStyle={{ paddingBottom: 16 }}
        />
      </SafeAreaView>
    </LinearGradient>
  );
};

export default ShowDetails;
