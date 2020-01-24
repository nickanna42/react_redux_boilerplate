import React from 'react';
import { connect } from 'react-redux';

import AddItem from './AddItem';
import ListItem from './ListItem';
import SaveButton from './SaveButton';

class List extends React.Component {
  render() {
    const { list } = this.props;

    const listItems = list.map(currentItem => (
      <ListItem item={currentItem} />
    ));

    return (
      <React.Fragment>
        {listItems}
        <AddItem />
        <SaveButton />
      </React.Fragment>
    );
  }
}

const mapStateToProps = (state) => ({
  list: state.list,
});

const mapDispatchToProps = {

};

export default connect(mapStateToProps, mapDispatchToProps)(List);
