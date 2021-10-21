import React from "react";
import {DefaultLayout} from "@components/layouts"
import dynamic from "next/dynamic";
import { Meta } from "@components/layouts/meta";

// @ts-ignore
const HomeSection:  React.ComponentType<{}> = dynamic(() => import("@components/sections/Home"), {
  loading: () => <p>Loading...</p>
});



const Home: React.ComponentType<{}> = () => {
  return (
    <DefaultLayout meta={
        <Meta
          title="Next.js Boilerplate Nateevos"
          description="Hello world"
        />
      }>
      <HomeSection />
    </DefaultLayout>
  );
};

export default React.memo(Home);
