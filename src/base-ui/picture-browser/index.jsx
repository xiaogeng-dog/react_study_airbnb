import PropTypes from 'prop-types'
import IconArrowLeft from '@/assets/svg/icon-arrow-left';
import IconArrowRight from '@/assets/svg/icon-arrow-right';
import IconClose from '@/assets/svg/icon-close';
import React, { memo, useEffect, useState } from 'react'
import { BrowserWrapper } from './style'
import { CSSTransition, SwitchTransition } from 'react-transition-group'
import IconTriangleArrowBottom from '@/assets/svg/icon-triangle-arrow-bottom'
import IconTriangleArrowTop from '@/assets/svg/icon-triangle-arrow-top'
import Indicator from '../indicator';
import classNames from 'classnames';

const PictureBrowser = memo((props) => {
  const { pictureUrls, closeClick } = props

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isNext, setIsNext] = useState(true); 
  const [showList, setShowList] = useState(true);

  useEffect(() => {
    document.body.style.overflow = "hidden"
    return () => {
      document.body.style.overflow = "auto"
    };
  }, []);

  function closeClickHandle(){
    if(closeClick) closeClick()
  }

  function controlClickHandle(isRight = true){
    let newIndex = isRight ? currentIndex + 1 : currentIndex - 1
    if(newIndex > pictureUrls.length - 1) newIndex = 0
    if(newIndex < 0) newIndex = pictureUrls.length - 1
    setCurrentIndex(newIndex)
    setIsNext(isRight)
  }

  function bottomItemClickHandle(index){
    setIsNext(index > currentIndex)
    setCurrentIndex(index)
  }

  return (
    <BrowserWrapper isNext={isNext} showList={showList}>
        <div className='top'>
          <div className='close-btn' onClick={closeClickHandle}>
            <IconClose />
          </div>
        </div>
        <div className='slider'>
          <div className='control'>
            <div className='btn left' onClick={e => controlClickHandle(false)}>
              <IconArrowLeft width="77" height="77" />
            </div>
            <div className='btn right' onClick={e => controlClickHandle(true)}>
              <IconArrowRight width="77" height="77" />
            </div>
          </div>
          <div className='picture'>
            <SwitchTransition mode='in-out'>
              <CSSTransition key={pictureUrls[currentIndex]} classNames="pic" timeout={150} >
                <img src={pictureUrls[currentIndex]} alt="" />
              </CSSTransition>
            </SwitchTransition>
          </div>
        </div>
        <div className='preview'>
          <div className='info'>
            <div className='desc'>
              <div className='count'>
                <span>{currentIndex+1}/{pictureUrls.length}:</span>
                <span>room apartment图片{currentIndex+1}</span>
              </div>
              <div className='toggle' onClick={e => setShowList(!showList)}>
                <span>{showList ? '隐藏': '显示'}照片列表</span>
                { showList? <IconTriangleArrowBottom/>: <IconTriangleArrowTop/> }
              </div>
            </div>
            <div className='list'>
              <Indicator selectIndex={currentIndex}>
                { 
                  pictureUrls.map((item, index) => {
                    return (
                      <div 
                        className={classNames("item", { active: currentIndex === index })}
                        key={item}
                        onClick={e => bottomItemClickHandle(index)}
                      >
                        <img src={item} alt="" />
                      </div>
                    )
                  })
                }
              </Indicator>
            </div>
          </div>
        </div>
    </BrowserWrapper>
  )
})

PictureBrowser.propTypes = {
  pictureUrls: PropTypes.array
}

export default PictureBrowser
