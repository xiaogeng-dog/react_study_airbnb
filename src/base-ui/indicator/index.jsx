import PropTypes from "prop-types";
import React, { memo, useEffect, useRef } from "react";
import { IndicatorWrapper } from "./style";

const Indicator = memo((props) => {
  const indicatorRef = useRef();
  const { selectIndex = 0 } = props;

  useEffect(() => {
    const itemEl = indicatorRef.current.children[selectIndex];
    const newOffsetLeft = itemEl.offsetLeft;
    const newClientWidth = itemEl.clientWidth;
    const contentWidth = indicatorRef.current.clientWidth;
    const contentScroll = indicatorRef.current.scrollWidth;
    let distance = newOffsetLeft + newClientWidth * 0.5 - contentWidth * 0.5;
    const totalDistance = contentScroll - contentWidth;

    if (distance < 0) distance = 0;
    if (distance > totalDistance) distance = totalDistance;

    indicatorRef.current.style.transform = `translate(${-distance}px)`;
  }, [selectIndex]);

  return (
    <IndicatorWrapper>
      <div className="i-content" ref={indicatorRef}>
        {props.children}
      </div>
    </IndicatorWrapper>
  );
});

Indicator.propTypes = {
  selectIndex: PropTypes.number,
};

export default Indicator;
