import React from 'react';
import { connect } from 'react-redux';

// import {  } from './reduxElements/actions';
// import {  } from './styles/commonStyles';

class App extends React.Component {
  render() {
    return 'hello world';
  }
}

const mapStateToProps = (state) => ({

});

const mapDispatchToProps = {

};

export default connect(mapStateToProps, mapDispatchToProps)(App);
