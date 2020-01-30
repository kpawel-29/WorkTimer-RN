import {StyleSheet} from 'react-native';

const StopWatchButtonsStyles = StyleSheet.create({
    mainActionButton: {
        width: 284,
        height: 284,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#00CD5E',
        borderRadius: 142,
    },

    mainActionButtonText: {
        color: '#fff',
        fontSize: 60,
        fontWeight: 'bold',
        textTransform: 'uppercase',
    },

    mainActionButtonPauseText: {
        fontSize: 24
    }
});

export default StopWatchButtonsStyles;
