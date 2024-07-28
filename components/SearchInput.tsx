import { Ionicons } from '@expo/vector-icons';
import { router, usePathname } from 'expo-router';
import { useState } from 'react';
import { Alert, TextInput, TouchableOpacity, View } from 'react-native';

interface SearchInputProps {
  initialQuery?: string;
}

const SearchInput = ({ initialQuery }: SearchInputProps) => {
  const pathname = usePathname();
  const [query, setQuery] = useState(initialQuery || '');

  return (
    <View className='flex flex-row items-center space-x-4 w-full h-16  bg-black/40 rounded-lg focus:border-secondary my-5'>
      <TextInput
        className='text-base text-white flex-1 font-regular p-4 items-center'
        value={query}
        placeholder='Search for a TV show...'
        placeholderTextColor='#a2a2b3'
        onChangeText={(e) => setQuery(e)}
      />

      <TouchableOpacity
        className='p-4'
        onPress={() => {
          if (query === '')
            return Alert.alert('Please enter a query to search for!');

          if (pathname.startsWith('/search')) router.setParams({ query });
          else router.push(`/search/${query}`);
        }}
      >
        <Ionicons name='search' size={24} color='#CDCDE0' />
      </TouchableOpacity>
    </View>
  );
};

export default SearchInput;
