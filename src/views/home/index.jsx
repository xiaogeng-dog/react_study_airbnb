import React, { memo, useEffect } from "react";
import request from "@/services";
import { HomeWrapper } from "./style";
import HomeBanner from "./c-cpns/home-banner";
import { shallowEqual, useDispatch, useSelector } from "react-redux";
import { fetchHomeDataAction } from "@/store/modules/home";
import { changeHeaderConfigAction } from "@/store/modules/main";
import { isEmptyO } from "@/utils";
import HomeSectionV2 from "./c-cpns/home-section-v2";
import HomeSectionV1 from "./c-cpns/home-section-v1";

const Home = memo(() => {
  const { goodPriceInfo, highScoreInfo, discountInfo, recommendInfo } =
    useSelector(
      (state) => ({
        goodPriceInfo: state.home.goodPriceInfo,
        highScoreInfo: state.home.highScoreInfo,
        discountInfo: state.home.discountInfo,
        recommendInfo: state.home.recommendInfo,
      }),
      shallowEqual
    );

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchHomeDataAction());
    // dispatch(changeHeaderConfigAction({ isFixed: true, topAlpha: true }));
  }, [dispatch]);

  return (
    <div>
      <HomeWrapper>
        <HomeBanner />
        <div className="content">
          {isEmptyO(discountInfo) && <HomeSectionV2 infoData={discountInfo} />}
          {isEmptyO(recommendInfo) && (
            <HomeSectionV2 infoData={recommendInfo} />
          )}

          {isEmptyO(goodPriceInfo) && (
            <HomeSectionV1 infoData={goodPriceInfo} />
          )}
          {isEmptyO(highScoreInfo) && (
            <HomeSectionV1 infoData={highScoreInfo} />
          )}
        </div>
      </HomeWrapper>
    </div>
  );
});

export default Home;
