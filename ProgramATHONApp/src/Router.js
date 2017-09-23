import React from 'react';
import { Router, Stack, Scene } from 'react-native-router-flux';

import Splash from './views/Splash';
import Login from './views/Login';
import Register from './views/Register';
import Home from './views/Home';

const RouterComponent = () => {
  return (
    <Router
      navigationBarStyle={styles.navBar}
      titleStyle={styles.navBarTitle}
      barButtonTextStyle={styles.barButtonTextStyle}
      barButtonIconStyle={styles.barButtonIconStyle}
      sceneStyle={{ paddingTop: 54 }}
    >
      <Stack key="root">
        <Scene key="splash" component={Splash} hideNavBar={true}  initial/>
        <Scene key="login" component={Login} title="" hideNavBar={true} type="reset"/>
        <Scene key="register" component={Register} title="Registro"/>
        <Scene key="home" component={Home} title="ProgramATHONApp" type="reset"/>
      </Stack>
    </Router>
  );
};

const styles = {
  navBar: {
    backgroundColor: '#2980b9'
  },
  navBarTitle: {
    color: '#FFFFFF',
    fontWeight: 'bold'
  },
  barButtonTextStyle: {
    color: '#FFFFFF'
  },
  barButtonIconStyle: {
    tintColor: 'rgb(255,255,255)'
  }
};

export default RouterComponent;
