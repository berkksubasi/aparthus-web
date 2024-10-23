import React from 'react';

const ContactSection = () => {
  return (
    <section
      id="contact"
      className="min-h-screen bg-gradient-to-br from-gray-100 to-gray-200 flex flex-col justify-center items-center px-4 py-16 relative"
    >
      <h2 className="text-4xl sm:text-5xl font-bold text-primary mb-4 animate-fade-in-down">
        Bize Ulaşın
      </h2>

      {/* Subtext */}
      <p className="text-lg sm:text-xl text-gray-600 text-center mb-8 max-w-2xl animate-fade-in-up">
        Herhangi bir sorunuz veya iş birliği teklifi için bizimle iletişime geçmekten çekinmeyin. Sizi dinlemekten memnuniyet duyarız!
      </p>

      {/* Contact Form and Map Wrapper */}
      <div className="w-full max-w-6xl grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 relative z-10">
        {/* Contact Form */}
        <form className="space-y-4 w-full h-auto bg-white p-6 sm:p-8 rounded-xl shadow-lg">
          <h3 className="text-xl sm:text-2xl font-semibold mb-2 text-gray-800 text-center">İletişim Formu</h3>
          <input
            type="text"
            placeholder="Adınız"
            className="w-full p-3 sm:p-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-accent transition-all duration-300"
          />
          <input
            type="email"
            placeholder="Email Adresiniz"
            className="w-full p-3 sm:p-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-accent transition-all duration-300"
          />
          <textarea
            placeholder="Mesajınız"
            className="w-full p-3 sm:p-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-accent transition-all duration-300"
            rows={4}
          />
          <button
            type="submit"
            className="w-full bg-yellow-400 text-white py-3 sm:py-4 rounded-lg hover:bg-accent hover:text-white transition-all duration-300"
          >
            Gönder
          </button>
        </form>

        {/* Google Map Embed */}
        <div className="w-full h-72 sm:h-96 bg-gray-200 rounded-xl shadow-lg overflow-hidden relative">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3151.8354345093743!2d144.95373631531734!3d-37.8162792797517!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad65d43f1f1f1d1%3A0x5045675218ce6e0!2sEnvato!5e0!3m2!1sen!2sau!4v1616648389496!5m2!1sen!2sau"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen={false}
            loading="lazy"
            title="Google Maps Location"
          ></iframe>
          {/* Map Overlay */}
          <div className="absolute inset-0 bg-gradient-to-br from-transparent to-gray-900 opacity-30"></div>
        </div>
      </div>

      {/* Decorative Circles */}
      <div className="absolute top-0 right-0 w-48 h-48 sm:w-64 sm:h-64 rounded-full bg-gradient-to-br from-accent to-primary opacity-30 blur-2xl"></div>
      <div className="absolute bottom-0 left-0 w-48 h-48 sm:w-64 sm:h-64 rounded-full bg-gradient-to-br from-accent to-primary opacity-30 blur-2xl"></div>
    </section>
  );
};

export default ContactSection;
