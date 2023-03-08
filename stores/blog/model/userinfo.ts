interface UserInfoType {
  id: number;
  name: string;
  url: string;
  description: string;
  link: string;
  slug: string;
  avatar_urls: Avatarurls;
  meta: any[];
  _links: Links;
}

interface Links {
  self: Self[];
  collection: Self[];
}

interface Self {
  href: string;
}

interface Avatarurls {
  '24': string;
  '48': string;
  '96': string;
}