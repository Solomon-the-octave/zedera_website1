/* ============================================================
   IMAGERY

   Every slot resolves in this order:

     1. a local file in  public/images/   <- put real Zedera photos here
     2. the stock URL below              <- placeholder, replace when you can
     3. the drawn artwork fallback        <- always renders, never breaks

   So you can drop `public/images/office.jpg` into the project and it
   takes over that slot immediately, with no code change. Until then the
   stock photo shows; if that fails to load, the line drawing shows.

   TO USE YOUR OWN PHOTOS
   ----------------------
   Save them into  public/images/  using exactly these names:

     office.jpg     the team at work, wide shot, landscape
     team.jpg       the team together, landscape
     desk.jpg       close detail: screens, code, a working desk
     case-1.jpg     imagery for the first case study
     case-2.jpg     ...second
     case-3.jpg     ...third
     case-4.jpg     ...fourth

   Landscape, at least 1600px wide, and compressed (aim under 300KB each).

   ⚠️  The stock URLs are unverified placeholders. Swap them for real
   photography of the team and the work before launch; stock photos of
   other people's offices undercut the credibility the rest of the site
   is working to build.
   ============================================================ */

export type ImageSlot = {
  /** candidate sources, tried in order */
  srcs: string[];
  alt: string;
  /** shown under the image where a caption is wanted */
  caption?: string;
};

const stock = (id: string, w = 1600) =>
  `https://images.unsplash.com/${id}?auto=format&fit=crop&w=${w}&q=70`;

export const IMAGES: Record<string, ImageSlot> = {
  office: {
    srcs: ["/images/office.jpg", stock("photo-1497366754035-f200968a6e72")],
    alt: "The Zedera team working in the studio",
    caption: "The studio, Addis Ababa",
  },
  team: {
    srcs: ["/images/team.jpg", stock("photo-1522071820081-009f0129c71c")],
    alt: "Zedera engineers and designers reviewing work together",
    caption: "Delivery review",
  },
  desk: {
    srcs: ["/images/desk.jpg", stock("photo-1461749280684-dccba630e2f6")],
    alt: "A developer workstation with code on screen",
    caption: "Build in progress",
  },
  case1: {
    srcs: ["/images/case-1.jpg", stock("photo-1560518883-ce09059eeffa", 1200)],
    alt: "Property listings on screen",
  },
  case2: {
    srcs: ["/images/case-2.jpg", stock("photo-1524178232363-1fb2b075b655", 1200)],
    alt: "A training session in progress",
  },
  case3: {
    srcs: ["/images/case-3.jpg", stock("photo-1500937386664-56d1dfef3854", 1200)],
    alt: "Farmland under cultivation",
  },
  case4: {
    srcs: ["/images/case-4.jpg", stock("photo-1450101499163-c8848c66ca85", 1200)],
    alt: "Documents and paperwork on a desk",
  },
};

export const CASE_IMAGE_KEYS = ["case1", "case2", "case3", "case4"];
