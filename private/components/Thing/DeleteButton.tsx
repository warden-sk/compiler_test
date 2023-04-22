/*
 * Copyright 2023 Marek Kobida
 */

import React from 'react';
import * as h from '../../helpers';

function DeleteButton({ thing }: { thing: h.Thing }) {
  return (
    <div cursor="pointer" onClick={() => thing.delete()}>
      {h.icons.delete}
    </div>
  );
}

export default DeleteButton;
