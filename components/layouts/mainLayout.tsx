import * as React from 'react'
import dynamic from "next/dynamic";
// @ts-ignore
import ErrorBoundary from '@utils/ErrorBoundary'
import { DefaultLayoutProps, DefaultNavBarProps } from './../../types/generalTypes';

const Footer:  React.ComponentType<{}> = dynamic(() => import("@components/footers/footer"), {
  loading: () => <p>Loading...</p>
});

const DefaultNavBar:  React.ComponentType<DefaultNavBarProps> = dynamic(() => import("@components/navbars/defaultNavBar"), {
  loading: () => <p>Loading...</p>
});
  


const Layout  = ({meta, showExtraNavigation=true, showSearchBar=false, showLogin = true, showNavBar= true, showFooter= true, children}: DefaultLayoutProps)  => {
  return (
    <>
     <div>
       {meta}
      {showNavBar ? (
       <ErrorBoundary>
         <DefaultNavBar
            showLogin={showLogin}
            showSearchBar={showSearchBar}
            showExtraNavigation={showExtraNavigation}
          />
        </ErrorBoundary>
        ) : null}
      <div>
        {children}
      </div>
     {showFooter? (<ErrorBoundary> <Footer /></ErrorBoundary>): null} 
     </div>
    </>
  )
}

export default Layout



   
