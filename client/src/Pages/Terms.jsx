export default function TermsOfService() {
  return (
    <div className="min-h-screen bg-gray-100 text-gray-800 px-10 py-30 font-[Poppins]">
      <div className="bg-white p-10 rounded-none shadow-none border border-gray-200">
        <h1 className="text-5xl font-extrabold mb-2 text-blue-600"> Terms of Service</h1>
        <p className="text-sm text-gray-500 mb-8">
          Effective Date: <span className="italic">[Insert Date]</span>
        </p>

        <p className="mb-6 text-lg leading-relaxed">
          Welcome to <strong>All in One GBP Tools</strong>. By using our website and services, you agree to the following terms and conditions.
        </p>

        <div className="mb-8">
          <h2 className="text-2xl font-semibold mb-2">1. Account & Access</h2>
          <ul className="list-disc list-inside space-y-2 text-base">
            <li>You must be 18+ and provide accurate information during signup.</li>
            <li>You are responsible for keeping your login credentials secure.</li>
          </ul>
        </div>

        <div className="mb-8">
          <h2 className="text-2xl font-semibold mb-2">2. Permitted Usage</h2>
          <p className="text-base">
            You agree to use the platform for lawful business purposes only. Misuse, spamming, or scraping data is strictly prohibited.
          </p>
        </div>

        <div className="mb-8">
          <h2 className="text-2xl font-semibold mb-2">3. Subscription & Billing</h2>
          <ul className="list-disc list-inside space-y-2 text-base">
            <li>Our services are subscription-based. Pricing plans are available on the Pricing Page.</li>
            <li>Subscriptions auto-renew unless canceled before the billing cycle ends.</li>
            <li>No refunds for unused services unless otherwise stated.</li>
          </ul>
        </div>

        <div className="mb-8">
          <h2 className="text-2xl font-semibold mb-2">4. Content Responsibility</h2>
          <p className="text-base">
            You are responsible for the content you publish using our tools (reviews, posts, etc.). Ensure compliance with Google’s content policies.
          </p>
        </div>

        <div className="mb-8">
          <h2 className="text-2xl font-semibold mb-2">5. Account Termination</h2>
          <p className="text-base mb-2">We reserve the right to suspend or terminate accounts involved in:</p>
          <ul className="list-disc list-inside space-y-2 text-base">
            <li>Fraudulent activity</li>
            <li>Policy violations</li>
            <li>Misuse or abuse of features</li>
          </ul>
        </div>

        <div className="mb-8">
          <h2 className="text-2xl font-semibold mb-2">6. Limitation of Liability</h2>
          <p className="text-base">
            We do not guarantee rankings or results. Our platform is a tool to help improve online presence, but outcomes may vary.
          </p>
        </div>

        <div className="mb-8">
          <h2 className="text-2xl font-semibold mb-2">7. Intellectual Property</h2>
          <p className="text-base">
            All content, tools, and code on this platform are the property of <strong>All in One GBP Tools</strong> and protected by copyright laws.
          </p>
        </div>

        <div className="mb-8">
          <h2 className="text-2xl font-semibold mb-2">8. Changes to Terms</h2>
          <p className="text-base">
            We may revise these terms. Continued use of the platform implies acceptance of any changes.
          </p>
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
