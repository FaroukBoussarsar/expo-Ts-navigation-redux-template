import * as React from 'react';
import { Button, StyleSheet } from 'react-native';
import { useSelector } from 'react-redux';

import EditScreenInfo from '../components/EditScreenInfo';
import { Text, View } from '../components/Themed';
import { RootState } from '../redux/rootReducer';
import { useAppDispatch } from '../redux/store';
import { getUserSuccess } from '../redux/user/userSlice';
import { getUser } from '../redux/user/userThunkAction';
import { HomeScreenNavigationProp, HomeScreenRouteProp } from './types';


interface HomeScreenProps {
  navigation: HomeScreenNavigationProp
  route: HomeScreenRouteProp
}

const  HomeScreen: React.FC<HomeScreenProps> = ({navigation}) => {
  const user = useSelector((state: RootState) => state.user)
  const dispatch = useAppDispatch()
  console.log(user)
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Tab One</Text>
      <Button title='adbfjha'
      onPress={()=> {console.log('pressed');
      
        dispatch( getUser())

        }} 
       />
     <Button title='Login' 
     onPress={()=>{
      navigation.navigate('LoginScreen')
     }}
     />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
});
export default HomeScreen