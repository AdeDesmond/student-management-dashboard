"use client";

import { type ElementRef, useRef, useEffect } from "react";
import { useRouter } from "next/navigation";
import { createPortal } from "react-dom";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogTitle,
  DialogTrigger,
} from "~/components/ui/dialog";
import { Button } from "~/components/ui/button";

interface ModalProps {
  children: React.ReactNode;
  title?: string;
}

export function Modal({ children, title }: ModalProps) {
  const router = useRouter();
  const dialogRef = useRef<ElementRef<"dialog">>(null);

  useEffect(() => {
    if (!dialogRef.current?.open) {
      dialogRef.current?.showModal();
    }
  }, []);

  function onDismiss() {
    router.back();
  }

  return createPortal(
    <Dialog
      open
      onOpenChange={(isOpen) => {
        if (!isOpen) {
          onDismiss();
        }
      }}
    >
      <DialogContent>
        <DialogTitle className="text-muted-foreground">
          Details about <span className="font-bold text-black">{title}</span>
        </DialogTitle>
        <DialogDescription>There will be a component here</DialogDescription>
        {children}
      </DialogContent>
    </Dialog>,
    document.getElementById("modal-root")!,
  );
}

//className="m-0 h-screen w-screen bg-black/90 text-white"

// {children}
// <button onClick={onDismiss} />
