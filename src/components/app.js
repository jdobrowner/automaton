import React, { Component } from 'react';
import GridContainer from './grid-container';
import Sidebar from './sidebar';
import Explanation from './explanation';

export default () => {
  return (
    <div className="app">
      <Sidebar />
      <GridContainer />
      <Explanation />
    </div>
  )
}
