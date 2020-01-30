import React from 'react';
import {Text, View, TouchableOpacity} from 'react-native';
import HomeViewStyles from './HomeViewStyles';
import i18n from '../../i18n/i18n';

class HomeView extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      time: 0,
    };
  }

  renderStartButton = () => {
    return (
      <TouchableOpacity
        style={HomeViewStyles.mainActionButton}
        onPress={() => {
          setInterval(() => {
            this.setState({time: this.state.time + 1000});
          }, 1000);
        }}>
        <Text style={HomeViewStyles.mainActionButtonText}>
          {i18n.HOME.START}
        </Text>
      </TouchableOpacity>
    );
  };

  renderRunningTimer = () => {
    const {time} = this.state;
    return (
      <TouchableOpacity style={HomeViewStyles.mainActionButton}>
        <Text style={HomeViewStyles.mainActionButtonText}>{time}</Text>
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
