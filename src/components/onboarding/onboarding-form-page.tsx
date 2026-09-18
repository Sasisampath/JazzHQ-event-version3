import type { ComponentType } from "react";
import type {
  OnboardingField,
  OnboardingFieldIcon,
  OnboardingPageConfig,
} from "@/data/onboarding";
import {
  BuildingIcon,
  ChevronDownIcon,
  DocumentIcon,
  GlobeIcon,
  LinkIcon,
  MailIcon,
  ShieldIcon,
  UserIcon,
} from "@/components/onboarding/onboarding-icons";
import { FilloutEmbed } from "@/components/onboarding/fillout-embed";
import { OnboardingCardVideo } from "@/components/onboarding/onboarding-card-video";

const FIELD_ICONS: Record<
  OnboardingFieldIcon,
  ComponentType<{ className?: string }>
> = {
  user: UserIcon,
  mail: MailIcon,
  building: BuildingIcon,
  link: LinkIcon,
  globe: GlobeIcon,
  document: DocumentIcon,
};

function OnboardingFieldControl({ field }: { field: OnboardingField }) {
  const Icon = FIELD_ICONS[field.icon];
  const label = `${field.label}${field.required ? "*" : ""}`;

  if (field.type === "textarea") {
    return (
      <div className="onboarding-field onboarding-field--textarea">
        <label className="onboarding-field__label onboarding-field__label--above" htmlFor={field.id}>
          <Icon className="onboarding-field__label-icon" />
          {label}
        </label>
        <textarea
          id={field.id}
          name={field.id}
          className="onboarding-field__textarea"
          placeholder={field.placeholder}
          rows={3}
        />
      </div>
    );
  }

  if (field.type === "select") {
    return (
      <div className="onboarding-field">
        <div className="onboarding-field__control">
          <Icon className="onboarding-field__icon" />
          <select
            id={field.id}
            name={field.id}
            className="onboarding-field__select"
            defaultValue=""
            required={field.required}
          >
            {field.options?.map((option) => (
              <option key={option.value} value={option.value} disabled={!option.value}>
                {option.label}
              </option>
            ))}
          </select>
          <label className="onboarding-field__label" htmlFor={field.id}>
            {label}
          </label>
          <ChevronDownIcon className="onboarding-field__chevron" />
        </div>
      </div>
    );
  }

  return (
    <div className="onboarding-field">
      <div className="onboarding-field__control">
        <Icon className="onboarding-field__icon" />
        <input
          id={field.id}
          name={field.id}
          type={field.type}
          className="onboarding-field__input"
          placeholder=" "
          required={field.required}
        />
        <label className="onboarding-field__label" htmlFor={field.id}>
          {label}
        </label>
      </div>
    </div>
  );
}

function groupFields(fields: OnboardingField[]) {
  const groups: OnboardingField[][] = [];

  for (let index = 0; index < fields.length; index += 1) {
    const field = fields[index];
    const next = fields[index + 1];

    if (field.half && next?.half) {
      groups.push([field, next]);
      index += 1;
      continue;
    }

    groups.push([field]);
  }

  return groups;
}

export function OnboardingFormPage({ config }: { config: OnboardingPageConfig }) {
  const fieldGroups = groupFields(config.fields ?? []);
  const usesFillout = Boolean(config.filloutId);

  return (
    <section className="onboarding-page onboarding-page--compact page-section">
      <div className="onboarding-page__shell">
        <header className="onboarding-form__header onboarding-page__header">
          <h1 className="onboarding-form__title">{config.formTitle}</h1>
          <p className="onboarding-form__subtitle">{config.formSubtitle}</p>
        </header>

        <div className="onboarding-page__body">
          <div className="onboarding-page__layout">
          <aside
            className="onboarding-card"
            style={{ backgroundColor: config.cardBackground }}
          >
            <OnboardingCardVideo videoId={config.videoId} />
            <h2 className="onboarding-card__heading">{config.cardHeading}</h2>

            <ul className="onboarding-card__list">
              {config.highlights.map((item) => (
                <li key={item.highlight} className="onboarding-card__list-item">
                  <p className="onboarding-card__list-text">
                    {item.before}
                    <span style={{ color: config.highlightColor }}>{item.highlight}</span>
                  </p>
                </li>
              ))}
            </ul>
          </aside>

          <div className="onboarding-form">
            {usesFillout ? (
              <div className="onboarding-fillout">
                <FilloutEmbed formId={config.filloutId!} />
              </div>
            ) : (
              <>
                <form className="onboarding-form__fields" action="#" method="post">
                  {fieldGroups.map((group) =>
                    group.length === 2 ? (
                      <div key={`${group[0].id}-${group[1].id}`} className="onboarding-form__row">
                        <OnboardingFieldControl field={group[0]} />
                        <OnboardingFieldControl field={group[1]} />
                      </div>
                    ) : (
                      <OnboardingFieldControl key={group[0].id} field={group[0]} />
                    ),
                  )}

                  <button
                    type="submit"
                    className={`onboarding-form__submit ${config.submitClass}`}
                  >
                    {config.submitLabel}
                  </button>
                </form>

                <p className="onboarding-form__trust">
                  <ShieldIcon className="onboarding-form__trust-icon" />
                  JazzHQ is a verified network. All credentials are fully audited.
                </p>
              </>
            )}
          </div>
          </div>
        </div>
      </div>
    </section>
  );
}
