import { fetchHomeDataAction } from '@/store/modules/home'
import React, { memo, useEffect } from 'react'
import { shallowEqual, useDispatch, useSelector } from 'react-redux'
import HomeBanner from './c-cpns/home-banner'
import HomeSectionV1 from './c-cpns/home-section-v1'
import HomeSectionV2 from './c-cpns/home-section-v2'
import { HomeWrapper } from './style'
import { isEmptyO } from '@/utils'
import { changeHeaderConfigAction } from '@/store/modules/main'

const Home = memo(() => {

  const { goodPriceInfo, highScoreInfo, discountInfo, recommendInfo } = useSelector((state) => ({
    goodPriceInfo:state.home.goodPriceInfo,
    highScoreInfo:state.home.highScoreInfo,
    discountInfo:state.home.discountInfo,
    recommendInfo:state.home.recommendInfo
  }), shallowEqual)

  const dispatch = useDispatch()
  useEffect(()=>{
    dispatch(fetchHomeDataAction())
    dispatch(changeHeaderConfigAction({ isFixed: true, topAlpha: true }))
  },[dispatch])

  return (
    <HomeWrapper>
      <HomeBanner />
      <div className='content'>
        { isEmptyO(discountInfo) && <HomeSectionV2 infoData={discountInfo} /> } 
        { isEmptyO(recommendInfo) && <HomeSectionV2 infoData={recommendInfo} /> }  

        { isEmptyO(goodPriceInfo) && <HomeSectionV1 infoData={goodPriceInfo} /> } 
        { isEmptyO(highScoreInfo) && <HomeSectionV1 infoData={highScoreInfo} /> } 
      </div>
    </HomeWrapper>
  )
})

export default Home