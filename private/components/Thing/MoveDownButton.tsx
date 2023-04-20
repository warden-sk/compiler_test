/*
 * Copyright 2023 Marek Kobida
 */

import React from 'react';
import type * as h from '../../helpers';

function MoveDownButton({ thing }: { thing: h.Thing }) {
  return <div cursor="pointer" onClick={() => thing.moveDown()} opacity={thing.isLast && '50'}>{`\u2193`}</div>;
}

export default MoveDownButton;
