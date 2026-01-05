export const delayImport = (factory, delay = 2000) => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(factory());
      }, delay);
    });
  };
  