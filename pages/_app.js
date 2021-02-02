import "../styles/timeline.css";
import "../styles/globals.css";
import "bootstrap/dist/css/bootstrap.min.css";
import dynamic from "next/dynamic";
const AnimatedCursor = dynamic(() => import("react-animated-cursor"), {
  ssr: false,
});

export function reportWebVitals(metric) {
  console.log(metric);
}

function MyApp({ Component, pageProps }) {
  return (
    <>
      <div style={{ zIndex: "1100" }}>
        <AnimatedCursor
          innerSize={18}
          outerSize={24}
          color="182,95,207"
          outerAlpha={0.2}
          innerScale={2}
          outerScale={5}
        />
      </div>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
