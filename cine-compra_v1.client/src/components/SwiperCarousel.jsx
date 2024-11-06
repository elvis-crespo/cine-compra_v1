import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/effect-fade";

// import required modules
import { Autoplay, Pagination, EffectFade } from "swiper/modules";
import styled from "styled-components";

const StyledSwiper = styled(Swiper)`
  .swiper-slide {
    padding-top: 4rem;
    text-align: center;
    font-size: 18px;
    background: #fff;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .swiper-slide img {
    display: block;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  .swiper {
    margin-left: auto;
    margin-right: auto;
  }

  .swiper-pagination-bullet-active {
    width: 24px;
    background-color: #edeeef;
    border-radius: 6px;
  }
`;

export default function SwiperCarousel() {
    return (
        <>
            <StyledSwiper
                slidesPerView={1}
                spaceBetween={30}
                loop={true}
                effect="fade"
                pagination={{
                    clickable: true,
                }}
                autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                }}
                navigation={true}
                modules={[Pagination, Autoplay, EffectFade]}
                className="mySwiper"
            >
                <SwiperSlide>
                    <img src="/public/lan-beekeeper.jpg" alt="" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src="/public/lan-aquaman.png" alt="" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src="/public/lan-creed3.png" alt="" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src="/public/lan-extraction2.png" alt="" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src="/public/lan-deadpool-2.png" alt="" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src="/public/lan-el-nino-y-la-garza.jpg" alt="" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src="/public/lan-beekeeper.jpg" alt="" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src="/public/lan-extraction2.png" alt="" />
                </SwiperSlide>
            </StyledSwiper>
        </>
    );
}
