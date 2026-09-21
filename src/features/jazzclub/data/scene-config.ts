/**
 * Layout + timing for the cinematic Jazzclub hero.
 *
 * Every image referenced here is an ARCHIVE photograph from a previous
 * JazzHQ/Jazzclub gathering. They carry no city meaning and must never be
 * labelled as Bengaluru, Chennai, Mumbai or Hyderabad. Event artwork lives in
 * `events.ts` and is used only by the event explorer.
 *
 * V3: every photo is a STANDARD card — identical width, height, aspect,
 * corner radius, radius from the axis and height on the ring. Source images
 * are cropped to fill the card (object-fit: cover), never stretched.
 */

export type PhotoPlaneConfig = {
  id: string;
  /** Base slug — the `-sm` variant is used on small screens. */
  slug: string;
  /** FINAL angle on the ring, radians. PI = dead ahead of the camera. */
  angle: number;
  /**
   * INTRO transform, authored per card (deterministic, never random).
   * The card starts floating ahead of the viewer — farther down the view
   * axis, pulled toward the centre, facing the camera with a slight tilt —
   * and travels toward the viewer while turning into its final ring slot.
   */
  intro: {
    /** Extra lateral offset at the start, world units. */
    x: number;
    /** Vertical offset at the start, world units. */
    y: number;
    /** How far ahead (down -Z) of its final slot the card starts. */
    depth: number;
    /** Extra tilt on top of "facing the camera", radians. */
    rotY: number;
    rotZ: number;
    /** Starting scale (final scale is 1). */
    scale: number;
    /** Start delay, seconds — a subtle, coordinated stagger. */
    delay: number;
  };
  /** Phase offset so the tiny idle drift never looks synchronised. */
  driftSeed: number;
};

export type SceneConfig = {
  planes: PhotoPlaneConfig[];
  /** Standard card size in world units. Identical for every photo. */
  card: { width: number; height: number; cornerRadius: number };
  /** Radius of the ring. Identical for every photo. */
  ringRadius: number;
  camera: {
    fov: number;
    /** z where the intro begins — slightly farther back. */
    startZ: number;
    /** Final resting z. The camera never moves again after this. */
    endZ: number;
  };
  timing: {
    /** Each card's approach duration (after its own delay). */
    cardDuration: number;
    /** Camera approach duration. */
    cameraDuration: number;
    /** Plaque begins settling. */
    plaqueStart: number;
    /** Everything is final; idle motion and interaction begin. */
    settleEnd: number;
    /** Skip: quick settle from wherever the intro is to the final state. */
    skipDuration: number;
  };
  /** Radians per second for the whole ring once settled. Deliberately tiny. */
  idleSpin: number;
};

/** width / height of every cinematic card. */
export const CARD_ASPECT = 4 / 5;

/**
 * Authored intro offsets, cycled around the ring. Each card starts a little
 * deeper / offset / turned and settles into its final slot — varied, never
 * random, and always toward a predefined final transform.
 */
const INTRO_PATTERN: Omit<PhotoPlaneConfig["intro"], "delay">[] = [
  { x: -0.6, y: 1.5, depth: 9, rotY: 0.12, rotZ: -0.04, scale: 0.92 },
  { x: 0.5, y: -1.7, depth: 7, rotY: -0.1, rotZ: 0.05, scale: 0.9 },
  { x: -0.3, y: 2.0, depth: 10.5, rotY: 0.14, rotZ: 0.03, scale: 0.94 },
  { x: 0.7, y: -0.9, depth: 8, rotY: -0.12, rotZ: -0.05, scale: 0.9 },
  { x: -0.8, y: -1.9, depth: 9.5, rotY: 0.1, rotZ: 0.04, scale: 0.92 },
  { x: 0.4, y: 1.1, depth: 8.5, rotY: -0.14, rotZ: -0.03, scale: 0.91 },
];

/** Stagger between neighbouring cards, seconds (centre card first). */
const STAGGER = 0.05;

function ring(slugs: string[], prefix: string, travel: number) {
  const step = (Math.PI * 2) / slugs.length;
  return slugs.map<PhotoPlaneConfig>((slug, i) => {
    const pattern = INTRO_PATTERN[i % INTRO_PATTERN.length];
    // Cards nearest the viewer's centre move first, then outward both ways,
    // so the ring assembles as one movement rather than a queue.
    const rank = Math.min(i, slugs.length - i);
    return {
      id: `${prefix}${i + 1}`,
      slug,
      angle: Math.PI + i * step,
      intro: {
        ...pattern,
        x: pattern.x * travel,
        y: pattern.y * travel,
        depth: pattern.depth * travel,
        delay: rank * STAGGER,
      },
      driftSeed: i * 1.37,
    };
  });
}

// room-12 (DSC02556) is deliberately excluded from the archive ring.
const DESKTOP_SLUGS = [
  "room-01", "room-02", "room-03", "room-04", "room-05", "room-06",
  "room-07", "room-08", "room-09", "room-10", "room-11", "room-13",
];

const MOBILE_SLUGS = [
  "room-01", "room-02", "room-03", "room-04", "room-05",
  "room-06", "room-07", "room-08", "room-09",
];

const DESKTOP_CARD_HEIGHT = 3.3;
const MOBILE_CARD_HEIGHT = 2.9;

export const DESKTOP_SCENE: SceneConfig = {
  planes: ring(DESKTOP_SLUGS, "d", 1),
  card: {
    width: DESKTOP_CARD_HEIGHT * CARD_ASPECT,
    height: DESKTOP_CARD_HEIGHT,
    cornerRadius: 0.12,
  },
  ringRadius: 6.9,
  camera: { fov: 50, startZ: 4.2, endZ: 2.2 },
  timing: {
    cardDuration: 2.1,
    cameraDuration: 2.3,
    plaqueStart: 1.2,
    settleEnd: 2.45,
    skipDuration: 0.22,
  },
  idleSpin: 0.034,
};

export const MOBILE_SCENE: SceneConfig = {
  planes: ring(MOBILE_SLUGS, "m", 0.7),
  card: {
    width: MOBILE_CARD_HEIGHT * CARD_ASPECT,
    height: MOBILE_CARD_HEIGHT,
    cornerRadius: 0.1,
  },
  ringRadius: 5.2,
  camera: { fov: 58, startZ: 3.6, endZ: 2.5 },
  timing: {
    cardDuration: 1.95,
    cameraDuration: 2.1,
    plaqueStart: 1.1,
    settleEnd: 2.25,
    skipDuration: 0.2,
  },
  idleSpin: 0.026,
};

/** Path to the optimized archive photo for a given breakpoint. */
export function photoSrc(slug: string, isMobile: boolean) {
  return `/assets/jazzclub/cinematic/${slug}${isMobile ? "-sm" : ""}.webp`;
}
