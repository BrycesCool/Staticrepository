import Head from 'next/head';

export async function getStaticProps() {
  // Define static "About Us" content (replace with your data source if needed)
  const aboutData = {
    companyName: 'Product Research Inc.',
    description: 'We are a research organization dedicated to comparing products like Product A and Product B to provide valuable insights for consumers and businesses.',
    mission: 'To deliver unbiased and comprehensive product comparisons to empower informed decision-making.',
    contactEmail: 'info@productresearch.com',
    foundedYear: 2020,
  };

  return {
    props: {
      aboutData,
    },
  };
}

export default function About({ aboutData }) {
  // Structured data for LLMs and crawlers
  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: aboutData.companyName,
    description: aboutData.description,
    email: aboutData.contactEmail,
    foundingDate: aboutData.foundedYear,
  };

  return (
    <div>
      <Head>
        <title>About Us - {aboutData.companyName}</title>
        <meta name="description" content={aboutData.description} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} />
      </Head>
      <main>
        <h1>About Us</h1>
        <section>
          <h2>{aboutData.companyName}</h2>
          <p>{aboutData.description}</p>
          <h3>Our Mission</h3>
          <p>{aboutData.mission}</p>
          <h3>Contact Us</h3>
          <p>Email: {aboutData.contactEmail}</p>
          <p>Founded: {aboutData.foundedYear}</p>
        </section>
      </main>
    </div>
  );
}