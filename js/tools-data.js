/*
  AI Design LA — Tools content
  Edit this file to add, remove, reclassify, or update a tool. No HTML/CSS
  knowledge needed — js/tools.js renders everything below into the page.

  To add a new tool: copy an object inside TOOLS_DATA.tools, fill in the
  fields, and place it wherever you want it to appear within its category
  (tools render in the order listed here, grouped by category).

  category must match one of the slugs in TOOLS_DATA.categories below.
  status must be one of: "core-stack", "in-rotation", "watching", "dropped"
  — see the "What the labels mean" section on the page for what each means.
  contributor is optional — omit it (or leave it out entirely) for tools
  the community hasn't personally vouched for yet.

  TOOLS_DATA.graveyard is a separate list for "The Tool Graveyard" section
  — tools the community has fully stopped using. Move a tool here (instead
  of just marking it "dropped") once it's worth explaining what replaced it
  and why.
*/

window.TOOLS_DATA = {
  categories: [
    { slug: "think-research", label: "Think & Research", background: "white" },
    { slug: "design-prototype", label: "Design & Prototype", background: "raised" },
    { slug: "build", label: "Build", background: "white" },
    { slug: "generate", label: "Generate", background: "raised" },
    { slug: "test-evaluate", label: "Test & Evaluate", background: "white" }
  ],

  tools: [
    {
      name: "Claude",
      category: "think-research",
      status: "core-stack",
      contributor: "Lance Shields",
      description:
        "Anthropic's conversational AI, used across the community for research synthesis, writing, strategic thinking, and working through design problems in plain language.",
      bestFor:
        "Deep reasoning about design decisions, synthesizing research, writing briefs and specs, and thinking through complex product problems before touching a tool.",
      communityTake:
        "The model people reach for when the problem is genuinely hard and needs thinking, not just generation. Better at 'why' than almost anything else.",
      link: "https://claude.ai"
    },
    {
      name: "Perplexity",
      category: "think-research",
      status: "in-rotation",
      contributor: "Lance Shields",
      description:
        "An AI-powered search and research tool that cites its sources, making it more trustworthy for desk research than general-purpose models used in browse mode.",
      bestFor:
        "Competitive analysis, technology landscape research, and any task where you need a quick, sourced answer rather than a thorough model response.",
      communityTake:
        "More useful than a search engine for research phases. Less useful for reasoning. The citation habit is its biggest differentiator.",
      link: "https://www.perplexity.ai"
    },
    {
      name: "Dovetail",
      category: "think-research",
      status: "watching",
      contributor: "Lance Shields",
      description:
        "A research repository and analysis platform with AI-assisted tagging, summarization, and insight extraction from interviews and notes.",
      bestFor:
        "Teams running regular research who want to build a shared, searchable repository of insights over time.",
      communityTake:
        "The AI features are genuinely useful but not transformative yet. The real value is the repository habit it enforces, not the AI layer on top.",
      link: "https://dovetail.com"
    },
    {
      name: "Gemini Advanced",
      category: "think-research",
      status: "in-rotation",
      contributor: "Lance Shields",
      description:
        "Google's flagship AI model with deep integration across Workspace products and strong multimodal reasoning capabilities.",
      bestFor:
        "Designers embedded in the Google ecosystem, working with documents and sheets, or needing strong web search integration in reasoning tasks.",
      communityTake:
        "Most useful inside Workspace rather than as a standalone. A reasonable alternative when the problem involves Google-specific tools or data.",
      link: "https://gemini.google.com"
    },

    {
      name: "Figma Make",
      category: "design-prototype",
      status: "in-rotation",
      contributor: "Devon Castillo",
      description:
        "A prompt-driven environment inside Figma for creating interactive concepts and exploring product ideas quickly without leaving the design tool.",
      bestFor:
        "Early interaction design, rapid concept testing, and communicating behavior before committing to production code.",
      communityTake:
        "Fast and surprisingly capable. Strong design judgment is still required — it accelerates the work but doesn't replace the thinking.",
      link: "https://www.figma.com/make/"
    },
    {
      name: "Paper",
      category: "design-prototype",
      status: "watching",
      description:
        "An emerging interface design environment focused on rapid visual exploration and a more fluid canvas model than established design tools.",
      bestFor:
        "Designers exploring alternatives to Figma who want a more generative approach to visual exploration.",
      communityTake:
        "Visually promising. Still needs broader testing on real product work before it earns a place in a production workflow.",
      link: "#"
    },
    {
      name: "Framer",
      category: "design-prototype",
      status: "in-rotation",
      description:
        "A design and publishing tool with AI-assisted layout generation, component creation, and one-click site deployment.",
      bestFor:
        "Marketing sites, portfolio work, and interactive prototypes that need to be shareable and real — not just clickable mocks.",
      communityTake:
        "The gap between prototype and shipped site is genuinely smaller here. The AI features are useful for layout, less so for complex interaction design.",
      link: "https://www.framer.com"
    },

    {
      name: "Claude Code",
      category: "build",
      status: "core-stack",
      contributor: "Lance Shields",
      description:
        "An agentic coding tool that helps designers move from design intent into working software, modify real codebases, connect services, and build prototypes that can grow beyond a disposable demo.",
      bestFor:
        "Designers who want to build directly in code or collaborate more deeply with engineers on real production work.",
      communityTake:
        "Extremely capable, but not magic. Works best when the designer provides clear requirements, real components, and disciplined feedback. The quality of your input determines the quality of the output.",
      link: "https://claude.com/product/claude-code"
    },
    {
      name: "Cursor",
      category: "build",
      status: "core-stack",
      description:
        "An AI-powered code editor for understanding, generating, and modifying code within an existing project, with deep codebase context awareness.",
      bestFor:
        "Making targeted interface changes, navigating unfamiliar codebases, and iterating with more control than a one-shot app builder.",
      communityTake:
        "A strong bridge into code for designers. Some technical comfort is still necessary, but less than a traditional editor requires.",
      link: "https://cursor.com"
    },
    {
      name: "Lovable",
      category: "build",
      status: "in-rotation",
      contributor: "Sam Okafor",
      description:
        "A prompt-based web app builder for creating functional MVPs and testing product ideas quickly without writing code from scratch.",
      bestFor:
        "Early product validation, lightweight internal tools, and prototypes that need real data or interactions to be convincing.",
      communityTake:
        "Impressive speed at the beginning. Control, reliability, and maintenance become harder as complexity grows. Know when to move to a real codebase.",
      link: "https://lovable.dev"
    },
    {
      name: "GitHub Copilot",
      category: "build",
      status: "in-rotation",
      description:
        "An AI pair programmer embedded in most major code editors, offering inline completions and chat-based coding assistance.",
      bestFor:
        "Designers who are already writing code and want faster autocomplete and inline suggestions without switching tools.",
      communityTake:
        "Most useful when you already know what you want to write. Less useful when you are exploring or problem-solving — use Claude for that.",
      link: "https://github.com/features/copilot"
    },

    {
      name: "Adobe Firefly",
      category: "generate",
      status: "in-rotation",
      description:
        "A suite of generative image and editing capabilities integrated across Adobe's creative products, trained on licensed imagery.",
      bestFor:
        "Working with existing creative assets, production editing, compositing, and commercially oriented workflows where rights matter.",
      communityTake:
        "Most valuable inside Photoshop and existing creative workflows rather than as a standalone image generator. The licensing story is its real differentiator.",
      link: "https://www.adobe.com/products/firefly.html"
    },
    {
      name: "Midjourney",
      category: "generate",
      status: "in-rotation",
      description:
        "A generative image tool with strong aesthetic range and a distinctive visual sensibility, used for concept exploration and moodboarding.",
      bestFor:
        "Early-stage concept imagery, moodboards, art direction exploration, and generating reference material that informs rather than ships.",
      communityTake:
        "Still the best at producing images that have a point of view. The challenge is avoiding the aesthetic becoming a crutch rather than a starting point.",
      link: "https://www.midjourney.com"
    },
    {
      name: "Runway",
      category: "generate",
      status: "watching",
      description:
        "A creative AI platform for generating and editing video, with motion generation and video-to-video transformation tools.",
      bestFor:
        "Concept videos, animatics, and motion explorations where production-quality video is premature but static images are not enough.",
      communityTake:
        "The technology is genuinely impressive. Integrating it into a real design process is still a work in progress for most people.",
      link: "https://runwayml.com"
    },

    {
      name: "Maze",
      category: "test-evaluate",
      status: "in-rotation",
      description:
        "A rapid usability testing platform with AI-assisted analysis, path analysis, and unmoderated study capabilities.",
      bestFor:
        "Teams who need to run frequent, lightweight usability tests and want faster synthesis than manual review allows.",
      communityTake:
        "The AI analysis is a genuine time-saver for large studies. For small or nuanced studies, it can flatten findings that deserve more careful reading.",
      link: "https://maze.co"
    }
  ],

  /*
    The Tool Graveyard: tools the community stopped reaching for. Add a
    new entry as tools get formally retired — order here is render order.
  */
  graveyard: [
    {
      name: "Uizard",
      replacedBy: "Figma Make and Lovable",
      formerUse: "Rapid interface generation from sketches and screenshots",
      description:
        "The output felt generic and required significant cleanup before it was useful in a real project. The ratio of editing to generating tilted the wrong way."
    },
    {
      name: "Diagram (Magician for Figma)",
      replacedBy: "Native Figma AI features",
      formerUse: "AI-assisted design exploration inside Figma",
      description:
        "Its most valuable capabilities were gradually absorbed into Figma's own AI features. Maintaining a separate plugin stopped making sense."
    },
    {
      name: "Early one-shot app builders",
      replacedBy: "Claude Code and Cursor",
      formerUse: "Instant product demos and concept prototypes",
      description:
        "They produced impressive first results but became difficult to control, extend, or maintain as complexity grew. The demo was not the product."
    },
    {
      name: "Stable Diffusion (local)",
      replacedBy: "Midjourney and Adobe Firefly",
      formerUse: "Image generation with full prompt control",
      description:
        "The setup and maintenance overhead was not worth the control advantage for most design use cases. Cloud tools caught up faster than expected."
    },
    {
      name: "Early AI writing assistants",
      replacedBy: "Claude and GPT-4o",
      formerUse: "UX copy and microcopy generation",
      description:
        "Generic outputs that required more editing than writing from scratch. The model improvement curve shifted this — current models are meaningfully better."
    }
  ]
};
