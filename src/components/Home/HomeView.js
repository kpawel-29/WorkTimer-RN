import React from 'react';
import {Text, View, TouchableOpacity} from 'react-native';
import HomeViewStyles from './HomeViewStyles';
import i18n from '../../i18n/i18n';

import moment from 'moment';

class HomeView extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      time: 0,
      paused: false,
    };
  }

  renderStartButton = () => {
    return (
      <TouchableOpacity
        style={HomeViewStyles.mainActionButton}
        onPress={() => {
          setInterval(() => {
            const {time, paused} = this.state;
            if (!paused) {
              this.setState({time: time + 1000});
            }
          }, 1000);
        }}>
        <Text style={HomeViewStyles.mainActionButtonText}>
          {i18n.HOME.START}
        </Text>
      </TouchableOpacity>
    );
  };

  renderRunningTimer = () => {
    const {time, paused} = this.state;
    return (
      <TouchableOpacity
        style={HomeViewStyles.mainActionButton}
        onPress={() => {
          this.setState({
            paused: !paused,
          });
        }}>
        <Text style={HomeViewStyles.mainActionButtonText}>
            {moment.utc(time).format('HH:mm:ss')}
        </Text>
        <Text style={[HomeViewStyles.mainActionButtonText, HomeViewStyles.mainActionButtonPauseText]}>
            {i18n.HOME.PAUSE}
        </Text>
      </TouchableOpacity>
    );
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
          {time === 0 ? this.renderStartButton() : this.renderRunningTimer()}
        </View>
      </View>
    );
  }
}

export default HomeView;
