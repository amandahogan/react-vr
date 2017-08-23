import React from 'react'
import {
  AppRegistry,
  asset,
  Pano,
  View,
  Text,
  Model,
  AmbientLight,
  DirectionalLight,
} from 'react-vr'

export default class App extends React.Component {
  render() {
    return (
      <View>
        {/* <Pano 
          source={asset('mohaka.jpg')}
          onLoad={() => { console.log('Loaded')} }
        /> */}
        <DirectionalLight 
          style={{
            transform: [{translateX: -1000}]
          }}
        />
        <AmbientLight intensity={ 2.6 } />
        <Model
          source={{
            obj: asset('moon.obj')
          }}
          style={{
            transform: [
              {translate: [0, -1, -2]},
              {scale: 0.005},
            ],
          }}
          wireframe
        />
        {/* <Text
          style = {{
            transform: [{translateZ: -1.25}],
            layoutOrigin: [0.5, 0.5]
          }}
        >
          Mangatutu Hot Springs
        </Text> */}
      </View>
    )
  }
}

AppRegistry.registerComponent('App', () => App)
