/*
 * Copyright 2023 Marek Kobida
 */

import React from 'react';
import * as helpers from '../../helpers';

function MoveUpButton({ thing }: { thing: helpers.Thing }) {
  return (
    <div cursor="pointer" onClick={() => thing.moveUp()} opacity={thing.isFirst && '50'}>
      {helpers.icons.up}
    </div>
  );
}

export default MoveUpButton;
