import { OnboardingFormPage } from "@/components/onboarding/onboarding-form-page";
import { SPONSOR_EVENTS_PAGE } from "@/data/onboarding";
import { SPONSOR_ID } from "../data/anchors";

/**
 * Figma form section: centred heading over the existing onboarding layout
 * (1100px, card video left, Fillout form right). No second form.
 */
export function SponsorContact() {
  return (
    <section
      id={SPONSOR_ID}
      aria-label="Become a Sponsor"
      className="jc-sponsor-form scroll-mt-24"
    >
      <OnboardingFormPage config={SPONSOR_EVENTS_PAGE} />
    </section>
  );
}
