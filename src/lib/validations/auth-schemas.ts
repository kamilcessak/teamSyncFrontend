import { z } from "zod";

const emailField = z
  .string()
  .trim()
  .min(1, "Podaj adres e-mail")
  .email("Podaj poprawny adres e-mail");

const passwordField = z
  .string()
  .min(8, "Hasło musi mieć co najmniej 8 znaków");

const firstNameField = z
  .string()
  .trim()
  .min(1, "Imię jest wymagane");

const lastNameField = z
  .string()
  .trim()
  .min(1, "Nazwisko jest wymagane");

const companyNameField = z
  .string()
  .trim()
  .min(1, "Nazwa firmy jest wymagana");

export const loginSchema = z.object({
  email: emailField,
  password: passwordField,
});

export type LoginFormValues = z.infer<typeof loginSchema>;

export const registerEmployeeSchema = z.object({
  firstName: firstNameField,
  lastName: lastNameField,
  email: emailField,
  password: passwordField,
});

export type RegisterEmployeeFormValues = z.infer<
  typeof registerEmployeeSchema
>;

export const registerClientSchema = z.object({
  firstName: firstNameField,
  lastName: lastNameField,
  email: emailField,
  companyName: companyNameField,
  password: passwordField,
});

export type RegisterClientFormValues = z.infer<typeof registerClientSchema>;
