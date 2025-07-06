import { FC } from "react";
import { Layout } from "../../components/Layout";
import { ContentCard } from "../../components/ContentCard";

export const PrivacyPolicy: FC = () => {
  return (
    <Layout 
      title="Privacy Policy" 
      subtitle="Learn how we protect and handle your personal information"
    >
      <ContentCard>
        <div className="space-y-6">
          <div className="text-center mb-8">
            <p className="text-grey-600 font-medium">Effective Date: July 6, 2025</p>
          </div>

          <p className="text-grey-700 leading-relaxed">
            At <strong className="text-dark-grey-900">nearyou.social</strong>, we value your privacy and are committed to protecting your personal information. This Privacy Policy describes how we collect, use, and safeguard your information when you visit our website or use our services.
          </p>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-dark-grey-900 border-b border-grey-200 pb-2">
              1. Information We Collect
            </h2>
            <ul className="list-disc pl-6 space-y-2 text-grey-700">
              <li>Your name</li>
              <li>Email address</li>
              <li>Contact details</li>
              <li>Blockchain wallet address (if applicable)</li>
              <li>Any other information you choose to provide</li>
            </ul>
            <p className="text-grey-700">
              We may also automatically collect certain information such as IP address, browser type, device information, and pages you visited.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-dark-grey-900 border-b border-grey-200 pb-2">
              2. How We Use Your Information
            </h2>
            <p className="text-grey-700">
              We use the information to provide and improve our services, communicate with you, comply with legal obligations, and ensure security.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-dark-grey-900 border-b border-grey-200 pb-2">
              3. Sharing of Information
            </h2>
            <p className="text-grey-700">
              We do not sell your information. We may share it with service providers, legal authorities, or in connection with business transfers.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-dark-grey-900 border-b border-grey-200 pb-2">
              4. Security of Your Information
            </h2>
            <p className="text-grey-700">
              We implement reasonable security measures to protect your personal information.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-dark-grey-900 border-b border-grey-200 pb-2">
              5. Your Rights
            </h2>
            <p className="text-grey-700">
              You may access, correct, or delete your information. To exercise your rights, contact us at{' '}
              <a href="mailto:phuongit0301@gmail.com" className="text-purple-blue-600 hover:text-purple-blue-700 font-medium">
                phuongit0301@gmail.com
              </a>.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-dark-grey-900 border-b border-grey-200 pb-2">
              6. Third-Party Links
            </h2>
            <p className="text-grey-700">
              We are not responsible for the privacy practices of third-party websites linked from our site.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-dark-grey-900 border-b border-grey-200 pb-2">
              7. Updates to This Policy
            </h2>
            <p className="text-grey-700">
              We may update this policy from time to time. Changes will be posted on this page.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-dark-grey-900 border-b border-grey-200 pb-2">
              8. Contact Us
            </h2>
            <p className="text-grey-700">
              If you have questions, contact us at{' '}
              <a href="mailto:phuongit0301@gmail.com" className="text-purple-blue-600 hover:text-purple-blue-700 font-medium">
                phuongit0301@gmail.com
              </a>.
            </p>
          </section>
        </div>
      </ContentCard>
    </Layout>
  );
};

