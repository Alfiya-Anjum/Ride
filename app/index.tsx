import { Redirect } from 'expo-router';
import {SafeAreaView, Text, View} from 'react-native';
import { useAuth, useUser } from '@clerk/clerk-expo';
const Home = () => {
  const { isSignedIn } = useAuth()

  if (isSignedIn) {
    return <Redirect href='/(root)/(tabs)/home' />
  }
  return <Redirect href="/(auth)/welcome" />; 
}
export default Home;