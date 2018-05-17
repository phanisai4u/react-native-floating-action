import React, { PureComponent } from 'react';
import { View, SafeAreaView, StyleSheet, Alert } from 'react-native';
import { FloatingAction } from 'react-native-floating-action';

import Property from '../components/Property';

class FloatingActionRightScreen extends PureComponent {
  static navigationOptions = {
    title: 'Right position'
  };

  render() {
    const actions = [{
      text: 'Accessibility',
      name: 'bt_accessibility',
      position: 2,
      styles: {
        text: {
          fontSize: 20,
        }
      }
    }, {
      text: 'Language',
      icon: require('../images/ic_language_white.png'),
      name: 'bt_language',
      position: 1
    }, {
      text: 'Location',
      icon: require('../images/ic_room_white.png'),
      name: 'bt_room',
      position: 3
    }, {
      text: 'Video',
      icon: require('../images/ic_videocam_white.png'),
      name: 'bt_videocam',
      position: 4
    }];

    return (
      <SafeAreaView style={styles.container}>
        <View style={styles.container}>
          <Property
            propertyName="position"
            propertyValue="right"
            defaultValue="right"
          />
          <FloatingAction
            actions={actions}
            position="right"
            onPressItem={
              (name) => {
                Alert.alert('Icon pressed', `the icon ${name} was pressed`);
              }
            }
          />
        </View>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff'
  }
});

export default FloatingActionRightScreen;
