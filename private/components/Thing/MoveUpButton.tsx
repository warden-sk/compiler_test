/*
 * Copyright 2023 Marek Kobida
 */

import React from 'react';
import type * as h from '../../helpers';

function MoveUpButton({ thing }: { thing: h.Thing }) {
  return <div cursor="pointer" onClick={() => thing.moveUp()} opacity={thing.isFirst && '50'}>{`\u2191`}</div>;
}

export default MoveUpButton;
