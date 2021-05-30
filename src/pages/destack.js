import "grapesjs/dist/css/grapes.min.css";
import { ContentProvider } from "destack";

export default function Destack(props) {
  return <ContentProvider {...props} server={false} />;
}
