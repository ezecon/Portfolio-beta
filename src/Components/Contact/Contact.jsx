import  { useEffect, useState } from "react";
import emailjs from 'emailjs-com';
import toast from "react-hot-toast";

export default function Contact() {
  const [message, setMessage] = useState('');
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.send(
      'service_cg57hsm',
      'template_3oz23w3',
      {
        message: message,
        user_email: email,
        user_name: name,
      },
      'HPOXU5yUUILTLU-HM'
    )
    .then((response) => {
      
      toast.success("Message Sent!");
      console.log('Email sent successfully!', response.status, response.text);
    })
    .catch((err) => {
      console.error('Failed to send email. Error:', err);
    });

    setMessage('');
    setEmail('');
    setName('');
  };

  useEffect(() => {
    const textContainer = document.getElementById('rotating-text13');
    if (textContainer) {
      const text = textContainer.innerText;
      const chars = text.split('');

      const newText = chars.map((char, index) => `<span key=${index}>${char}</span>`).join('');
      textContainer.innerHTML = newText;
    }
  }, []);

  return (
    <div className="text-[goldenrod]">
      <div className="px-4 py-24 md:py-36 md:px-8 lg:px-16">
        <div className="text-center mt-10 md:mt-20">
          <h1 id="rotating-text13" className="text-2xl md:text-3xl lg:text-4xl">
            CONTACT
          </h1>
          <p className="text-sm md:text-base">How to reach me</p>
        </div>

        <div className="min-h-screen flex flex-col items-center justify-center font-mono">
          <div className="container mx-auto p-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h2 className="text-lg md:text-xl font-semibold pb-4 md:pb-12">Talk to me</h2>
                <section id="contact">
                  <div className="flex flex-col max-w-4xl mx-auto w-full">
                    <div className="w-full">
                      <div className="w-full md:w-4/5 text-center rounded-lg flex items-center mb-8">
                        <div className="w-12">
                          <img src="https://img.icons8.com/bubbles/100/000000/phone.png" alt="Phone Icon" />
                        </div>
                        <div className="contact-info  ml-4">
                          <h2 className="text-sm md:text-lg leading-6 font-medium">+880 1533798331</h2>  
                          <h2 className="text-sm md:text-lg leading-6 font-medium">+880 1310043179</h2>
                        </div>
                      </div>

                      <div className="w-full md:w-4/5 text-center rounded-lg flex items-center mb-8">
                        <div className="w-12">
                          <img src="https://img.icons8.com/bubbles/100/000000/new-post.png" alt="Email Icon" />
                        </div>
                        <div className="contact-info ml-4">
                          <h2 className="text-sm md:text-lg leading-6 font-medium">md.econozzaman@gmail.com</h2>
                          <h2 className="text-sm md:text-lg leading-6 font-medium">econozzaman@baiust.edu.bd</h2>
                        </div>
                      </div>
                      <div className="w-full md:w-4/5 text-center rounded-lg flex items-center mb-8">
                        <div className="w-12">
                          <img src="https://img.icons8.com/bubbles/100/000000/map-marker.png" alt="Address Icon" />
                        </div>
                        <div className="contact-info ml-4">
                          <h2 className="text-sm md:text-lg leading-6 font-medium">Noakhali, Bangladesh</h2>
                        </div>
                      </div>
                    </div>
                  </div>
                </section>
              </div>

              <div className="text-[goldenrod]">
                <h2 className="text-lg md:text-xl font-semibold mb-4">Write me your project</h2>
                <form className="space-y-4" onSubmit={sendEmail}>
                  <div>
                    <label htmlFor="name" className="block">Name</label>
                    <input
                      type="text"
                      id="name"
                      placeholder="Insert your name"
                      className="w-full p-2 md:p-3 border border-[goldenrod] bg-transparent rounded-lg"
                      value={name} 
                      onChange={(e) => setName(e.target.value)}
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block">Mail</label>
                    <input
                      type="email"
                      id="email"
                      placeholder="Insert your email"
                      className="w-full p-2 md:p-3 border border-[goldenrod] bg-transparent rounded-lg"
                      value={email} 
                      onChange={(e) => setEmail(e.target.value)}
                    />
                  </div>
                  <div>
                    <label htmlFor="project" className="block">Project</label>
                    <textarea
                      id="project"
                      placeholder="Write your project"
                      className="w-full p-2 md:p-3 border border-[goldenrod] bg-transparent rounded-lg"
                      rows="4"
                      value={message} 
                      onChange={(e) => setMessage(e.target.value)}
                    ></textarea>
                  </div>
                  <button type="submit" className="w-full p-2 md:p-3 bg-transparent border border-[goldenrod] text-[goldenrod] rounded-lg shadow-md hover:bg-[goldenrod] hover:text-white flex items-center justify-center space-x-2">
                    <span>Send Message</span>
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
