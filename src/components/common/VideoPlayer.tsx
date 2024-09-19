import  { useRef, useState } from 'react';

function VideoPlayer({src}: {src: string}) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const handlePlayPause = () => {
    if (isPlaying) {
      videoRef.current?.pause();
    } else {
      videoRef.current?.play();
    }
    setIsPlaying(!isPlaying);
  };

  return (
    <div>
      <video ref={videoRef} width="320" height="240" controls>
        <source src={src} type="video/mp4" />
        Trình duyệt của bạn không hỗ trợ thẻ video.
      </video>
      <button onClick={handlePlayPause}>
        {isPlaying ? 'Tạm dừng' : 'Phát'}
      </button>
    </div>
  );
}

export default VideoPlayer ;