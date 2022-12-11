import { createContext, ReactNode, useContext, useMemo, useState } from "react";
import { IFooterMenu, IImageProps, INavMenu, ISeoProps } from "../models";

interface GlobalProviderProps {
  children: ReactNode;
  globalData: {
    data: {
      id?: number;
      attributes?: {
        logo: IImageProps;
        favicon: IImageProps;
        defaultSeo: ISeoProps;
        socialLink: any;
        address: string;
        email: string;
        hotline: string;
        menuDynamic: any;
        footerMenu: any;
        nameOfCompany: string;
        office: string;
        phoneNumber: string;
        facebookLink: string;
        youtubeLink: string;
        locationMap: string;
      };
    };
  };
}

interface IGlobalProviderContext {
  globalData: {
    data: {
      id?: number;
      attributes?: {
        logo: IImageProps;
        favicon: IImageProps;
        defaultSeo: ISeoProps;
        address: string;
        email: string;
        hotline: string;
        menuDynamic: INavMenu[];
        footerMenu: IFooterMenu[];
        nameOfCompany: string;
        office: string;
        phoneNumber: string;
        facebookLink: string;
        youtubeLink: string;
        locationMap: string;
      };
    };
  };
  showNavMobile: boolean;
  setShowNavMobile: any;
}

export const GlobalContext = createContext({} as IGlobalProviderContext);

export const useGlobalContext = () => useContext(GlobalContext);

const GlobalProvider = ({ children, globalData }: GlobalProviderProps) => {
  const [showNavMobile, setShowNavMobile] = useState(false);
  const value = useMemo(
    () => ({
      globalData,
      showNavMobile,
      setShowNavMobile,
    }),
    [globalData, showNavMobile]
  );
  return (
    <GlobalContext.Provider value={value}>{children}</GlobalContext.Provider>
  );
};

export default GlobalProvider;
