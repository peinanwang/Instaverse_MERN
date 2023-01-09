import Home from "./Home";
import { memo } from "react";

// memo is a higher order component that will prevent the component from re-rendering if the props are the same
// if your component renders the same thing every time, you can use memo to prevent it from re-rendering
// react will skip rendering the component and reuse the last rendered result
export default memo(Home);