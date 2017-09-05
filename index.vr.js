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
  Image,
  VrButton,
  NativeModules,
} from 'react-vr'

const url = 'https://www.google.co.nz/maps/place/Mangatutu+Hot+Springs,+Kaweka+Forest+Park+4179/@-39.1825489,176.4588216,13z/data=!4m2!3m1!1s0x6d6970d56741a2bf:0xe95c3e17993c53a1?hl=en-NZ'

export default class App extends React.Component {
  render() {
    return (
      <View>
        <Pano
          source={asset('mohaka.jpg')}
          style={{
            transform:[
              {rotateY: -10}
            ]
          }}
          onLoad={() => { console.log('Loaded')} }
        />
        <DirectionalLight 
          style={{
            transform: [{translateX: -1000}]
          }}
        />
        <AmbientLight intensity={ 2.6 } />
        <Model
          source={{
            obj: asset('moon.obj'),
            mtl: asset('moon.mtl')
          }}
          style={{
            transform: [
              {translate: [25, 20, 10]},
              {scale: 0.005},
              {rotateY: -180}
            ],
          }}
          lit
        />
        <Text
          style = {{
            transform: [{translate: [0.25,0.25,-1]}],
            layoutOrigin: [0.5, 0.5]
          }}
        >
          Mangatutu Hot Springs
        </Text>
        <View 
          style={{
            width: 2,
            height: 2,
            backgroundColor: '#FFF',
            layoutOrigin: [0.5, 0.5],
            transform: [
              {translate: [2.5, 0, -3]},
              {rotateY: -25}
            ]
          }}
        >
         <VrButton
            onClick={() => {
              NativeModules.LinkingManager.openURL(url)
            }}
            onLongClick={() => {console.log ('clicked long')}}
            onButtonPress={() => {console.log('pressed')}}
            onButtonRelease={() => {console.log('released')}}
          > 
          <Image 
            source={asset('location.png')} 
            style={{
              height: 1.8
            }}
          /> 
          <Text
            style={{
              color: '#333',
              fontSize: 0.12,
              textAlign: 'center'
            }}
          >
            Click Here to get Directions
          </Text>
          </VrButton>
        </View>
      </View>
    )
  }
}

AppRegistry.registerComponent('App', () => App)
