import Head from "next/head";
import Header from "../sections/Header";

const Layout = ({ children }) => {
  return (
    <>
      <Head>
        <title>Wrestle Break</title>
        <link rel="shortcut icon" href="/favicon.svg" />
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
        <Header />
        <main className="flex-grow">{children}</main>
      </div>
    </>
  );
};

export default Layout;
