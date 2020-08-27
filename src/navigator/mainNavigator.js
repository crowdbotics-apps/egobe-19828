import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import ArticleList94795Navigator from '../features/ArticleList94795/navigator';
import ArticleList94794Navigator from '../features/ArticleList94794/navigator';
import ArticleList94793Navigator from '../features/ArticleList94793/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {

    //@BlueprintNavigationInsertion
ArticleList94795: { screen: ArticleList94795Navigator },
ArticleList94794: { screen: ArticleList94794Navigator },
ArticleList94793: { screen: ArticleList94793Navigator },

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
