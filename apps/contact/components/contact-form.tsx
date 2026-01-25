"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "@workspace/ui/components/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@workspace/ui/components/card";
import {
  Field,
  FieldError,
  FieldGroup,
  FieldLabel,
  FieldSeparator,
} from "@workspace/ui/components/field";
import { Input } from "@workspace/ui/components/input";
import {
  InputGroup,
  InputGroupAddon,
  InputGroupText,
  InputGroupTextarea,
} from "@workspace/ui/components/input-group";
import * as React from "react";
import { Controller, useForm } from "react-hook-form";
import { toast } from "sonner";
import * as z from "zod";

// 全角カタカナ（と長音記号）のみを許可する正規表現
const KATAKANA_REGEX = /^[\u30A0-\u30FF\u30FC\u3099-\u309C]+$/;
// ※末尾の `+` は「1文字以上必須」を意味します

const formSchema = z.object({
  // 姓
  lastName: z.string().trim().min(1, "入力は必須です。"),
  // 名
  firstName: z.string().trim().min(1, "入力は必須です。"),
  // セイ
  lastNameKana: z
    .string()
    .trim()
    .min(1, "入力は必須です。")
    .regex(KATAKANA_REGEX, "全角カタカナで入力してください。"),
  // メイ
  firstNameKana: z
    .string()
    .trim()
    .min(1, "入力は必須です。")
    .regex(KATAKANA_REGEX, "全角カタカナで入力してください。"),
  email: z.email(),
  title: z.string().trim().max(32, "32文字以内で入力してください").optional(),
  description: z
    .string()
    .trim()
    .min(1, "入力は必須です。")
    .max(100, "100文字以上で入力してください"),
});

export default function ContactForm() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    mode: "onBlur",
    defaultValues: {
      lastName: "",
      firstName: "",
      lastNameKana: "",
      firstNameKana: "",
      title: "",
      description: "",
    },
  });

  function onSubmit(data: z.infer<typeof formSchema>) {
    toast("検証を通過しました。送信値は:", {
      description: (
        <pre className="bg-code text-code-foreground mt-2 w-[320px] overflow-x-auto rounded-md p-4">
          <code>{JSON.stringify(data, null, 2)}</code>
        </pre>
      ),
      position: "bottom-right",
      classNames: {
        content: "flex flex-col gap-2",
      },
      style: {
        "--border-radius": "calc(var(--radius)  + 4px)",
      } as React.CSSProperties,
    });
  }

  return (
    <Card className="w-full sm:max-w-md">
      <CardHeader>
        <CardTitle>From Demo</CardTitle>
      </CardHeader>
      <CardContent>
        <form id="form-demo" onSubmit={form.handleSubmit(onSubmit)}>
          <FieldGroup>
            <div className="flex gap-4">
              <Controller
                name="lastName"
                control={form.control}
                render={({ field, fieldState }) => (
                  <Field data-invalid={fieldState.invalid}>
                    <FieldLabel htmlFor="form-last-name">姓</FieldLabel>
                    <Input
                      {...field}
                      id="form-last-name"
                      aria-invalid={fieldState.invalid}
                      placeholder="山田"
                      autoComplete="off"
                    />
                    {fieldState.invalid && (
                      <FieldError errors={[fieldState.error]} />
                    )}
                  </Field>
                )}
              />
              <Controller
                name="firstName"
                control={form.control}
                render={({ field, fieldState }) => (
                  <Field data-invalid={fieldState.invalid} className="relative">
                    <FieldLabel htmlFor="form-first-name">名</FieldLabel>
                    <Input
                      {...field}
                      id="form-first-name"
                      aria-invalid={fieldState.invalid}
                      placeholder="太郎"
                      autoComplete="off"
                    />
                    {fieldState.invalid && (
                      <FieldError
                        errors={[fieldState.error]}
                        className="absolute bottom-0 translate-y-full pt-1.5 text-xs"
                      />
                    )}
                  </Field>
                )}
              />
            </div>

            <div className="flex gap-4">
              <Controller
                name="lastNameKana"
                control={form.control}
                render={({ field, fieldState }) => (
                  <Field data-invalid={fieldState.invalid} className="relative">
                    <FieldLabel htmlFor="form-last-name">セイ</FieldLabel>
                    <Input
                      {...field}
                      id="form-last-name"
                      aria-invalid={fieldState.invalid}
                      placeholder="ヤマダ"
                      autoComplete="off"
                    />
                    {fieldState.invalid && (
                      <FieldError
                        errors={[fieldState.error]}
                        className="absolute bottom-0 translate-y-full pt-1.5 text-xs"
                      />
                    )}
                  </Field>
                )}
              />
              <Controller
                name="firstNameKana"
                control={form.control}
                render={({ field, fieldState }) => (
                  <Field data-invalid={fieldState.invalid} className="relative">
                    <FieldLabel htmlFor="form-first-name">メイ</FieldLabel>
                    <Input
                      {...field}
                      id="form-first-name"
                      aria-invalid={fieldState.invalid}
                      placeholder="タロウ"
                      autoComplete="off"
                    />
                    {fieldState.invalid && (
                      <FieldError
                        errors={[fieldState.error]}
                        className="absolute bottom-0 translate-y-full pt-1.5 text-xs"
                      />
                    )}
                  </Field>
                )}
              />
            </div>
            <FieldSeparator />
            <Controller
              name="title"
              control={form.control}
              render={({ field, fieldState }) => (
                <Field data-invalid={fieldState.invalid}>
                  <FieldLabel htmlFor="form-demo-title">ご用件</FieldLabel>
                  <Input
                    {...field}
                    id="form-demo-title"
                    aria-invalid={fieldState.invalid}
                    placeholder="例: 購入商品について"
                    autoComplete="off"
                  />
                  {fieldState.invalid && (
                    <FieldError errors={[fieldState.error]} />
                  )}
                </Field>
              )}
            />

            <FieldSeparator />

            <Controller
              name="description"
              control={form.control}
              render={({ field, fieldState }) => (
                <Field data-invalid={fieldState.invalid}>
                  <FieldLabel htmlFor="form-demo-description">
                    お問い合わせ内容
                  </FieldLabel>
                  <InputGroup>
                    <InputGroupTextarea
                      {...field}
                      id="form-demo-description"
                      placeholder="最大100文字以内でご記入ください。"
                      rows={6}
                      className="min-h-24 resize-none"
                      aria-invalid={fieldState.invalid}
                    />
                    <InputGroupAddon align="block-end">
                      <InputGroupText className="tabular-nums">
                        {field.value.length}/100
                      </InputGroupText>
                    </InputGroupAddon>
                  </InputGroup>
                  {fieldState.invalid && (
                    <FieldError errors={[fieldState.error]} />
                  )}
                </Field>
              )}
            />
          </FieldGroup>
        </form>
      </CardContent>

      <CardFooter>
        <Field orientation="horizontal" className="mt-2">
          <Button type="button" variant="outline" onClick={() => form.reset()}>
            リセット
          </Button>
          <Button type="submit" form="form-demo">
            送信
          </Button>
        </Field>
      </CardFooter>
    </Card>
  );
}
