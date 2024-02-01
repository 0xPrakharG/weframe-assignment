import Image from "next/image";
import { Carousel } from "react-responsive-carousel";
import Right from "@/public/right.svg";
import Left from "@/public/left.svg";

// carousel styles
import "react-responsive-carousel/lib/styles/carousel.css";

const StoryCarousel = ({ children }) => {
  const arrowStyles = {
    position: "absolute",
    zIndex: 2,
    top: "calc(50% - 15px)",
    width: 40,
    height: 40,
    cursor: "pointer",
    padding: "10px",
    background: "#212121",
    display: "flex",
    borderRadius: "5px",
  };
  const indicatorStyles = {
    background: "#D0D0CC",
    width: 50,
    height: 3,
    borderRadius: "10px",
    display: "inline-block",
    margin: "0 10px",
  };

  return (
    <Carousel
      showArrows={true}
      showStatus={false}
      showThumbs={false}
      renderIndicator={(onClickHandler, isSelected, index) => {
        if (isSelected) {
          return (

              <li
                style={{
                  ...indicatorStyles,
                  background: "white",
                }}
              />

          );
        }
        return (

            <li
              style={indicatorStyles}
              onClick={onClickHandler}
              onKeyDown={onClickHandler}
              value={index}
              key={index}
            />

        );
      }}
      renderArrowPrev={(onClickHandler, hasPrev, label) =>
        hasPrev && (
          <button
            type="button"
            onClick={onClickHandler}
            title={label}
            style={{ ...arrowStyles, left: 15 }}
          >
            <Image src={Left} alt="" width={100} height={100} className="" />
          </button>
        )
      }
      renderArrowNext={(onClickHandler, hasNext, label) =>
        hasNext && (
          <button
            type="button"
            onClick={onClickHandler}
            title={label}
            style={{ ...arrowStyles, right: 15 }}
          >
            <Image src={Right} alt="" width={100} height={100} className="" />
          </button>
        )
      }
    >
      {children}
    </Carousel>
  );
};

export default StoryCarousel;
