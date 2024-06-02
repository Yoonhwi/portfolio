import { Global } from "@emotion/react";

const Fonts = () => {
  <Global
    styles={`@font-face {
        font-family: 'NanumSquare';
        src: url('/fonts/NanumSquareR.eot');
        src: url('/fonts/NanumSquareR.eot?#iefix') format('embedded-opentype'),
             url('/fonts/NanumSquareR.woff') format('woff'),
             url('/fonts/NanumSquareR.ttf') format('truetype');
        font-weight: normal;
        font-style: normal;
      }`}
  />;
};

export default Fonts;
