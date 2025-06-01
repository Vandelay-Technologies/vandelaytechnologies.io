'use client';

import Link from 'next/link';
import { Button } from "@/components/ui/button";
import { Home } from "lucide-react";

export default function NotFound() {
  return (
    <div className="container mx-auto py-20 flex flex-col items-center justify-center text-center">
      <h1 className="text-8xl font-bold mb-6">404</h1>
      <h2 className="text-2xl font-semibold mb-4">Page not found</h2>
      <p className="text-xl text-muted-foreground mb-8 max-w-md">The page you are looking for does not exist.</p>
      <Button asChild>
        <Link href="/">
          <Home className="mr-2 h-4 w-4" />
          Go home
        </Link>
      </Button>
    </div>
  );
} 