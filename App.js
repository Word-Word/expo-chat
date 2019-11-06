// Import the screens
import Main from './components/Main';
import Chat from './components/Chat';

// Import React Navigation
import { createStackNavigator } from 'react-navigation-stack'

// 오류 뜨길래 구글링해서 추가함
import { createAppContainer } from 'react-navigation';

// Create the navigator
const navigator = createStackNavigator({
  Main: { screen: Main },
  Chat: { screen: Chat },
});

// 에러 떠서 구글링해서 추가함
const App = createAppContainer(navigator)

// Export it as the root component
export default App


// npm install react-navigation react-native-gesture-handler react-native-reanimated react-native-screens
// npm i react-native-gifted-chat
// react-navigation-stack
// npm install firebase