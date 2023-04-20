/*
 * Copyright 2023 Marek Kobida
 */

import React from 'react';
import * as h from '../../helpers';

function ImportButton() {
  const { setThings } = React.useContext(h.context);

  return (
    <>
      <input
        display="none"
        id="import"
        onChange={e => {
          if (e.currentTarget.files) {
            const file = e.currentTarget.files[0];

            const fileReader = new FileReader();

            fileReader.addEventListener('load', () => {
              if (fileReader.result) {
                setThings(h.decodeThings(fileReader.result.toString()));
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
        fontWeight="600"
        onClick={() => {
          (window.document.querySelector('#import') as HTMLInputElement).click();
        }}
        p="2"
      >
        Import things
      </div>
    </>
  );
}

export default ImportButton;
