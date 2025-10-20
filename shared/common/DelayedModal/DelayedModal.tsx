"use client";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogTitle,
} from "@/shared/common";
import { ModalForm } from "../ModalForm";
import Image from "next/image";

interface DelayedModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const DelayedModal = ({ isOpen, onClose }: DelayedModalProps) => {
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="!max-w-7xl lg:max-h-[70vh] h-[90vh] w-[95vw] overflow-y-auto lg:p-4 p-0 pt-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 p-2 gap-4 lg:gap-8">
          {/* Left Panel - Promotional Content */}
          <div className="rounded-3xl p-2 lg:p-8 flex-1 relative overflow-hidden col-span-1 lg:col-span-5 lg:min-h-[500px]">
            {/* Background Pattern */}
            <Image
              src={"/assets/hold-on-back.webp"}
              alt="hold-on-back"
              className="object-cover lg:block hidden"
              fill
            />

            {/* Content */}
            <div className="relative z-10 lg:text-background text-foreground space-y-4 lg:space-y-6">
              <div className="w-12 h-12 sm:w-16 sm:h-16 bg-primary rounded-full lg:flex hidden items-center justify-center mb-4 lg:mb-6">
                <span className="text-2xl sm:text-3xl">👋</span>
              </div>
              <DialogTitle className="text-xl sm:text-4xl lg:text-5xl font-bold leading-tight">
                Hold On a Moment!
              </DialogTitle>
              <DialogDescription className="text-sm sm:text-lg">
                Book Your FREE strategy session to find out why 500+ successful
                brands trust us for:
              </DialogDescription>
              <div className="space-y-3 lg:space-y-4">
                {[
                  "End-to-End Development",
                  "Budget Estimation & Cost Breakdown",
                  "Faster Go-To-Market Strategies",
                ].map((feature, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <div className="w-5 h-5 sm:w-6 sm:h-6 bg-primary rounded-full flex items-center justify-center flex-shrink-0">
                      <span className="text-white text-xs sm:text-sm">✓</span>
                    </div>
                    <span className="text-sm sm:text-base lg:text-lg">
                      {feature}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Panel - Contact Form */}
          <div className="col-span-1 lg:col-span-7 px-2 lg:py-8 py-4">
            <ModalForm />
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};
