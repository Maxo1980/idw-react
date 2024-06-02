import React, { useState } from 'react'
import './Contact.css'

const Contact = () => {

    const [mensaje , setMensaje ] = useState('')

    const envio = (e) => {
        e.preventDefault();
        alert('Gracias!! '+mensaje+', pronto nos vamos a contactar para responder tu consulta' )

        }




  return (
   <>   <div className="contact-container">
          <article className="article-c">
          <div clasNclassNames="data">
                  <h1>CONTÁCTATE CON NOSOTROS</h1>
                  <p><i className="fa-solid fa-phone"></i> 0800-1234-5678</p>
                  <p><i className="fa-solid fa-envelope"></i>   idwcheckin@gmail.com</p>
                  <p><i className="fa-solid fa-location-dot"></i>   Av.Fake 123 -Ciudad Autonoma de Sion .</p>
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
              <form className="form" onSubmit={envio}>
                  <div class="input-box">
                      <input type="text" required placeholder="Nombre y apellido"
                        onChange={(e) => setMensaje(e.target.value)}
                      />
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
