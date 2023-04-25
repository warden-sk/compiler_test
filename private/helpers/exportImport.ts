/*
 * Copyright 2023 Marek Kobida
 */

import React from 'react';
import context from './context';
import decodeThings from './decodeThings';
import encodeThings from './encodeThings';

function exportThings() {
  const { things } = React.useContext(context);

  const file = encodeThings([...things]);

  const fileUrl = URL.createObjectURL(new Blob([file], { type: 'text/plain' }));

  const a = document.createElement('a');
  a.download = 'things.txt';
  a.href = fileUrl;

  a.click();

  URL.revokeObjectURL(fileUrl);
}

function importThings(e: React.FormEvent<HTMLInputElement>) {
  const { things } = React.useContext(context);

  if (e.currentTarget.files) {
    const [file] = e.currentTarget.files;

    file.text().then(text => things.setThings(decodeThings(text)));
  }
}
