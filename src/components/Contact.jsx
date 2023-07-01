import contact from '../assets/contact.png'

function Contact() {
  return (
    <>
      <h2 className="text-center py-4">Contact me...</h2>
      <div className="row contact justify-content-center" id='contact'>
      <div className="col-12 col-sm-6 px-1 contact-img">
          <img src={contact} alt="" className='w-100' />
        </div>
        <div className="col-12 col-sm-6">
          <form>
            <div className="mb-3">
              <label
                htmlFor="exampleInputEmail1"
                className="form-label"
              >
                Email address
              </label>
              <input
                type="email"
                className="form-control"
                id="exampleInputEmail1" aria-describedby="emailHelp"
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
                type="email"
                className="form-control"
                id="message" aria-describedby="emailHelp"
                placeholder='Contacting for... offer work or collaboration. Available on mail and linkedin.'
                rows="5"
              ></textarea>
            </div>
            <button type="submit" className="btn btn-primary">Submit</button>
          </form>
        </div>
      </div>
    </>
  )
}

export default Contact