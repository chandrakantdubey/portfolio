import contact from '../assets/contact.png'
import { useRef } from 'react'
import emailjs from '@emailjs/browser'

function Contact() {
  const form = useRef()
  const sendEmail = (e) => {
    e.preventDefault()
    emailjs.sendForm(
      import.meta.env.VITE_YOUR_SERVICE_ID,
      import.meta.env.VITE_YOUR_TEMPLATE_ID,
      form.current,
      import.meta.env.VITE_YOUR_PUBLIC_KEY
    )
    .then((result) => {
        console.log(result.text)
    }, (error) => {
        console.log(error.text)
    })
  }

  return (
    <div id='contact'>
      <div className="container page-width">
      <h2 className="text-center py-4">Contact me...</h2>
        <div className="row contact justify-content-center mb-5" id='contact'>
        <div className="col-12 col-sm-6 px-1 contact-img">
            <img src={contact} alt="" className='w-100' />
          </div>
          <div className="col-12 col-sm-6 px-4">
            <form ref={form} onSubmit={sendEmail}>
              <div className="mb-3">
                <label
                  htmlFor="user_name"
                  className="form-label"
                >
                  Name
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="user_name"
                  name='user_name'
                />
                </div>

              <div className="mb-3">
                <label
                  htmlFor="user_email"
                  className="form-label"
                >
                  Email address
                </label>
                <input
                  type="email"
                  id='user_email'
                  className="form-control"
                  name='user_email'
                />
              </div>

              <div className="mb-3">
                <label
                  htmlFor="message"
                  className="form-label"
                >
                  Message
                </label>
                <textarea
                  className="form-control"
                  id="message"
                  placeholder='Contacting for... offer work or collaboration. Available on mail and linkedin.'
                  rows="4"
                  name='message'
                ></textarea>
              </div>
              <button type="submit" className="btn btn-primary">Submit</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contact