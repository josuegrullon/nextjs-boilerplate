import * as React from 'react'
import dynamic from "next/dynamic";
import { DefaultLayoutProps } from './../../types/generalTypes';

const DefaultLayout:  React.ComponentType<DefaultLayoutProps> = dynamic(() => import("@components/layouts/mainLayout"), {
    loading: () => <p>Loading...</p>
  });


export {
  DefaultLayout,
}