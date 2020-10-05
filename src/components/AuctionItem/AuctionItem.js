import React from 'react';
import PropTypes from 'prop-types';

const auctionItem = (props) => {

  return (
    <div>
      <p>{props.title}</p>
      <p>{props.price}</p>
    </div>
  );
};

auctionItem.propTypes = {
  title: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired
}

export default auctionItem;