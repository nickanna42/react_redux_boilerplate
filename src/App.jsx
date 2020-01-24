import React from 'react';

import { connect } from 'react-redux';
import { placeList } from './reduxElements/actions';

import { exampleFetch } from './remoting/'

// import {  } from './styles/commonStyles';

class App extends React.Component {
  async componentDidMount() {
    const { placeList } = this.props;

    const fetchedList = await exampleFetch();
    placeList(fetchedList);
  }

  render() {
    return 'hello world';
  }
}

const mapStateToProps = (state) => ({

});

const mapDispatchToProps = {
  placeList,
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
