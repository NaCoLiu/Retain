interface TagType {
  id: number;
  count: number;
  description: string;
  link: string;
  name: string;
  slug: string;
  taxonomy: string;
  meta: any[];
  _links: Links;
}

interface Links {
  self: Self[];
  collection: Self[];
  about: Self[];
  'wp:post_type': Self[];
  curies: Cury[];
}

interface Cury {
  name: string;
  href: string;
  templated: boolean;
}

interface Self {
  href: string;
}