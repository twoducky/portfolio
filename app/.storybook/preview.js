import '../styles/globals.css';
import NextImage from "next/image";

NextImage.propTypes = {
  unoptimized: null,
};

NextImage.defaultProps = {
  unoptimized: true,
  width: "100%",
  height: "100%"
};

// const OriginalNextImage = NextImage.default;

// Object.defineProperty(NextImage, "default", {
//   configurable: true,
//   value: (props) => (<OriginalNextImage {...props} unoptimized />),
// });

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
}