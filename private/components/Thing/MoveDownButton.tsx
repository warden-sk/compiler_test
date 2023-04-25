/*
 * Copyright 2023 Marek Kobida
 */

import React from 'react';
import * as helpers from '../../helpers';

function MoveDownButton({ thing }: { thing: helpers.Thing }) {
  return (
    <div cursor="pointer" onClick={() => thing.moveDown()} opacity={thing.isLast && '50'}>
      {helpers.icons.down}
    </div>
  );
}

export default MoveDownButton;
