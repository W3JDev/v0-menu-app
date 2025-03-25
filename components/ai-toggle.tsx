"use client";

import * as React from "react";
import { Bot, BotOff } from "lucide-react";
import { useToggle } from "@/hooks/use-toggle";
import { Button } from "@/components/ui/button";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";

export function AiToggle() {
  const [aiEnabled, toggleAi] = useToggle("ai-enabled", true);

  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger asChild>
          <Button 
            variant="ghost" 
            size="icon" 
            onClick={toggleAi}
            aria-label={aiEnabled ? "Disable AI Assistant" : "Enable AI Assistant"}
          >
            {aiEnabled ? (
              <Bot className="h-[1.2rem] w-[1.2rem]" />
            ) : (
              <BotOff className="h-[1.2rem] w-[1.2rem]" />
            )}
          </Button>
        </TooltipTrigger>
        <TooltipContent>
          <p>{aiEnabled ? "Disable AI Assistant" : "Enable AI Assistant"}</p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
}