import { Stashed } from "../../assets";
import { VideoWrapper } from "../styled";

import { useInView } from "react-hook-inview";
import { useEffect, useRef } from "react";

const Video = () => {
  const [ref, isVisible] = useInView({
    threshold: 0.5,
    unobserveOnEnter: true, //if you want to run only one time
  });

  const videoRef = useRef(null);

  useEffect(() => {
    if (isVisible && typeof videoRef === "object" && videoRef) {
      // @ts-ignore
      videoRef.current.play();
    }
  }, [ref, isVisible]);
  return (
    <div>
      <div style={{ position: "relative" }}>
        <VideoWrapper ref={ref}>
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
