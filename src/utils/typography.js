import Typography from "typography"
import kirkhamTheme from "typography-theme-kirkham"
kirkhamTheme.baseFontSize = '15px' // was 20px.
//kirkhamTheme.headerFontFamily = ["Arapey"]
kirkhamTheme.bodyFontFamily = ["Rosario"]

const typography = new Typography(kirkhamTheme)

export default typography
export const rhythm = typography.rhythm


//import Typography from "typography"
//import theme from "typography-theme-kirkham"

//theme.overrideThemeStyles = () => ({
  //                                 a: {
    //                               color: "black",
      //                             textDecoration: "none",
        //                           fontSize: "15px",
          //                         }
            //                       });

//const typography = new Typography(theme)

//export default typography
//export const rhythm = typography.rhythm
