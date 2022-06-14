import React, { ReactElement, useContext } from 'react';
import { createUseStyles } from 'react-jss';
import { observer } from 'mobx-react-lite';

import store, { StateContext } from '../store';

const fileChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
  const file = event.target.files?.[0];
  if (!file) {
    return;
  }

  const reader = new FileReader();
  reader.onload = async (loadEvent): Promise<void> => {
    const contents = loadEvent.target?.result?.toString();
    if (!contents) {
      return;
    }

    const img = new Image();
    img.src = contents;
    await img.decode();

    // const iData = new ImageData(new Uint8ClampedArray(), img.naturalWidth, img.naturalHeight);
    const canvas = document.createElement('canvas');
    canvas.width = img.naturalWidth;
    canvas.height = img.naturalHeight;
    const ctx = canvas.getContext('2d');
    ctx?.drawImage(img, 0, 0);

    const webpDataUrl = canvas.toDataURL('image/webp', 0.80);

    store.editCandidate(store.state.candidates[0], { image: webpDataUrl });
  };
  reader.readAsDataURL(file);
};

const useStyles = createUseStyles({
  root: {
    display: 'flex',
  },
});

function FileLoaderPlayground(): ReactElement {
  const classes = useStyles();
  const store = useContext(StateContext);

  return (
    <div>
      <input type="button" onClick={(): void => store.init()} value="Reset State" />
      <input type="button" onClick={(): void => store.morphIt()} value="Morph State" />
      <input type="file" id="file-input" onChange={fileChange} />
    </div>
  );
}

export default observer(FileLoaderPlayground);
