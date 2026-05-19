export const Contact = () => {
  const handleForm = (formData) => {
    const formInputData = Object.fromEntries(formData.entries());
    console.log(formInputData);
  };

  return (
    <>
      <article className="section-contact">
        <h1 className="container-title">Contact Us</h1>
        <div className="contact-wrapper container padded-container">
          <form action={handleForm}>
            <input
              type="text"
              id="name"
              placeholder="Enter Your Name"
              name="username"
              required
              autoComplete="off"
              className="form-control"
            />

            <input
              type="email"
              id="email"
              placeholder="Enter Your Email"
              required
              name="email"
              autoComplete="off"
              className="form-control"
            />

            <textarea
              rows={10}
              placeholder="Enter Your Message"
              autoComplete="off"
              name="message"
              className="form-control"
              required
            ></textarea>

            <button type="submit" value="send">
              Send
            </button>
          </form>
        </div>
      </article>
    </>
  );
};
