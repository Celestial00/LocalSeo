export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-gray-100 text-gray-800 px-10 py-30 font-[Poppins]">
      <div className="bg-white p-10 rounded-none shadow-none border border-gray-200">
        <h1 className="text-5xl font-extrabold mb-2 text-blue-600">Privacy Policy</h1>
        <p className="text-sm text-gray-500 mb-8">
          Effective Date: <span className="italic">[2025-5-5] </span>
        </p>

        <p className="mb-6 text-lg leading-relaxed">
          At <strong>All in One GBP Tools</strong>, we value your privacy. This Privacy Policy outlines how we collect,
          use, store, and protect your information when you use our platform and services.
        </p>

        <div className="mb-8">
          <h2 className="text-2xl font-semibold mb-2">1. Information We Collect</h2>
          <ul className="list-disc list-inside space-y-2 text-base">
            <li><strong>Personal Information:</strong> Name, email, phone number, business details.</li>
            <li><strong>Usage Data:</strong> IP address, browser type, device info, interaction with our tools.</li>
            <li><strong>Third-party Integrations:</strong> Google, social media platforms.</li>
          </ul>
        </div>

        <div className="mb-8">
          <h2 className="text-2xl font-semibold mb-2">2. How We Use Your Information</h2>
          <ul className="list-disc list-inside space-y-2 text-base">
            <li>To provide and improve our services.</li>
            <li>To personalize your dashboard and user experience.</li>
            <li>To send service updates, support info, or promotional emails (opt-in only).</li>
            <li>For analytics and performance monitoring.</li>
          </ul>
        </div>

        <div className="mb-8">
          <h2 className="text-2xl font-semibold mb-2">3. Sharing of Data</h2>
          <ul className="list-disc list-inside space-y-2 text-base">
            <li>We do not sell or rent your personal data.</li>
            <li>We may share with third-party services for integration (e.g., Google APIs) with your explicit permission.</li>
            <li>Required disclosures under legal obligations.</li>
          </ul>
        </div>

        <div className="mb-8">
          <h2 className="text-2xl font-semibold mb-2">4. Data Security</h2>
          <p className="text-base">We use advanced encryption, SSL security, and secure cloud infrastructure to protect your data.</p>
        </div>

        <div className="mb-8">
          <h2 className="text-2xl font-semibold mb-2">5. Your Rights</h2>
          <ul className="list-disc list-inside space-y-2 text-base">
            <li>Data access or download</li>
            <li>Correction or deletion of your data</li>
            <li>Opt-out of marketing emails</li>
          </ul>
        </div>

        <div className="mb-8">
          <h2 className="text-2xl font-semibold mb-2">6. Cookies</h2>
          <p className="text-base">We use cookies to enhance your experience. You can disable cookies in your browser settings.</p>
        </div>

        <div className="mb-8">
          <h2 className="text-2xl font-semibold mb-2">7. Updates to Privacy Policy</h2>
          <p className="text-base">We may update this policy. You will be notified of significant changes via email or dashboard notifications.</p>
        </div>

        <div className="mt-10">
          <p className="text-base">
            📧 <strong>Contact:</strong>{' '}
            <a href="mailto:support@allinonegbptools.com" className="text-blue-500 underline">
              support@allinonegbptools.com
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}
