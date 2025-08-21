import emailjs from "@emailjs/browser";
import { useRef, useState } from "react";

const Contact = () => {
  const form = useRef();
  const [errors, setErrors] = useState({});

  const validateForm = (formData) => {
    let newErrors = {};

    if (!formData.name) newErrors.name = "Please enter your name";
    if (!formData.email) {
      newErrors.email = "Please enter your email";
    } else if (!/^[^\s@]+@gmail\.com$/.test(formData.email)) {
      newErrors.email = "Invalid Email";
    }
    if (!formData.subject) newErrors.subject = "Please enter subject";
    if (!formData.message) newErrors.message = "Please enter message";

    return newErrors;
  };

  const noChage = (e) => {
    const { name, value } = e.target;
    setErrors((prev) => {
      const newErrors = { ...prev };
      if (value.trim() !== "") {
        delete newErrors[name];
      }
      return newErrors;
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const formData = {
      name: form.current.name.value.trim(),
      email: form.current.email.value.trim(),
      subject: form.current.subject.value.trim(),
      message: form.current.message.value.trim(),
    };

    const validationErrors = validateForm(formData);
    setErrors(validationErrors);

    if (Object.keys(validationErrors).length > 0) {
      return;
    }

    emailjs
      .sendForm("service_0nqsebn", "template_17zary4", form.current, {
        publicKey:
          import.meta.env.VITE_EMAILJS_PUBLIC_KEY || "V2R8eo2nWPcn_ThyE",
      })
      .then(
        () => {
          alert("✅ Email sent successfully!");
          form.current.reset(); // clear form
        },
        (error) => {
          alert("❌ Failed to send email: " + error.text);
        }
      );
  };

  return (
    <section className="mt-24 flex flex-col md:flex-row px-8 md:px-28 gap-8">
      <img
        src="/IMAGES/bg1.jpg"
        alt="Contact"
        className="w-full md:w-1/2 object-cover rounded-lg brightness-150 shadow-lg"
      />

      <div className="md:w-1/2 flex flex-col gap-4 mt-8">
        <h2 className="text-3xl font-bold text-gray-800 mb-4">Contact Us</h2>

        <form
          ref={form}
          onSubmit={handleSubmit}
          className="flex flex-col gap-6"
        >
          {/* Name & Email */}
          <div className="flex flex-col md:flex-row gap-4">
            <div className="flex-1">
              <input
                type="text"
                name="name"
                onChange={noChage}
                placeholder="Full name"
                className={
                  errors.message
                    ? "border focus:outline-none border-red-500 px-2 py-2 w-full rounded-lg"
                    : "w-full border rounded-lg border-gray-300 py-2  px-2 focus:outline-none focus:border-red-300 transition duration-300"
                }
              />
              {errors.name && (
                <p className="text-red-500 text-sm">{errors.name}</p>
              )}
            </div>

            <div className="flex-1">
              <input
                type="email"
                name="email"
                onChange={noChage}
                placeholder="Email"
                className={
                  errors.message
                    ? "border focus:outline-none border-red-500 px-2 py-2 w-full rounded-lg"
                    : "w-full border rounded-lg border-gray-300 py-2  px-2 focus:outline-none focus:border-red-300 transition duration-300"
                }
              />
              {errors.email && (
                <p className="text-red-500 text-sm">{errors.email}</p>
              )}
            </div>
          </div>

          {/* Subject */}
          <div>
            <input
              type="text"
              name="subject"
              onChange={noChage}
              placeholder="Subject"
              className={
                errors.message
                  ? "border focus:outline-none border-red-500 px-2 py-2 w-full rounded-lg"
                  : "w-full border rounded-lg border-gray-300 py-2  px-2 focus:outline-none focus:border-red-300 transition duration-300"
              }
            />
            {errors.subject && (
              <p className="text-red-500 text-sm">{errors.subject}</p>
            )}
          </div>

          {/* Message */}
          <div>
            <textarea
              name="message"
              onChange={noChage}
              placeholder="Tell us about your project"
              rows={4}
              className={
                errors.message
                  ? "border focus:outline-none border-red-500 px-2 w-full rounded-lg"
                  : "w-full border rounded-lg px-3 border-gray-300 py-2 focus:outline-none focus:border-red-300 transition duration-300"
              }
            ></textarea>
            {errors.message && (
              <p className="text-red-500 text-sm ">{errors.message}</p>
            )}
          </div>

          {/* Submit Button */}
          <div className="flex justify-end">
            <button
              type="submit"
              className="bg-red-500  text-white font-semibold py-2 px-6 rounded-md hover:bg-red-600 shadow-md transition duration-300"
            >
              Send Message
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default Contact;
