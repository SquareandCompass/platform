import * as AutoLinkHeadings from "rehype-autolink-headings";
import * as Unified from "unified";
import "./auto-header-linker.scss";

/**
 * Plugin for adding a link icon & anchor tag to Markdown headings
 * that possess a custom-id (e.g. `# Heading {#custom-id}`).
 */
export namespace AutoHeaderLinker {
  export function plugin(): Unified.Pluggable {
    return [AutoLinkHeadings.default, AutoHeaderLinker.options()];
  }

  export function options(): AutoLinkHeadings.Options {
    return {
      behavior: "prepend",
      properties: {
        // NOTE: this must match the class name in `automatic-header-slugs.scss`
        class: "auto-header-link",
        ariaHidden: true,
        tabIndex: -1,
      },
      content: [
        {
          type: "element",
          tagName: "svg",
          properties: {
            xmlns: "http://www.w3.org/2000/svg",
            fill: "grey",
            viewBox: "0 0 24 24",
          },
          children: [
            {
              type: "element",
              tagName: "path",
              properties: {
                d: "M9.199 13.599a5.99 5.99 0 0 0 3.949 2.345 5.987 5.987 0 0 0 5.105-1.702l2.995-2.994a5.992 5.992 0 0 0 1.695-4.285 5.976 5.976 0 0 0-1.831-4.211 5.99 5.99 0 0 0-6.431-1.242 6.003 6.003 0 0 0-1.905 1.24l-1.731 1.721a.999.999 0 1 0 1.41 1.418l1.709-1.699a3.985 3.985 0 0 1 2.761-1.123 3.975 3.975 0 0 1 2.799 1.122 3.997 3.997 0 0 1 .111 5.644l-3.005 3.006a3.982 3.982 0 0 1-3.395 1.126 3.987 3.987 0 0 1-2.632-1.563A1 1 0 0 0 9.201 13.6zm5.602-3.198a5.99 5.99 0 0 0-3.949-2.345 5.987 5.987 0 0 0-5.105 1.702l-2.995 2.994a5.992 5.992 0 0 0-1.695 4.285 5.976 5.976 0 0 0 1.831 4.211 5.99 5.99 0 0 0 6.431 1.242 6.003 6.003 0 0 0 1.905-1.24l1.723-1.723a.999.999 0 1 0-1.414-1.414L9.836 19.81a3.985 3.985 0 0 1-2.761 1.123 3.975 3.975 0 0 1-2.799-1.122 3.997 3.997 0 0 1-.111-5.644l3.005-3.006a3.982 3.982 0 0 1 3.395-1.126 3.987 3.987 0 0 1 2.632 1.563 1 1 0 0 0 1.602-1.198z",
              },
              children: [],
            },
          ],
        },
      ],
    };
  }
}
