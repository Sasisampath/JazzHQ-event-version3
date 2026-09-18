import {
  HowItWorksHeaderIcon,
  HowItWorksStepApplyIcon,
  HowItWorksStepApprovedIcon,
  HowItWorksStepCloseDealsIcon,
  HowItWorksStepEarnCommissionIcon,
  HowItWorksStepRegisterLeadsIcon,
  HowItWorksStepTrainingIcon,
} from "@/features/marketplace/helper/marketplaceIcons";
import type { ComponentType, SVGProps } from "react";

type StepIconProps = SVGProps<SVGSVGElement> & {
  size?: number;
  className?: string;
};

const STEPS: {
  label: string;
  Icon: ComponentType<StepIconProps>;
}[] = [
  { label: "Apply", Icon: HowItWorksStepApplyIcon },
  { label: "Get Approved", Icon: HowItWorksStepApprovedIcon },
  { label: "Training", Icon: HowItWorksStepTrainingIcon },
  { label: "Register Leads", Icon: HowItWorksStepRegisterLeadsIcon },
  { label: "Close Deals", Icon: HowItWorksStepCloseDealsIcon },
  { label: "Earn Commission", Icon: HowItWorksStepEarnCommissionIcon },
];

export function HowItWorks() {
  return (
    <section className="marketplace-how-it-works">
      <div className="marketplace-how-it-works__layout">
        <div className="marketplace-how-it-works__header-icon" aria-hidden="true">
          <HowItWorksHeaderIcon size={34} />
        </div>

        <div className="marketplace-how-it-works__content">
          <h2 className="marketplace-how-it-works__title">
            <span className="marketplace-how-it-works__title-accent">How</span> It Works
          </h2>

          <div className="marketplace-how-it-works__timeline-wrap">
            <div className="marketplace-how-it-works__steps">
              {STEPS.map(({ label, Icon }) => (
                <div key={label} className="marketplace-how-it-works__step">
                  <div className="marketplace-how-it-works__icon-wrap">
                    <Icon className="marketplace-how-it-works__icon" />
                  </div>
                  <p className="marketplace-how-it-works__label">{label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
