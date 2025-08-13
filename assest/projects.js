export const projects = [
  {
    slug: "eyeopener",
    title: "EyeOpener",
    subtitle: "WWDC25 Distinguished Winner 🏆",
    description: "A teaching experience that shows how turning VoiceOver on changes difficulty and empathy.",
    longDescription: "EyeOpener helps sighted developers feel the friction of non‑accessible UI. Tasks are intentionally hard without VoiceOver, then repeat with VoiceOver enabled to demonstrate proper semantics and focus order.",
    hero: "assest/EyeopenerIcon.png",
    status: { label: "App", variant: "" },
    features: [
      "Tasks with and without VoiceOver",
      "Live narration and haptic guidance",
      "SwiftUI • AVFoundation • MVVM"
    ],
    role: "Designed the flows and built the accessibility tasks using SwiftUI and MVVM.",
    screens: [
      "assest/AppScreenshot - 1.PNG",
      "assest/AppScreenshot - 2.PNG",
      "assest/AppScreenshot - 3.PNG"
    ],
    extra: "Built for developers to build empathy first, then ship accessible UI.",
    links: [{ label: "WWDC Scholars", href: "#" }],
    badges: ["SwiftUI", "Accessibility", "Haptics"]
  },
  {
    slug: "sandsound",
    title: "Sand Sound",
    subtitle: "Audio‑only game for everyone",
    description: "Audio‑only game designed for blind and visually impaired players.",
    longDescription: "Navigate a pitch‑dark desert using 3D sound and haptics across three lanes, avoiding obstacles and learning via an in‑story tutorial.",
    hero: "assest/sand-sound.png",
    status: { label: "App Store", variant: "app-store" },
    features: [
      "3‑lane swipe navigation guided by 3D positional audio",
      "Obstacle cues with Core Haptics",
      "Narrative tutorial that blends story and gameplay"
    ],
    role: "Implemented lane logic, obstacle interactions, and the audio feedback system in SwiftUI using MVVM.",
    screens: [
      "assest/sandSoundScreen.PNG",
      "assest/sandSoundScreen2.PNG"
    ],
    extra: "Coming soon — meanwhile, the game is available on the App Store.",
    links: [{ label: "App Store", href: "#" }],
    badges: ["3D Audio", "Haptics", "Swift"]
  },
  {
    slug: "ayen",
    title: "AYEN",
    subtitle: "Online multiplayer party game",
    description: "Electronic version of the popular ‘اكفش’ (AYEN) with real‑time multiplayer.",
    longDescription: "Fast rounds, host‑generated center images for fairness, and roles (host/waiting). Waiting Room matches a custom Arabic UI with radial gradients, styled room code and circular player icons.",
    hero: "assest/ayenIcon.png",
    status: { label: "In Development", variant: "" },
    features: [
      "2–4 player online multiplayer",
      "Host‑controlled image generation",
      "Custom Arabic UI • Radial gradient background"
    ],
    role: "Front‑end and back‑end implementation, real‑time sync, and game state logic.",
    screens: [
      "assest/ayenScreen.PNG",
    
    ],
    links: [{ label: "Read more", href: "#" }],
    badges: ["SwiftUI", "Multiplayer", "Game"]
  },
  {
    slug: "wed",
    title: "Wed",
    subtitle: "AI‑powered gift recommendations",
    description: "Suggests gifts based on recipient, occasion, relationship and budget.",
    longDescription: "Users save loved ones’ profiles; the AI personalizes suggestions over time. Includes CloudKit data, CreateML models, and an Occasion Reminder.",
    hero: "assest/wedicon.png",
    status: { label: "Prototype", variant: "" },
    features: [
      "Saved profiles with preferences",
      "Occasion reminders",
      "CreateML • CloudKit • SwiftUI"
    ],
    role: "iOS app architecture (MVVM), model integration and CloudKit data schema.",
    screens: [
      "assest/wedScreen.png",
      "assest/wedScreen2.PNG"
    ],
    links: [{ label: "Project Page", href: "#" }],
    badges: ["AI", "Swift", "CloudKit"]
  },
  {
    slug: "clarity",
    title: "Clarity",
    subtitle: "Decision‑making assistant",
    description: "Structured Q&A + AI analysis to help users make better decisions.",
    longDescription: "Collects context via guided questions, analyzes trade‑offs, and presents pros/cons with confidence indicators and visual progress rings.",
    hero: "assest/clarityIcon.png",
    status: { label: "Prototype", variant: "" },
    features: [
      "Guided questions (Q&A)",
      "AI scoring and rationale",
      "Animated percentage rings"
    ],
    role: "UI flows, Cohere/Claude integration, SwiftData persistence and animations.",
    screens: [
      "assest/clarityScreen.jpeg"
    ],
    links: [{ label: "Demo", href: "#" }],
    badges: ["AI", "SwiftUI", "SwiftData"]
  },
  {
    slug: "tanklock",
    title: "Tanklock",
    subtitle: "Blockchain fuel payment",
    description: "Smart‑contract based pre‑authorization and exact‑amount charging at gas stations.",
    longDescription: "Wallet balance verified before fueling; charges settle automatically after the dispenser stops. Supports full‑tank and balance‑based fueling with QR/NFC.",
    hero: "assest/tanklockIcon.png",
    status: { label: "Hackathon MVP", variant: "" },
    features: [
      "Pre‑auth via smart contract",
      "QR/NFC station pairing",
      "Transparent ledger & fraud prevention"
    ],
    role: "Smart‑contract design, iOS client, and pitch materials (problem, market, and tech).",
    screens: [

        "assest/tankLockScreen.png"
    ],
    links: [{ label: "Pitch", href: "#" }],
    badges: ["Blockchain", "Smart Contracts", "iOS"]
  }
];