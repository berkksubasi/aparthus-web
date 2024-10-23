import Image from 'next/image';
import React from 'react';

const TeamSection = () => {
  return (
    <section
      id="team"
      className="min-h-screen flex flex-col justify-center items-center px-4 py-16"
      style={{
        background: 'linear-gradient(135deg, #facc15 0%, #10B981 100%)', // Sarıdan yeşile geçişli gradient
      }}
    >
      <h2 className="text-4xl sm:text-5xl font-bold text-white mb-8 sm:mb-16 animate-fade-in-down">
        Ekibimiz
      </h2>
      <p className="text-lg sm:text-xl text-white text-center mb-6 sm:mb-10 max-w-3xl mx-auto">
        Yunis Solutions&apos;ı ileriye taşıyan yetenekli ekip üyelerimizle tanışın.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 sm:gap-12 animate-fade-in-up w-full max-w-6xl">
        {/* Team Member 1 */}
        <div className="team-member bg-white shadow-lg rounded-xl p-6 sm:p-8 text-center hover:shadow-2xl transition-shadow duration-300 transform hover:-translate-y-2">
          <Image
            src="/images/team1.jpg"
            alt="Team Member"
            width={128}
            height={128}
            className="rounded-full w-24 sm:w-32 h-24 sm:h-32 mx-auto mb-4 transform hover:scale-110 transition-transform duration-300"
          />
          <h3 className="text-xl sm:text-2xl font-semibold mb-2">Şeyda Birgin</h3>
          <p className="text-primary font-medium mb-4">Kurucu & CEO</p>
          <p className="text-gray-600 mb-4 sm:mb-6">
            Şeyda, platformumuzun vizyoner lideridir. 10 yılı aşkın deneyimiyle site yönetim çözümlerinin öncüsüdür.
          </p>
          {/* Subtext */}
          <p className="text-gray-500 text-sm">&quot;Yaratıcı fikirlerimizle geleceğin çözümlerini sunuyoruz.&quot;</p>

          {/* Social Media Links */}
          <div className="flex justify-center space-x-4 mt-4">
            <a href="#" className="text-blue-500 hover:text-blue-700 transition-colors">
              <i className="fab fa-linkedin text-2xl"></i>
            </a>
            <a href="#" className="text-blue-400 hover:text-blue-600 transition-colors">
              <i className="fab fa-twitter text-2xl"></i>
            </a>
            <a href="#" className="text-gray-800 hover:text-gray-600 transition-colors">
              <i className="fab fa-github text-2xl"></i>
            </a>
          </div>
        </div>

        {/* Team Member 2 */}
        <div className="team-member bg-white shadow-lg rounded-xl p-6 sm:p-8 text-center hover:shadow-2xl transition-shadow duration-300 transform hover:-translate-y-2">
          <Image
            src="/images/team2.jpg"
            alt="Team Member"
            width={128}
            height={128}
            className="rounded-full w-24 sm:w-32 h-24 sm:h-32 mx-auto mb-4 transform hover:scale-110 transition-transform duration-300"
          />
          <h3 className="text-xl sm:text-2xl font-semibold mb-2">Mehmet Fikret</h3>
          <p className="text-primary font-medium mb-4">Kurucu Ortak</p>
          <p className="text-gray-600 mb-4 sm:mb-6">
            Mehmet, platformumuzun kurucu ortağıdır ve proje geliştirme konusunda uzmanlaşmıştır.
          </p>
          {/* Subtext */}
          <p className="text-gray-500 text-sm">&quot;Geleceği şekillendiren projeler üretiyoruz.&quot;</p>

          {/* Social Media Links */}
          <div className="flex justify-center space-x-4 mt-4">
            <a href="#" className="text-blue-500 hover:text-blue-700 transition-colors">
              <i className="fab fa-linkedin text-2xl"></i>
            </a>
            <a href="#" className="text-blue-400 hover:text-blue-600 transition-colors">
              <i className="fab fa-twitter text-2xl"></i>
            </a>
            <a href="#" className="text-gray-800 hover:text-gray-600 transition-colors">
              <i className="fab fa-github text-2xl"></i>
            </a>
          </div>
        </div>

        {/* Team Member 3 */}
        <div className="team-member bg-white shadow-lg rounded-xl p-6 sm:p-8 text-center hover:shadow-2xl transition-shadow duration-300 transform hover:-translate-y-2">
          <Image
            src="/images/team3.jpg"
            alt="Team Member"
            width={128}
            height={128}
            className="rounded-full w-24 sm:w-32 h-24 sm:h-32 mx-auto mb-4 transform hover:scale-110 transition-transform duration-300"
          />
          <h3 className="text-xl sm:text-2xl font-semibold mb-2">Berk Subaşı</h3>
          <p className="text-primary font-medium mb-4">Lead Developer</p>
          <p className="text-gray-600 mb-4 sm:mb-6">
            Berk, ölçeklenebilir yazılım çözümleri geliştirme konusunda uzmandır ve teknolojiye olan tutkusu ile bilinir.
          </p>
          {/* Subtext */}
          <p className="text-gray-500 text-sm">&quot;Güçlü ve sağlam yazılım çözümleri geliştiriyoruz.&quot;</p>

          {/* Social Media Links */}
          <div className="flex justify-center space-x-4 mt-4">
            <a href="#" className="text-blue-500 hover:text-blue-700 transition-colors">
              <i className="fab fa-linkedin text-2xl"></i>
            </a>
            <a href="#" className="text-blue-400 hover:text-blue-600 transition-colors">
              <i className="fab fa-twitter text-2xl"></i>
            </a>
            <a href="#" className="text-gray-800 hover:text-gray-600 transition-colors">
              <i className="fab fa-github text-2xl"></i>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
