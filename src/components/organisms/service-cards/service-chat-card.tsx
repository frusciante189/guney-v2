"use client";

import { motion } from "motion/react";
import { cn } from "@/lib/utils";
import { ChatAvatar, ChatBubble } from "@/components/atoms";
import { getStaggerAnimation } from "@/constants/animations";

interface ChatMessage {
  sender: string;
  role: string;
  message: string;
  time: string;
}

interface ServiceChatCardProps {
  id: string;
  title: string;
  description: string;
  chat: ChatMessage;
  gridClass: string;
  index: number;
}

/**
 * Service Chat Card Component
 *
 * Displays a service card with a chat conversation preview.
 * Used in ServiceCards grid for chat-based service presentations.
 */
export function ServiceChatCard({
  id,
  title,
  description,
  chat,
  gridClass,
  index,
}: ServiceChatCardProps) {
  return (
    <motion.div
      key={id}
      className={cn(gridClass, "bg-white rounded-4xl p-7 flex flex-col gap-8")}
      {...getStaggerAnimation(index)}
    >
      <div className="flex flex-col gap-2">
        <h3 className="text-xl xl:text-2xl font-bold text-text-primary">
          {title}
        </h3>
        <p className="text-sm text-text-tertiary">{description}</p>
      </div>
      <div className="flex flex-col gap-3 border border-border-gray rounded-[18px] p-4 mask-fade-bottom">
        <div className="flex items-center gap-2 pb-2 border-b border-border-gray">
          <ChatAvatar initials="JD" />
          <div className="flex-1">
            <p className="text-xs font-medium text-text-primary">
              {chat.sender}
            </p>
            <p className="text-xs text-text-muted">{chat.role}</p>
          </div>
          <span className="text-xs text-text-muted">{chat.time}</span>
        </div>
        <div className="flex flex-col gap-2">
          <ChatBubble side="left">{chat.message}</ChatBubble>
          <ChatBubble side="right" variant="highlighted">
            Perfect! Can you send booth specs?
          </ChatBubble>
          <ChatBubble side="left">
            Sending now. Also added parking passes.
          </ChatBubble>
        </div>
      </div>
    </motion.div>
  );
}
