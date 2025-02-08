"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { motion } from "framer-motion";
import emailjs from "emailjs-com";
import { Send, Mail, User, MessageCircle } from "lucide-react";

const ContactForm = () => {
    const { register, handleSubmit, reset, formState: { errors, isSubmitting } } = useForm();
    const [success, setSuccess] = useState(false);
    const [error, setError] = useState(false);

    const onSubmit = async (data: any) => {
        try {
            await emailjs.send(
                process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
                process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,
                {
                    name: data.name,
                    email: data.email,
                    subject: data.subject,
                    message: data.message,
                },
                process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!
            );

            setSuccess(true);
            reset();
        } catch (err) {
            setError(true);
        }
    };

    return (
        <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="w-full max-w-3xl mx-auto p-6 bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-900 dark:to-indigo-900 rounded-lg shadow-lg"
        >
            <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-200 mb-4 text-center">
                Me contacter 📩
            </h2>

            {success && <p className="text-green-500 text-center">✅ Message envoyé avec succès !</p>}
            {error && <p className="text-red-500 text-center">❌ Une erreur est produite</p>}

            <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                {/* Nom */}
                <div className="flex items-center border p-2 rounded-lg bg-gray-100 dark:bg-gray-700">
                    <User className="text-gray-500 mr-2" size={20} />
                    <input
                        type="text"
                        placeholder="Votre nom"
                        {...register("name", { required: "Nom requis" })}
                        className="w-full bg-transparent focus:outline-none"
                    />
                </div>
                {errors.name && <p className="text-red-500">{String(errors.name.message)}</p>}

                {/* Email */}
                <div className="flex items-center border p-2 rounded-lg bg-gray-100 dark:bg-gray-700">
                    <Mail className="text-gray-500 mr-2" size={20} />
                    <input
                        type="email"
                        placeholder="Votre email"
                        {...register("email", { required: "Email requis", pattern: /^\S+@\S+$/i })}
                        className="w-full bg-transparent focus:outline-none"
                    />
                </div>
                {errors.email && <p className="text-red-500">{String(errors.email.message)}</p>}

                {/* Sujet */}
                <div className="flex items-center border p-2 rounded-lg bg-gray-100 dark:bg-gray-700">
                    <MessageCircle className="text-gray-500 mr-2" size={20} />
                    <input
                        type="text"
                        placeholder="Sujet"
                        {...register("subject", { required: "Sujet requis" })}
                        className="w-full bg-transparent focus:outline-none"
                    />
                </div>
                {errors.subject && <p className="text-red-500">{String(errors.subject.message)}</p>}

                {/* Message */}
                <div className="border p-2 rounded-lg bg-gray-100 dark:bg-gray-700">
          <textarea
              placeholder="Votre message"
              {...register("message", { required: "Message requis" })}
              className="w-full bg-transparent focus:outline-none p-2"
              rows={4}
          />
                </div>
                {errors.message && <p className="text-red-500">{String(errors.message.message)}</p>}

                {/* Bouton d'envoi */}
                <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    disabled={isSubmitting}
                    className="w-full flex items-center justify-center bg-blue-600 text-white font-medium py-2 rounded-lg hover:bg-blue-700 transition-all"
                >
                    <Send size={18} className="mr-2" />
                    Envoyer
                </motion.button>
            </form>
        </motion.div>
    );
};

export default ContactForm;
