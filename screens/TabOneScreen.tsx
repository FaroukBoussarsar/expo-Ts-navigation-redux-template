import * as React from 'react';
import { Button, StyleSheet } from 'react-native';
import { useSelector } from 'react-redux';

import EditScreenInfo from '../components/EditScreenInfo';
import { Text, View } from '../components/Themed';
import { RootState } from '../redux/rootReducer';
import { useAppDispatch } from '../redux/store';
import { getUserSuccess } from '../redux/user/userSlice';
import { getUser } from '../redux/user/userThunkAction';
import { TabOneScreenNavigationProp, TabOneScreenRouteProp } from './types';


interface TabOneScreenProps {
  navigation: TabOneScreenNavigationProp
  route: TabOneScreenRouteProp
}

const  TabOneScreen: React.FC<TabOneScreenProps> = ({navigation}) => {
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
      <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
      <EditScreenInfo  path="/screens/TabOneScreen.tsx" />
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
export default TabOneScreen