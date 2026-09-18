import {
  LegalContactBlock,
  LegalDefinitionList,
  LegalLi,
  LegalOl,
  LegalP,
  LegalSection,
  LegalTable,
  LegalUl,
  TermsLink,
} from "@/components/legal/legal-document";

const PRIVACY_DEFINITIONS = [
  {
    term: "Account",
    definition:
      "means any account or instances created by the User, Vendor, Expert, or any other person for accessing and using the Platform.",
  },
  {
    term: "Controller",
    definition:
      "means the natural or legal person, public authority, agency, or other body which alone or jointly with others, determines the purposes and means of the processing of Personal Data.",
  },
  {
    term: "Content",
    definition:
      "means any reviews, recommendations, or updates on the products and services listed on the Platform or any other information published either by the User Vendor or Experts or any other authorized person on the Platform.",
  },
  {
    term: "Personal Data",
    definition:
      "means any information relating to an identified or identifiable natural person; an identifiable natural person is one who can be identified, directly or indirectly, in particular by reference to an identifier such as a name, an identification number, location data, an online identifier or to one or more factors specific to the physical, physiological, genetic, mental, economic, cultural or social identity of that natural person.",
  },
  {
    term: "Process/Processing",
    definition:
      "means any operation or set of operations which is performed on Personal Data or on sets of Personal Data, whether or not by automated means, such as collection, recording, organization, structuring, storage, adaptation or alteration, retrieval, consultation, use, disclosure by transmission, dissemination or otherwise making available, alignment or combination, restriction, erasure or destruction.",
  },
];

