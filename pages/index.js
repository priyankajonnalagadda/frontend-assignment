export default function Home() {
  return (
    <div className="min-h-screen bg-[#F6F1EB]">

      {/* Navbar */}
      <nav className="fixed top-0 left-0 w-full z-50 bg-[#F6F1EB] shadow-sm">
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
          className="absolute inset-0 w-full h-full object-cover"
        />

        <div className="absolute inset-0 bg-[#2E4057]/70"></div>

        <div className="relative z-10 max-w-2xl px-6">
          <h1 className="text-5xl md:text-6xl font-bold leading-tight">
            Compassionate Therapy for Anxiety & Relationships
          </h1>

          <p className="mt-6 text-lg text-gray-200 leading-relaxed">
            Work with Dr. Maya Reynolds to build clarity, emotional strength,
            and healthier connections in a safe, supportive space.
          </p>

          <button className="mt-8 px-8 py-3 rounded-full font-medium tracking-wide bg-white text-[#2E4057] hover:scale-105 transition duration-300">
            Book a Consultation
          </button>
        </div>
      </section>

      {/* Services */}
      <section className="py-24 md:py-28 px-6 bg-[#F6F1EB]">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-[#2E4057]">
            How I Can Help
          </h2>

          <div className="grid md:grid-cols-3 gap-8 mt-12">
            <div className="bg-white p-8 rounded-2xl shadow-md hover:shadow-xl transition duration-300">
              <h3 className="text-xl font-semibold text-[#2E4057]">
                Anxiety Therapy
              </h3>
              <p className="mt-3 text-gray-600 leading-relaxed text-[17px]">
                Learn to manage overwhelming thoughts and regain control of your life.
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-md hover:shadow-xl transition duration-300">
              <h3 className="text-xl font-semibold text-[#2E4057]">
                Relationship Counseling
              </h3>
              <p className="mt-3 text-gray-600 leading-relaxed text-[17px]">
                Build stronger, healthier connections with better communication.
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-md hover:shadow-xl transition duration-300">
              <h3 className="text-xl font-semibold text-[#2E4057]">
                Trauma Support
              </h3>
              <p className="mt-3 text-gray-600 leading-relaxed text-[17px]">
                Heal from past experiences in a safe and supportive environment.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* About */}
      <section className="py-24 md:py-28 px-6 bg-white">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <img
            src="https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e"
            className="rounded-2xl h-[420px] w-full object-cover shadow-md"
          />

          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-[#2E4057]">
              Meet Dr. Maya Reynolds
            </h2>

            <p className="mt-6 text-gray-600 leading-relaxed text-[17px]">
              Dr. Maya specializes in anxiety, relationships, and trauma-informed care.
              Her approach is warm, collaborative, and tailored to each individual.
            </p>

            <button className="mt-6 px-6 py-3 rounded-full font-medium tracking-wide bg-[#2E4057] text-white hover:scale-105 transition duration-300">
              Learn More
            </button>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 md:py-28 px-6 bg-[#2E4057] text-white text-center">
        <h2 className="text-3xl md:text-4xl font-bold">
          Ready to Start Your Healing Journey?
        </h2>

        <button className="mt-6 px-8 py-3 rounded-full font-medium tracking-wide bg-white text-[#2E4057] hover:scale-105 transition duration-300">
          Book a Session
        </button>
      </section>

      {/* Office */}
      <section className="py-24 md:py-28 px-6 bg-white text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-[#2E4057]">
          A Safe Space for Healing
        </h2>

        <p className="mt-4 text-gray-600 max-w-2xl mx-auto leading-relaxed text-[17px]">
          Our office is designed to help you feel calm, supported, and at ease from the moment you walk in.
        </p>

        <div className="grid md:grid-cols-3 gap-6 mt-10">
          <img src="https://images.unsplash.com/photo-1505691938895-1758d7feb511" className="rounded-xl h-64 w-full object-cover"/>
          <img src="https://images.unsplash.com/photo-1497366216548-37526070297c" className="rounded-xl h-64 w-full object-cover"/>
          <img src="https://images.unsplash.com/photo-1507089947368-19c1da9775ae" className="rounded-xl h-64 w-full object-cover"/>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-10 bg-[#2E4057] text-white text-center">
        <p>© 2026 Dr. Maya Reynolds. All rights reserved.</p>
      </footer>

    </div>
  );
}