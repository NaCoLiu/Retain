interface CommentsType {
  id: number;
  post: number;
  parent: number;
  author: number;
  author_name: string;
  author_url: string;
  date: string;
  date_gmt: string;
  content: Content;
  link: string;
  status: string;
  type: string;
  author_avatar_urls: Authoravatarurls;
  meta: any[];
  _links: Links;
}

interface Links {
  self: Self[];
  collection: Self[];
  up: Up[];
}

interface Up {
  embeddable: boolean;
  post_type: string;
  href: string;
}

interface Self {
  href: string;
}

interface Authoravatarurls {
  '24': string;
  '48': string;
  '96': string;
}

interface Content {
  rendered: string;
}