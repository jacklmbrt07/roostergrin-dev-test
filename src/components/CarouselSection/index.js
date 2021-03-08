import {
  InfoContainer,
  InfoWrapper,
  InfoRow,
  Column1,
  TextWrapper,
  TopLine,
  Heading,
  Subtitle,
  BtnWrap,
  Column2,
} from "../InfoSection/InfoElements";
import { Button } from "../ButtonElements";
// import "~slick-carousel/slick/slick.css"; 
// import "~slick-carousel/slick/slick-theme.css";
// import { useState } from "react";

const CarouselSection = ({
  lightBg,
  id,
  imgStart,
  topLine,
  lightText,
  darkText,
  description,
  buttonLabel,
  primary,
  dark,
  dark2,
}) => {
  //   const [index, setIndex] = useState(0);
  //   const handleSelect = (selectedIndex, e) => {
  //     setIndex(selectedIndex);
  //   };
//   const settings = {
//     dots: true,
//     infinite: true,
//     speed: 500,
//     slidesToShow: 1,
//     slidesToScroll: 1,
//   };
  return (
    <>
      <InfoContainer lightBg={lightBg} id={id}>
        <InfoWrapper>
          <InfoRow imgStart={imgStart}>
            <Column1>
              <TextWrapper>
                <TopLine>{topLine}</TopLine>
                <Heading lightText={lightText}>Heading</Heading>
                <Subtitle darkText={darkText}>{description}</Subtitle>
                <BtnWrap>
                  <Button
                    to="home"
                    smooth={true}
                    duration={500}
                    spy={true}
                    exact="true"
                    offset={-80}
                    primary={primary ? 1 : 0}
                    dark={dark ? 1 : 0}
                    dark2={dark2 ? 1 : 0}
                  >
                    {buttonLabel}
                  </Button>
                </BtnWrap>
              </TextWrapper>
            </Column1>
            <Column2>
              {/* <div>
                <Slider {...settings}>
                  <div>
                    <h3>1</h3>
                  </div>
                  <div>
                    <h3>2</h3>
                  </div>
                  <div>
                    <h3>3</h3>
                  </div>
                  <div>
                    <h3>4</h3>
                  </div>
                  <div>
                    <h3>5</h3>
                  </div>
                  <div>
                    <h3>6</h3>
                  </div>
                </Slider>
              </div> */}
            </Column2>
          </InfoRow>
        </InfoWrapper>
      </InfoContainer>
    </>
  );
};

export default CarouselSection;
