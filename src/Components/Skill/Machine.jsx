import { useEffect } from "react";

export default function Machine() {
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
        <p className="text-lg" id="rotating-p2">MACHINE LEARNING AND DEEP LEARNING</p>
        <div className="w-10/12 mx-auto flex justify-center items-center">
        <div className="slider" style={{
                '--width': '200px',
                '--height': '200px',
                '--quantity':5
            }}>
                <div className="list">
                    <div className="item" style={{ '--position': 1 }}><img src="https://ih1.redbubble.net/image.2630532933.1455/st,small,507x507-pad,600x600,f8f8f8.jpg" alt="Dragon 1" /></div>
                    <div className="item" style={{ '--position': 2 }}><img src="https://ih1.redbubble.net/image.2871410354.4987/st,small,507x507-pad,600x600,f8f8f8.jpg" alt="Dragon 2" /></div>
                    <div className="item" style={{ '--position': 3 }}><img src="https://ih1.redbubble.net/image.551945823.6297/st,small,507x507-pad,600x600,f8f8f8.jpg" alt="Dragon 3" /></div>
                    <div className="item" style={{ '--position': 4 }}><img src="https://ih1.redbubble.net/image.2907541537.8857/st,small,507x507-pad,600x600,f8f8f8.jpg" alt="Dragon 4" /></div>
                    <div className="item" style={{ '--position': 5 }}><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ-NEICv1aGTvDRncdvM_fXoah5SNWx4pXAvg&s" alt="Dragon 5" /></div>
                    
                </div>
            </div>
        </div>
    </div>
  )
}
