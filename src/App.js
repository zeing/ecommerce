import React from 'react';
import { Grommet, Box } from 'grommet'
import AppBar from './components/AppBar'
import ProductList from './components/ProductList'
import './App.css';

function App() {
  return (
    <Grommet plain full>
      <Box direction="column" fill>
        <AppBar />
        <Box
          direction="row"
          pad="medium"
          fill
        >
          <Box width="medium">
          search
          </Box>
          <Box flex>
            <ProductList />
          </Box>
        </Box>
      </Box>
    </Grommet>
  );
}

export default App;
