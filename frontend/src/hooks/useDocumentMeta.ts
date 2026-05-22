import { useEffect } from 'react';

/** Set the document title (and optionally meta description) for a route. */
export function useDocumentMeta(title: string, description?: string): void {
  useEffect(() => {
    const previousTitle = document.title;
    document.title = title;

    let metaEl: HTMLMetaElement | null = null;
    let previousDescription: string | null = null;
    if (description) {
      metaEl = document.querySelector('meta[name="description"]');
      if (metaEl) {
        previousDescription = metaEl.getAttribute('content');
        metaEl.setAttribute('content', description);
      }
    }

    return () => {
      document.title = previousTitle;
      if (metaEl && previousDescription !== null) {
        metaEl.setAttribute('content', previousDescription);
      }
    };
  }, [title, description]);
}
