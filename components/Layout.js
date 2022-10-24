import Head from "next/head";
import { useRouter } from "next/router";
import Header from "../sections/Header";
import SideBar from "../sections/SideBar";

const Layout = ({ children }) => {
  const router = useRouter();

  return (
    <>
      <Head>
        <title>Wrestle Break</title>
        <link rel="shortcut icon" href="/logo.png" />
        <link
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css"
          rel="stylesheet"
        />
        <meta
          name="description"
          content="Your one stop to everything wrestling"
        />
      </Head>

      <div className="min-h-screen flex flex-col">
        {/* {router.pathname == "/" ? (
          <>
            <Header />

            <main className="flex-grow">{children}</main>
          </>
        ) : ( */}
        <>
          {/* <Header bgColor={"from-appMain to-main"} /> */}
          <div className="sm:block md:hidden lg:hidden">
            <Header />
          </div>
          <div className="flex flex-no-wrap">
            <SideBar />
            <main className="flex-grow">{children}</main>
          </div>
        </>
        {/* )} */}
      </div>
    </>
  );
};

export default Layout;
