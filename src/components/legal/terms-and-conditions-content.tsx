import {
  LegalContactBlock,
  LegalDefinitionList,
  LegalLi,
  LegalOl,
  LegalP,
  LegalSection,
  LegalUl,
  PrivacyLink,
} from "@/components/legal/legal-document";

const TERMS_DEFINITIONS = [
  {
    term: "Blogs",
    definition:
      "shall mean the contents relating to technology, software applications, etc, that are regularly updated on the blog page of Our Website. The content can be from Us, Vendors, Experts, or any other person who publishes their content on the blog page with Our approval.",
  },
  {
    term: "Confidential Information",
    definition:
      'means all information disclosed by one Party to the other Party which is in tangible form and labeled "confidential" (or with a similar legend) or which a reasonable person would understand to be confidential given the nature of the information and circumstances of disclosure. Notwithstanding the foregoing, Confidential Information shall not include any information which (a) becomes publicly known and made generally available after disclosure by the disclosing party to the receiving party through no action or inaction of the receiving party; (c) is, at the time of disclosure, already in possession of the receiving party without any obligation of confidentiality; (d) is obtained by the receiving party from a third party without a breach of such third party\'s obligations of confidentiality; (e) is independently developed by the receiving party without the use of or reference to the disclosing party\'s Confidential Information; or (f) is required by law to be disclosed by the receiving party, provided that the receiving party shall, to the extent legally permitted, notify the disclosing party of such requirement prior to disclosing so that the disclosing party may seek a protective order or other appropriate relief.',
  },
  {
    term: "Expert",
    definition:
      "shall mean a person with the necessary skills and expertise to help You find the suitable software tool to cater to Your needs and requirements.",
  },
  {
    term: "Personal Data",
    definition:
      "means data relating to a living individual who is or can be identified either from the data or from the data in conjunction with other information that is in, or is likely to come into, the possession of the data controller.",
  },
  {
    term: "Platform",
    definition:
      "means Our proprietary online marketplace that aids Users in connecting with Vendors, and/or Experts along with access to the contents of the Blogs, including any modifications, updates, or improvements thereto.",
  },
  {
    term: "Processing/To Process",
    definition:
      "means any operation or set of operations which is performed upon Personal Data, whether or not by automatic means, such as collection, recording, organization, storage, adaptation or alteration, retrieval, consultation, use, disclosure by transmission, dissemination or otherwise making available, alignment or combination, blocking, erasure or destruction.",
  },
  {
    term: "User Account",
    definition:
      "means any accounts or instances created by or on behalf of the User for access and use of the Platform.",
  },
  {
    term: "Vendors",
    definition: "shall mean software vendors that are listed on Our Website",
  },
  {
    term: "Vendor Service(s)",
    definition:
      "shall mean Vendor application(s) or service(s) integrating with the Platform through APIs or otherwise enabled through the Platform which requires You to have Your own accounts with such third-party application(s) or service(s) in order to utilize them.",
  },
  {
    term: "Website(s)",
    definition: "means the websites owned and operated by Us including https://www.jazzhq.ai/",
  },
];

