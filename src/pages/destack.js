import "grapesjs/dist/css/grapes.min.css";
export { ContentProvider } from "destack";

export default function Destack(props) {
  return <ContentProvider {...props} server={False} />;
}
