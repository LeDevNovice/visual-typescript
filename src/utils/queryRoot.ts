export default function queryRoot(selector: string): HTMLElement {
  const el = document.querySelector<HTMLElement>(selector);

  if (!el) {
    throw new Error(`[Bootstrap] Element ${selector} not found in index.html`)
  }

  return el;
}
