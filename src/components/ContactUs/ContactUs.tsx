import emailjs from "@emailjs/browser";
import { useRef } from "react";
import toast from "react-hot-toast";
import { SiMinutemailer } from "react-icons/si";
import { Button } from "../ui/button";

const ContactUs = () => {
  const form = useRef<HTMLFormElement | null>(null);

  const sendEmail = (e: React.FormEvent) => {
    e.preventDefault();

    if (form.current) {
      emailjs
        .sendForm(
          "service_w1bwd28",
          "template_whgfeza",
          form.current,
          "r47p78wRwpxxE4GAT"
        )
        .then(
          (result) => {
            console.log(result.text);
            toast.success("Thanks for contacting");
            form.current?.reset();
          },
          (error) => {
            console.log(error.text);
          }
        );
    } else {
      console.error("Form reference is null.");
    }
  };

  return (
    <div
      className="min-h-screen bg-[#020228] px-4 md:px-6 lg:px-12 xl:px-44 text-center py-8"
      id="contact"
    >
      <h2 className="text-white py-6 text-3xl">Contact Us</h2>

      {/* Contact Form */}
      <div className="bg-[#0B0B30] p-6 rounded-lg shadow-2xl">
        <form ref={form} onSubmit={sendEmail}>
          <div className="grid md:grid-cols-2 gap-5 w-full text-center">
            <input
              required
              className="p-2 rounded-lg bg-[#020228] text-white"
              type="text"
              name="user_name"
              placeholder="Name"
            />
            <input
              required
              className="p-2 rounded-lg bg-[#020228] text-white"
              type="email"
              name="user_email"
              placeholder="Email"
            />
          </div>
          <input
            required
            className="p-2 rounded-lg w-full mt-4 bg-[#020228] text-white"
            type="text"
            name="user_subject"
            placeholder="Subject"
          />
          <textarea
            className="w-full my-4 py-12 px-4 rounded-lg bg-[#020228] text-white"
            name="message"
            placeholder="Your Message"
            required
          />
          <Button
            className="btn flex bg-[#020228] text-white hover:bg-[#162c46]"
            type="submit"
          >
            Send Message <SiMinutemailer className="text-2xl ml-2" />
          </Button>
        </form>
      </div>
    </div>
  );
};

export default ContactUs;
