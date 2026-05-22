import { motion } from 'framer-motion';
import { Home } from 'lucide-react';
import { Button } from '@/components/ui/Button';
import { useDocumentMeta } from '@/hooks/useDocumentMeta';

export default function NotFound() {
  useDocumentMeta('Page not found — Rezerveo');

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
      className="flex min-h-[80vh] items-center justify-center px-4 pt-20"
    >
      <div className="text-center">
        <p className="font-display text-7xl font-bold text-gradient sm:text-8xl">404</p>
        <h1 className="mt-4 text-2xl font-bold tracking-tight sm:text-3xl">Page not found</h1>
        <p className="mx-auto mt-3 max-w-md text-base font-light text-slate-600 dark:text-slate-400">
          The page you&apos;re looking for doesn&apos;t exist or has moved.
        </p>
        <div className="mt-8 flex justify-center">
          <Button href="/">
            <Home className="h-4 w-4" />
            Back to home
          </Button>
        </div>
      </div>
    </motion.div>
  );
}
