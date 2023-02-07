import PropTypes from 'prop-types'
import React, { memo, useState } from 'react'
import { TabsWrapper } from './style'
import classNames from 'classnames'
import ScrollView from '@/base-ui/scroll-view'

const SectionTabs = memo((props) => {
  const { tabNames, tabClick } = props
  const [ currentIndex, setCurrentIndex] = useState(0) 
  tabNames.push("哈哈哈")
  tabNames.push("呵呵呵")
  tabNames.push("嗯嗯嗯")


  function itemClickHandle(index, item){
    setCurrentIndex(index)
    tabClick(item)
  }

  return (
    <TabsWrapper>
      <ScrollView>
        {
            tabNames.map((item, index) => {
                return (
                    <div
                        key={index}
                        className={classNames("item", { active: index === currentIndex })}
                        onClick={e => itemClickHandle(index, item)}
                    >
                        {item}
                    </div>
                )
            })
        }
      </ScrollView>
    </TabsWrapper>
  )
})

SectionTabs.propTypes = {
    tabNames:PropTypes.array
}

export default SectionTabs
