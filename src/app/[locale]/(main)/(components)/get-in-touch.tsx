"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { Loader2 } from "lucide-react";
import { useTranslations } from "next-intl";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import { z } from "zod";

import Section from "@/components/layout/section";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

const FormSchema = z.object({
  name: z.string(),
  email: z.string().email(),
  message: z.string(),
});
type FormBody = z.infer<typeof FormSchema>;

function GetInTouch() {
  const t = useTranslations();
  const form = useForm<FormBody>({
    resolver: zodResolver(FormSchema),
  });

  const onSubmit = async (data: FormBody) => {
    try {
      await fetch("/api/contact", {
        method: "POST",
        body: JSON.stringify(data),
      }).then((res) => res.json());
      toast("Success", {
        description: "Send message success!",
        closeButton: true,
      });
      form.reset({
        name: "",
        email: "",
        message: "",
      });
    } catch (error) {
      console.error("🚀 ~ onSubmit ~ error:", error);
      throw new Error("Failed to submit form!");
    }
  };

  const isSubmitting = form.formState.isSubmitting;

  return (
    <Section
      heading={{
        title: t("Get in touch"),
        subTitle: t(
          "What’s next? Feel free to reach out to me if you're looking for a developer, have a query, or simply want to connect."
        ),
      }}
      className="bg-gray-50"
    >
      <Form {...form}>
        <form
          className="mx-auto w-full max-w-2xl space-y-5"
          onSubmit={form.handleSubmit(onSubmit)}
        >
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Name</FormLabel>
                <FormControl>
                  <Input {...field} placeholder="John Doe" />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Email</FormLabel>
                <FormControl>
                  <Input {...field} placeholder="abc@gmail.com" />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="message"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Message</FormLabel>
                <FormControl>
                  <Textarea {...field} rows={5} placeholder="Aa" />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <div className="flex justify-end">
            <Button disabled={isSubmitting} type="submit">
              {isSubmitting ? (
                <Loader2 className="animate-spin" />
              ) : (
                t("Send message")
              )}
            </Button>
          </div>
        </form>
      </Form>
    </Section>
  );
}

export default GetInTouch;
