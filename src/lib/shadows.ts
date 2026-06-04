export interface Shadow {
  id: string;
  type: "box" | "inner" | "text";
  by?: string;
  css: string;
  tailwind: string;
}

export const shadows: Shadow[] = [
  {
    id: "2cxc",
    type: "box",
    by: "Next.js",
    css: "box-shadow: 0px 0px 0px 1px #00000008, 0px 2px 4px #0000000d, 0px 12px 24px #0000000d;",
    tailwind:
      "shadow-[0px_0px_0px_1px_#00000008,0px_2px_4px_#0000000d,0px_12px_24px_#0000000d]",
  },
  {
    id: "xyi4",
    type: "box",
    by: "Next.js",
    css: "box-shadow: 0 0 0 1px #00000014, 0px 2px 2px #0000000a, 0 0 0 1px hsla(0, 0%, 98%, 1);",
    tailwind:
      "shadow-[0_0_0_1px_#00000014,0px_2px_2px_#0000000a,0_0_0_1px_hsla(0,0%,98%,1)]",
  },
  {
    id: "wbrz",
    type: "box",
    by: "ChatGPT",
    css: "box-shadow: 0px 3px 6px 0px #0000000a, 0px 4px 80px 8px #0000000a, 0px 0px 1px 0px #0000009e;",
    tailwind:
      " shadow-[0px_3px_6px_0px_#0000000a,0px_4px_80px_8px_#0000000a,0px_0px_1px_0px_#0000009e]",
  },
  {
    id: "e0l5",
    type: "box",
    by: "Stripe",
    css: "box-shadow: 0 7px 14px 0 rgba(60, 66, 87, 0.08), 0 3px 6px 0 rgba(0, 0, 0, 0.12);",
    tailwind:
      "shadow-[0_7px_14px_0_rgba(60,66,87,0.08),0_3px_6px_0_rgba(0,0,0,0.12)]",
  },
  {
    id: "n23b",
    type: "box",
    by: "Stripe",
    css: "box-shadow: 0 15px 35px 0 rgba(60, 66, 87, 0.08), 0 5px 15px 0 rgba(0, 0, 0, 0.12);",
    tailwind:
      "shadow-[0_15px_35px_0_rgba(60,66,87,0.08),0_5px_15px_0_rgba(0,0,0,0.12)]",
  },
  {
    id: "jguc",
    type: "box",
    by: "speakeasy",
    css: "box-shadow: 0px 0px 4px 0px rgba(0,0,0,.1), 0px 2px 1px 0px #fff inset, 0px -2px 1px 0px rgba(0,0,0,.05) inset;",
    tailwind:
      "shadow-[0px_0px_4px_0px_rgba(0,0,0,.1),0px_2px_1px_0px_#fff_inset,0px_-2px_1px_0px_rgba(0,0,0,.05)_inset]",
  },
  {
    id: "afom",
    type: "box",
    by: "verizon",
    css: "box-shadow: 0 2px 20px 0 rgba(0, 0, 0, .06);",
    tailwind: "shadow-[0_2px_20px_0_rgba(0,0,0,.06)]",
  },
  {
    id: "c54g",
    type: "box",
    by: "Mistral AI",
    css: "box-shadow: 0 4px 8px 0 #15151f05, 0 2px 4px 0 #15151f05, 0 1px 2px 0 #15151f05, 0 0 1px 0 #15151f05;",
    tailwind:
      "shadow-[0_4px_8px_0_#15151f05,0_2px_4px_0_#15151f05,0_1px_2px_0_#15151f05,0_0_1px_0_#15151f05]",
  },
  {
    id: "xy80",
    type: "box",
    by: "mistral",
    css: "box-shadow: inset -1px -1px 1px 0 #00000040, 0 0 0 .5px #00000080;",
    tailwind: "shadow-[inset_-1px_-1px_1px_0_#00000040,0_0_0_.5px_#00000080]",
  },
  {
    id: "3hdo",
    type: "box",
    by: "Mistral AI",
    css: "box-shadow: 0 4px 24px rgba(0,0,0,0.15), 0 2px 6px rgba(0,0,0,0.05);",
    tailwind: "shadow-[0_4px_24px_rgba(0,0,0,0.15),0_2px_6px_rgba(0,0,0,0.05)]",
  },
  {
    id: "g96j",
    type: "box",
    by: "Mistral AI",
    css: "box-shadow: 0 4px 24px rgba(0,0,0,0.1), 0 2px 6px rgba(0,0,0,0.05), 0 3px 1px -2px rgba(0,0,0,0.05) !important;",
    tailwind:
      "shadow-[0_4px_24px_rgba(0,0,0,0.1),0_2px_6px_rgba(0,0,0,0.05),0_3px_1px_-2px_rgba(0,0,0,0.05)]",
  },
  {
    id: "9xh8",
    type: "box",
    by: "Mistral AI",
    css: "box-shadow: 0 10px 15px -3px #0000001a, 0 4px 6px -4px #0000001a;",
    tailwind: "shadow-[0_10px_15px_-3px_#0000001a,0_4px_6px_-4px_#0000001a]",
  },
  {
    id: "9hwq",
    type: "box",
    by: "docusign",
    css: "box-shadow: 0 1rem 2rem 0 #13003226;",
    tailwind: "shadow-[0_1rem_2rem_0_#13003226]",
  },
  {
    id: "mgik",
    type: "box",
    by: "glean",
    css: "box-shadow: 0 0 17px #343ced33;",
    tailwind: "shadow-[0_0_17px_#343ced33]",
  },
  {
    id: "1ipe",
    type: "box",
    by: "glean",
    css: "box-shadow: 0px 5px 20px 0px rgba(0, 0, 0, 0.15);",
    tailwind: "shadow-[0px_5px_20px_0px_rgba(0,0,0,0.15)]",
  },
  {
    id: "uiv0",
    type: "box",
    by: "google",
    css: "box-shadow: 0 4px 18px -2px rgba(60, 64, 67, 0.12);",
    tailwind: "shadow-[0_4px_18px_-2px_rgba(60,64,67,0.12)]",
  },
  {
    id: "61hg",
    type: "box",
    by: "google",
    css: "box-shadow: 0 7px 15px rgba(0,0,0,.2);",
    tailwind: "shadow-[0_7px_15px_rgba(0,0,0,.2)]",
  },
  {
    id: "61hg",
    type: "box",
    by: "google",
    css: "box-shadow: 0 1px 2px rgba(0,0,0,.3), 0 2px 6px 2px rgba(0,0,0,.15);",
    tailwind: "shadow-[0_1px_2px_rgba(0,0,0,.3),0_2px_6px_2px_rgba(0,0,0,.15)]",
  },
  {
    id: "5nkn",
    type: "box",
    by: "notion",
    css: "box-shadow: 0px 2px 4px 0px rgba(0,0,0,.04), 0px 0px 0px 1px rgba(42,28,0,.07);",
    tailwind:
      "shadow-[0px_2px_4px_0px_rgba(0,0,0,.04),0px_0px_0px_1px_rgba(42,28,0,.07)]",
  },
  {
    id: "1lr8",
    type: "box",
    by: "notion",
    css: "box-shadow: 0px 8px 12px 0px rgba(25,25,25,.027), 0px 2px 6px 0px rgba(25,25,25,.027), 0px 0px 0px 1px rgba(42,28,0,.07);",
    tailwind:
      "shadow-[0px_8px_12px_0px_rgba(25,25,25,.027),0px_2px_6px_0px_rgba(25,25,25,.027),0px_0px_0px_1px_rgba(42,28,0,.07)]",
  },
];
