// filepath: [_layout.tsx](http://_vscodecontentref_/5)
import { Tabs } from "expo-router";
import { View, Text } from "react-native";

const TabIcon = () => {
  return (
    <View>
      <Text>Tab Icon</Text>
    </View>
  );
};

const Layout = () => {
  return (
    <Tabs
      initialRouteName="home" // Changed to lowercase to match the file name
      screenOptions={{
        tabBarActiveTintColor: "white",
      }}
    >
      <Tabs.Screen
        name="home" // Changed to lowercase to match the file name
        options={{
          title: "Home",
          headerShown: false,
          tabBarLabel: "Home",
          tabBarIcon: () => <TabIcon />,
        }}
      />
    </Tabs>
  );
};

export default Layout;