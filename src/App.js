import React, {useState, useEffect, createRef} from 'react';
import axios from 'axios';
import Streamer from './components/Streamer';
import StreamerList from './components/StreamerList';
import {shuffleArray} from './helpers/Helpers';
import {Container, Button} from './styles/Styles';

const URL = 'https://webcdn.17app.co/campaign/pretest/data.json';

function App() {
  const [streamers, setStreamers] = useState([]);

  useEffect(() => { 
    axios
      .get(URL)
      .then(res => setStreamers(res.data))
      .catch(err => console.log(err)
      );
  }, []);

  const shuffle = () => {
    const shuffledStreamers = shuffleArray(streamers);
    setStreamers(shuffledStreamers);
  };

  return (
    <Container>
      <StreamerList>
        {streamers.map((streamer, i) => {
          const {userID, displayName, picture, score} = streamer;
          return (
            <Streamer key={userID} id={i+1} displayName={displayName} picture={picture} initScore={score} ref={createRef()} />
          );
        })}
      </StreamerList>
      <Button type="button" onClick={shuffle}>
        Shuffle
      </Button>
    </Container>
  );
}

export default App;
