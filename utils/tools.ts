

export const openUrl = (_url: string, _blank = true) => {
  _blank ? window.open(_url) : (location.href = _url);
};


