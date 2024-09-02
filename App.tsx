import React from 'react';
import { View } from 'react-native';
import Offerwall from './src/screens/Offerwall';


const App: React.FC = () => {
  return (
    <View style={{ flex: 1 }}>
      <Offerwall />
    </View>
  );
};

export default App;