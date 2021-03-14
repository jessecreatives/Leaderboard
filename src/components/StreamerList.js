import React, {useState, useEffect, useLayoutEffect} from 'react';
import {usePrevious, calculateBoundingBoxes} from '../helpers/Helpers';

const StreamerList = ({ children }) => {
    const [boundingBox, setBoundingBox] = useState({});
    const [prevBoundingBox, setPrevBoundingBox] = useState({});
    const prevChildren = usePrevious(children);
  
    useLayoutEffect(() => {
      const newBoundingBox = calculateBoundingBoxes(children);
      setBoundingBox(newBoundingBox);
    }, [children]);
  
    useLayoutEffect(() => {
      const prevBoundingBox = calculateBoundingBoxes(prevChildren);
      setPrevBoundingBox(prevBoundingBox);
    }, [prevChildren]);
  
    useEffect(() => {
      const hasPrevBoundingBox = Object.keys(prevBoundingBox).length;
  
      if (hasPrevBoundingBox) {
        React.Children.forEach(children, child => {
          const domNode = child.ref.current;
          const firstBox = prevBoundingBox[child.key];
          const lastBox = boundingBox[child.key];
          const deltaY = firstBox.top - lastBox.top;
  
          if (deltaY) {
            requestAnimationFrame(() => {
              domNode.style.transform = `translateY(${deltaY}px)`;
              domNode.style.transition = "transform 0s";
  
              requestAnimationFrame(() => {
                domNode.style.transform = "";
                domNode.style.transition = "transform 500ms";
              });
            });
          }
        });
      }
    }, [boundingBox, prevBoundingBox, children]);
  
    return children;
};

export default StreamerList;