/*
 * Copyright 2023 Marek Kobida
 */

import React from 'react';
import * as h from '../../helpers';

function ImportButton() {
  const { things } = React.useContext(h.context);

  return (
    <div>
      <input
        display="none"
        id="import"
        onChange={e => {
          if (e.currentTarget.files) {
            const file = e.currentTarget.files[0];

            const fileReader = new FileReader();

            fileReader.addEventListener('load', () => {
              if (fileReader.result) {
                things.setThings(h.decodeThings(fileReader.result.toString()));
              }
            });

            fileReader.readAsText(file);
          }
        }}
        type="file"
      />
      <div
        border="2"
        borderRadius="2"
        cursor="pointer"
        display="flex"
        fontWeight="600"
        onClick={() => {
          (window.document.querySelector('#import') as HTMLInputElement).click();
        }}
        p="2"
        spaceX="2"
      >
        <div>{'\u2191'}</div>
        <div>Import</div>
      </div>
    </div>
  );
}

export default ImportButton;
