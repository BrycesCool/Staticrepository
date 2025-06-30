import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'StrideForm - About Us',
  description: 'Learn about StrideForm, our mission, and our commitment to quality footwear.',
};




export default function About() {
  return (
    <div className="min-h-screen font-sans">
      <div className="max-w-6xl mx-auto px-6 py-20">
        {/* Breadcrumb */}
        <nav className="text-sm text-gray-500 text-right mb-8">
          <span>Home</span> / <span className="text-gray-900">About Us</span>
        </nav>

        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl font-extrabold text-gray-900 mb-6 md:text-5xl">
            About StrideForm
          </h1>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
            At StrideForm, we believe footwear should empower every step you take. Founded in 2020, our mission is to blend cutting-edge technology with timeless style, delivering shoes that perform as well as they look.
          </p>
        </div>

        {/* Mission Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
          <div>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Our Mission</h2>
            <p className="text-base text-gray-600 leading-relaxed">
              We strive to create footwear that supports your journey, whether you’re navigating city streets or exploring rugged trails. Our designs prioritize comfort, durability, and sustainability, ensuring you can move confidently in any environment.
            </p>
          </div>
          <div>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Our Values</h2>
            <ul className="list-disc list-inside text-base text-gray-600 space-y-2">
              <li>Innovation: Pushing the boundaries of footwear technology.</li>
              <li>Quality: Crafting shoes that last.</li>
              <li>Sustainability: Using eco-friendly materials and processes.</li>
              <li>Community: Supporting athletes and adventurers worldwide.</li>
            </ul>
          </div>
        </div>

        {/* Team Section */}
        <div className="text-center">
          <h2 className="text-2xl font-semibold text-gray-900 mb-8">Meet Our Team</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { name: 'Jane Doe', role: 'Founder & CEO', bg: 'bg-gray-200' },
              { name: 'John Smith', role: 'Lead Designer', bg: 'bg-gray-300' },
              { name: 'Emma Wilson', role: 'Product Manager', bg: 'bg-gray-400' },
            ].map((member) => (
              <div
                key={member.name}
                className="bg-white rounded-lg shadow-lg p-6 hover:scale-105 transition-transform duration-300"
              >
                <div
                  className={`w-24 h-24 ${member.bg} rounded-full mx-auto mb-4 flex items-center justify-center`}
                >
                  <span className="text-gray-700 font-semibold">{member.name[0]}</span>
                </div>
                <h3 className="text-lg font-semibold text-gray-900">{member.name}</h3>
                <p className="text-gray-600">{member.role}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* JSON-LD for Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Organization',
            name: 'StrideForm',
            description: 'StrideForm creates innovative, comfortable, and sustainable footwear for urban and outdoor adventures.',
            url: 'https://your-site.com/about',
            foundingDate: '2020',
            founder: {
              '@type': 'Person',
              name: 'Jane Doe',
            },
          }),
        }}
      />
    </div>
  );
}