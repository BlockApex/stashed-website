import { Stashed } from "../../assets";
import { VideoWrapper } from "../styled";

import { useEffect, useRef } from "react";
import { useInView } from "react-intersection-observer";

const Video = () => {
  const {
    ref: ref1,
    entry,
    inView,
  } = useInView({
    /* Optional options */
    threshold: [0.2],
    initialInView: false,

    triggerOnce: true,
    // trackVisibility: true,
  });

  const videoRef = useRef(null);

  useEffect(() => {
    if (entry?.isIntersecting) {
      // @ts-ignore
      videoRef.current.play();
    }
  }, [entry, inView]);
  return (
    <div>
      <div style={{ position: "relative" }}>
        <VideoWrapper ref={ref1}>
          <video
            ref={videoRef}
            src={Stashed}
            muted
            playsInline={true}
            style={{
              width: "100%",
            }}
            controls={false}
          />
        </VideoWrapper>
      </div>
    </div>
  );
};

export default Video;
