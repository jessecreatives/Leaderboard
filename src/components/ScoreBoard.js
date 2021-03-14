import React, {useState, useEffect} from 'react';
import CountUp from 'react-countup';
import {getRandomInt} from '../helpers/Helpers';

const ScoreBoard = ({initScore}) => {
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

    return <div><CountUp start={initScore} end={score} duration={0.25}>{score}</CountUp>pt</div>;
}

export default ScoreBoard;
