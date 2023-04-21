/*
 * Copyright 2023 Marek Kobida
 */

import React from 'react';
import * as h from '../../helpers';

function Option({ listName }: { key: React.Key; listName: string }) {
  const { things } = React.useContext(h.context);

  return (
    <option value={listName}>
      {listName} ({things.filter(listName).length})
    </option>
  );
}

export default Option;
