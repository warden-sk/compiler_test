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
          const file = e.currentTarget.files![0];

          const fileReader = new FileReader();

          fileReader.addEventListener('load', () => {
            if (typeof fileReader.result === 'string') {
              setThings(h.decodeThings(fileReader.result));
            }
          });

          fileReader.readAsText(file);
        }}
        type="file"
      />
      <div
        cursor="pointer"
        fontWeight="600"
        onClick={() => {
          (window.document.querySelector('#import') as HTMLInputElement).click();
        }}
      >
        Import things
      </div>
    </>
  );
}

export default ImportButton;
