import { RouteProp } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';

export type RootStackParamList = {
  details: { showId: number };
};

export type DetailsScreenRouteProp = RouteProp<RootStackParamList, 'details'>;

export type DetailsScreenNavigationProp = StackNavigationProp<
  RootStackParamList,
  'details'
>;
