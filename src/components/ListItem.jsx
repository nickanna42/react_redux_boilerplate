import React from 'react';

class ListItem extends React.Component {
  render() {
    const { item } = this.props;

    return (
      <React.Fragment>
        {JSON.stringify(item)}
        <br />
      </React.Fragment>
    );
  }
}
