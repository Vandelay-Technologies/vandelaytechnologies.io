'use client';

import { Button } from '@/components/ui/button';
import { RefreshCw } from 'lucide-react';

export default function Error({ error, reset }: { error: Error; reset: () => void }) {
    return (
        <div className="h-screen flex flex-col items-center justify-center space-y-4 text-center px-6">
            <div className="space-y-2">
                <h1 className="text-4xl font-bold tracking-tighter">Oops! Something went wrong</h1>
                <p className="text-muted-foreground text-lg">
                    {error?.message || 'An unexpected error occurred'}
                </p>
            </div>
            
            <Button onClick={reset} variant="default" size="lg" className="mt-4">
                <RefreshCw className="mr-2 h-4 w-4" />
                Try again
            </Button>

            {process.env.NODE_ENV === 'development' && (
                <div className="mt-8 w-full max-w-2xl">
                    <pre className="p-4 bg-muted rounded-lg overflow-auto text-sm text-left">
                        {JSON.stringify(error, null, 2)}
                    </pre>
                </div>
            )}
        </div>
    );
} 