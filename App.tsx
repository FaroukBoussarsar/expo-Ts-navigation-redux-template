import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { Provider } from 'react-redux';
import {LogBox} from 'react-native';
import useCachedResources from './hooks/useCachedResources';
import useColorScheme from './hooks/useColorScheme';
import Navigation from './navigation';
import store from './redux/store';
LogBox.ignoreLogs(['Warning: Cannot update a component from inside the function body of a different component.']);
export default function App() {
  const isLoadingComplete = useCachedResources();
  const colorScheme = useColorScheme();
 
  if (!isLoadingComplete) {
    return null;
  } else {
    return (
      <SafeAreaProvider>
        <Provider store={store}>
         <Navigation colorScheme={colorScheme} />
        </Provider>
        <StatusBar />
      </SafeAreaProvider>
    );
  }
}
