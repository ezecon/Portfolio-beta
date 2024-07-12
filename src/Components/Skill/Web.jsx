import { useEffect } from "react";

export default function Web() {
    useEffect(() => {
        const textContainer = document.getElementById('rotating-p');
        if (textContainer) {
          const text = textContainer.innerText;
          const chars = text.split('');
    
          const newText = chars.map((char, index) => `<span key=${index}>${char}</span>`).join('');
          textContainer.innerHTML = newText;
        }
      }, []);


  return (
    <div className="text-center text-3xl mt-20 text-[goldenrod]">
        <p className="text-lg" id="rotating-p">WEB- DEVELOPMENT</p>
        <div className="w-10/12 mx-auto flex justify-center items-center">
        <div className="slider" style={{
                '--width': '200px',
                '--height': '200px',
                '--quantity':15
            }}>
                <div className="list">
                   <div className="item" style={{ '--position': 1 }}><img src="https://www.stickerpress.in/media/products/800x800/21fe48beed9b489aafe5826ece43387f.webp" alt="Dragon 1" /></div>
                    <div className="item" style={{ '--position': 2 }}><img src="https://www.stickerpress.in/media/products/800x800/c40ad9f9fbd84dd1953ff2672270b7de.webp" alt="Dragon 2" /></div>
                    <div className="item" style={{ '--position': 3 }}><img src="https://www.stickerpress.in/media/products/800x800/648c906334d74218be3f758214b0ab0f.webp" alt="Dragon 3" /></div>
                    <div className="item" style={{ '--position': 4 }}><img src="https://www.stickerpress.in/media/products/350x350/d6061e2a15f14dbaa6a542b313c9305f.webp" alt="Dragon 4" /></div>
                    <div className="item" style={{ '--position': 5 }}><img src="https://www.stickerpress.in/media/products/350x350/a419f9b66243479a8d2df3d331ce831a.webp" alt="Dragon 5" /></div>
                    <div className="item" style={{ '--position': 6 }}><img src="https://www.stickerpress.in/media/products/350x350/dfd9ffd506ba48c590e51283f13b9732.webp" alt="Dragon 6" /></div>
                    <div className="item" style={{ '--position': 7 }}><img src="https://www.mementotech.in/assets/images/icons/express.png" alt="Dragon 5" /></div>
                    <div className="item" style={{ '--position': 8 }}><img src="https://ih1.redbubble.net/image.438910675.6211/st,small,507x507-pad,600x600,f8f8f8.u2.jpg" alt="Dragon 6" /></div>
                    <div className="item" style={{ '--position': 9 }}><img src="https://ih1.redbubble.net/image.1069575863.7548/st,small,507x507-pad,600x600,f8f8f8.jpg" alt="Dragon 5" /></div>
                    <div className="item" style={{ '--position': 10 }}><img src="https://ih1.redbubble.net/image.361917075.3698/st,small,507x507-pad,600x600,f8f8f8.jpg" alt="Dragon 6" /></div>
                    <div className="item" style={{ '--position': 11 }}><img src="https://ih1.redbubble.net/image.5515864044.9010/st,small,507x507-pad,600x600,f8f8f8.jpg" alt="Dragon 5" /></div>
                    <div className="item" style={{ '--position': 12 }}><img src="https://tsh.io/wp-content/uploads/fly-images/32664/framer-motion-logo-1-312x211.png" alt="Dragon 6" /></div>
                    <div className="item" style={{ '--position': 13 }}><img src="https://ih1.redbubble.net/image.439196422.3789/st,small,507x507-pad,600x600,f8f8f8.u1.jpg" alt="Dragon 6" /></div>
                    <div className="item" style={{ '--position': 14 }}><img src="https://ih1.redbubble.net/image.490947086.0985/st,small,507x507-pad,600x600,f8f8f8.u6.jpg" alt="Dragon 5" /></div>
                    <div className="item" style={{ '--position': 15 }}><img src="https://w7.pngwing.com/pngs/436/888/png-transparent-vercel-hd-logo.png" alt="Dragon 6" /></div>
                </div>
            </div>
        </div>
        
    </div>
  )
}
