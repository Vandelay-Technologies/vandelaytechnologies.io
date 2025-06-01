'use client';

import { useState, useEffect } from 'react';
import { cookieUtils } from '@/lib/cookieUtils';
import ReactGA from 'react-ga4';
import {
  Alert,
  AlertDescription,
  AlertTitle,
} from "@/components/ui/alert";
import { Button } from "@/components/ui/button";
import { settings } from '@/settings';

export default function ConsentBanner() {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const cookieConsent = cookieUtils.get('cookieConsent');
        if (!cookieConsent) {
            setIsVisible(true);
        } else if (cookieConsent === 'accepted') {
            loadGoogleAnalytics();
        }
    }, []);

    const loadGoogleAnalytics = () => {
        ReactGA.initialize(settings.analytics.google.id);
    };

    const handleAccept = () => {
        cookieUtils.set('cookieConsent', 'accepted', 365);
        loadGoogleAnalytics();
        setIsVisible(false);
    };

    const handleDecline = () => {
        cookieUtils.set('cookieConsent', 'declined', 365);
        setIsVisible(false);
    };

    if (!isVisible) return null;

    return (
        <div className="fixed bottom-0 left-0 right-0 z-50 p-4 md:p-6">
            <Alert className="relative flex flex-col md:flex-row items-start md:items-center justify-between p-6 shadow-md border-muted bg-background">
                <div className="space-y-2 mb-4 md:mb-0 md:mr-4">
                    <AlertTitle>Cookie Notice</AlertTitle>
                    <AlertDescription>
                        We use cookies to ensure that we give you the best experience on our website. 
                        By continuing to use this site, you consent to the use of cookies.
                    </AlertDescription>
                </div>
                <div className="flex flex-wrap gap-2">
                    <Button
                        variant="default"
                        onClick={handleAccept}
                        className="cursor-pointer"
                    >
                        Accept
                    </Button>
                    <Button 
                        variant="outline" 
                        onClick={handleDecline}
                        className="cursor-pointer"
                    >
                        Decline
                    </Button>
                </div>
            </Alert>
        </div>
    );
}
