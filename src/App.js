import React from 'react';

// Containers
import BurgerBuilder from './containers/BurgerBuilder/BurgerBuilder';

// Components
import Layout from './components/Layout/Layout';

function App() {
  return (
    <Layout>
        <BurgerBuilder/>
    </Layout>
  );
}

export default App;
