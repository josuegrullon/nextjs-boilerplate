import React, { MouseEventHandler } from "react";

type DefaultReactAttibutes =  React.Attributes & { children?: React.ReactNode };
export type DefaultLayoutProps  = DefaultReactAttibutes & {
    showFooter?: boolean;
    showNavBar?: boolean;
    showLogin?: boolean;
    showSearchBar?: boolean;
    showExtraNavigation?: boolean;
    meta: React.ReactNode
  } 
  export interface DefaultNavBarProps extends  DefaultReactAttibutes {
    showSearchBar?: boolean;
    showLogin?: boolean;
    showExtraNavigation?:boolean;
} 

export interface CustomCProps extends  DefaultReactAttibutes  {
  placement:string;
   loading: boolean;
}
export interface PopOverLoaderProps extends  DefaultReactAttibutes  {
  close: MouseEventHandler<HTMLElement> | undefined;
}

export interface MapsProps extends  DefaultReactAttibutes  {
  center: {
    lat: number; 
    lng: number;
  };
  isOpen: boolean;
}