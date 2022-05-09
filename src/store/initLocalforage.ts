import localforage from 'localforage';

const initLocalforage = (stateVersion: number): void => {
  localforage.config({
    driver: localforage.INDEXEDDB,
    name: 'lets-make-a-top-ten',
    version: stateVersion,
  });
};

export default initLocalforage;
