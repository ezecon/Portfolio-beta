import { useEffect } from "react";

export default function Programming() {
    useEffect(() => {
        const textContainer = document.getElementById('rotating-p2');
        if (textContainer) {
          const text = textContainer.innerText;
          const chars = text.split('');
    
          const newText = chars.map((char, index) => `<span key=${index}>${char}</span>`).join('');
          textContainer.innerHTML = newText;
        }
      }, []);


  return (
    <div className="text-center text-3xl mt-20 text-[goldenrod]">
        <p className="text-lg" id="rotating-p2">PROGRAMMING-LANGUAGE</p>
        <div className="w-10/12 mx-auto flex justify-center items-center">
        <div className="slider" style={{
                '--width': '200px',
                '--height': '200px',
                '--quantity':6
            }}>
                <div className="list">
                    <div className="item" style={{ '--position': 1 }}><img src="https://www.stickerpress.in/media/products/800x800/02b51215e47e4ecbb710869fc219fd71.jpg" alt="Dragon 1" /></div>
                    <div className="item" style={{ '--position': 2 }}><img src="https://ih1.redbubble.net/image.2238982967.4284/st,small,507x507-pad,600x600,f8f8f8.jpg" alt="Dragon 2" /></div>
                    <div className="item" style={{ '--position': 3 }}><img src="https://ih1.redbubble.net/image.2460955922.8976/st,small,845x845-pad,1000x1000,f8f8f8.u1.jpg" alt="Dragon 3" /></div>
                    <div className="item" style={{ '--position': 4 }}><img src="https://www.stickerpress.in/media/products/800x800/7c15972b5af74d1d9f93845c4f854c75.jpg" alt="Dragon 4" /></div>
                    <div className="item" style={{ '--position': 5 }}><img src="https://www.stickerpress.in/media/products/800x800/6be7d816ff064d6091182e17ee7a6ecf.jpg" alt="Dragon 5" /></div>
                    <div className="item" style={{ '--position': 6 }}><img src="https://www.stickerpress.in/media/products/800x800/d0d4923641fb40aa89999c705745dc04.webp" alt="Dragon 6" /></div>
                </div>
            </div>
        </div>
    </div>
  )
}
