import React from 'react';
import Layout from './components/Layout/Layout';
import AuctionBuilder from './containers/AuctionBuilder/AuctionBuilder';

function App() {
  return (
    <div>
      <Layout>
        <AuctionBuilder></AuctionBuilder>
      </Layout>
    </div>
  );
}

export default App;
