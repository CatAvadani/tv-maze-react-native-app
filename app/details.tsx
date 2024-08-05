import { CastMember, Show } from '@/data/interfaces';
import { useRoute } from '@react-navigation/native';
import { useQuery } from '@tanstack/react-query';
import { LinearGradient } from 'expo-linear-gradient';
import React from 'react';
import { FlatList, Image, SafeAreaView, Text, View } from 'react-native';
import { getShowCast, getShowDetails } from '../data/apiRequests';

const ShowDetails = () => {
  const route = useRoute();
  const { showId } = route.params as { showId: number };

  const {
    data: show,
    isLoading: isLoadingShow,
    error: errorShow,
  } = useQuery<Show>({
    queryKey: ['showDetails', showId],
    queryFn: () => getShowDetails(showId),
  });
  const {
    data: cast,
    isLoading: isLoadingCast,
    error: errorCast,
  } = useQuery<CastMember[]>({
    queryKey: ['showCast', showId],
    queryFn: () => getShowCast(showId),
  });

  if (isLoadingShow || isLoadingCast) {
    return (
      <SafeAreaView>
        <Text>Loading...</Text>
      </SafeAreaView>
    );
  }

  if (errorShow || errorCast) {
    return (
      <SafeAreaView>
        <Text>Error loading data</Text>
      </SafeAreaView>
    );
  }

  const renderCastMember = ({ item }: { item: CastMember }) => (
    <View key={item.person.id} className='flex flex-1 items-center m-4'>
      <Image
        source={{
          uri: item.person.image?.medium ?? 'https://via.placeholder.com/150',
        }}
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
              {show?.image?.medium ? (
                <Image
                  source={{ uri: show.image?.medium }}
                  className='w-full h-52 object-cover'
                />
              ) : (
                <View className='w-full h-52 object-cover bg-gray-500'>
                  <Text className='text-center text-white mt-20'>
                    No Image Available
                  </Text>
                </View>
              )}
              <Text className='text-xl font-bold text-center p-4 text-violet-300'>
                {show?.name}
              </Text>
              <Text className='text-lg font-normal text-center text-white/60 p-4'>
                {show?.genres.join(', ')}
              </Text>
              <Text
                className='
                text-sm text-white/80 p-4 text-center '
              >
                {show?.summary.replace(/<[^>]+>/g, '')}
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
