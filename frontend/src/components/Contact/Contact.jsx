import "./Contact.css";
import { useState } from "react";
import {FaWhatsapp } from "react-icons/fa"
import {
  Mail,
  User,
  PenSquare,
  Copy,
  Check,
  Phone,
  Send,
} from "lucide-react";

const Contact = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [errors, setErrors] = useState({});
  const [copied, setCopied] = useState({
    email: false,
    phone: false,
  });


  const copyText = async (type, text) => {
    await navigator.clipboard.writeText(text);

    setCopied((prev) => ({
      ...prev,
      [type]: true,
    }));

    setTimeout(() => {
      setCopied((prev) => ({
        ...prev,
        [type]: false,
      }));
    }, 1500);
  };

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });

    setErrors({
      ...errors,
      [e.target.name]: "",
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    let newErrors = {};

    if (!form.name.trim())
      newErrors.name = "Name is required.";

    if (!form.email.trim()) {
      newErrors.email = "Email is required.";
    } else if (
      !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)
    ) {
      newErrors.email = "Enter a valid email.";
    }

    if (!form.message.trim())
      newErrors.message = "Message is required.";

    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      console.log(form);

      // Backend API later
    }
  };

  return (
    <section id="contact" className="contact_wrapper">

      <div className="container">

        <div className="row">
          <div className="col-sm-12 text-left mb-md-5 mb-2">
            <h3 style={{ textAlign: "center" }}>
              Contact
            </h3>

            <p style={{ textAlign: "center" }}>
              Let's work together. Get in touch!
            </p>
          </div>
        </div>

        <div className="row justify-content-center">

          <div className="col-lg-8 col-md-10">

            <div className="contact-card">
            <div className="d-none d-lg-block">
              <div className="form-title d-flex align-items-center mb-3 gap-3 py-1">

                <div className="mail-icon me-lg-4">
                  <Mail size={28} />
                </div>

                <div>
                  <h6 className="mb-0">
                    Get In Touch
                  </h6>

                  <p className="mb-0">
                    I'd love to hear from you.
                  </p>
                </div>

              </div>

              <form onSubmit={handleSubmit} noValidate >

                {/* Name */}

                <div className="mb-2">

                  <div
                    className={`input-box ${errors.name ? "input-error" : ""
                      }`}
                  >
                    <User size={18} />

                    <input
                      type="text"
                      name="name"
                      placeholder="Your Name"
                      value={form.name}
                      onChange={handleChange}
                    />
                  </div>

                  <small className="error">
                    {errors.name}
                  </small>

                </div>

                {/* Email */}

                <div className="mb-2">

                  <div
                    className={`input-box ${errors.email ? "input-error" : ""
                      }`}
                  >
                    <Mail size={18} />

                    <input
                      type="email"
                      name="email"
                      placeholder="Your Email"
                      value={form.email}
                      onChange={handleChange}
                    />
                  </div>

                  <small className="error">
                    {errors.email}
                  </small>

                </div>

                {/* Message */}

                <div className="mb-3">

                  <div
                    className={`input-box textarea-box ${errors.message
                        ? "input-error"
                        : ""
                      }`}
                  >
                    <PenSquare size={18} />

                    <textarea
                      name="message"
                      placeholder="Your Message"
                      value={form.message}
                      onChange={handleChange}
                    />
                  </div>

                  <small className="error">
                    {errors.message}
                  </small>

                </div>

                <button
                  type="submit"
                  className="send-btn"
                >
                  <Send size={18} />

                  <span>Send Message</span>

                </button>

              </form>
              </div>
              <div className="d-lg-none">
                   <div className="divider d-none">
                <span>Or reach me directly</span>
              </div>

              <div className="contact-info py-2 ">

                {/* Email */}

                <div className="info-item ">

                  <div className="info-icon">
                    <Mail size={20} />
                  </div>

                  <div className="info-text">
                    <h6>Email</h6>

                    <p>
                      mosaraf.ind@gmail.com
                    </p>
                  </div>

                  <button
                    type="button"
                    className="copy-btn"
                    onClick={() =>
                      copyText("email", "mosaraf.ind@gmail.com")
                    }
                  >
                    {copied.email ? (
  <Check size={18} color="#22c55e" />
) : (
  <Copy size={18} />
)}
                  </button>

                </div>

                {/* Phone */}

                <div className="info-item mt-3">

                  <div className="info-icon">
                    <Phone size={20} />
                  </div>

                  <div className="info-text">
                    <h6>Phone</h6>

                    <p>
                      +91 9679232461
                    </p>
                  </div>

                  <button
                    type="button"
                    className="copy-btn"
                    onClick={() =>
                      copyText("phone", "9679232461")
                    }
                  >
                    {copied.phone ? (
  <Check size={18} color="#22c55e" />
) : (
  <Copy size={18} />
)}

                  </button>

                </div>

                <a
                  href="https://wa.me/919679232461"
                  target="_blank"
                  rel="noreferrer"
                  className="whatsapp-btn mt-3"
                >
                  <FaWhatsapp size={22}/>
                  Chat on WhatsApp
                </a>

              </div>
              </div>

             

            </div>

          </div>

        </div>

      </div>

    </section>
  );
};

export default Contact;