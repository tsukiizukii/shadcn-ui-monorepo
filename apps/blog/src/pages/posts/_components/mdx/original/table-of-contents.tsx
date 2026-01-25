import { cn } from "@workspace/ui/lib/utils";
import type { MarkdownHeading } from "astro";

type HeadingDepth = 1 | 2 | 3 | 4 | 5 | 6;

type TableOfContentsProps = {
  headings: MarkdownHeading[];
  minDepth?: HeadingDepth;
  maxDepth?: HeadingDepth;
};

export default function TableOfContents({
  headings,
  minDepth = 2,
  maxDepth = 6,
}: TableOfContentsProps) {
  if (minDepth > maxDepth) {
    console.error(`minDepth (${minDepth}) must be <= maxDepth (${maxDepth})`);
  }

  const tocHeadings = headings.filter(
    (h) => h.depth >= minDepth && h.depth <= maxDepth,
  );

  // ネストした構造を作成
  const buildNestedToc = (items: MarkdownHeading[]) => {
    const result: any[] = [];
    const stack: any[] = [];

    items.forEach((heading) => {
      const item = { ...heading, children: [] };

      // 現在の depth より深いものを stack から取り除く
      while (
        stack.length > 0 &&
        stack[stack.length - 1].depth >= heading.depth
      ) {
        stack.pop();
      }

      if (stack.length === 0) {
        result.push(item);
      } else {
        stack[stack.length - 1].children.push(item);
      }

      stack.push(item);
    });

    return result;
  };

  const nestedHeadings = buildNestedToc(tocHeadings);

  // console.log(nestedHeadings);

  const renderTocItem = (item: any) => (
    <li key={item.slug} className="flex flex-col items-start gap-2">
      <a
        href={`#${item.slug}`}
        className={cn(
          "inline-block border-l border-transparent text-base/8 text-gray-600 hover:border-gray-950/25 hover:text-gray-950 aria-[current]:border-gray-950 aria-[current]:font-semibold aria-[current]:text-gray-950 sm:text-sm/6 dark:text-gray-300 dark:hover:border-white/25 dark:hover:text-white dark:aria-[current]:border-white dark:aria-[current]:text-white",
          item.depth === 2 && "pl-4",
          item.depth === 3 && "pl-8",
          item.depth === 4 && "pl-12",
          item.depth === 5 && "pl-16",
          item.depth === 6 && "pl-20",
        )}
      >
        {item.text}
      </a>
      {item.children.length > 0 && (
        <ul className="flex flex-col gap-2">
          {item.children.map(renderTocItem)}
        </ul>
      )}
    </li>
  );

  return (
    <nav className="toc" aria-label="Table of contents">
      <h3 className="mb-4 text-lg font-bold">On this page 目次</h3>
      <ul className="flex flex-col gap-2 border-l border-[color-mix(in_oklab,var(--color-gray-950),white_90%)] dark:border-[color-mix(in_oklab,var(--color-gray-950),white_20%)]">
        {nestedHeadings.map(renderTocItem)}
      </ul>
    </nav>
  );
}
