import Head from "next/head";
import Header from "../sections/Header";

const Layout = ({ children }) => {
  return (
    <>
      <Head>
        <title>Wrestle Break</title>
        <meta
          name="description"
          content="Your one stop to everything wrestling"
        />
      </Head>
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-grow">{children}</main>
      </div>
    </>
  );
};

export default Layout;
