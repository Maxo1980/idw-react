import React from 'react'
import './Contact.css'

const Contact = () => {
  return (
   <>   <div className="contact-container">
          <article className="article-c">
          <div clasNclassNames="data">
                  <h1>CONTÁCTATE CON NOSOTROS</h1>
                  <p><i className="fa-solid fa-phone"></i>11 1234 5678</p>
                  <p><i className="fa-solid fa-envelope"></i>idwcheckin@gmail.com</p>
                  <p><i className="fa-solid fa-location-dot"></i>Av. Concepción, Entre Ríos, Argentina.</p>
              </div>
              <div class="medialinks">
                  <a href="http://facebook.com" target="_blank"><i className="fa-brands fa-facebook-f"></i></a>
                  <a href="http://instagram.com" target="_blank"><i className="fa-brands fa-instagram "></i></a>
                  <a href="http://x.com" target="_blank"><i class="fa-brands fa-twitter"></i></a>
                  <a href="http://linkedin.com" target="_blank"><i className="fa-brands fa-linkedin"></i></a>
                  <a href="http://tiktok.com" target="_blank"><i className="fa-brands fa-tiktok "></i></a>
              </div>
          </article>

          <section className="section-c">
              <form className="form">
                  <div class="input-box">
                      <input type="text" required placeholder="Nombre y apellido"/>
                  </div>
                  <div class="input-box">
                      <input type="email" required placeholder="Correo electrónico"/>
                  </div>
                  <div class="input-box">
                      <input type="text" required placeholder="Asunto"/>
                  </div>
                  <div className="input-box">
                      <textarea cols="50" rows="10"  placeholder="Escribe tu mensaje"></textarea>
                  </div>
                  <button type="submit">Enviar mensaje</button>
              </form>
              </section>
        </div>      

        
        
        </>
  )
}

export default Contact
