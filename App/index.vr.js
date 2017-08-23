import React from 'react'
import {
  AppRegistry,
  asset,
  Pano,
  View,
  Text,
} from 'react-vr'

export default class App extends React.Component {
  render() {
    return (
      <View>
        <Pano 
          source={asset('mohaka.jpg')}
          onLoad={() => { console.log('Loaded')} }
        />
        Test Text
        <Text
          style = {{
            transform: [{translateZ: -1.25}],
            layoutOrigin: [0.5, 0.5]
          }}
        >
          Mangatutu Hot Springs
        </Text>
      </View>
    )
  }
}

AppRegistry.registerComponent('App', () => App)
