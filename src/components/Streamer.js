import React, {useState, useEffect, forwardRef} from 'react';
import CountUp from 'react-countup';
import {getRandomInt} from '../helpers/Helpers';
// import Profile from './Profile';
import ScoreBoard from './ScoreBoard';
import {ListItem, ID, Image, ProfileContainer} from '../styles/Styles';

const Streamer = forwardRef(({id, displayName, picture, initScore}, ref) => {
  const [score, setScore] = useState(initScore);

  const [time, setTime] = useState(Date.now());

  useEffect(() => {
    const timeout = setTimeout(() => {
      const scoreUp = getRandomInt(100);
      setScore(score + scoreUp);
      setTime(Date.now());
    }, 1000);
    return () => {
      clearTimeout(timeout);
    };
  }, [time]);
  return (
    <ListItem ref={ref}>
    <ProfileContainer>
      <ID>{id}</ID>
      <Image src={picture} alt="" />
      <span>{displayName}</span>
    </ProfileContainer>
    <div><CountUp start={initScore} end={score} duration={0.25}>{score}</CountUp>pt</div>
  </ListItem>
  );
});

export default Streamer;
