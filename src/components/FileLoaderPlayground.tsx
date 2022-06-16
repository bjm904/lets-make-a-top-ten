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

    // Load image
    const img = new Image();
    img.src = contents;
    await img.decode();

    const canvas = document.createElement('canvas');
    canvas.width = 200;
    canvas.height = 200;

    // Find image size to fix on canvas and maintain aspect ratio
    let ratioAspect = 1;
    const ratioWidth = img.naturalWidth / canvas.width;
    const ratioHeight = img.naturalHeight / canvas.height;
    if (ratioWidth > 1) {
      ratioAspect = ratioWidth;
    } else if (ratioHeight > 1) {
      ratioAspect = ratioHeight;
    }

    const newWidth = img.naturalWidth / ratioAspect;
    const newHeight = img.naturalHeight / ratioAspect;
    const offsetX = (canvas.width * 0.5) - (newWidth * 0.5);
    const offsetY = (canvas.height * 0.5) - (newHeight * 0.5);

    // Draw image to canvas
    const ctx = canvas.getContext('2d');
    ctx?.drawImage(img, offsetX, offsetY, newWidth, newHeight);

    // Export canvas as webp dataURL
    const webpDataUrl = canvas.toDataURL('image/webp', 0.80);
    console.log('Image DataURL', webpDataUrl);

    // Update Candidate image
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
