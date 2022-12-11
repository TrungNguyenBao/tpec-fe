/* eslint-disable camelcase */
import Banner from "@/components/Banner";
import Contact from "@/components/Contact";
import { FooTer } from "@/components/FooTer";
import { Header } from "@/components/Header";
import { useRouter } from "next/router";
import React from "react";
import NavMobile from "./NavMobile";

type Props = {
  children: React.ReactNode;
};

const AppLayout = ({ children }: Props) => {
  const router = useRouter();

  return (
    <>
      <Header />
      <NavMobile />
      {router.pathname === "/" && <Banner />}
      <main>{children}</main>
      <FooTer />
      <Contact />
    </>
  );
};

export default AppLayout;
