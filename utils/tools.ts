

export const openUrl = (_url: string, _blank = true) => {
  _blank ? window.open(_url) : navigateTo(_url);
};


