/*
 * Copyright 2023 Marek Kobida
 */

import React from 'react';
import * as helpers from '../../helpers';

function DeleteButton({ thing }: { thing: helpers.Thing }) {
  return (
    <div cursor="pointer" onClick={() => thing.delete()}>
      {helpers.icons.delete}
    </div>
  );
}

export default DeleteButton;
