import React, { Component } from 'react';
import emailjs from 'emailjs-com';


class Contact extends Component {
  render() {

    if(this.props.data){
      var name = this.props.data.name;
      var street = this.props.data.address.street;
      var city = this.props.data.address.city;
      var state = this.props.data.address.state;
      var zip = this.props.data.address.zip;
      var phone= this.props.data.phone;
      //var email = this.props.data.email;
      var message = this.props.data.contactmessage;
    }
     
      function sendEmail(e) {
    e.preventDefault();

    emailjs.sendForm('gmail2', 'gmail', e.target, 'user_wTHamYcrOCZzDVcJsNRzV')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
  }

    return (

       
      <section id="contact">

         <div className="row section-head">

            <div className="two columns header-col">

               <h1><span>Get In Touch.</span></h1>

            </div>

            <div className="ten columns">

                  <p className="lead">{message}</p>

            </div>

         </div>

         <div className="row">
            <div className="eight columns">

               <form action="" method="post" id="contact-form" name="contactForm" className="contact-form" onSubmit={sendEmail}>
					<fieldset>

                  <div>
						   <label htmlFor="contactName">Nombre <span className="required">*</span></label>
						   <input type="text" defaultValue="" size="35" id="contactName" name="from_name" onChange={this.handleChange}/>
                  </div>

                  <div>
						   <label htmlFor="contactEmail">Email <span className="required">*</span></label>
						   <input type="text" defaultValue="" size="35" id="contactEmail" name="from_email" onChange={this.handleChange}/>
                  </div>

                  <div>
						   <label htmlFor="contactSubject">Asunto</label>
						   <input type="text" defaultValue="" size="35" id="contactSubject" name="contactSubject" onChange={this.handleChange}/>
                  </div>

                  <div>
                     <label htmlFor="contactMessage">Mensaje <span className="required">*</span></label>
                     <textarea cols="50" rows="15" id="contactMessage" name="message_html"></textarea>
                  </div>

                  <div>
                     <button className="submit" id="submit">Enviar</button>
                     <span id="image-loader">
                        <img alt="" src="images/loader.gif" />
                     </span>
                  </div>
					</fieldset>
				   </form>

           <div id="message-warning"> Error</div>
				   <div id="message-success">
                  <i className="fa fa-check"></i>Tu mensaje ha sido enviado. Gracias!<br />
				   </div>
           </div>


            <aside className="four columns footer-widgets">
               <div className="widget widget_contact">

					   <h4>Dirección y teléfono</h4>
					   <p className="address">
						   {name}<br />
						   {street} <br />
						   {city}, {state} {zip}<br />
						   <span>{phone}</span>
					   </p>
				   </div>

               
            </aside>
      </div>
   </section>
    );
  }
}

export default Contact;
