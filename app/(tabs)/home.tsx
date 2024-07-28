import SearchInput from '@/components/SearchInput';
import { LinearGradient } from 'expo-linear-gradient';
import { FlatList, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

const Home = () => {
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
          data={[{ id: 1 }, { id: 2 }, { id: 3 }]}
          renderItem={({ item }) => (
            <Text className=' text-white'>{item.id}</Text>
          )}
          keyExtractor={(item) => item.id.toString()}
          ListHeaderComponent={
            <View className=' flex flex-1 items-left mt-10'>
              <Text className=' text-lg font-normal text-white/60 '>
                Welcome to
              </Text>
              <Text className=' text-3xl font-bold mt-4 text-violet-100'>
                TVmaZe
              </Text>
              <SearchInput />
            </View>
          }
        />
      </SafeAreaView>
    </LinearGradient>
  );
};

export default Home;