export function PrivacyPolicyContent() {
  return (
    <>
      <LegalP>
        This privacy policy (&ldquo;Policy&rdquo;) explains how JazzHQ Inc., or any
        of its affiliates or subsidiaries (&ldquo;We&rdquo;, &ldquo;Us&rdquo;,
        &ldquo;Our&rdquo;) Processes Personal Data collected from natural persons
        (&ldquo;You&rdquo;) as specified in clause 2 below, as a Controller.
      </LegalP>

      <LegalSection title="1. Definitions">
        <LegalP>
          Capitalized terms not specifically defined herein shall have the meaning
          ascribed thereto in the Terms.
        </LegalP>
        <LegalDefinitionList items={PRIVACY_DEFINITIONS} />
        <LegalP>
          <strong>Terms</strong> means the Terms of Use available at{" "}
          <TermsLink />.
        </LegalP>
      </LegalSection>

      <LegalSection title="2. HOW WE COLLECT, USE, AND SHARE YOUR PERSONAL DATA">
        <h3 className="legal-subsection__title">
          2.1 PERSONAL DATA THAT YOU DIRECTLY PROVIDE US
        </h3>
        <LegalTable
          headers={[
            "When You are a(n)",
            "What Personal Data We Collect",
            "How We use Your Personal Data",
            "Whom We share Your Personal Data with",
          ]}
          rows={[
            [
              "Individual who is provided with login credentials to sign in to their Account on the Platform",
              "Your contact information, such as Your full name, address, email address, phone number, and any other required sign-up information.",
              "Creation of an Account, verification of Your identity and help You log into the Platform. To communicate with You regarding the existing features of the Platform including any notifications of any alerts or updates. To send You information about other features of the Platform, events, webinars, or programs that may be of interest to You.",
              "Third-party partners who assist Us in onboarding You and providing Platform to You.",
            ],
            [
              "Individual who provides certain information to Us, while filling out a survey about their experience or feedback with respect to the Platform.",
              "Information You have provided as part of it.",
              "To improve the Platform. To send information about Our Platform, and any other marketing messages which may be of Your interest.",
              "Third parties who assist Us in providing these services.",
            ],
            [
              "Individual who contacts Us requesting additional information about any Vendor or Experts.",
              "Information You provide Us",
              "To connect You with the Vendor for procuring their products or services",
              "Vendors or Experts with whom You have asked to be connected with.",
            ],
            [
              "Individual who publishes any Content on the Platform",
              "Information You have provided as part of the Content",
              "To publicly display the Content on the Platform to help Users identify the appropriate Vendors suiting their needs. To assist our business partners or Vendors to improve their products and to understand the interests of their potential customers.",
              "Publicly display on the Platform, Vendors' website, or other social media platforms.",
            ],
            [
              "Individual who applies for an employment opportunity with Us",
              "Your contact information, such as full name, email address, mobile number, phone number; details of Your education and previous employment and any other information You volunteer, including during any interview or Your interactions with Us and contained in the resume that You submit to Us.",
              "To evaluate the position that You have applied for or that We may consider You at the time that You submitted Your resume or at a later date.",
              "Third parties whose products We use in maintaining a record of and evaluating You for the position applied. With external recruiters and organizations like those that do employee background checks on Our behalf.",
            ],
          ]}
        />

        <h3 className="legal-subsection__title">
          2.2 PERSONAL DATA THAT WE COLLECT NOT PROVIDED DIRECTLY BY YOU
        </h3>
        <LegalTable
          headers={[
            "When You are a(n)",
            "What Personal Data We Collect",
            "How We use Your Personal Data",
            "Whom We share Your Personal Data with",
          ]}
          rows={[
            [
              "Individual who visits the Website or has an Account",
              "Your usage of Our Websites or emails (such as Internet Protocol (IP) addresses browser type, Internet Service Provider (ISP), date and time stamp, referring/exit pages, and possibly the number of clicks or other identifiers. Your device type, and the operating system version. Your usage of the Platform, like types of content that you view or engage with, the features you use, the actions you take, and the time, frequency, and duration of your activities, some of which may qualify as Personal Data.",
              "As described in clause 8. To evaluate, develop and improve Platform. To protect Our data from threats, violations, and breaches if any. For market analysis, product analysis, and market research. To provide support in connection with Your queries. To inform, and promote the Platform to You.",
              "Third-party partners who assist Us in such Processing.",
            ],
            [
              "Individual whose information (a) third party sources share with Us without breach of any confidentiality clause and in accordance with applicable law; or (b) is available on public platforms.",
              "Information from such sources as applicable.",
              "To improve the Platform. To send information about Our Platform, and any other marketing messages which may be of Your interest. To update, expand, and analyse our records and create more tailored advertising to provide services that may be of interest to You",
              "Third party partners who assist Us in such Processing.",
            ],
          ]}
        />

        <LegalP>
          <strong>2.3.</strong> If You publish any Content on the Platform or
          provide Us with any Personal Data relating to other individuals, You
          represent that You have the authority to do so, and where required,
          have obtained the necessary consent, and acknowledge that it may be
          used in accordance with this Policy. If You believe that Your Personal
          Data has been provided to Us improperly, please contact Us by using
          the information in clause 11 below.
        </LegalP>

        <LegalP>
          <strong>2.4.</strong> In addition to the details provided in the table
          above, We may also share Your Personal Data with:
        </LegalP>
        <LegalOl>
          <LegalLi>
            an entity to which we divest all or a portion of Our business, or
            otherwise in connection with a merger, consolidation, change in
            control, reorganisation or liquidation of all or a portion of Our
            business.
          </LegalLi>
          <LegalLi>
            Law enforcement authorities, government authorities, courts, dispute
            resolution bodies, regulators, auditors, and any party appointed or
            requested by applicable regulators to carry out investigations or
            audits of Our activities.
          </LegalLi>
          <LegalLi>
            Professional advisors who advise and assist Us in enforcing Our
            contracts and policies, handling Our claims, effective management of
            Our company and in relation to any disputes We may become involved
            in.
          </LegalLi>
        </LegalOl>
      </LegalSection>

      <LegalSection title="3. LEGAL BASIS FOR PROCESSING (EEA REGION)">
        <LegalP>
          If You are a data subject from the European Economic Area, Our legal
          basis for collecting and using the Personal Data described above will
          depend on the Personal Data concerned and the specific context in which
          We collect it.
        </LegalP>
        <LegalP>
          We will normally collect Personal Data from You only where it is needed
          to perform a contract with You, where the Processing is in Our
          legitimate interests and not overridden by Your data protection
          interests or fundamental rights and freedoms, or where We have Your
          consent. In some cases, We may also have a legal obligation to collect
          Personal Data from You. If We Process Personal Data with reliance on
          Your consent, You may withdraw Your consent at any time.
        </LegalP>
        <LegalP>
          If You have questions or need further information concerning the legal
          basis on which We collect and use Your Personal Data, please contact Us
          using the contact details provided under clause 11.
        </LegalP>
      </LegalSection>

      <LegalSection title="4. INTERNATIONAL TRANSFER">
        <LegalP>
          We mainly Process Personal Data in the United States of America.
          However, We may transfer Personal Data outside the United States of
          America for the purposes referred to in clause 2. We will ensure that
          the recipient of Your Personal Data offers an adequate level of
          protection that is at least comparable to that which is provided under
          applicable data protection laws.
        </LegalP>
        <LegalP>
          If You are a resident of the European Economic Area and when Your
          Personal Data is Processed outside EEA, We will ensure that the
          recipient of Your Personal Data offers an adequate level of
          protection, for instance by entering into standard contractual clauses
          for the transfer of Personal Data as approved by the European Commission
          (Article 46 General Data Privacy Regulation, 2016), or We will ask You
          for Your prior consent to such international data transfers.
        </LegalP>
      </LegalSection>

      <LegalSection title="5. SECURITY OF PERSONAL DATA">
        <LegalP>
          We use appropriate technical and organizational measures to protect the
          Personal Data that We collect and Process. The measures We use are
          designed to provide a level of security appropriate to the risk of
          Processing Your Personal Data. If You have questions about the security
          of Your Personal Data, please contact Us using the contact details
          provided under clause 11.
        </LegalP>
      </LegalSection>

      <LegalSection title="6. RETENTION OF PERSONAL DATA">
        <LegalP>
          We retain Personal Data collected where an ongoing legitimate business
          requires retention of such Personal Data.
        </LegalP>
        <LegalP>
          In the absence of a need to retain Personal Data under clause 6.1 above,
          We will either delete it or aggregate it, or, if this is not possible
          then We will securely store Your Personal Data and isolate it from any
          further processing until deletion is possible.
        </LegalP>
      </LegalSection>

      <LegalSection title="7. YOUR RIGHTS">
        <LegalP>You are entitled to the following rights:</LegalP>
        <LegalUl>
          <LegalLi>You can request Us for access and correction of Your Personal Data.</LegalLi>
          <LegalLi>
            If We have collected and processed Your Personal Data with Your
            consent, then You can withdraw Your consent at any time. Withdrawing
            Your consent will not affect the lawfulness of any processing We have
            conducted prior to Your withdrawal, nor will it affect Processing of
            Your Personal Data conducted in reliance on lawful processing
            grounds other than consent.
          </LegalLi>
          <LegalLi>
            You have the right to complain to a data protection authority about
            Our collection and use of Your Personal Data. For more information,
            please contact Your local data protection authority as specified by
            the applicable data protection laws.
          </LegalLi>
          <LegalLi>
            You have the right to opt-out of marketing communications We send You
            at any time. You can exercise this right by clicking on the
            &ldquo;unsubscribe&rdquo; or &ldquo;opt-out&rdquo; link in the
            marketing e-mails We send You. To opt-out of other forms of marketing
            (such as postal marketing or telemarketing), please contact Us.
          </LegalLi>
        </LegalUl>
        <LegalP>
          If You are a resident of the EEA, UK, or Switzerland, You are also
          entitled to the following rights:
        </LegalP>
        <LegalUl>
          <LegalLi>You can request Us for the deletion and erasure of Your Personal Data.</LegalLi>
          <LegalLi>
            You can object to the Processing of Your Personal Data, ask Us to
            restrict Processing of Your Personal Data or request portability of
            Your Personal Data.
          </LegalLi>
        </LegalUl>
        <LegalP>
          If You seek to exercise Your rights under this clause, please contact Us
          at the details provided in clause 11. We will verify any requests before
          acting on the request and respond to all requests We receive from
          individuals wishing to exercise their data protection rights within a
          reasonable timeframe in accordance with applicable data protection laws.
        </LegalP>
      </LegalSection>

      <LegalSection title="8. COOKIE POLICY">
        <LegalP>
          Cookies are text files that are placed on Your computer to collect
          standard internet log information and visitor behaviour information by
          Us. When You visit the Website(s), We may collect Personal Data
          automatically from You through cookies or similar technology. We also set
          cookies to collect information that is used either in aggregate form to
          help Us understand how Our Website(s) is being used or how effective Our
          marketing campaigns are, to help customise the Website(s) for You or to
          make advertising messages more relevant to You.
        </LegalP>
        <LegalP>
          <strong>Essential Cookies:</strong> We set essential cookies that enable
          core functionality such as security, network management, and
          accessibility. You may not opt-out of these cookies. However, You may
          disable these by changing Your browser settings, but this may affect how
          the Website(s) functions.
        </LegalP>
        <LegalP>
          <strong>Analytics, Customisation and Advertising Cookies:</strong> We set
          these cookies to help Us improve Our Website(s) by collecting and
          reporting information on how You use it. The cookies collect information
          in a way that does not directly identify anyone.
        </LegalP>
        <LegalP>
          When You visit the Website(s), a cookie banner will be displayed
          providing additional information about cookies and options to opt out of
          non-essential cookies as required by applicable laws.
        </LegalP>
      </LegalSection>

      <LegalSection title="9. PRIVACY OF CHILDREN">
        <LegalP>
          We recognize the importance of children&apos;s safety and privacy. We
          do not request, or knowingly collect, any Personal Data from children
          under the age of 18. If a parent or guardian becomes aware that his or
          her child has provided Us with Personal Data, they should write to Us at
          the email address provided in clause 11.
        </LegalP>
      </LegalSection>

      <LegalSection title="10. NOTICE TO USERS AND OTHER EXCLUSIONS">
        <LegalP>
          We shall not be responsible for any Personal Data of Users that is not
          directly collected by Us. For Personal Data of Users that are collected
          by Vendors on their website, that Vendor is the Controller of such
          Personal Data. For any data privacy questions related to the Personal
          Data shared with the Vendor, the Users need to directly contact such
          Vendor. We are not responsible for Vendor&apos;s privacy or security
          practices or the data retention period which may be different from this
          Policy. Vendors are solely responsible for establishing policies for
          and ensuring compliance with all applicable laws and regulations, as
          well as any and all privacy policies, agreements, or other obligations,
          relating to the collection of Personal Data from the Users.
        </LegalP>
        <LegalP>
          If You publish Content on the Platform, it will be publicly available on
          and off the Website. If You leave a review on the Platform or
          participate on a discussion board, Your review(s) or comments will be
          publicly available on and off of the Website. Submitting Content is
          entirely voluntary.
        </LegalP>
        <LegalP>
          When You log on to Platform using the online sign-on services, the social
          network platform may provide Us with access to certain information that
          You have provided them, the collection, use, and disclosure of Your
          Personal Data by these social networks shall be governed by the policies
          of such social networks and We shall have no liability or responsibility
          over their actions.
        </LegalP>
        <LegalP>
          Our Website(s) contain links to other Websites. Our Policy applies only
          to Our Website(s), so if You click on a link to another Website, You
          should read their privacy policy. We encourage You to review the privacy
          statements of any such other Websites to understand their Personal Data
          practices.
        </LegalP>
      </LegalSection>

      <LegalSection title="11. CONTACT INFORMATION">
        <LegalP>
          You may contact Us if You have any enquiries or feedback on Our data
          protection policies and procedures, or if You wish to make any request,
          in the following manner:
        </LegalP>
        <LegalP>Kind Attention: Radhakrishnan Ramachandran</LegalP>
        <LegalP>
          Email Address:{" "}
          <a href="mailto:Krish@jazzhq.ai" className="legal-link">
            Krish@jazzhq.ai
          </a>
        </LegalP>
        <LegalP>Address: 8 The Green, Ste A, Dover, DE 19901</LegalP>
      </LegalSection>

      <LegalSection title="12. CHANGES TO THE POLICY">
        <LegalP>
          Please come back and check for any updates to this Policy. If there are
          any material changes to this Policy We shall notify You or shall post a
          notice of the update on Our Website.
        </LegalP>
      </LegalSection>
{/* 
      <LegalContactBlock
        company="JazzHQ."
        representative="Radhakrishnan Ramachandran"
        address="8 The Green, Ste A, Dover, DE 19901"
        email="Krish@jazzhq.ai"
      /> */}
    </>
  );
}
