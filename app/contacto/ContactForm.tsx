"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Send } from "lucide-react";
import { contactFormSchema, type ContactFormData } from "./contactFormSchema";
import { useState } from "react";

export default function ContactForm() {
  const [isSubmitted, setIsSubmitted] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactFormSchema),
  });

  const onSubmit = async (data: ContactFormData) => {
    // Simula el envío (sitio estático sin API)
    await new Promise((resolve) => setTimeout(resolve, 1500));
    console.log("Form data:", data);
    reset();
    setIsSubmitted(true);
  };

  if (isSubmitted) {
    return (
      <div className="bg-brand-grey p-8 sm:p-12 rounded-[2.5rem] border border-gray-100 shadow-2xl shadow-gray-200/50 text-center">
        <div className="w-16 h-16 bg-brand-blue rounded-full flex items-center justify-center mx-auto mb-6">
          <Send size={24} className="text-white" />
        </div>
        <h3 className="text-2xl font-bold text-brand-black mb-2">
          ¡Mensaje Enviado!
        </h3>
        <p className="text-gray-500 font-light mb-8 max-w-md mx-auto">
          Gracias por contactarnos. Un asesor de Equipos y Superficies de México
          te responderá a la brevedad.
        </p>
        <button
          onClick={() => setIsSubmitted(false)}
          className="bg-brand-black text-white px-8 py-4 rounded-2xl font-bold hover:bg-brand-blue transition-all duration-500"
        >
          Enviar otro mensaje
        </button>
      </div>
    );
  }

  return (
    <div className="bg-brand-grey p-8 sm:p-12 rounded-[2.5rem] border border-gray-100 shadow-2xl shadow-gray-200/50 transition-all hover:shadow-none">
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-8" noValidate>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="space-y-2">
            <label
              htmlFor="name"
              className="text-[10px] uppercase tracking-widest font-bold text-gray-400 ml-1"
            >
              Nombre Completo
            </label>
            <input
              id="name"
              type="text"
              placeholder="Ej. Juan Pérez"
              aria-invalid={errors.name ? "true" : "false"}
              aria-describedby={errors.name ? "name-error" : undefined}
              {...register("name")}
              className={`w-full bg-white px-6 py-4 rounded-2xl border-none ring-1 transition-all placeholder:text-gray-300 font-mono text-sm outline-none focus:ring-2 focus:ring-brand-blue ${
                errors.name ? "ring-2 ring-red-400" : "ring-gray-200"
              }`}
            />
            {errors.name && (
              <p id="name-error" className="text-red-500 text-xs ml-1 mt-1" role="alert">
                {errors.name.message}
              </p>
            )}
          </div>
          <div className="space-y-2">
            <label
              htmlFor="email"
              className="text-[10px] uppercase tracking-widest font-bold text-gray-400 ml-1"
            >
              Email Corporativo
            </label>
            <input
              id="email"
              type="email"
              placeholder="juan@empresa.com"
              aria-invalid={errors.email ? "true" : "false"}
              aria-describedby={errors.email ? "email-error" : undefined}
              {...register("email")}
              className={`w-full bg-white px-6 py-4 rounded-2xl border-none ring-1 transition-all placeholder:text-gray-300 font-mono text-sm outline-none focus:ring-2 focus:ring-brand-blue ${
                errors.email ? "ring-2 ring-red-400" : "ring-gray-200"
              }`}
            />
            {errors.email && (
              <p id="email-error" className="text-red-500 text-xs ml-1 mt-1" role="alert">
                {errors.email.message}
              </p>
            )}
          </div>
        </div>

        <div className="space-y-2">
          <label
            htmlFor="subject"
            className="text-[10px] uppercase tracking-widest font-bold text-gray-400 ml-1"
          >
            Asunto de Interés
          </label>
          <input
            id="subject"
            type="text"
            placeholder="Ej. Cotización Allanadora de Concreto"
            aria-invalid={errors.subject ? "true" : "false"}
            aria-describedby={errors.subject ? "subject-error" : undefined}
            {...register("subject")}
            className={`w-full bg-white px-6 py-4 rounded-2xl border-none ring-1 transition-all placeholder:text-gray-300 font-mono text-sm outline-none focus:ring-2 focus:ring-brand-blue ${
              errors.subject ? "ring-2 ring-red-400" : "ring-gray-200"
            }`}
          />
          {errors.subject && (
            <p id="subject-error" className="text-red-500 text-xs ml-1 mt-1" role="alert">
              {errors.subject.message}
            </p>
          )}
        </div>

        <div className="space-y-2">
          <label
            htmlFor="message"
            className="text-[10px] uppercase tracking-widest font-bold text-gray-400 ml-1"
          >
            Mensaje o Requerimientos
          </label>
          <textarea
            id="message"
            rows={5}
            placeholder="Describa brevemente su proyecto o el equipo que requiere..."
            aria-invalid={errors.message ? "true" : "false"}
            aria-describedby={errors.message ? "message-error" : undefined}
            {...register("message")}
            className={`w-full bg-white px-6 py-4 rounded-2xl border-none ring-1 transition-all placeholder:text-gray-300 font-mono text-sm resize-none outline-none focus:ring-2 focus:ring-brand-blue ${
              errors.message ? "ring-2 ring-red-400" : "ring-gray-200"
            }`}
          ></textarea>
          {errors.message && (
            <p id="message-error" className="text-red-500 text-xs ml-1 mt-1" role="alert">
              {errors.message.message}
            </p>
          )}
        </div>

        <button
          type="submit"
          disabled={isSubmitting}
          className="group w-full bg-brand-black text-white py-5 rounded-2xl font-bold flex items-center justify-center gap-3 hover:bg-brand-blue transition-all duration-500 shadow-xl active:scale-95 disabled:opacity-60 disabled:cursor-not-allowed"
        >
          <Send
            size={18}
            className={`transition-transform ${
              isSubmitting ? "animate-pulse" : "group-hover:translate-x-1 group-hover:-translate-y-1"
            }`}
          />
          {isSubmitting ? "ENVIANDO..." : "ENVIAR SOLICITUD"}
        </button>
      </form>
    </div>
  );
}
