/*
  AI Design LA — Ideas content
  Edit this file to add, remove, or update articles. No HTML/CSS knowledge
  needed — js/ideas.js renders everything below into the page.

  To add a new article: copy an object inside IDEAS_DATA.articles, fill in
  the fields, and add it wherever you want it to appear (new posts usually
  go at the top). Articles render in the exact order listed here.

  category must be one of: "essay", "case-study", "workflow", "research",
  "video" — this drives both the filter buttons and the colored tag on
  each card. link can point to Substack, YouTube, or anywhere else; use
  "#" as a placeholder if the piece isn't published yet.
*/

window.IDEAS_DATA = {
  featured: {
    title: "The AI-Native Designer Was Only Phase One",
    excerpt:
      "Over coffee recently, another Design Director and I got into a long conversation about what it actually means to transform a design team with AI. We weren't talking about how to get one designer to use Claude, Figma Make, Cursor, or Lovable. Most of us spent the past year figuring that out, experimenting in public, sharing what we learned. What comes next is harder.",
    date: "06/01/26",
    author: "Lance Shields",
    category: "essay",
    image: "images/articles/featured.png",
    link: "#"
  },

  articles: [
    {
      title: "What Does a Design System Need to Know?",
      excerpt:
        "We have been naming tokens for humans for twenty years. The question now is whether the same conventions work when the consumer is a language model. Spoiler: mostly yes, with three specific exceptions that will trip you up.",
      date: "07/14/26",
      author: "Noel Saw",
      category: "essay",
      image: "images/articles/design-system-tokens.jpg",
      link: "#"
    },
    {
      title: "Prompting for Research Synthesis: A Practical Workflow",
      excerpt:
        "Not a tutorial. A field report from six months of using Claude to synthesize interview notes across fifteen research studies. The workflow that stuck, the one that broke, and the part you still have to do yourself.",
      date: "07/28/26",
      author: "Yuna Takahashi",
      category: "workflow",
      image: "images/articles/research-synthesis.jpg",
      link: "#"
    },
    {
      title: "Five Things I Got Wrong About AI Tools This Year",
      excerpt:
        "I was wrong about vibe coding being a shortcut. I was wrong about prompting being the main skill. I was wrong about the designer's role shrinking. Here is what actually happened and what I think it means.",
      date: "08/05/26",
      author: "Lance Shields",
      category: "essay",
      image: "images/articles/five-things-wrong.jpg",
      link: "#"
    },
    {
      title: "The Figma Make Experiment: Three Months In",
      excerpt:
        "I redesigned a real client's marketing site using only Figma Make. Full walkthrough of the process, the surprising parts, the moments where it failed, and whether I'd do it again on a deadline.",
      date: "08/12/26",
      author: "Devon Castillo",
      category: "case-study",
      image: "images/articles/figma-make-experiment.jpg",
      link: "#"
    },
    {
      title: "When AI Transparency Backfires",
      excerpt:
        "Three rounds of user testing on showing AI reasoning inside a product UI. Short finding: explaining yourself helps at first, then starts to erode trust if you keep doing it. The threshold is lower than you think.",
      date: "08/19/26",
      author: "Priya Nair",
      category: "research",
      image: "images/articles/transparency-backfires.jpg",
      link: "#"
    },
    {
      title: "Vibe Coding Is Just Coding With a Different Interface",
      excerpt:
        "The name made designers nervous. The practice turns out to be less radical than the discourse around it. Here is what vibe coding actually is, what it is not, and why the interface shift matters more than the hype.",
      date: "08/26/26",
      author: "Marcus Webb",
      category: "essay",
      image: "images/articles/vibe-coding.jpg",
      link: "#"
    },
    {
      title: "Designing for Uncertainty: When the Output Is Never the Same",
      excerpt:
        "AI interfaces break a silent contract: the same action should produce the same result. When that contract disappears, the whole vocabulary of affordances, feedback, and mental models has to be rethought.",
      date: "07/07/26",
      author: "Crystal Ehrlich",
      category: "research",
      image: "images/articles/designing-uncertainty.jpg",
      link: "#"
    },
    {
      title: "A Designer's Prompt Library: What I Keep and Why",
      excerpt:
        "After a year of prompting daily, I have about forty prompts I actually reuse. Here are the ten that do the most work, the pattern behind each one, and why the others got deleted.",
      date: "06/22/26",
      author: "Priya Nair",
      category: "workflow",
      image: "images/articles/prompt-library.jpg",
      link: "#"
    },
    {
      title: "Open-Sourcing an AI Feature Playbook",
      excerpt:
        "We wrote an internal guide for shipping AI features responsibly — error states, fallbacks, how to talk to users about model limitations. Then we published it. Here is what happened next.",
      date: "06/15/26",
      author: "Sam Okafor",
      category: "case-study",
      image: "images/articles/ai-feature-playbook.jpg",
      link: "#"
    },
    {
      title: "Recording a Workshop: What Translates and What Doesn't",
      excerpt:
        "We filmed a live workshop for the first time and cut it into a twenty-minute video. The hands-on parts held up. The Q&A did not. Notes on what is actually worth recording.",
      date: "08/29/26",
      author: "Leila Ahmadi",
      category: "video",
      image: "images/projects/prototype.jpg",
      link: "#"
    }
  ]
};
