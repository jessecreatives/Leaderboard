import React, {useState, useEffect, forwardRef, useRef} from 'react';
import CountUp from 'react-countup';
import {getRandomInt} from '../helpers/Helpers';
import {ListItem, ID, Image, ProfileContainer} from '../styles/Styles';

const Streamer = forwardRef(({id, displayName, picture, initScore}, ref) => {
  const [score, setScore] = useState(initScore);
  
  // tweak usePrevious to ensure ref.current updates before score gets a new value
  const prevScoreRef = useRef();

  const [time, setTime] = useState(Date.now());

  useEffect(() => {
    const timeout = setTimeout(() => {
      const scoreUp = getRandomInt(100);
      prevScoreRef.current = score;
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
      <ID id={id}>{id}</ID>
      <Image src={picture} alt="" />
      <span>{displayName}</span>
    </ProfileContainer>
    {/* use CountUp to create scoreboard-like updating transition */}
    <div><CountUp start={prevScoreRef.current} end={score} duration={0.25}>{score}</CountUp>pt</div>
  </ListItem>
  );
});

export default Streamer;
