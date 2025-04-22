import React from 'react';
import { Card } from "@/components/ui/card";
import { Loader2 } from "lucide-react";

const Loading = () => {
    return (
        <div className="fixed inset-0 flex items-center justify-center bg-background/80 backdrop-blur-sm">
            <Card className="p-8 shadow-lg">
                <div className="flex flex-col items-center space-y-4">
                    <img 
                        src="/path-to-your-logo.png" // Replace with your logo path
                        alt="Logo"
                        className="w-24 h-auto"
                    />
                    <Loader2 className="h-8 w-8 animate-spin text-primary" />
                    <p className="text-sm text-muted-foreground">Loading...</p>
                </div>
            </Card>
        </div>
    );
};

export default Loading;

