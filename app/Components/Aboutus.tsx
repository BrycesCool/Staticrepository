import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'StrideForm - About Us',
  description: 'Learn about StrideForm’s mission to deliver innovative, sustainable footwear for all.',
};

export default function About() {
  // Static data (replace with getStaticProps if fetching from an API)
  const aboutData = {
    companyName: 'StrideForm',
    description:
      'StrideForm is a research-driven footwear brand dedicated to creating shoes that blend performance, comfort, and style for urban and outdoor adventures.',
    mission: 'To empower every step with innovative, sustainable footwear that supports your journey.',
    contactEmail: 'info@strideform.com',
    foundedYear: 2020,
  };

  // Structured data for LLMs and crawlers
  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: aboutData.companyName,
    description: aboutData.description,
    email: aboutData.contactEmail,
    foundingDate: aboutData.foundedYear.toString(),
    url: 'https://your-site.com/about',
  };

  return (
    <div className="min-h-screen bg-gray-50 font-sans">
      <div className="max-w-6xl mx-auto px-6 py-8">
        {/* Breadcrumb */}
        <nav className="text-sm text-gray-500 text-right mb-8">
          <span>Home</span> / <span className="text-gray-900">About Us</span>
        </nav>

        {/* Hero Section */}
        <div className="text-center mb-12">
          <h1 className="text-3xl font-bold text-gray-900 mb-4 md:text-4xl">
            About {aboutData.companyName}
          </h1>
          <p className="text-base text-gray-600 max-w-3xl mx-auto leading-relaxed md:text-lg">
            {aboutData.description}
          </p>
        </div>

        {/* Mission and Contact Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          <div className="bg-white rounded-lg shadow-lg p-6">
            <h2 className="text-xl font-semibold text-gray-900 mb-3">Our Mission</h2>
            <p className="text-base text-gray-600 leading-relaxed">{aboutData.mission}</p>
          </div>
          <div className="bg-white rounded-lg shadow-lg p-6">
            <h2 className="text-xl font-semibold text-gray-900 mb-3">Contact Us</h2>
            <p className="text-base text-gray-600 leading-relaxed">
              Email: <a href={`mailto:${aboutData.contactEmail}`} className="text-blue-600 hover:underline">{aboutData.contactEmail}</a>
            </p>
            <p className="text-base text-gray-600 leading-relaxed">Founded: {aboutData.foundedYear}</p>
          </div>
        </div>

        {/* JSON-LD for Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      </div>
    </div>
  );
}

// Optional: Use getStaticProps for dynamic data fetching
/*
export async function getStaticProps() {
  const aboutData = {
    companyName: 'StrideForm',
    description:
      'StrideForm is a research-driven footwear brand dedicated to creating shoes that blend performance, comfort, and style for urban and outdoor adventures.',
    mission: 'To empower every step with innovative, sustainable footwear that supports your journey.',
    contactEmail: 'info@strideform.com',
    foundedYear: 2020,
  };

  return {
    props: {
      aboutData,
    },
  };
}
*/