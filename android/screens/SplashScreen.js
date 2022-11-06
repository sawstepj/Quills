import React, {View} from 'react';
import Splash from '../../components/Splash';
import HomeScreen from '../screens/HomeScreen';

export default class SplashScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      component: <Splash />,
    };
  }

  componentDidMount() {
    this.timeoutHandle = setTimeout(() => {
      this.setState({component: <HomeScreen />});
    }, 3000);
  }

  componentWillUnmount() {
    clearTimeout(this.timeoutHandle);
  }

  render() {
    return this.state.component;
  }
}
