import { LegalLayout, LegalSection } from '../components/LegalLayout';

export function Terms() {
  return (
    <LegalLayout title="Terms of Service" lastUpdated="June 21, 2026">
      <p className="text-white/60 leading-relaxed mb-10">
        These Terms of Service (&ldquo;Terms&rdquo;) govern your access to and use of the Obravio&trade;
        construction management platform and related services (the &ldquo;Service&rdquo;), operated by
        Obravio LLC (&ldquo;Obravio,&rdquo; &ldquo;we,&rdquo; &ldquo;us,&rdquo; or &ldquo;our&rdquo;). Please
        read them carefully.
      </p>

      <LegalSection heading="1. Acceptance of Terms">
        <p>
          By creating an account, accessing, or using the Service, you agree to be bound by these Terms and
          our Privacy Policy. If you are using the Service on behalf of a company or organization, you
          represent that you have authority to bind that entity, and &ldquo;you&rdquo; refers to that entity.
          If you do not agree, do not use the Service.
        </p>
      </LegalSection>

      <LegalSection heading="2. Description of the Service">
        <p>
          Obravio&trade; is a multi-tenant software-as-a-service platform for construction management,
          providing tools such as estimating, proposals, contracts, change orders, budgeting and cost
          tracking, scheduling, billing, and payments. We may add, change, or remove features over time.
        </p>
      </LegalSection>

      <LegalSection heading="3. Accounts & Eligibility">
        <p>
          You must be at least 18 years old and able to form a binding contract to use the Service. You are
          responsible for maintaining the confidentiality of your login credentials and for all activity that
          occurs under your account. Notify us promptly of any unauthorized use.
        </p>
      </LegalSection>

      <LegalSection heading="4. Subscriptions, Free Trial & Billing">
        <p>
          The Service is offered on a subscription basis. Certain plans include a free trial. Unless you
          cancel before the trial ends, your subscription will automatically convert to a paid plan and your
          payment method will be charged at the then-current rate.
        </p>
        <p>
          Subscription fees are billed in advance on a recurring basis and are non-refundable except as
          required by law or expressly stated by us. You authorize us and our payment processor to charge
          your payment method for all applicable fees. We may change our fees on prospective notice.
        </p>
      </LegalSection>

      <LegalSection heading="5. Payments & Stripe">
        <p>
          Payment processing is handled by Stripe and is subject to Stripe&rsquo;s terms and policies. This
          includes both subscription billing and, where applicable, payments facilitated through the Service
          between project participants (for example, owner-to-general-contractor and
          general-contractor-to-subcontractor payments) via Stripe Connect.
        </p>
        <p>
          Obravio is not a bank or money transmitter and does not take custody of payments made between
          project participants; those funds are handled by Stripe. You are responsible for the accuracy of
          payment details you enter and for any taxes associated with your transactions.
        </p>
      </LegalSection>

      <LegalSection heading="6. Acceptable Use">
        <p>You agree not to:</p>
        <ul className="list-disc pl-6 space-y-2">
          <li>Use the Service for any unlawful, fraudulent, or harmful purpose;</li>
          <li>Upload content that infringes the rights of others or that you lack the right to share;</li>
          <li>Attempt to gain unauthorized access to the Service or other users&rsquo; data;</li>
          <li>Interfere with, disrupt, or overload the Service or its infrastructure; or</li>
          <li>Reverse engineer, resell, or sublicense the Service except as permitted by law.</li>
        </ul>
      </LegalSection>

      <LegalSection heading="7. Customer Data Ownership">
        <p>
          As between you and Obravio, you own the project, financial, and other data you submit to the
          Service (&ldquo;Customer Data&rdquo;). You grant us a limited license to host, process, and use
          Customer Data solely to provide and improve the Service and as described in our Privacy Policy. You
          are responsible for the accuracy and legality of your Customer Data.
        </p>
      </LegalSection>

      <LegalSection heading="8. Intellectual Property">
        <p>
          The Service, including the Obravio&trade; name, logos, software, and design, is owned by Obravio LLC
          and protected by intellectual property laws. We grant you a limited, non-exclusive,
          non-transferable right to use the Service during your subscription. All rights not expressly granted
          are reserved.
        </p>
      </LegalSection>

      <LegalSection heading="9. Third-Party Services">
        <p>
          The Service relies on third-party providers, including Stripe (payments), Supabase (hosting and
          database), Resend (email), and Anthropic (optional AI features). Your use of features that depend on
          these providers may be subject to their respective terms. We are not responsible for third-party
          services we do not control.
        </p>
      </LegalSection>

      <LegalSection heading="10. Disclaimers">
        <p>
          THE SERVICE IS PROVIDED &ldquo;AS IS&rdquo; AND &ldquo;AS AVAILABLE&rdquo; WITHOUT WARRANTIES OF ANY
          KIND, WHETHER EXPRESS OR IMPLIED, INCLUDING WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR
          PURPOSE, AND NON-INFRINGEMENT. We do not warrant that the Service will be uninterrupted, error-free,
          or that it will meet your specific requirements. The Service is a tool and is not a substitute for
          professional legal, financial, or accounting advice.
        </p>
      </LegalSection>

      <LegalSection heading="11. Limitation of Liability">
        <p>
          TO THE MAXIMUM EXTENT PERMITTED BY LAW, OBRAVIO LLC AND ITS AFFILIATES WILL NOT BE LIABLE FOR ANY
          INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR PUNITIVE DAMAGES, OR FOR ANY LOSS OF PROFITS,
          REVENUE, DATA, OR GOODWILL. OUR TOTAL LIABILITY FOR ANY CLAIM ARISING OUT OF OR RELATING TO THE
          SERVICE WILL NOT EXCEED THE AMOUNTS YOU PAID US FOR THE SERVICE IN THE TWELVE (12) MONTHS PRECEDING
          THE CLAIM.
        </p>
      </LegalSection>

      <LegalSection heading="12. Indemnification">
        <p>
          You agree to indemnify and hold harmless Obravio LLC and its affiliates from any claims, damages,
          liabilities, and expenses (including reasonable attorneys&rsquo; fees) arising out of your use of
          the Service, your Customer Data, or your violation of these Terms or applicable law.
        </p>
      </LegalSection>

      <LegalSection heading="13. Termination">
        <p>
          You may stop using the Service and cancel your subscription at any time. We may suspend or terminate
          your access if you violate these Terms, fail to pay applicable fees, or if we discontinue the
          Service. Upon termination, your right to use the Service ends. We may make Customer Data available
          for a limited period for export, after which it may be deleted.
        </p>
      </LegalSection>

      <LegalSection heading="14. Governing Law & Dispute Resolution">
        <p>
          These Terms are governed by the laws of the State of Florida, without regard to its conflict-of-law
          rules. You agree that the exclusive venue for any dispute arising out of or relating to these Terms
          or the Service will be the state and federal courts located in Florida, and you consent to their
          jurisdiction. The parties will attempt in good faith to resolve disputes informally before
          litigation.
        </p>
      </LegalSection>

      <LegalSection heading="15. Changes to These Terms">
        <p>
          We may update these Terms from time to time. When we do, we will revise the &ldquo;Last
          updated&rdquo; date above and, where appropriate, provide additional notice. Your continued use of
          the Service after changes take effect constitutes acceptance of the updated Terms.
        </p>
      </LegalSection>

      <LegalSection heading="16. Contact Us">
        <p>If you have questions about these Terms, contact us at:</p>
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
