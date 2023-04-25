/*
 * Copyright 2023 Marek Kobida
 */

import React from 'react';
import * as helpers from '../../helpers';

function ImportButton() {
  const { things } = React.useContext(helpers.context);

  return (
    <div>
      <input
        display="none"
        id="import"
        onInput={e => {
          if (e.currentTarget.files) {
            const file = e.currentTarget.files[0];

            const fileReader = new FileReader();

            fileReader.addEventListener('load', () => {
              if (fileReader.result) {
                things.setThings(helpers.decodeThings(fileReader.result.toString()));
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
        <div>{helpers.icons.up}</div>
        <div>Import from file</div>
      </div>
    </div>
  );
}

export default ImportButton;
