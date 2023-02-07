import PropTypes from 'prop-types'
import React, { memo, useCallback, useState } from 'react'
import { SectionV2Wrapper } from './style'

import SectionHeader from '@/components/section-header'
import SectionRooms from '@/components/section-rooms'
import SectionTabs from '@/components/section-tabs'
import SectionFooter from '@/components/section-footer'

const HomeSectionV2 = memo((props) => {
  const { infoData } = props
  
  const tabsData = Object.keys(infoData.dest_list)
  const initialName = tabsData[0]
  const [ name, setName ] = useState(initialName)

  const tabClickHandle = useCallback(function (name){
    setName(name)
  }, [])  

  return (
    <SectionV2Wrapper>
        <SectionHeader title={infoData.title}  subTitle={infoData.subtitle}/>
        <SectionTabs tabNames={tabsData}  tabClick={tabClickHandle} />
        <SectionRooms roomList={infoData.dest_list?.[name]} itemWidth="33.3333%" />
        <SectionFooter name={name} />
    </SectionV2Wrapper>
  )
})

HomeSectionV2.propTypes = {
    infoData:PropTypes.object
}

export default HomeSectionV2

