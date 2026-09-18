"use client";

type FilloutEmbedProps = {
  formId: string;
};

export function FilloutEmbed({ formId }: FilloutEmbedProps) {
  return (
    <div className="onboarding-fillout__embed">
      <iframe
        key={formId}
        src={`https://embed.fillout.com/t/${formId}?fillout-embed-type=standard&fillout-embed-dynamic-resize=true`}
        title="JazzHQ form"
        className="onboarding-fillout__iframe"
        allow="camera; microphone; geolocation"
      />
    </div>
  );
}
