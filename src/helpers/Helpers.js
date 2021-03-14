import React, {useEffect, useRef} from 'react';

export const convertScoreToDigits = score => {
    return score.toString().split('');
}
  
export const covertDigitsToScore = digits => {
    return parseInt(digits.join(''));
}

export const calculateBoundingBoxes = children => {
    const boundingBoxes = {};

    React.Children.forEach(children, child => {
    const domNode = child.ref.current;
    const nodeBoundingBox = domNode.getBoundingClientRect();

    boundingBoxes[child.key] = nodeBoundingBox;
});

return boundingBoxes;
};

export const usePrevious = value => {
    const prevChildrenRef = useRef();

    useEffect(() => {
        prevChildrenRef.current = value;
    }, [value]);

    return prevChildrenRef.current;
};

export const shuffleArray = array => 
    array
      .map(a => ({ sort: Math.random(), value: a }))
      .sort((a, b) => a.sort - b.sort)
      .map(a => a.value);
  
export const getRandomInt = max => 
    Math.floor(Math.random() * Math.floor(max));