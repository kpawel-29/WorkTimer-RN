import React from 'react';
import {Text, View, AppState} from 'react-native';
import HomeViewStyles from './HomeViewStyles';
import i18n from '../../i18n/i18n';
import AsyncStorage from '@react-native-community/async-storage';

import StopWatchButton from '../StopWatchButton/StopWatchButton';

class HomeView extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      time: 0,
      paused: false,
    };

    this.startTimer = this.startTimer.bind(this);
    this.pauseTimer = this.pauseTimer.bind(this);

    this.handleAppStateChange = this.handleAppStateChange.bind(this);
  }

  componentDidMount() {
    AppState.addEventListener('change', this.handleAppStateChange);
  }

  componentWillUnmount() {
    AppState.removeEventListener('change', this.handleAppStateChange);
  }

  async handleAppStateChange(nextAppState) {
    console.log('nextAppState', nextAppState);
    const now = new Date().getTime();
    const {time} = this.state;

    const readTime = await AsyncStorage.getItem('@time');
    const readStateChangeTimestamp = await AsyncStorage.getItem(
      '@appStateChangedTime',
    );

    const timeDiff = now - parseInt(readStateChangeTimestamp);
    const newTime = parseInt(readTime) + parseInt(timeDiff);

    if (nextAppState === 'active') {
      this.setState(
        {
          time: newTime,
        },
        this.startTimer,
      );
    }

    await AsyncStorage.setItem('@time', time);
    await AsyncStorage.setItem('@appStateChangedTime', now.toString());
  }

  startTimer = () => {
    setInterval(() => {
      const {time, paused} = this.state;
      if (!paused) {
        this.setState({time: time + 1000});
      }
    }, 1000);
  };

  pauseTimer = () => {
    const {paused} = this.state;
    this.setState({
      paused: !paused,
    });
  };

  render() {
    const {time} = this.state;
    return (
      <View style={[{flex: 1}, HomeViewStyles.homeViewContainer]}>
        <View style={{flex: 1}}>
          <Text style={HomeViewStyles.welcomeHeader}>
            {i18n.HOME.WELCOME_HEADER}
          </Text>
        </View>

        <View style={{flex: 2}}>
          <StopWatchButton
            time={time}
            startOnPressAction={this.startTimer}
            timerOnPressAction={this.pauseTimer}
          />
        </View>
      </View>
    );
  }
}

export default HomeView;
