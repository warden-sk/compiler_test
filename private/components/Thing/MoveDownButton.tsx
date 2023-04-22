/*
 * Copyright 2023 Marek Kobida
 */

import React from 'react';
import * as h from '../../helpers';

function MoveDownButton({ thing }: { thing: h.Thing }) {
  return (
    <div cursor="pointer" onClick={() => thing.moveDown()} opacity={thing.isLast && '50'}>
      {h.icons.down}
    </div>
  );
}

export default MoveDownButton;
