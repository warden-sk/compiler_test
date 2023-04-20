/*
 * Copyright 2023 Marek Kobida
 */

import React from 'react';
import type * as h from '../../helpers';

function DeleteButton({ thing }: { thing: h.Thing }) {
  return (
    <div cursor="pointer" onClick={() => thing.delete()}>
      {'\u2717'}
    </div>
  );
}

export default DeleteButton;
