"use client";

import * as React from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { AlertCircle, CheckCircle2, Send } from "lucide-react";
import { apiClient } from "@/lib/axios";
import type { ApiError, ApiResponse, HealthCheckPayload } from "@/types";
import { Button, Input } from "@/components/ui";

const contactFormSchema = z.object({
  name: z.string().trim().min(2, "Name must be at least 2 characters."),
  email: z.string().trim().email("Please enter a valid email address."),
  subject: z
    .string()
    .trim()
    .min(3, "Subject must be at least 3 characters.")
    .max(120, "Subject must be 120 characters or fewer."),
  message: z
    .string()
    .trim()
    .min(10, "Message must be at least 10 characters.")
    .max(1000, "Message must be 1,000 characters or fewer."),
});

type ContactFormValues = z.infer<typeof contactFormSchema>;

export function DemoContactForm() {
  const [statusMessage, setStatusMessage] = React.useState<{
    type: "success" | "error";
    text: string;
  } | null>(null);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<ContactFormValues>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      name: "",
      email: "",
      subject: "",
      message: "",
    },
  });

  const onSubmit = async (values: ContactFormValues) => {
    setStatusMessage(null);
    try {
      await apiClient.get<ApiResponse<HealthCheckPayload>>("/health");
      setStatusMessage({
        type: "success",
        text: `Thank you, ${values.name}! Your inquiry ("${values.subject}") has been received. We will respond to ${values.email} shortly.`,
      });
      reset();
    } catch (err) {
      const apiErr = err as ApiError;
      setStatusMessage({
        type: "error",
        text:
          apiErr.message ??
          "We could not submit your message right now. Please try emailing admin@uploadblog.com directly.",
      });
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4" noValidate>
      <div className="grid gap-4 sm:grid-cols-2">
        <Input
          label="Full name"
          placeholder="Your full name"
          error={errors.name?.message}
          {...register("name")}
        />
        <Input
          label="Email address"
          type="email"
          placeholder="you@example.com"
          error={errors.email?.message}
          {...register("email")}
        />
      </div>

      <Input
        label="Subject"
        placeholder="Editorial question, partnership, or feedback"
        error={errors.subject?.message}
        {...register("subject")}
      />

      <div className="space-y-1.5">
        <label
          htmlFor="contact-message"
          className="block text-sm font-medium text-[#071a3e]"
        >
          Message
        </label>
        <textarea
          id="contact-message"
          rows={4}
          placeholder="Tell us how the UploadBlog editorial team can help..."
          aria-invalid={Boolean(errors.message)}
          className="w-full rounded-xl border border-slate-200 bg-white px-3.5 py-2.5 text-sm text-[#071a3e] placeholder:text-slate-400 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500"
          {...register("message")}
        />
        {errors.message?.message && (
          <p className="text-xs font-medium text-red-600">
            {errors.message.message}
          </p>
        )}
      </div>

      {statusMessage && (
        <div
          role="status"
          className={
            statusMessage.type === "success"
              ? "flex items-start gap-2 rounded-xl border border-emerald-500/30 bg-emerald-500/10 p-3.5 text-sm text-emerald-800"
              : "flex items-start gap-2 rounded-xl border border-red-500/30 bg-red-500/10 p-3.5 text-sm text-red-700"
          }
        >
          {statusMessage.type === "success" ? (
            <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0" aria-hidden />
          ) : (
            <AlertCircle className="mt-0.5 h-4 w-4 shrink-0" aria-hidden />
          )}
          <span>{statusMessage.text}</span>
        </div>
      )}

      <div className="flex justify-end pt-1">
        <Button
          type="submit"
          isLoading={isSubmitting}
          className="rounded-xl bg-gradient-to-r from-[#2563eb] via-[#1d4ed8] to-[#0ea5e9] px-6 text-white shadow-sm hover:brightness-110"
        >
          <Send className="h-4 w-4" aria-hidden />
          Send Message
        </Button>
      </div>
    </form>
  );
}
