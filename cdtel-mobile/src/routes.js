import {createAppContainer, createSwitchNavigator} from 'react-navigation';

import {Login} from './layout/Login';
import {Main} from './layout/Main';
import {Register} from './layout/Register';

export default createAppContainer(
  createSwitchNavigator({
    Login,
    Register,
    Main,
  }),
);
