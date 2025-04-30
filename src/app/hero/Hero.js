import React from 'react'

const Hero = () => {
  return (
    <div className='grid place-items-center w-full  h-[67vh]'>
      	<div className="video-wrap">
                <video id="myVideo" preload="auto" autoPlay playsInline loop muted className="custom-video" >
                    <source  src={'/6077266-uhd_4096_2160_25fps.webm'} type="video/webm"/>
                    <source src={'/6077266-uhd_4096_2160_25fps.mp4'} type="video/mp4"/>
                   

                    Your browser does not support the video tag.
                </video>
            </div>

<script type="text/javascript">
	let vid = document.getElementById("myVideo");
vid.preload = "auto";
vid.defaultMuted = true;
vid.autoplay = true;
vid.load();
</script>

    </div>
  )
}

export default Hero