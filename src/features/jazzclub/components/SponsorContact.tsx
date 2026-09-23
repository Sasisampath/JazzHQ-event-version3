import { OnboardingFormPage } from "@/components/onboarding/onboarding-form-page";
import { SPONSOR_EVENTS_PAGE } from "@/data/onboarding";
import { SPONSOR_ID } from "../data/anchors";

/**
 * The page's conversion point: the existing JazzHQ onboarding experience
 * (card video on the left, Fillout form on the right) with sponsor copy.
 * No second form implementation.
 */
export function SponsorContact() {
  return (
    <section
      id={SPONSOR_ID}
      aria-label="Become a sponsor"
      className="jc-section--light scroll-mt-24 pb-4 pt-16 sm:pt-20"
    >
      <OnboardingFormPage config={SPONSOR_EVENTS_PAGE} />
    </section>
  );
}
