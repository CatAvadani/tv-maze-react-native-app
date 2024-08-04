import SearchInput from '@/components/SearchInput';
import ShowCard from '@/components/ShowCard';
import { searchShows } from '@/data/apiRequests';
import { useQuery } from '@tanstack/react-query';
import { LinearGradient } from 'expo-linear-gradient';
import React, { useState } from 'react';
import { FlatList, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

const Home = () => {
  const [query, setQuery] = useState('');

  const {
    data: searchedShows,
    isLoading,
    error,
  } = useQuery({
    queryKey: ['search', query],
    queryFn: () => searchShows(query),
    enabled: !!query, // Only run the query if query is not empty
  });

  if (isLoading) return <Text>Loading...</Text>;
  if (error) return <Text>Error fetching data</Text>;

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
        <FlatList
          className='px-4'
          data={searchedShows || []}
          renderItem={({ item }) => (
            <ShowCard key={item.show.id} show={item.show} />
          )}
          keyExtractor={(item) => item.show.id.toString()}
          ListHeaderComponent={
            <View className='flex flex-1 items-left mt-10'>
              <Text className='text-lg font-normal text-white/60'>
                Welcome to
              </Text>
              <Text className='text-3xl font-bold mt-4 text-violet-100'>
                TVmaZe
              </Text>
              <SearchInput setQuery={setQuery} />
            </View>
          }
        />
      </SafeAreaView>
    </LinearGradient>
  );
};

export default Home;
