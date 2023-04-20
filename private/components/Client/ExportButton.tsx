/*
 * Copyright 2023 Marek Kobida
 */

import React from 'react';
import * as h from '../../helpers';

function ExportButton() {
  const { things } = React.useContext(h.context);

  if (things.size) {
    return (
      <div
        border="2"
        borderRadius="2"
        cursor="pointer"
        fontWeight="600"
        onClick={() => {
          const file = h.encodeThings([...things]);
          const fileUrl = URL.createObjectURL(new Blob([file], { type: 'text/plain' }));

          const a = document.createElement('a');
          a.download = 'things.txt';
          a.href = fileUrl;

          a.click();

          URL.revokeObjectURL(fileUrl);
        }}
        p="2"
      >
        Export things
      </div>
    );
  }
}

export default ExportButton;
