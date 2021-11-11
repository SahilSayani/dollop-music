import Head from "next/head";

export default function Home() {
  return (
    <div className='container'>
      <Head>
        <title>Dollop Music</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <main>
        <h1 className='text-blue-500'>Home</h1>
      </main>
    </div>
  );
}