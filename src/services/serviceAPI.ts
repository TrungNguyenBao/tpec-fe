import { IArticleParams } from "../models";
import serviceClient from "./serviceClient";
const qs = require("qs");

export const serviceAPI = {
  getGlobalData(): Promise<any> {
    const query = qs.stringify({
      populate: {
        logo: "*",
        favicon: "*",
        footerMenu: {
          populate: "*",
        },
        defaultSeo: {
          populate: "*",
        },
        menuDynamic: {
          populate: {
            article: {
              fields: ["title", "slug"],
            },
            menuChildren: {
              populate: {
                articles: {
                  fields: ["title", "slug"],
                },
              },
            },
          },
        },
      },
    });
    return serviceClient.get(`/api/global-setting?${query}`);
  },
  getHomeData(): Promise<any> {
    const query = qs.stringify({
      populate: {
        banner: {
          populate: "*",
        },
        products: {
          populate: {
            articles: {
              fields: ["title", "slug", "description"],
              populate: {
                thumbImage: "*",
              },
            },
          },
        },
        services: {
          populate: {
            articles: {
              fields: ["title", "slug", "description"],
              populate: {
                thumbImage: "*",
              },
            },
          },
        },
        article: {
          populate: {
            articles: {
              fields: ["title", "slug", "description"],
              populate: {
                thumbImage: "*",
              },
            },
          },
        },
        aboutUs: {
          populate: {
            aboutus: {
              populate: "*",
            },
          },
        },
      },
    });
    return serviceClient.get(`/api/home-setting?${query}`);
  },
  getPartner(): Promise<any> {
    const query = qs.stringify({
      populate: "*",
    });
    return serviceClient.get(`/api/partners?${query}`);
  },

  createRegister(phoneNumber = ""): Promise<any> {
    return serviceClient.post(`/api/register-supports`, {
      data: {
        phoneNumber,
      },
    });
  },
  createContact(data: any): Promise<any> {
    return serviceClient.post(`/api/contacts`, {
      data,
    });
  },
  getArticleById(id: number): Promise<any> {
    return serviceClient.get(`/api/articles/${id}`);
  },
  getArticleByCate(
    param: IArticleParams = {
      page: 1,
      pageSize: 12,
      cate: "hand-book",
    }
  ): Promise<any> {
    const query = qs.stringify({
      pagination: {
        page: param?.page,
        pageSize: param?.pageSize,
      },
      fields: ["title", "slug", "publishedAt", "description"],
      populate: {
        thumbImage: "*",
      },
      filters: {
        category: param?.cate,
      },
    });
    return serviceClient.get(`/api/articles?${query}`);
  },
};
