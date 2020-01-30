import React from 'react';
import {Text, TouchableOpacity} from 'react-native';
import i18n from '../../i18n/i18n';
import moment from 'moment';
import StopWatchButtonsStyles from './StopWatchButtonStyles';

const StopWatchButton = ({time, startOnPressAction, timerOnPressAction}) => {
  if (time > 0) {
    return (
      <TouchableOpacity
        style={StopWatchButtonsStyles.mainActionButton}
        onPress={timerOnPressAction}>
        <Text style={StopWatchButtonsStyles.mainActionButtonText}>
          {moment.utc(time).format(i18n.TIME_FORMAT)}
        </Text>
        <Text
          style={[
            StopWatchButtonsStyles.mainActionButtonText,
            StopWatchButtonsStyles.mainActionButtonPauseText,
          ]}>
          {i18n.STOP_WATCH.PAUSE}
        </Text>
      </TouchableOpacity>
    );
  }

  return (
    <TouchableOpacity
      style={StopWatchButtonsStyles.mainActionButton}
      onPress={startOnPressAction}>
      <Text style={StopWatchButtonsStyles.mainActionButtonText}>
        {i18n.STOP_WATCH.START}
      </Text>
    </TouchableOpacity>
  );
};

export default StopWatchButton;
