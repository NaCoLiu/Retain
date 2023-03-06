export interface NavType {
  icon: string;
  name: string;
  url: string;
  isblank?: boolean;
}
export const nav: NavType[] = [
  // {
  //   icon: "material-symbols:edit-document",
  //   name: "Blog",
  //   url: "https://blog.nco.im",
  //   isblank: true,
  // },
  {
    icon: "uil:github",
    name: "Github",
    url: "https://github.com/nacoliu",
  },
  {
    icon: "uil:telegram",
    name: "Telegram",
    url: "https://t.me/nacoliu",
  },
  {
    icon: "material-symbols:alternate-email-sharp",
    name: "Mail",
    url: "mailto://naco@nco.im",
  },
  {
    icon: "uil:instagram",
    name: "Instagram",
    url: "https://instagram.com/nacoliu",
  },
];
