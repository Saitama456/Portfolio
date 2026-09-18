import { useState } from "react";
import { motion } from "motion/react";

const socials = [
  {
    name: "LinkedIn",
    handle: "@linkedin",
    icon: "bi-linkedin",
    url: "https://www.linkedin.com/in/andr%C3%A9s-su%C3%A1rez-2046a0359/",
    wide: true,
  },
  {
    name: "Instagram",
    handle: "@instagram",
    icon: "bi-instagram",
    url: "https://www.instagram.com/0saitamaa0_?stkn=MTNqMXJieXl5dzF1bg==",
  },
  {
    name: "Discord",
    handle: "@Discord",
    icon: "bi-discord",
    url: "https://youtube.com/@tuusuario",
  },
  {
    name: "Github",
    handle: "@github",
    icon: "bi-github",
    url: "https://github.com/Saitama456",
  },
  {
    name: "TikTok",
    handle: "@tiktok",
    icon: "bi-tiktok",
    url: "https://www.tiktok.com/@epc_azn33?_r=1&_t=ZS-99q9bL6owY1",
  },
];

function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [comment, setComment] = useState({ name: "", text: "" });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleCommentChange = (e) => {
    setComment({ ...comment, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Aquí conectaremos EmailJS más adelante
  };

  const handleCommentSubmit = (e) => {
    e.preventDefault();
    // Aquí conectaremos el guardado de comentarios más adelante
  };

  return (
    <section
      id="contact"
      className="relative min-h-screen w-full overflow-hidden scroll-mt-24 py-24"
    >
      <motion.div
        className="relative z-10 w-full flex flex-col items-center px-8 md:px-20"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ type: "spring", stiffness: 300, damping: 15 }}
      >
        {/* Título */}
        <h2 className="text-4xl md:text-5xl font-bold text-white text-center">
          Contáctame
        </h2>
        <p className="text-white/50 text-sm md:text-base text-center mt-3 max-w-lg">
          ¿Tienes un proyecto en mente o quieres charlar? Escríbeme.
        </p>

        <div className="w-full max-w-6xl mt-12 grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Tarjeta: Formulario de contacto */}
          <div className="border border-white/10 rounded-2xl bg-white/5 p-8">
            <h3 className="text-2xl font-bold text-white">Contáctame</h3>
            <p className="text-white/50 text-sm mt-2">
              Siéntete libre de escribirme si quieres colaborar, hablar de
              ideas, o simplemente saludar.
            </p>

            <form onSubmit={handleSubmit} className="flex flex-col gap-4 mt-6">
              <div className="flex items-center gap-3 bg-black/30 border border-white/10 rounded-lg px-4 py-3 focus-within:border-white/40 transition-colors">
                <i className="bi bi-person text-white/40"></i>
                <input
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  value={form.name}
                  onChange={handleChange}
                  required
                  className="bg-transparent text-white text-sm placeholder-white/40 focus:outline-none w-full"
                />
              </div>

              <div className="flex items-center gap-3 bg-black/30 border border-white/10 rounded-lg px-4 py-3 focus-within:border-white/40 transition-colors">
                <i className="bi bi-envelope text-white/40"></i>
                <input
                  type="email"
                  name="email"
                  placeholder="Your Email"
                  value={form.email}
                  onChange={handleChange}
                  required
                  className="bg-transparent text-white text-sm placeholder-white/40 focus:outline-none w-full"
                />
              </div>

              <div className="flex items-start gap-3 bg-black/30 border border-white/10 rounded-lg px-4 py-3 focus-within:border-white/40 transition-colors">
                <i className="bi bi-chat-left-text text-white/40 mt-0.5"></i>
                <textarea
                  name="message"
                  placeholder="Your Message"
                  value={form.message}
                  onChange={handleChange}
                  required
                  rows={4}
                  className="bg-transparent text-white text-sm placeholder-white/40 focus:outline-none w-full resize-none"
                />
              </div>

              <motion.button
                type="submit"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="bg-white text-black font-semibold text-sm py-3 rounded-lg mt-2"
              >
                Send Message
              </motion.button>
            </form>

            {/* Botón alternativo de WhatsApp */}
            <a
              href="https://wa.me/TUNUMERO?text=Hola%2C%20vi%20tu%20portfolio%20y%20quiero%20contactarte"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 border border-white/20 text-white text-sm py-3 rounded-lg mt-3 hover:border-white/40 transition-colors"
            >
              <i className="bi bi-whatsapp"></i> Escríbeme por WhatsApp
            </a>

            {/* Connect With Me */}
            <div className="mt-8 pt-6 border-t border-white/10">
              <p className="text-white/50 text-sm mb-4">Connect With Me</p>

              <div className="flex flex-col gap-3">
                {socials
                  .filter((s) => s.wide)
                  .map((social) => (
                    <motion.a
                      key={social.name}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      className="flex items-center justify-between gap-3 bg-black/30 border border-white/10 rounded-lg px-4 py-3 hover:border-white/30 transition-colors"
                    >
                      <div className="flex items-center gap-3">
                        <i className={`bi ${social.icon} text-white text-lg`}></i>
                        <div>
                          <p className="text-white text-sm font-medium">
                            {social.name}
                          </p>
                          <p className="text-white/40 text-xs">
                            {social.handle}
                          </p>
                        </div>
                      </div>
                      <i className="bi bi-arrow-up-right text-white/40"></i>
                    </motion.a>
                  ))}

                <div className="grid grid-cols-2 gap-3">
                  {socials
                    .filter((s) => !s.wide)
                    .map((social) => (
                      <motion.a
                        key={social.name}
                        href={social.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        className="flex items-center gap-3 bg-black/30 border border-white/10 rounded-lg px-4 py-3 hover:border-white/30 transition-colors"
                      >
                        <i className={`bi ${social.icon} text-white text-lg`}></i>
                        <div>
                          <p className="text-white text-sm font-medium">
                            {social.name}
                          </p>
                          <p className="text-white/40 text-xs">
                            {social.handle}
                          </p>
                        </div>
                      </motion.a>
                    ))}
                </div>
              </div>
            </div>
          </div>

          {/* Tarjeta: Comments */}
          <div className="border border-white/10 rounded-2xl bg-white/5 p-8">
            <h3 className="text-2xl font-bold text-white">Comments</h3>
            <p className="text-white/50 text-sm mt-2">
              Leave your thoughts here
            </p>

            <form
              onSubmit={handleCommentSubmit}
              className="flex flex-col gap-4 mt-6"
            >
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                value={comment.name}
                onChange={handleCommentChange}
                className="bg-black/30 border border-white/10 rounded-lg px-4 py-3 text-white text-sm placeholder-white/40 focus:outline-none focus:border-white/40"
              />
              <textarea
                name="text"
                placeholder="Your Comment"
                value={comment.text}
                onChange={handleCommentChange}
                rows={4}
                className="bg-black/30 border border-white/10 rounded-lg px-4 py-3 text-white text-sm placeholder-white/40 focus:outline-none focus:border-white/40 resize-none"
              />
              <motion.button
                type="submit"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="border border-white/20 text-white text-sm py-3 rounded-lg hover:border-white/40 transition-colors"
              >
                Post Comment
              </motion.button>
            </form>
          </div>
        </div>
      </motion.div>
    </section>
  );
}

export default Contact;
