import StarsBackground from '@/components/StarsBackground';
import { LinearGradient } from 'expo-linear-gradient';
import { Text, View } from 'react-native';

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
      <View className=' flex flex-1 justify-center items-center mt-[100px]'>
        <StarsBackground />
        <Text className=' text-3xl font-black text-white '>Home</Text>
      </View>
    </LinearGradient>
  );
};

export default Home;
