/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React from 'react';
import {SafeAreaView} from 'react-native';
import ArrowComponent from './src/screens/ArrowComponent';
import ClassComponents from './src/screens/ClassComponents';
import * as D from './src/data';
import Person from './src/screens/Person';

const person = D.createRandomPerson();

const App = () => {
  return (
    <SafeAreaView>
      <ClassComponents />
      <ArrowComponent />
      <Person person={person} />
    </SafeAreaView>
  );
};

export default App;
