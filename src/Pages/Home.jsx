import React from 'react';
import Main from '../components/Main';
import Row from '../components/Row';
import requests from '../Requests';

function Home() {
  return (
      <>
          
          <Main />
          <Row rowID='1' title='UpComing' fetchURL={requests.requestUpcoming} />
          <Row rowID='2' title='Popular' fetchURL={requests.requestPopular} />
          <Row rowID='3' title='TopRated' fetchURL={requests.requestTopRated} />
          <Row rowID='4' title='Latest' fetchURL={requests.requestLatest} />
          <Row rowID='5' title='NowPlaying' fetchURL={requests.requestNowPlaying} />

    </>
  )
}

export default Home;