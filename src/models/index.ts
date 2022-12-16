export interface IImageProps {
  data: {
    id: number;
    attributes: {
      formats: any;
      url: string;
      width: number;
      height: number;
    };
  };
}
export interface ISeoProps {
  canonicalURL: string;
  keywords: string;
  metaDescription: string;
  metaImage: IImageProps;
  metaTitle: string;
  titleTemplate: string;
  metaRobots: string;
  structuredData: JSON;
}

export interface IFooterMenu {
  id: number;
  name: string;
  menus: Array<{
    id: number;
    name: string;
    link: string;
    isExternalLink: boolean;
  }>;
}

export interface INavMenu {
  id: number;
  name: string;
  menuChildren: {
    articles: {
      data: Array<{
        id: number;
        attributes: {
          title: string;
          slug: string;
        };
      }>;
    };
  };
  article: {
    data: IArticleMin;
  };
}

export interface IArticleMin {
  id: number;
  attributes: {
    slug: string;
    title: string;
    thumbImage: IImageProps;
    description: string;
  };
}

export interface IAboutUs {
  id: number;
  description: string;
  title: string;
  aboutus: Array<{
    name: string;
    description: string;
    image: IImageProps;
    id: number;
  }>;
}

export interface IHComponent {
  id: number;
  description: string;
  name: string;
  textPosition: "left" | "center" | "right";
  title: string;
  articles: {
    data: IArticleMin[];
  };
}

export interface IPartner {
  id: number;
  attributes: {
    name: string;
    image: IImageProps;
  };
}

export interface IArticle {
  id: number;
  attributes: {
    title: string;
    slug: string;
    content?: string;
    thumbImage?: IImageProps;
    description?: string;
    publishedAt?: string;
    listArticle: {
      data: IArticle[];
    };
  };
}

export interface IArticleParams {
  page: number;
  pageSize: number;
  cate?: string;
}
