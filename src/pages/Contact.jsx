import { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';

const Contact = () => {
  const formRef = useRef(null);
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsLoading(true);

    emailjs
      .send(
        import.meta.env.VITE_APP_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_APP_EMAILJS_TEMPLATE_ID,
        {
          from_name: form.name,
          to_name: 'Mitch',
          from_email: form.email,
          to_email: 'mitchroseway@gmail.com',
          message: form.message,
        },
        import.meta.env.VITE_APP_EMAILJS_PUBLIC_KEY,
      )
      .then(() => {
        setIsLoading(false);
        //TODO show success msg
        //TODO: hide alert
        setForm({ name: '', email: '', message: '' });
      })
      .catch((error) => {
        setIsLoading(false);
        console.log(error);
        //TODO: show error msg
      });
  };

  const handleFocus = () => {};

  const handleBlur = () => {};

  return (
    <section className="max-container relative flex flex-col lg:flex-row">
      <div className="flex min-w-[50%] flex-1 flex-col">
        <h1 className="head-text">Get in touch</h1>
        <form
          className="mt-14 flex w-full flex-col gap-7"
          onSubmit={handleSubmit}
        >
          <label className="font-semibold text-black-500" htmlFor="">
            Name
            <input
              type="text"
              name="name"
              className="input"
              placeholder="John"
              required
              value={form.name}
              onChange={handleChange}
              onFocus={handleFocus}
              onBlur={handleBlur}
            />
          </label>
          <label className="font-semibold text-black-500" htmlFor="">
            Email
            <input
              type="email"
              name="email"
              className="input"
              placeholder="john@gmail.com"
              required
              value={form.email}
              onChange={handleChange}
              onFocus={handleFocus}
              onBlur={handleBlur}
            />
          </label>
          <label className="font-semibold text-black-500" htmlFor="">
            Your message
            <textarea
              name="message"
              rows={4}
              className="textarea"
              placeholder="Let me know how I can help you"
              required
              value={form.message}
              onChange={handleChange}
              onFocus={handleFocus}
              onBlur={handleBlur}
            />
          </label>
          <button
            type="submit"
            className="btn"
            onFocus={handleFocus}
            onBlur={handleBlur}
            disabled={isLoading}
          >
            {isLoading ? 'Sending...' : 'Send Message'}
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
