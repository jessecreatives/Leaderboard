import React, {forwardRef} from 'react';
import Profile from './Profile';
import ScoreBoard from './ScoreBoard';
import {ListItem} from '../styles/Styles';

const Streamer = forwardRef(({id, displayName, picture, score}, ref) => (
    <ListItem ref={ref}>
      <Profile id={id} displayName={displayName} picture={picture} />
      <ScoreBoard initScore={score} />
    </ListItem>
));

export default Streamer;
