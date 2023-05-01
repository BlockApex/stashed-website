import { useEffect, useRef } from "react";
import { useInView } from "react-intersection-observer";
import { isMobile } from "react-device-detect";

import { MobileVideo, VideoPlayBack } from "../../assets";
import { VideoWrapper } from "../styled";

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
            src={isMobile ? MobileVideo : VideoPlayBack}
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
