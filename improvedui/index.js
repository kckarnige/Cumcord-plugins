import theme from "./main.css";
let unpatch;
export default () => ({
    onLoad: () => (unpatch = theme()),
    onUnload: () => unpatch(),
});