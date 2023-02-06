import React, { memo } from 'react'
import { shallowEqual, useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { RoomsWrapper } from './style'

import RoomItem from '@/components/room-item'
import { changePictureUrlsAction } from '@/store/modules/detail'

const EntireRooms = memo(() => {
  
  const { roomList, totalCount, isLoading }  = useSelector(state => ({
    roomList: state.entire.roomList,
    totalCount: state.entire.totalCount,
    isLoading: state.entire.isLoading
  }), shallowEqual)

  const navigate = useNavigate()
  const dispatch = useDispatch()
  function itemClickHandle(item) {
    // console.log("item>>>",item)
    dispatch(changePictureUrlsAction(item))
    navigate('/detail')
  }

  return (
    <RoomsWrapper>
      <h2 className='title'>{totalCount}多处住所</h2>
      <div className='list'>
        {
          roomList.map(item => {
            return (
              <RoomItem 
                itemData={item} 
                itemWidth="20%" 
                key={item._id}
                itemClick={ e => itemClickHandle(item)}
              />
            )
          })
        }  
      </div>
      { isLoading && <div className='cover'></div> }        
    </RoomsWrapper> 
  )
})

export default EntireRooms

