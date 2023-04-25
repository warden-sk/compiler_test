/*
 * Copyright 2023 Marek Kobida
 */

import React from 'react';
import * as helpers from '../../helpers';

function ExportButton() {
  const { things } = React.useContext(helpers.context);

  if (things.length) {
    return (
      <div
        border="2"
        borderRadius="2"
        cursor="pointer"
        display="flex"
        fontWeight="600"
        onClick={() => {
          const file = helpers.encodeThings([...things]);

          const fileUrl = URL.createObjectURL(new Blob([file], { type: 'text/plain' }));

          const a = document.createElement('a');
          a.download = 'things.txt';
          a.href = fileUrl;

          a.click();

          URL.revokeObjectURL(fileUrl);
        }}
        p="2"
        spaceX="2"
      >
        <div>{helpers.icons.down}</div>
        <div>Export to file</div>
      </div>
    );
  }
}

export default ExportButton;
