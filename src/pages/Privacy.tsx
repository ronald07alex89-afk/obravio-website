import { LegalLayout, LegalSection } from '../components/LegalLayout';

export function Privacy() {
  return (
    <LegalLayout title="Privacy Policy" lastUpdated="June 21, 2026">
      <p className="text-white/60 leading-relaxed mb-10">
        This Privacy Policy explains how Obravio LLC (&ldquo;Obravio,&rdquo; &ldquo;we,&rdquo; &ldquo;us,&rdquo;
        or &ldquo;our&rdquo;) collects, uses, and protects information when you use the Obravio&trade;
        construction management platform and related services (the &ldquo;Service&rdquo;). By using the
        Service, you agree to the practices described below.
      </p>

      <LegalSection heading="1. Information We Collect">
        <p>We collect the following types of information:</p>
        <ul className="list-disc pl-6 space-y-2">
          <li>
            <span className="text-white/70 font-medium">Account &amp; company information.</span> Your name,
            email address, phone number, company name, business address, job title, and login credentials.
          </li>
          <li>
            <span className="text-white/70 font-medium">Project &amp; financial data.</span> Information you
            and your team enter into the Service, including estimates, proposals, contracts, change orders,
            budgets, schedules, invoices, pay applications, and related project and payment records.
          </li>
          <li>
            <span className="text-white/70 font-medium">Usage data.</span> Information about how you interact
            with the Service, such as pages viewed, features used, device and browser type, IP address, and
            timestamps.
          </li>
          <li>
            <span className="text-white/70 font-medium">Cookies &amp; similar technologies.</span> We use
            cookies and similar technologies to keep you signed in, remember your preferences, and understand
            how the Service is used.
          </li>
        </ul>
      </LegalSection>

      <LegalSection heading="2. How We Use Your Information">
        <p>We use the information we collect to:</p>
        <ul className="list-disc pl-6 space-y-2">
          <li>Provide, operate, maintain, and improve the Service;</li>
          <li>Create and manage your account and authenticate you;</li>
          <li>Process subscriptions, billing, and payments;</li>
          <li>Send transactional messages, service updates, and support communications;</li>
          <li>Provide optional AI-powered features you choose to use;</li>
          <li>Monitor, secure, and troubleshoot the Service; and</li>
          <li>Comply with legal obligations and enforce our agreements.</li>
        </ul>
      </LegalSection>

      <LegalSection heading="3. How Information Is Shared">
        <p>
          We do not sell your personal information. We share information only as needed to operate the
          Service, including with the following third-party service providers (subprocessors):
        </p>
        <ul className="list-disc pl-6 space-y-2">
          <li>
            <span className="text-white/70 font-medium">Stripe</span> &mdash; payment processing and billing,
            including subscription payments and owner-to-general-contractor-to-subcontractor payments.
          </li>
          <li>
            <span className="text-white/70 font-medium">Supabase</span> &mdash; database hosting and
            application infrastructure.
          </li>
          <li>
            <span className="text-white/70 font-medium">Resend</span> &mdash; delivery of transactional and
            service emails.
          </li>
          <li>
            <span className="text-white/70 font-medium">Anthropic</span> &mdash; processing for optional AI
            features you choose to use.
          </li>
        </ul>
        <p>
          We may also disclose information when required by law, to protect our rights or the safety of
          others, or in connection with a business transfer such as a merger or acquisition.
        </p>
      </LegalSection>

      <LegalSection heading="4. Payment Information">
        <p>
          Payment card details are collected and processed directly by Stripe, our payment processor.
          Obravio does not store full payment card numbers on its systems. Your use of payment features is
          also subject to Stripe&rsquo;s terms and privacy policy.
        </p>
      </LegalSection>

      <LegalSection heading="5. Data Security">
        <p>
          We use industry-standard administrative, technical, and physical safeguards designed to protect
          your information, including encryption in transit and access controls. No method of transmission or
          storage is completely secure, so we cannot guarantee absolute security.
        </p>
      </LegalSection>

      <LegalSection heading="6. Data Retention">
        <p>
          We retain your information for as long as your account is active or as needed to provide the
          Service, comply with our legal obligations, resolve disputes, and enforce our agreements. When
          information is no longer needed, we take steps to delete or anonymize it.
        </p>
      </LegalSection>

      <LegalSection heading="7. Your Rights">
        <p>
          Depending on your location, you may have the right to access, correct, update, or request deletion
          of your personal information, and to object to or restrict certain processing. To exercise these
          rights, contact us at{' '}
          <a href="mailto:contact@obravio.com" className="text-[#D4956B] hover:text-[#B87333] underline">
            contact@obravio.com
          </a>
          . If you are a member of a customer&rsquo;s team, some requests may be directed to that customer as
          the account owner.
        </p>
      </LegalSection>

      <LegalSection heading="8. Children's Privacy">
        <p>
          The Service is intended for businesses and is not directed to children under the age of 13. We do
          not knowingly collect personal information from children. If you believe a child has provided us
          information, please contact us so we can remove it.
        </p>
      </LegalSection>

      <LegalSection heading="9. Changes to This Policy">
        <p>
          We may update this Privacy Policy from time to time. When we do, we will revise the &ldquo;Last
          updated&rdquo; date above and, where appropriate, provide additional notice. Your continued use of
          the Service after changes take effect means you accept the updated policy.
        </p>
      </LegalSection>

      <LegalSection heading="10. Contact Us">
        <p>If you have questions about this Privacy Policy or our data practices, contact us at:</p>
        <p className="text-white/70">
          Obravio LLC<br />
          Miami, Florida<br />
          <a href="mailto:contact@obravio.com" className="text-[#D4956B] hover:text-[#B87333] underline">
            contact@obravio.com
          </a>
        </p>
      </LegalSection>
    </LegalLayout>
  );
}
