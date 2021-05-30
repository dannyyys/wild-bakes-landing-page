import "grapesjs/dist/css/grapes.min.css";
import { getStaticProps } from "destack/build/server";
import { ContentProvider } from "destack";

export default function Destack(props) {
  return <ContentProvider {...props} server={false} />;
}
