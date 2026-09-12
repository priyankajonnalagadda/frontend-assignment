import { useEffect, useState } from "react";

export default function Home() {
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    document.documentElement.style.scrollBehavior = "smooth";
  }, []);

  return (
    <div className="min-h-screen bg-[#F6F1EB]">

      {/* Navbar */}
      <nav className="fixed top-0 left-0 w-full z-50 backdrop-blur-md bg-white/70 shadow-sm">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <h1 className="text-xl font-bold text-[#2E4057]">
            Dr. Maya Reynolds
          </h1>

          <ul className="hidden md:flex space-x-8 text-[#2E4057] font-medium">
            <li className="cursor-pointer hover:opacity-70">Home</li>
            <li className="cursor-pointer hover:opacity-70">About</li>
            <li className="cursor-pointer hover:opacity-70">Services</li>
            <li className="cursor-pointer hover:opacity-70">Contact</li>
          </ul>
        </div>
      </nav>

      {/* Hero */}
      <section className="relative h-screen flex items-center justify-center text-center text-white pt-20">
        <img
          src="https://images.unsplash.com/photo-1493836512294-502baa1986e2"
          alt="therapy"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-[#2E4057]/70"></div>

        <div className="relative z-10 max-w-2xl px-6 animate-fadeIn">
          <h1 className="text-5xl md:text-6xl font-bold leading-tight">
            Compassionate Therapy for Anxiety & Relationships
          </h1>

          <p className="mt-6 text-lg text-gray-200">
            Work with Dr. Maya Reynolds to build clarity, emotional strength,
            and healthier connections.
          </p>

          <button className="mt-8 px-8 py-3 rounded-full bg-white text-[#2E4057] hover:scale-105 transition">
            Book a Consultation
          </button>
        </div>
      </section>

      {/* Services */}
      <section className="py-24 px-6 text-center">
        <h2 className="text-3xl font-bold text-[#2E4057]">
          How I Can Help
        </h2>

        <div className="grid md:grid-cols-3 gap-8 mt-12 max-w-6xl mx-auto">
          {[
            "Anxiety Therapy",
            "Relationship Counseling",
            "Trauma Support",
          ].map((item, i) => (
            <div key={i} className="bg-white p-8 rounded-2xl shadow hover:-translate-y-2 transition">
              <h3 className="text-xl font-semibold">{item}</h3>
              <p className="mt-3 text-gray-600">
                Personalized support to help you grow and heal.
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* About */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <img
            src="https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e"
            className="rounded-2xl h-[420px] w-full object-cover"
          />

          <div>
            <h2 className="text-3xl font-bold text-[#2E4057]">
              Meet Dr. Maya Reynolds
            </h2>
            <p className="mt-6 text-gray-600">
              Specialized in anxiety, relationships, and trauma care.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Form (NEW 🔥) */}
      <section className="py-24 px-6 text-center">
        <h2 className="text-3xl font-bold text-[#2E4057]">
          Get In Touch
        </h2>

        {!submitted ? (
          <form
            onSubmit={(e) => {
              e.preventDefault();
              setSubmitted(true);
            }}
            className="max-w-xl mx-auto mt-10 space-y-4"
          >
            <input
              type="text"
              placeholder="Your Name"
              required
              className="w-full p-3 border rounded-lg"
            />

            <input
              type="email"
              placeholder="Your Email"
              required
              className="w-full p-3 border rounded-lg"
            />

            <textarea
              placeholder="Your Message"
              required
              className="w-full p-3 border rounded-lg h-32"
            ></textarea>

            <button className="w-full bg-[#2E4057] text-white py-3 rounded-lg hover:scale-105 transition">
              Send Message
            </button>
          </form>
        ) : (
          <p className="mt-6 text-green-600 font-semibold">
            ✅ Message sent successfully!
          </p>
        )}
      </section>

      {/* Footer */}
      <footer className="py-10 bg-[#2E4057] text-white text-center">
        <p>© 2026 Dr. Maya Reynolds</p>
      </footer>

    </div>
  );
}