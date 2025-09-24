export interface Policy {
  slug: string;
  title: string;
  lastUpdated: string;
  content: string; // This will hold the raw HTML from your editor
}

// This array acts as our database of policies.
const policiesData: Policy[] = [
  {
    slug: "privacy-policy",
    title: "Privacy Policy",
    lastUpdated: "September 23, 2025",
    content: `
      <h2>1. Introduction</h2>
      <p>Welcome to MAS Group. We are committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website.</p>
      
      <h2>2. Information We Collect</h2>
      <p>We may collect information about you in a variety of ways. The information we may collect on the Site includes:</p>
      <ul>
        <li><strong>Personal Data:</strong> Personally identifiable information, such as your name, email address, and telephone number, that you voluntarily give to us when you fill out a contact or consultation form.</li>
        <li><strong>Derivative Data:</strong> Information our servers automatically collect when you access the Site, such as your IP address, your browser type, your operating system, your access times, and the pages you have viewed directly before and after accessing the Site.</li>
      </ul>

      <h2>3. Use of Your Information</h2>
      <p>Having accurate information about you permits us to provide you with a smooth, efficient, and customized experience. Specifically, we may use information collected about you via the Site to:</p>
      <ul>
        <li>Respond to your inquiries and provide customer support.</li>
        <li>Send you a newsletter or other marketing communications.</li>
        <li>Improve our website and services.</li>
      </ul>

      <h2>4. Contact Us</h2>
      <p>If you have questions or comments about this Privacy Policy, please contact us at: <a href="mailto:info@masgroup.com">info@masgroup.com</a></p>
    `,
  },
  {
    slug: "terms-of-service",
    title: "Terms of Service",
    lastUpdated: "September 23, 2025",
    content: `
      <h2>1. Agreement to Terms</h2>
      <p>By using our website, you agree to be bound by these Terms of Service. If you do not agree to these terms, please do not use the Site.</p>
      
      <h2>2. Intellectual Property Rights</h2>
      <p>The Site and its original content, features, and functionality are owned by MAS Group and are protected by international copyright, trademark, and other intellectual property laws.</p>
      
      <h2>3. Prohibited Activities</h2>
      <p>You may not access or use the Site for any purpose other than that for which we make the Site available. Prohibited activity includes, but is not limited to:</p>
      <ul>
        <li>Engaging in any automated use of the system, such as using scripts to send comments or messages.</li>
        <li>Attempting to impersonate another user or person.</li>
        <li>Using any information obtained from the Site in order to harass, abuse, or harm another person.</li>
      </ul>
    `,
  },
];

// This function simulates fetching data from a database.
export const getPolicyBySlug = (slug: string): Policy | undefined => {
  return policiesData.find((p) => p.slug === slug);
};