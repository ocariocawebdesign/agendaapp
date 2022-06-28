import React from 'react';
import { AppRegistry } from 'react-native';
import App from './App';
import { name as appName } from './app.json';
import { Provider as PaperProvider } from 'react-native-paper';

 //export ANDROID_HOME="/home/producao/Android/Sdk"
 
export default function Main() {
    return(
        <PaperProvider>
            <App/>
        </PaperProvider>
    )
}
 
AppRegistry.registerComponent(appName, () => Main);
 
 
