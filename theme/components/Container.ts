import { ComponentStyleConfig } from '@chakra-ui/theme';

const Container: ComponentStyleConfig = {
  baseStyle: {
    px: "0",
    // Additional styles for desktop view
    "@media screen and (min-width: 48em)": {
      px: "20px", // Adjust the value based on your needs
    },
  },
  variants: {},
  sizes: {},
  defaultProps: {
    size: "",
    colorScheme: "",
  },
};

export default Container;
