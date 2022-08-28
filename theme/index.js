import { extendTheme } from 'native-base'

export default function theme(){
  return extendTheme({
    components: {
      Button: {
        // Can simply pass default props to change default behaviour of components.
        baseStyle: {
          rounded: 'md',
        },
        defaultProps: {
          colorScheme: 'red',
        },
      },
      Heading: {
        // Can pass also function, giving you access theming tools
        baseStyle: ({ colorMode }) => {
          return {
            color: colorMode === 'dark' ? 'red.300' : 'blue.300',
            fontWeight: 'normal',
          };
        },
      },
      Text: {
        baseStyle: {
          color: 'emerald.400'
        },
        defaultProps: {
          size: 'lg'
        },
        sizes: {
          xl: {
            fontSize: '64px'
          },
          lg: {
            fontSize: '32px'
          },
          md: {
            fontSize: '16px'
          },
          sm: {
            fontSize: '12px'
          }
        }
      }
    },
    colors: {
      primary: {
        50: '#e6ecff',
        100: '#b8c5fc',
        200: '#8a9ef5',
        300: '#5c77ef',
        400: '#3050ea',
        500: '#1937d1',
        600: '#122aa3',
        700: '#0a1e75',
        800: '#041248',
        900: '#00061c',
    },
    secondary : {
        50: '#ffe7fd',
        100: '#f3bfed',
        200: '#e996df',
        300: '#df6dd0',
        400: '#d444c2',
        500: '#bb2ba8',
        600: '#922084',
        700: '#69165f',
        800: '#410b39',
        900: '#1a0217',
    },
    tertiary : {
        50: '#ffe7f1',
        100: '#f4c0d2',
        200: '#e699b3',
        300: '#db7195',
        400: '#cf4976',
        500: '#b6305d',
        600: '#8e2448',
        700: '#671934',
        800: '#400c1f',
        900: '#1c010b',
    },
      // Redefining only one shade, rest of the color will remain same.
      amber: {
        400: '#d97706',
      },
    },
    config: {
      // Changing initialColorMode to 'dark'
      initialColorMode: 'light',
    },
  });
}
