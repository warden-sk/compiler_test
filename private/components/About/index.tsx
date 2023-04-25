/*
 * Copyright 2023 Marek Kobida
 */

import React from 'react';
import ExportButton from './ExportButton';
import ImportButton from './ImportButton';
import './index.css';

function About() {
  return (
    <div border="2" borderRadius="2" className="About" p="4" spaceY="4" textAlign="center">
      <div fontSize="5" fontWeight="600">
        Things
      </div>
      <div opacity="50" spaceY="2">
        <ExportButton />
        <ImportButton />
      </div>
      <div>Copyright 2023 Marek Kobida</div>
    </div>
  );
}

export default About;
