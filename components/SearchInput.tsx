import { Ionicons } from '@expo/vector-icons';
import React, { useState } from 'react';
import { Alert, Keyboard, Pressable, TextInput, View } from 'react-native';

interface SearchInputProps {
  initialQuery?: string;
  setQuery: (query: string) => void;
}

const SearchInput = ({ initialQuery, setQuery }: SearchInputProps) => {
  const [searchQuery, setSearchQuery] = useState(initialQuery || '');

  const handleSearch = () => {
    if (searchQuery === '') {
      Alert.alert('Please enter a query to search for!');
      return;
    }
    setQuery(searchQuery);
    Keyboard.dismiss();
  };

  return (
    <View className='flex flex-row items-center space-x-4 w-full h-16 bg-black/40 rounded-lg focus:border-secondary my-5'>
      <TextInput
        className='text-base text-white flex-1 font-regular p-4 items-center'
        value={searchQuery}
        placeholder='Search for a TV show...'
        placeholderTextColor='#a2a2b3'
        onChangeText={(e) => setSearchQuery(e)}
      />
      <Pressable className='p-4' onPress={handleSearch}>
        <Ionicons name='search' size={24} color='#CDCDE0' />
      </Pressable>
    </View>
  );
};

export default SearchInput;
