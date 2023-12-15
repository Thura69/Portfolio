import InfoDetail from '@/components/InfoDetail';
import SomeAnimation from '@/components/SomeAnimation';
import SomeTitle from '@/components/SomeTitle';
import StickyCursor from '@/components/animation/StickyCursor';
import Head from 'next/head';
import React from 'react'

 const about = () => {
  return (
      <>
    <Head>
        <title>Thura Nyi | About</title>
        <link rel="icon" href="public/favicon.ico" />
    </Head>
      <StickyCursor/>
      <SomeTitle/>
      <SomeAnimation/>
      <InfoDetail/>
      </>
  )
}

export default about;