import { Stashed } from "../../assets";
import { VideoWrapper } from "../styled";

const Video = () => {
  return (
    <div>
      <div style={{ position: "relative" }}>
        <VideoWrapper>
          <video
            src={Stashed}
            autoPlay={true}
            muted
            loop={true}
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
