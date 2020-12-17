import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import Maps186257Navigator from '../features/Maps186257/navigator';
import SignIn48186256Navigator from '../features/SignIn48186256/navigator';
import Dashboard19186255Navigator from '../features/Dashboard19186255/navigator';
import CalendarView4186254Navigator from '../features/CalendarView4186254/navigator';
import BlankScreen0186253Navigator from '../features/BlankScreen0186253/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {

    //@BlueprintNavigationInsertion
Maps186257: { screen: Maps186257Navigator },
SignIn48186256: { screen: SignIn48186256Navigator },
Dashboard19186255: { screen: Dashboard19186255Navigator },
CalendarView4186254: { screen: CalendarView4186254Navigator },
BlankScreen0186253: { screen: BlankScreen0186253Navigator },

    /** new navigators can be added here */
    SplashScreen: {
      screen: SplashScreen
    }
};

const DrawerAppNavigator = createDrawerNavigator(
  {
    ...AppNavigator,
  },
  {
    contentComponent: SideMenu
  },
);

const AppContainer = createAppContainer(DrawerAppNavigator);

export default AppContainer;
