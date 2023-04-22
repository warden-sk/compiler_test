/*
 * Copyright 2023 Marek Kobida
 */

import React from 'react';
import * as h from '../../helpers';

function MoveUpButton({ thing }: { thing: h.Thing }) {
  return (
    <div cursor="pointer" onClick={() => thing.moveUp()} opacity={thing.isFirst && '50'}>
      {h.icons.up}
    </div>
  );
}

export default MoveUpButton;
