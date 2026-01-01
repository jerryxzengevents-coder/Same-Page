export type Question = {
  id: string;
  level: number;
  text: string;
};

function makeId(level: number, slug: string) {
  return `l${level}-${slug}`;
}

export const QUESTIONS: Question[] = [
  // Level 1
  {
    id: makeId(1, "first-date-success"),
    level: 1,
    text: "What usually makes a first date feel successful to you?",
  },
  {
    id: makeId(1, "texting-normal"),
    level: 1,
    text: "How much texting feels “normal” to you early on?",
  },
  {
    id: makeId(1, "dating-feel"),
    level: 1,
    text: "Do you enjoy dating, or does it feel like a chore?",
  },
  {
    id: makeId(1, "misunderstood"),
    level: 1,
    text: "What’s something people often misunderstand about you?",
  },
  {
    id: makeId(1, "checking-in"),
    level: 1,
    text: "Do you like checking in daily, or giving each other space?",
  },
  {
    id: makeId(1, "meet-people"),
    level: 1,
    text: "How do you usually meet people you date?",
  },
  {
    id: makeId(1, "dating-apps"),
    level: 1,
    text: "How do you feel about dating apps overall?",
  },
  {
    id: makeId(1, "effort-early"),
    level: 1,
    text: "How much effort do you expect early on?",
  },
  {
    id: makeId(1, "plans-or-spontaneity"),
    level: 1,
    text: "Plans or spontaneity?",
  },
  {
    id: makeId(1, "timing"),
    level: 1,
    text: "Are you early, on time, or fashionably late?",
  },
  {
    id: makeId(1, "feel-appreciated"),
    level: 1,
    text: "What’s something small that makes you feel appreciated?",
  },
  {
    id: makeId(1, "epstein-files"),
    level: 1,
    text: "Epstein files?",
  },
  {
    id: makeId(1, "charlie-kirk"),
    level: 1,
    text: "Charlie kirk?",
  },
  {
    id: makeId(1, "cuff-links"),
    level: 1,
    text:
      "The woman who gave her fiance cuff links, even though he hates jewelry.",
  },
  {
    id: makeId(1, "ice"),
    level: 1,
    text: "ICE?",
  },
  {
    id: makeId(1, "palestine"),
    level: 1,
    text: "Palestine?",
  },
  {
    id: makeId(1, "dog-food-wife"),
    level: 1,
    text: "What’s your take on the “dog food wife” discourse?",
  },
  {
    id: makeId(1, "perform-relationships"),
    level: 1,
    text: "Do you think people perform relationships online?",
  },
  {
    id: makeId(1, "doing-it-for-the-plot"),
    level: 1,
    text: "What does “doing it for the plot” mean to you in dating?",
  },
  {
    id: makeId(1, "gun-control"),
    level: 1,
    text: "Gun control?",
  },
  {
    id: makeId(1, "advice-online"),
    level: 1,
    text: "Do you think relationship advice online helps or ruins expectations?",
  },
  {
    id: makeId(1, "dating-discourse"),
    level: 1,
    text: "Do you think dating discourse online is too extreme?",
  },
  {
    id: makeId(1, "internet-culture"),
    level: 1,
    text: "How much should internet culture influence real relationships?",
  },
  {
    id: makeId(1, "if-they-wanted"),
    level: 1,
    text: "Do you believe in “if they wanted to, they would”?",
  },
  {
    id: makeId(1, "trump"),
    level: 1,
    text: "Trump…",
  },
  {
    id: makeId(1, "disagree-online-take"),
    level: 1,
    text: "What’s a relationship take you disagree with online?",
  },
  {
    id: makeId(1, "internet-wrong"),
    level: 1,
    text: "What’s something the internet gets wrong about dating?",
  },
  {
    id: makeId(1, "feminism"),
    level: 1,
    text: "Feminism?",
  },
  {
    id: makeId(1, "toxic-masculinity"),
    level: 1,
    text: "Toxic masculinity? The patriarchy? Andrew tate?",
  },

  // Level 2
  {
    id: makeId(2, "issues-personal"),
    level: 2,
    text: "What issues feel personal to you, even if they don’t affect you directly?",
  },
  {
    id: makeId(2, "politics-separated"),
    level: 2,
    text: "Do you think politics and personal values can be separated?",
  },
  {
    id: makeId(2, "compassion"),
    level: 2,
    text: "How important is compassion in how someone sees the world?",
  },
  {
    id: makeId(2, "good-person"),
    level: 2,
    text: "What does being “a good person” mean to you?",
  },
  {
    id: makeId(2, "ambition-partner"),
    level: 2,
    text: "How do you feel about ambition in a partner?",
  },
  {
    id: makeId(2, "career-identity"),
    level: 2,
    text: "What role does career play in your identity?",
  },
  {
    id: makeId(2, "staying-informed"),
    level: 2,
    text: "How important is staying informed about current events?",
  },
  {
    id: makeId(2, "gender-roles"),
    level: 2,
    text: "How do you feel about traditional gender roles?",
  },
  {
    id: makeId(2, "equality"),
    level: 2,
    text: "What does equality look like to you in a relationship?",
  },
  {
    id: makeId(2, "social-issues-dating"),
    level: 2,
    text: "How much do social issues factor into who you date?",
  },
  {
    id: makeId(2, "different-beliefs"),
    level: 2,
    text: "Would you date someone with very different beliefs from you?",
  },
  {
    id: makeId(2, "intention-impact"),
    level: 2,
    text: "Talk about a time intention and impact misaligned?",
  },
  {
    id: makeId(2, "feel-strongly"),
    level: 2,
    text: "What’s something you feel strongly about that others might not?",
  },
  {
    id: makeId(2, "neutrality"),
    level: 2,
    text: "Do you believe neutrality is a stance?",
  },
  {
    id: makeId(2, "value-nonnegotiable"),
    level: 2,
    text: "What’s a value you won’t compromise on?",
  },
  {
    id: makeId(2, "handle-conflict"),
    level: 2,
    text: "How do you usually handle conflict?",
  },
  {
    id: makeId(2, "communication-depth"),
    level: 2,
    text: "What does good communication look like to you? Go in depth. No surface level shit.",
  },
  {
    id: makeId(2, "feel-appreciated-l2"),
    level: 2,
    text: "What makes you feel most appreciated?",
  },
  {
    id: makeId(2, "disagreement-fix"),
    level: 2,
    text: "What’s a disagreement you don’t think love can fix?",
  },
  {
    id: makeId(2, "boundaries"),
    level: 2,
    text: "What are some of your boundaries?",
  },
  {
    id: makeId(2, "reassurance"),
    level: 2,
    text: "What role does reassurance play in your relationships?",
  },
  {
    id: makeId(2, "people-pleasing"),
    level: 2,
    text: "Do you tend to people-please or speak up?",
  },
  {
    id: makeId(2, "react-disappointment"),
    level: 2,
    text: "How do you react when someone disappoints you?",
  },
  {
    id: makeId(2, "repair-after-conflict"),
    level: 2,
    text: "How do you repair after conflict?",
  },
  {
    id: makeId(2, "small-matters"),
    level: 2,
    text: "What’s something small that matters more than people admit?",
  },
  {
    id: makeId(2, "respect-meaning"),
    level: 2,
    text: "What does respect mean to you? Dig deep bruh.",
  },
  {
    id: makeId(2, "communication-struggle"),
    level: 2,
    text: "What communication habit do you struggle with?",
  },
  {
    id: makeId(2, "feel-secure"),
    level: 2,
    text: "What do you need to feel secure with someone?",
  },

  // Level 3
  {
    id: makeId(3, "kids"),
    level: 3,
    text: "Kids? When? #?",
  },
  {
    id: makeId(3, "future-vision"),
    level: 3,
    text: "How do you imagine your life in 5–10 years? Be so fr.",
  },
  {
    id: makeId(3, "dealbreaker-hard-way"),
    level: 3,
    text: "What’s a dealbreaker you’ve learned the hard way?",
  },
  {
    id: makeId(3, "money-matters"),
    level: 3,
    text: "How much does money matter to you? Gold diggin ahh",
  },
  {
    id: makeId(3, "shared-finances"),
    level: 3,
    text: "How do you feel about shared finances long-term?",
  },
  {
    id: makeId(3, "commitment-issues"),
    level: 3,
    text: "Commitment issues?",
  },
  {
    id: makeId(3, "independence-neediness"),
    level: 3,
    text: "Independence? Neediness? Spill.",
  },
  {
    id: makeId(3, "role-of-friends"),
    level: 3,
    text: "What role should friends play once you’re partnered?",
  },
  {
    id: makeId(3, "respect-need"),
    level: 3,
    text: "What’s something you need a partner to respect?",
  },
  {
    id: makeId(3, "long-distance"),
    level: 3,
    text: "Long distance? Be fr.",
  },
  {
    id: makeId(3, "lifestyle"),
    level: 3,
    text: "What kind of lifestyle do you want? Details.",
  },
  {
    id: makeId(3, "lost-yourself"),
    level: 3,
    text: "Have you ever lost yourself in a relationship?",
  },
  {
    id: makeId(3, "fear-commitment"),
    level: 3,
    text: "What scares you about long-term commitment?",
  },
  {
    id: makeId(3, "wont-tolerate"),
    level: 3,
    text: "What’s something you won’t tolerate anymore?",
  },
  {
    id: makeId(3, "marriage"),
    level: 3,
    text: "Marraige? Why tho?",
  },
  {
    id: makeId(3, "loyalty"),
    level: 3,
    text: "What does loyalty mean to you?",
  },
  {
    id: makeId(3, "know-not-working"),
    level: 3,
    text: "How do you know when something isn’t working?",
  },
  {
    id: makeId(3, "why-single"),
    level: 3,
    text: "Why are you single?",
  },
  {
    id: makeId(3, "over-ex"),
    level: 3,
    text: "Are not over an ex?",
  },
  {
    id: makeId(3, "divorce"),
    level: 3,
    text: "Divorce?",
  },
  {
    id: makeId(3, "mental-health"),
    level: 3,
    text: "Mental health?",
  },
];
