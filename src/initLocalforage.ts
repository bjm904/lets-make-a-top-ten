import localforage from 'localforage';

const initLocalforage = () => {
  localforage.config({
    driver: localforage.INDEXEDDB,
    name: 'lets-make-a-top-ten',
    version: 1.0,
  });
};

export default initLocalforage;
