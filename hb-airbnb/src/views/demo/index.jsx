import React, { memo, useState } from 'react'
import { DemoWrapper } from './style'
import { Button } from 'antd';
import Indicator from '@/base-ui/indicator';

const Demo = memo(() => {
  const [ selectIndex, setSelectIndex ] = useState(0) 
  const names = ['aaa', 'bbb', 'ccc', 'eee', 'fff', 'ddd', 'hhh', 'iii', 'jjj', 'kkk']


  function btnClickHandle(isRight = false){
    let newIndex = isRight ? selectIndex + 1 : selectIndex - 1
    if ( newIndex < 0 ) newIndex = names.length - 1
    if ( newIndex > names.length - 1 ) newIndex = 0
    setSelectIndex(newIndex)
  }

  return (
    <DemoWrapper>
        <Button onClick={e => btnClickHandle(false)} >上一个</Button>
        <Button onClick={e => btnClickHandle(true)} >下一个</Button>

        <div className='list'>
          <Indicator selectIndex={selectIndex}>
            {
              names.map(item => {
                return <button key={item}>{item}</button>
              })
            }
          </Indicator>
        </div>
    </DemoWrapper>
  )
})

export default Demo

