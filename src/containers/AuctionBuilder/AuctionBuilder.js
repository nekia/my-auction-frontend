import React, { Component } from 'react';

import Aux from '../../hoc/Aux';
import AuctionList from '../../components/AuctionList/AuctionList';

class AuctionBuilder extends Component {
  render () {
    return (
      <Aux>
        <AuctionList/>
        <div>Auction Control</div>
      </Aux>
    )
  }
}

export default AuctionBuilder;