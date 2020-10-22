import React, { useState, useEffect } from 'react';

import { Container, CtaBtn } from './styledComponents/styledComponents';
import AudioElm from './components/AudioElm/AudioElm';

const App = () => {
  useEffect(() => {   
    const audioElement = document.getElementById('joke-audio');
    audioElement.addEventListener('ended', () => setDisabled(false));
  });

  const [disabled, setDisabled] = useState(false);

  // VoiceRSS Speech Function
  const tellMe = joke => {
    const jokeString = joke.trim().replace(/ /g, '%20');
    // VoiceRSS Speech Parameters
    window.VoiceRSS.speech({
      key: process.env.REACT_APP_VOICERSS_API,
      src: jokeString,
      hl: 'en-us',
      r: 0,
      c: 'mp3',
      f: '44khz_16bit_stereo',
      ssml: false,
    });
  };

  // Get jokes from Joke API
  const getJokes = async () => {
    let joke = '';
    const apiUrl = 'https://sv443.net/jokeapi/v2/joke/Programming?blacklistFlags=nsfw,racist,sexist';
    try {
      const response = await fetch(apiUrl);
      const data = await response.json();
      // Assign One or Two Part Joke
      if (data.setup) {
        joke = `${data.setup} ... ${data.delivery}`;
      } else {
        joke = data.joke;
      }
      // Passing Joke to VoiceRSS API
      tellMe(joke);
      // Disable Button
      setDisabled(true);
    } catch (err) {
      console.log('getJokes error: ', err)
    }
  };

  return (
    <Container>
      <CtaBtn
        onClick={getJokes}
        disabled={disabled}
      >Tell me a Joke</CtaBtn>
      <AudioElm />
    </Container>
  );
}

export default App;
