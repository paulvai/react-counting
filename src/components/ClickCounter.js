import React from 'react';

class ClickCounter extends React.Component {
  
  render() {
    const { count } = this.state;
    return (
      <>
        <button type="button" onClick={this.incrementCount}>
          Clicked {count} times
        </button>
      </>
    );
  }
}
export default ClickCounter;
