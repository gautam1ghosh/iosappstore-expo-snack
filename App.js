import React from 'react';
import { SafeAreaView, ScrollView, StyleSheet, View, Text, Image } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

function TodayScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.scrollView}>
        {/* Example of a featured app card */}
        <View style={styles.card}>
          <Image
            style={styles.cardImage}
            source={{ uri: 'https://example.com/app-image.jpg' }}
          />
          <Text style={styles.cardTitle}>Featured App</Text>
          <Text style={styles.cardDescription}>
            Discover amazing apps with a rich search experience.
          </Text>
        </View>

        {/* Add more cards here */}
      </ScrollView>
    </SafeAreaView>
  );
}

const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Today"
          component={TodayScreen}
          options={{ title: 'App Store' }}
        />
        {/* Add more screens here */}
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  scrollView: {
    backgroundColor: 'white',
  },
  card: {
    backgroundColor: '#f0f0f0',
    borderRadius: 10,
    padding: 20,
    margin: 10,
  },
  cardImage: {
    width: '100%',
    height: 200,
    borderRadius: 10,
  },
  cardTitle: {
    fontWeight: 'bold',
    fontSize: 18,
    marginVertical: 10,
  },
  cardDescription: {
    fontSize: 14,
  },
});

export default App;
