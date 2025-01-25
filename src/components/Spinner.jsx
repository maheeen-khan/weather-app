import React from 'react';
import { Spin } from 'antd';

const Spinner = () => {

  const [auto, setAuto] = React.useState(false);
  const [percent, setPercent] = React.useState(-50);
  const timerRef = React.useRef(null);

  React.useEffect(() => {
    timerRef.current = setTimeout(() => {
      setPercent((v) => {
        const nextPercent = v + 5;
        return nextPercent > 150 ? -50 : nextPercent;
      });
    }, 100);
    return () => clearTimeout(timerRef.current);
  }, [percent]);
  const mergedPercent = auto ? 'auto' : percent;

  return (

    
      <Spin percent={mergedPercent} size="large" />
    
  );
};
export default Spinner;