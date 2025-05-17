"use client";

import React, { useState } from "react";
import styles from "@/app/_styles/sections/sections.module.css";

const ContactSection: React.FC = () => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: ""
    });

    const [formStatus, setFormStatus] = useState<{
        submitted: boolean;
        success: boolean;
        message: string;
    }>({
        submitted: false,
        success: false,
        message: ""
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSubmit = async(e: React.FormEvent) => {
        e.preventDefault();

        // Basic Validation
        if (!formData.name || !formData.email || !formData.message) {
            setFormStatus({
                submitted: true,
                success: false,
                message: "Please fill in all fields."
            });
            return;
        }

        // Email Validation
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(formData.email)) {
            setFormStatus({
                submitted: true,
                success: false,
                message: "Please enter a valid email address."
            });
            return;
        }

        try{
            await new Promise(resolve => setTimeout(resolve, 1000));

            setFormData({ name: "", email: "", message: ""});

            setFormStatus({
                submitted: true,
                success: true,
                message: "Your message has been sent successfully."
            });

            // Reset Success Message after 5 Seconds
            setTimeout(() => {
                setFormStatus(prev => ({
                    ...prev,
                    submitted: false,
                    message: ""
                }));
            }, 3000);

        } catch (error) {
            setFormStatus({
                submitted: true,
                success: false,
                message: "Failed to send your message. Please try after sometime."
            });
        }
    };

    return(
        <section id="contact" className={styles.section}>
            <div className={styles.container}>
                <h2 className={styles.sectionTitle}>Get In Touch</h2>

                <div className={styles.contactContent}>
                    <div className={styles.contactInfo}>
                        <h3>Let's Connect</h3>
                        <p>
                            Feel free to reach out if you're looking for a developer, have a question,
                            or just want to connect.
                        </p>

                        <div className={styles.contactDetails}>
                            <div className={styles.contactItem}>
                                <span className={styles.contactLabel}>Email:</span>
                                <a href="mailto:your.email@gmail.com" className={styles.contactLink}>your.email@gmail.com</a>
                            </div>

                            <div className={styles.contactItem}>
                                <span className={styles.contactLabel}>LinkedIn:</span>
                                <a href="linkedIn" className={styles.contactLink}>LinkedIn</a>
                            </div>

                            <div className={styles.contactItem}>
                                <span className={styles.contactLabel}>GitHub:</span>
                                <a href="github" className={styles.contactLink}>GitHub</a>
                            </div>
                        </div>
                    </div>

                    <div className={styles.contactForm}>
                        <form onSubmit={handleSubmit}>
                            <div className={styles.formGroup}>
                                <label htmlFor="name" className={styles.formLabel}>Name</label>
                                <input 
                                    type="text"
                                    id="name"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    className={styles.formInput}
                                    placeholder="Your Name"
                                />
                            </div>

                            <div className={styles.formGroup}>
                                <label htmlFor="email" className={styles.formLabel}>Email</label>
                                <input 
                                    type="email"
                                    id="email" 
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    className={styles.formInput}
                                    placeholder="your.email@example.com"
                                />
                            </div>

                            <div className={styles.formGroup}>
                                <label htmlFor="message" className={styles.formLabel}>Message</label>
                                <textarea 
                                    name="message" 
                                    id="message"
                                    value={formData.message}
                                    onChange={handleChange}
                                    className={styles.formTextarea}
                                    placeholder="Your message..."
                                    rows={5}
                                />
                            </div>

                            <button type="submit" className={styles.submitButton}>Send Message</button>

                            {formStatus.submitted && (
                                <div className={`${styles.formMessage} ${formStatus.success ? styles.success : styles.error}`}>
                                    {formStatus.message}
                                </div>
                            )}
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ContactSection;