export function TermsAndConditionsContent() {
  return (
    <>
      <LegalP>
        These Terms of Use (&ldquo;Terms&rdquo;) describe the terms under which
        JazzHQ (&ldquo;Us&rdquo;, &ldquo;We&rdquo;, &ldquo;Our&rdquo;) provides
        an individual or entity, who accesses and/or uses Our Platform to get
        information on different SaaS tools available in the market (&ldquo;You&rdquo;,
        &ldquo;Your&rdquo;, &ldquo;Yourself&rdquo;, &ldquo;User&rdquo;). By
        accessing and/or using the Platform, a) You agree to be bound by these
        Terms and acknowledge having read the privacy policy located at{" "}
        <PrivacyLink /> (&ldquo;Privacy Policy&rdquo;). b) You warrant to us
        that you have the legal capacity to enter into these Terms c) That, in
        the event, You are entering into these Terms on behalf of any entity or
        its group, You possess the requisite authority to bind such an entity or
        group to these Terms. If You do not agree to these Terms, You should
        immediately cease using the Platform.
      </LegalP>

      <LegalP>
        You and Us will be individually referred to as &ldquo;Party&rdquo; and
        collectively as &ldquo;Parties&rdquo;.
      </LegalP>

      <LegalSection title="1. USE OF THE PLATFORM:">
        <LegalP>
          You acknowledge and agree to access and/or use the Platform only for
          Your internal business purposes in accordance with these Terms. The
          Platform allows You to search for and share information about
          different SaaS tools available in the market, interact with Experts,
          Vendors, and any other person using the Platform, and/or access the
          Blogs on the Platform.
        </LegalP>
        <LegalP>
          Any enhancements, new features, or updates (&ldquo;Updates&rdquo;) to
          the Platform are also subject to these Terms and We reserve the right to
          deploy Updates at any time.
        </LegalP>
        <LegalP>
          If You choose to create a User Account with Us, You agree to provide
          true, accurate, and complete information as may be required when
          registering for a User Account. Each User shall be identified using
          unique login information such as usernames and passwords (&ldquo;User
          Login&rdquo;) to log in to their User Account and such User Login
          shall be used only by the authorized Users. You shall be solely
          responsible for activities under Your User Account. We reserve the right
          to suspend or terminate Your User Account at our sole discretion if we
          believe or are likely to believe that the information provided by You
          are inaccurate, incomplete, or impersonates some other person.
        </LegalP>
        <LegalP>
          <strong>Beta Services:</strong> You may join the beta group on the
          Website, to receive a trial of Services by creating accounts for trial
          use for a limited period of time (&ldquo;Beta Services&rdquo;). The Beta
          Services shall be subject to these Terms and any additional terms that
          We specify. We, in our sole discretion, shall have the right to
          terminate the Services and Your right to use the Services at any time
          during the Beta Service period and for any reason, without being liable
          to You. NOTWITHSTANDING ANYTHING TO THE CONTRARY IN THESE TERMS, WE
          DISCLAIM ALL LIABILITIES, TO THE MAXIMUM EXTENT PERMITTED BY LAW, WITH
          RESPECT TO YOUR USE OF THE BETA SERVICES.
        </LegalP>
      </LegalSection>

      <LegalSection title="2. ACCEPTABLE USE:">
        <LegalP>You agree not to</LegalP>
        <LegalOl>
          <LegalLi>
            duplicate, reproduce, copy, sell, resell, or distribute, the Platform
            or any portion of the Platform including the User Content for
            commercial purposes without Our written consent.
          </LegalLi>
          <LegalLi>
            disassemble, reverse engineer, decompile or make the Platform
            available to any third party other than Your Users in furtherance of
            Your internal business purposes as expressly permitted by these Terms
          </LegalLi>
          <LegalLi>
            modify, adapt, or hack the Platform or otherwise attempt to gain or
            gain unauthorized access to Platform or related systems or networks;
          </LegalLi>
          <LegalLi>deep-link any portion of the Platform without Our express consent</LegalLi>
          <LegalLi>
            collect or harvest from Our Platform the information including the
            reviews and recommendations of fellow users of the Platform or
            Experts or Vendors without their consent
          </LegalLi>
          <LegalLi>
            access it for purposes of benchmarking, creating derivative works
            based on, or developing or operating products or services in
            competition with the Platform
          </LegalLi>
          <LegalLi>
            use the Platform to publish or post User Content that a) infringes
            upon any person&apos;s intellectual property rights, b) is unlawful,
            racist, hateful, abusive, libelous, obscene, or discriminatory, c)
            infringes any person&apos;s privacy rights, export control
            laws/regulations d) impersonates any other person or entity e) is
            irrelevant to the topic in which the User Content is posted or
            published g) solely promotes one product and disparages another
            product
          </LegalLi>
          <LegalLi>
            use the Platform to knowingly post, transmit, upload, link to, send,
            or store any viruses, malware, trojan horses, time bombs, or any
            other similar harmful software;
          </LegalLi>
          <LegalLi>
            &ldquo;crawl,&rdquo; &ldquo;scrape,&rdquo; or &ldquo;spider&rdquo;
            any page, data, or portion of or relating to the Platform (through
            the use of manual or automated means).
          </LegalLi>
        </LegalOl>
        <LegalP>
          If We inform You that a specified activity is prohibited with respect to
          the Platform, You will ensure that You immediately cease the use of the
          Platform for such prohibited activity or purpose. At our sole
          discretion, We may, suspend or terminate Your access to the Platform,
          and/or edit or remove User Content, which violates or otherwise fails to
          comply with these Terms.
        </LegalP>
      </LegalSection>

      <LegalSection title="3. USER CONTENT:">
        <LegalP>
          The Platform offers Users an interactive space to publish or post
          reviews, recommendations, and opinions on any product or services
          offered by Vendors, in any form or media such as messages, data,
          information, text, music, sound, photos, graphics, screenshots, video,
          code, or any other material (&ldquo;User Content&rdquo;). Only after
          verifying Your identity, You shall be allowed to post or publish the
          User Content. You shall be responsible for all the User Content, You
          publish on the Platform. You warrant to Us that all the User Content You
          publish on the Platform is free from any third-party encumbrances.
        </LegalP>
        <LegalP>
          You represent and warrant that i) You own or otherwise control all of
          the rights to the User Content that You post on or through the Platform
          (ii) the User Content is accurate and honest; (ii) use of the User
          Content does not breach any of Our policies or guidelines and will not
          cause injury to any person or entity iv) there is no conflict of
          interest in the User Content You publish on the Platform.
        </LegalP>
        <LegalP>
          In the event the User Content contains Personal Data of third parties,
          You represent and warrant that You shall ensure compliance with all
          applicable data protection laws relating to the collection and
          transmission of Personal Data as part of the User Content.
        </LegalP>
        <LegalP>
          You shall be responsible for any third-party Intellectual Property
          Rights infringement, loss, damage, destruction, and unlawful
          transmission of Personal data in violation of this section 3 and You
          acknowledge and agree that We shall have no liability for claims arising
          from Your failure to comply with this section 3.
        </LegalP>
      </LegalSection>

      <LegalSection title="4. VENDOR SERVICES">
        <LegalP>
          You acknowledge and agree that Your use of Vendor Services will be
          subject to the terms and conditions and privacy policies of such Vendors
          and that We shall not be liable for Your enablement, access, or use of
          such Vendor Services, including any data that is processed by such
          Vendors. We shall only be liable for Your data when it is being
          transmitted through Our Platform. You should contact that Vendor for
          any issues arising in connection with the use of such Vendor Service.
        </LegalP>
        <LegalP>
          You acknowledge that We are just a facilitator or a marketplace and do
          not have any control or do not determine or in any way involve Ourself
          in the offering or acceptance of any commercial/contractual terms
          between You and the Vendors.
        </LegalP>
        <LegalP>
          You are advised to independently verify the bona fides of any Vendor
          that you choose to deal with on the Platform and use your best judgment
          on that behalf. We do not represent or warrant the quality or value of
          the services offered by such Vendors. Any offer that is provided by
          the Vendors is subject to the terms and conditions of such Vendors and
          We shall not take any responsibility for such offers.
        </LegalP>
        <LegalP>
          At no time We shall hold any right, title, or interest over the products
          of the Vendors nor We shall have any obligations or liabilities in
          respect of such contract entered into between You and the Vendor.
        </LegalP>
        <LegalP>
          We are only providing the Platform for communication and it is agreed
          that the contract for the sale of any of the products or services shall
          be a strictly bipartite contract between You and the Vendor. The Vendor
          shall be solely liable for redressing their customer complaints. In the
          event You raise any complaint on any Vendor accessed using our
          Platform, We shall reasonably assist You by providing relevant
          information to You, such as details of the Vendor and the specific order
          to which the complaint relates.
        </LegalP>
      </LegalSection>

      <LegalSection title="5. ONLINE CONTENT:">
        <LegalP>
          Opinions, advice, statements, offers, or other information or content
          made available through the Platform, that are either from the Experts or
          Vendors or any other person but not directly by Us, are those of their
          respective authors, and We do not endorse the reliance on such contents.
          The authors of those contents are solely responsible for such content.
        </LegalP>
        <LegalP>
          We do not guarantee the accuracy, completeness, or usefulness of any of
          the curated materials on the Platform nor do we adopt nor endorse, nor
          are We responsible for the accuracy or reliability of any opinion,
          advice, or statements made by other parties. We take no responsibility
          and assume no liability for any User Content that You or any other
          third-party posts or sends via the Platform. Under no circumstances will
          we be responsible for any loss or damage resulting from anyone&apos;s
          reliance on information or other content posted on the Platform.
        </LegalP>
      </LegalSection>

      <LegalSection title="6. INTELLECTUAL PROPERTY RIGHTS:">
        <LegalP>
          All rights, title, and interest in and to all intellectual property
          and/or proprietary rights, title, and interest in or related to the
          Platform including patents, inventions, copyrights, trademarks, domain
          names, trade secrets, algorithms, techniques, processes or know-how
          (collectively, &ldquo;Intellectual Property Rights&rdquo;) shall belong
          to and remain exclusively with Us.
        </LegalP>
        <LegalP>
          You own the rights to the User Content You publish or post on the
          Platform. By posting User Content on Our Platform, You grant Us, a
          perpetual, worldwide, irrevocable, exclusive, royalty-free, and fully
          sub-licensable right to use, reproduce, translate, modify, create
          derivative works of, publicly display, communicate, and distribute
          (either electronically or via other media now known or hereafter devised)
          the User Content in the ordinary course of Our business.
        </LegalP>
        <LegalP>
          We shall have a perpetual, worldwide, transferable, and royalty-free
          right and license to incorporate into Platform or otherwise use any
          suggestions, enhancement requests, recommendations, or other feedback
          You choose to provide Us.
        </LegalP>
        <LegalP>All rights not expressly provided to You herein are reserved.</LegalP>
      </LegalSection>

      <LegalSection title="7. PAYMENT:">
        <LegalP>
          For availing certain features of the Platform You may be required to
          make a payment based on the pricing terms available on the Website, for
          each of such features. All the payments made are non-refundable. There
          will be no refunds for partial use of the feature of the Platform, or
          upgrade/downgrade refunds. You will not receive a refund for the
          non-use of any feature of the Platform already paid for.
        </LegalP>
      </LegalSection>

      <LegalSection title="8. TERMINATION">
        <LegalP>
          These Terms will remain in full force and effect as long as You access
          and/or use the Platform. We reserve the right, at Our sole discretion,
          to pursue all of its legal remedies, including but not limited to the
          removal of Your User Content and/or Your User Account from the Platform
          and immediate termination of Your ability to access the Platform, upon
          any breach by You of these Terms or if We are unable to verify or
          authenticate any information You submit towards registration with the
          Platform.
        </LegalP>
        <LegalP>
          <strong>Effect of Termination:</strong> Upon termination of Your User
          Account Your access and use of the Platform through the User Account
          shall cease.
        </LegalP>
      </LegalSection>

      <LegalSection title="9. CONFIDENTIALITY; SECURITY AND DATA PRIVACY">
        <LegalP>
          If You choose, or You are provided with, a user identification code,
          login, password, or any other piece of information as part of Our
          security procedures, You must treat such information as confidential.
          You must not disclose it to any third party. We have the right to
          disable any user identification code or password, whether chosen by You
          or allocated by Us, at any time, if in Our reasonable opinion, You have
          failed to comply with any of the provisions of these Terms. We will not
          be responsible for any activities, including any attempted or actual
          access or loss of data occurring under Your User Account as a result of
          Your non-compliance with Your obligations under this section.
        </LegalP>
        <LegalP>
          Each of the Parties will protect the other&apos;s Confidential
          Information from unauthorized use, access, or disclosure in the same
          manner as each of the Parties protects its own Confidential Information,
          and in any event, no less than reasonable care. Except as otherwise
          expressly permitted pursuant to the Terms, each of the Parties may use
          the other&apos;s Confidential Information solely to exercise its
          respective rights and perform its respective obligations under the Terms
          and shall disclose such Confidential Information solely to those of its
          respective employees, representatives, and agents who have a need to
          know such Confidential Information for such purposes and who are bound
          to maintain the confidentiality of, and not misuse such Confidential
          Information.
        </LegalP>
        <LegalP>
          You agree and acknowledge that We may collect and use query logs, and
          any data relating to the operation, support, and/or about Your use of
          the Platform (&ldquo;Usage Data&rdquo;) to develop, improve, support,
          and operate the Platform.
        </LegalP>
        <LegalP>
          The Personal Data that is provided to Us by You during the course of
          usage of the Platform, will be treated as strictly confidential and in
          accordance with Our Privacy Policy available at <PrivacyLink /> and
          applicable data protection laws and regulations.
        </LegalP>
      </LegalSection>

      <LegalSection title="10. INDEMNIFICATION:">
        <LegalP>
          You will indemnify and hold Us harmless against any claim brought by a
          third party against Us, and Our respective employees, officers,
          directors, and agents arising from Your acts or omissions i) violating
          any of the provisions of these Terms, ii) violating any applicable laws
          or rights of third parties provided that (i) We promptly notify You of
          the threat or notice of such a claim, (ii) You have or will have the
          sole and exclusive control and authority to select defense attorneys,
          defend and/or settle any such claim; and (iii) We fully cooperate with
          You in connection therewith. You will have no obligation or liability
          with respect to any such claim arising out of the gross negligence or
          willful misconduct of Us.
        </LegalP>
      </LegalSection>

      <LegalSection title="11. DISCLAIMER">
        <LegalP>
          PLATFORM INCLUDING THE WEBSITE, AND BLOGS, IS PROVIDED ON AN &ldquo;AS
          IS&rdquo; AND &ldquo;AS AVAILABLE&rdquo; BASIS. ALL EXPRESS OR IMPLIED
          REPRESENTATIONS AND WARRANTIES, INCLUDING ANY IMPLIED WARRANTY OF
          MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, OR NON-INFRINGEMENT,
          ARE HEREBY EXCLUDED.
        </LegalP>
        <LegalP>
          WE HAVE NO CONTROL OVER THE USER CONTENT OR THE GENUINITY OF THE USER
          CONTENT ON THE PLATFORM OFFERED BY THE VENDORS, YOU SHOULD TAKE AN
          APPROPRIATE DECISION BASED ON YOUR JUDGMENT, AND WE OR OUR AFFILIATES
          WILL NOT BE HELD LIABLE FOR ANY DECISION OF YOURS BASED ON THE USER
          CONTENTS ON THE PLATFORM.
        </LegalP>
        <LegalP>
          WE DO NOT OWN ANY OF THE PRODUCTS OR SERVICES LISTED ON THE PLATFORM.
          THE OWNERSHIP OF THE PRODUCTS OR SERVICES AS WELL AS THE ASSOCIATED
          INTELLECTUAL PROPERTY RIGHTS BELONG TO THE RESPECTIVE VENDOR ONLY.
        </LegalP>
        <LegalP>
          YOU ACKNOWLEDGE THAT WE DO NOT WARRANT THAT THE ACCESS TO THE PLATFORM,
          WHICH IS PROVIDED OVER THE INTERNET AND VARIOUS TELECOMMUNICATIONS
          NETWORKS, ALL OF WHICH ARE BEYOND OUR CONTROL, WILL BE UNINTERRUPTED,
          TIMELY, SECURE, ERROR-FREE, OR FREE FROM VIRUSES OR OTHER MALICIOUS
          SOFTWARE.
        </LegalP>
      </LegalSection>

      <LegalSection title="12. LIMITATION OF LIABILITY:">
        <LegalP>
          TO THE FULLEST EXTENT PERMITTED BY APPLICABLE LAW, IN NO EVENT WILL
          EITHER PARTY, ITS AFFILIATES, OFFICERS, DIRECTORS, EMPLOYEES, AGENTS,
          SUPPLIERS, OR LICENSORS BE LIABLE TO ANY PERSON FOR ANY INDIRECT,
          INCIDENTAL, SPECIAL, PUNITIVE, COVER, OR CONSEQUENTIAL DAMAGES
          (INCLUDING, WITHOUT LIMITATION, DAMAGES FOR LOST PROFITS, LOST REVENUE,
          LOST SALES, LOST GOODWILL, LOSS OF USE OR LOST CONTENT, BUSINESS
          INTERRUPTION) HOWEVER CAUSED, UNDER ANY THEORY OF LIABILITY, INCLUDING,
          WITHOUT LIMITATION, CONTRACT, TORT, WARRANTY, BREACH OF STATUTORY DUTY,
          NEGLIGENCE OR OTHERWISE, EVEN IF EITHER PARTY HAS BEEN ADVISED AS TO THE
          POSSIBILITY OF SUCH DAMAGES OR COULD HAVE FORESEEN SUCH DAMAGES. TO THE
          MAXIMUM EXTENT PERMITTED BY APPLICABLE LAW, OUR AGGREGATE LIABILITY AND
          THAT OF OUR AFFILIATES, OFFICERS, EMPLOYEES, AND AGENTS, RELATING TO THE
          PLATFORM, WILL BE LIMITED TO AN AMOUNT EQUAL TO THE CHARGES PAID BY YOU
          IN THE SIX (6) MONTHS PRECEDING THE CLAIM.
        </LegalP>
        <LegalP>
          IN JURISDICTIONS WHICH DO NOT PERMIT THE EXCLUSION OF IMPLIED WARRANTIES
          OR LIMITATION OF LIABILITY FOR INCIDENTAL OR CONSEQUENTIAL DAMAGES, OUR
          LIABILITY WILL BE LIMITED TO THE GREATEST EXTENT PERMITTED BY LAW.
        </LegalP>
      </LegalSection>

      <LegalSection title="13. MISCELLANEOUS">
        <LegalP>
          <strong>13.1 Relationship of the Parties:</strong> The Parties are
          independent contractors. These Terms do not create a partnership,
          franchise, joint venture, agency, fiduciary, or employment relationship
          among the Parties.
        </LegalP>
        <LegalP>
          <strong>13.2 Assignment:</strong> These Terms and any rights or
          obligations hereunder may not be assigned by You without Our prior
          written consent, whereas We can assign any of its rights and obligations
          hereunder without the Your prior written consent. These Terms bind and
          inures to the benefit of, the Parties and their respective successors
          and permitted assigns.
        </LegalP>
        <LegalP>
          <strong>13.3 Entire Agreement and Revisions:</strong> These Terms,
          including all schedules and online policies incorporated herein by
          reference, contain the entire agreement and understanding of the Parties
          and supersede all prior communications, discussions, negotiations,
          proposed agreements, and all other agreements between them, whether
          written or oral, concerning the subject matter herein. These Terms may
          be amended only by a written agreement of the parties and signed by the
          duly authorized agents of the parties.
        </LegalP>
        <LegalP>
          <strong>13.4 Force Majeure:</strong> Notwithstanding anything to the
          contrary contained elsewhere, We shall not be liable for the
          unavailability of the Platform caused by circumstances beyond Our
          reasonable control, such as but not limited to, acts of God, acts of
          government, acts of terror or civil unrest, technical failures beyond
          Our reasonable control, or acts undertaken by third parties, including
          without limitation, distributed denial of service attacks.
        </LegalP>
        <LegalP>
          <strong>13.5 Governing Law and Dispute Resolution:</strong> These Terms
          shall be governed by the laws of the Delaware, USA. Parties hereby
          expressly agree to submit to the exclusive personal jurisdiction of the
          courts in Wilmington, Delaware. Any dispute, claim, or controversy
          arising out of or relating to these Terms or the breach, termination,
          enforcement, interpretation, or validity thereof, including the
          determination of the scope or applicability of these Terms to arbitrate,
          shall be first settled by arbitration administered settled by the
          American Arbitration Association in accordance with its commercial
          arbitration rules (&ldquo;AAA Rules&rdquo;) and judgment on the award
          rendered by the arbitrator may be entered in any court having
          jurisdiction thereof. Subject to the foregoing, the courts in Delaware,
          USA shall have exclusive jurisdiction
        </LegalP>
        <LegalP>
          <strong>13.6 Notices and Consent to Electronic Communications:</strong>{" "}
          All notices to be provided by Us to You under these Terms may be
          delivered in writing via electronic mail to the e-mail address provided
          by You while registering. Our address for a notice to Us: (i) in writing
          by Courier is 447 Broadway New York 10013 or (ii) by electronic mail is
          contact@jazzhq.ai. All notices shall be deemed to have been given
          immediately upon delivery by electronic mail, or if otherwise delivered
          upon receipt or, if earlier, two (2) business days after being deposited
          in the mail or with a Courier as permitted above.
        </LegalP>
        <LegalP>
          <strong>13.7 Publicity Rights:</strong> You hereby grant Us a
          royalty-free, worldwide, transferable license to use Your trademark or
          logo to identify You as Our customer on Our Websites and/or marketing
          collateral and to include Your use of the Platform in case studies.
        </LegalP>
        <LegalP>
          <strong>13.8 Severability; No Waiver:</strong> If any provision in
          these Terms is held by a court of competent jurisdiction to be
          unenforceable, such provision shall be modified by the court and
          interpreted so as to best accomplish the original provision to the
          fullest extent permitted by applicable law, and the remaining provisions
          of these Terms shall remain in effect. Our non-exercise of any right
          under or provision of these Terms does not constitute a waiver of that
          right or provision.
        </LegalP>
        <LegalP>
          <strong>13.9 Survival:</strong> All clauses which, by their nature are
          intended to survive, including without limitation Clauses 7 (Intellectual
          Property Rights), 7 (Payment), 8.2 (Effect of termination), 9
          (Confidentiality; Security and Data Privacy;), 10 (Indemnification), 11
          (Disclaimer of Warranties), 12 (Limitation of Liability), 13
          (Miscellaneous) and 14 (Definitions) shall survive any termination of
          Our agreement with respect to use of the Platform by You. Termination
          shall not limit either Party&apos;s liability for obligations accrued as
          of or prior to such termination or for any breach of these Terms.
        </LegalP>
      </LegalSection>

      <LegalSection title="14. DEFINITIONS">
        <LegalP>
          When used in these Terms with the initial letters capitalized, in
          addition to terms defined elsewhere in these Terms, the following terms
          have the following meanings:
        </LegalP>
        <LegalDefinitionList items={TERMS_DEFINITIONS} />
        <LegalP>
          <strong>Logo use:</strong> All product and company names are trademarks
          or registered trademarks of their respective holders. Use of them does
          not imply any affiliation with or endorsement by them.
        </LegalP>
      </LegalSection>

      <LegalContactBlock
        company="JazzHQ."
        representative="Radhakrishnan Ramachandran"
        address="8 The Green, Ste A, Dover, DE 19901"
        email="contact@jazzhq.ai"
      />
    </>
  );
}
