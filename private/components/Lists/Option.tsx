/*
 * Copyright 2023 Marek Kobida
 */

import React from 'react';
import * as helpers from '../../helpers';

function Option({ listName }: { key: React.Key; listName: string }) {
  const { things } = React.useContext(helpers.context);

  return (
    <option value={listName}>
      {listName} ({things.filter(listName).length})
    </option>
  );
}

export default Option;
