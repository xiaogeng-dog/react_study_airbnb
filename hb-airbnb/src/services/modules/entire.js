import HBRequest from "..";


export function getEntireRoomList(offset = 0, size = 20){
    return HBRequest.get({
        url:"/entire/list",
        params:{
            offset,
            size
        }
    })
}

