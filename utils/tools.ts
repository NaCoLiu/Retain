export const openUrl = (_url: string, _blank = true) => {
  _blank ? window.open(_url) : navigateTo(_url);
};

export function toText(html: string): string {
  return html
    .replace(/<(style|script|iframe)[^>]*?>[\s\S]+?<\/\1\s*>/gi, "")
    .replace(/<[^>]+?>/g, "")
    .replace(/\s+/g, " ")
    .replace(/ /g, " ")
    .replace(/>/g, " ");
}

export function formatTime(time: string) {
  const dateNum = Date.parse(time);
  const date = new Date(dateNum)
  const year = date.getFullYear();
  const month = date.getMonth() + 1 < 10 ? '0' + (date.getMonth() + 1) : date.getMonth() + 1;
  const day = date.getDate() < 10 ? '0' + (date.getDate()) : date.getDate();
  const str = `${year}年${month}月${day}日`;
  return str;
}
