import { FC } from "react";
import { Layout } from "../../components/Layout";
import { ContentCard } from "../../components/ContentCard";

export const TermsOfService: FC = () => {
    return (
        <Layout 
            title="Terms of Service" 
            subtitle="Please read these terms carefully before using our services"
        >
            <ContentCard>
                <div className="space-y-6">
                    <div className="text-center mb-8">
                        <p className="text-grey-600 font-medium">Effective Date: July 6, 2025</p>
                    </div>

                    <p className="text-grey-700 leading-relaxed">
                        Welcome to <strong className="text-dark-grey-900">nearyou.social</strong>. By accessing or using our website and services, you agree to these Terms of Service.
                    </p>

                    <section className="space-y-4">
                        <h2 className="text-2xl font-bold text-dark-grey-900 border-b border-grey-200 pb-2">
                            1. Use of Services
                        </h2>
                        <p className="text-grey-700">
                            You agree to use our website only for lawful purposes and not to interfere with its operation or security.
                        </p>
                    </section>

                    <section className="space-y-4">
                        <h2 className="text-2xl font-bold text-dark-grey-900 border-b border-grey-200 pb-2">
                            2. Intellectual Property
                        </h2>
                        <p className="text-grey-700">
                            All content and trademarks on <strong className="text-dark-grey-900">nearyou.social</strong> are owned by us or our licensors. You may not reproduce them without permission.
                        </p>
                    </section>

                    <section className="space-y-4">
                        <h2 className="text-2xl font-bold text-dark-grey-900 border-b border-grey-200 pb-2">
                            3. Disclaimer
                        </h2>
                        <p className="text-grey-700">
                            Our services are provided "as is" without warranties. We do not guarantee error-free or continuous access.
                        </p>
                    </section>

                    <section className="space-y-4">
                        <h2 className="text-2xl font-bold text-dark-grey-900 border-b border-grey-200 pb-2">
                            4. Limitation of Liability
                        </h2>
                        <p className="text-grey-700">
                            We are not liable for any damages arising from your use of our website or services.
                        </p>
                    </section>

                    <section className="space-y-4">
                        <h2 className="text-2xl font-bold text-dark-grey-900 border-b border-grey-200 pb-2">
                            5. Termination
                        </h2>
                        <p className="text-grey-700">
                            We may suspend or terminate your access if you violate these terms.
                        </p>
                    </section>

                    <section className="space-y-4">
                        <h2 className="text-2xl font-bold text-dark-grey-900 border-b border-grey-200 pb-2">
                            6. Changes to Terms
                        </h2>
                        <p className="text-grey-700">
                            We may update these terms at any time. Your continued use constitutes acceptance of the new terms.
                        </p>
                    </section>

                    <section className="space-y-4">
                        <h2 className="text-2xl font-bold text-dark-grey-900 border-b border-grey-200 pb-2">
                            7. Contact Us
                        </h2>
                        <p className="text-grey-700">
                            For questions, contact us at{' '}
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