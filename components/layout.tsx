import React, { useEffect, useState } from "react";
import Head from "next/head";
import { useRouter } from "next/router";
import SocialMedia from "./social-media";

interface Props {
  children: React.ReactNode;
  title?: string;
}

const Layout = ({ children, title = "My App" }: Props) => {
  const router = useRouter();
  // set isMounted to false initially to load social media icons after page load
  const [isMounted, setIsMounted] = useState(false);
  useEffect(() => {
    setIsMounted(true);
  }, []);

  const handleClick = (path: string) => {
    router.push(path);
  }

  return (
    <div className="bg-gray-200 min-h-screen">
      <Head>
        <title>{title}</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <header className="bg-header-blue p-4">
        <nav className="items-center justify-between md:flex">
          <div className="flex items-start">
            {isMounted && <SocialMedia color={'white'} />}
          </div>
          <div className="flex uppercase text-white items-center">
            <a href="#" className={`px-1 py-1 mr-1  ${router.pathname === '/' && 'underline underline-offset-8'}`} onClick={() => handleClick("/")}>Home</a>
            <a href="#" className={`px-1 py-1 mr-1  ${router.pathname === '/resume' && 'underline underline-offset-8'}`} onClick={() => handleClick("/resume")}>Resume</a>
            <a href="#" className={`px-1 py-1 mr-1  ${router.pathname === '/project' && 'underline underline-offset-8'}`} onClick={() => handleClick("/project")}>Project</a>           
            <a href="#" className={`px-1 py-1 mr-1  ${router.pathname === '/blog' && 'underline underline-offset-8'}`} onClick={() => handleClick("/blog")}>Blog</a>
            <a href="#" className={`px-1 py-1 mr-1  ${router.pathname === '/contact' && 'underline underline-offset-8'}`} onClick={() => handleClick("/contact")}>Contact</a>
          </div>
        </nav>
      </header>
      <main className="mx-auto">{children}</main>
      <footer className="bg-footer-gray p-4">
        <div className="text-center text-white"> {isMounted && <SocialMedia color={'gray'} />} Copyright © {new Date().getFullYear()}</div>
      </footer>
    </div>
  );
};

export default Layout;


