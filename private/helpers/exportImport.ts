/*
 * Copyright 2023 Marek Kobida
 */

import React from 'react';
import context from './context';
import decodeThings from './decodeThings';
import encodeThings from './encodeThings';

export function exportThings() {
  const { things } = React.useContext(context);

  return () => {
    const file = encodeThings([...things]);

    const fileUrl = URL.createObjectURL(new Blob([file], { type: 'text/plain' }));

    const a = document.createElement('a');
    a.download = 'things.txt';
    a.href = fileUrl;

    a.click();

    URL.revokeObjectURL(fileUrl);
  };
}

export function importThings() {
  const { things } = React.useContext(context);

  return () => {
    const input = document.createElement('input');
    input.type = 'file';

    input.addEventListener('input', async function () {
      if (this.files) {
        const [file] = this.files;

        things.setThings(decodeThings(await file.text()));
      }
    });

    input.click();
  };
}
