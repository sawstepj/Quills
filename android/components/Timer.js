import React, {Component, Text} from 'react';

export default class Timer extends Component {
  /* component functions */
  constructor(props) {
    super(props);
    this.state = {
      time: props.count,
    };
  }
  componentDidMount() {
    this.addInterval = setInterval(() => this.increase(), 1000);
  }

  componentWillUnmount() {
    clearInterval(this.addInterval);
  }
  increase = () => {
    const {time} = this.state;
    const {onIncrease} = this.props;
    const newTime = time + 1;
    onIncrease(newTime);
    this.setState({time: newTime});
  };

  render() {
    return <Text> {this.state.time} </Text>;
  }
  /* render function */
}
