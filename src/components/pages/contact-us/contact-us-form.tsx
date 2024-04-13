import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import type React from "react";

const FieldGroup: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return <div className="flex flex-col gap-2">{children}</div>;
};

export const ContactUsForm: React.FC = () => {
  return (
    <form className="xs:min-w-96 xs:w-auto flex w-full flex-col gap-4 rounded-lg border border-border bg-card p-8 px-4">
      <p className="text-center text-lg font-medium sm:text-2xl">Déjanos un mensaje</p>

      <FieldGroup>
        <Label htmlFor="name">Nombre</Label>
        <Input id="name" name="name" type="text" required placeholder="Nombre" />
      </FieldGroup>

      <FieldGroup>
        <Label htmlFor="email">Correo Electrónico</Label>
        <Input id="email" name="email" type="email" required placeholder="Correo Electrónico" />
      </FieldGroup>

      <FieldGroup>
        <Label htmlFor="message">Mensaje</Label>
        <Textarea id="message" name="message" required placeholder="Mensaje" />
      </FieldGroup>

      <Button type="submit">Enviar Mensaje</Button>
    </form>
  );
};
