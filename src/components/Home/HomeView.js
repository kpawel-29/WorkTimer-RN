import React from 'react';
import {Text, View, TouchableOpacity} from 'react-native';
import HomeViewStyles from './HomeViewStyles';

const HomeView = () => {
  return (
    <View style={[{flex: 1}, HomeViewStyles.homeViewContainer]}>
      <View style={{flex: 1}}>
        <Text style={HomeViewStyles.welcomeHeader}>Good Morning!</Text>
      </View>

      <View style={{flex: 2}}>
        <TouchableOpacity
          style={HomeViewStyles.mainActionButton}
          onPress={console.log('button pressed')}>
          <Text style={HomeViewStyles.mainActionButtonText}>Start </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default HomeView;
