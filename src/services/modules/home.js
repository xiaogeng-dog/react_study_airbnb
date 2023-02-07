import HBRequest from "..";

export function getHomeGoodPriceData(){
    return HBRequest.get({
        url:"/home/goodprice"
    })
}

export function getHomeHighScoreData(){
    return HBRequest.get({
        url: "/home/highscore"
    })
}

export function getHomeDiscountData() {
    return HBRequest.get({
        url: "/home/discount"
    })
}

export function getHomeHotRecommendData() {
    return HBRequest.get({
        url: "/home/hotrecommenddest"
    })
}

