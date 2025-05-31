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
        loading: boolean;
    }>({
        submitted: false,
        success: false,
        message: "",
        loading: false
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
                message: "Please fill in all fields.",
                loading: false
            });
            return;
        }

        // Email Validation
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(formData.email)) {
            setFormStatus({
                submitted: true,
                success: false,
                message: "Please enter a valid email address.",
                loading: false
            });
            return;
        }

        // Set Loading State
        setFormStatus(prev => ({
            ...prev,
            loading: true,
            submitted: false
        }));

        try{

            const response = await fetch("/api/v1/contact", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(formData)
            });

            const result = await response.json();

            if (response.ok) {
                // Success
                setFormData({name: "", email: "", message: ""});
                setFormStatus({
                    submitted: true,
                    success: true,
                    message: "Your message has been sent successfully!",
                    loading: false
                });

                setTimeout(() => {
                    setFormStatus(prev => ({
                        ...prev,
                        submitted: false,
                        message: ""
                    }));
                }, 5000);
            }
            else {
                // Server Error
                setFormStatus({
                    submitted: true,
                    success: false,
                    message: result.error || "Failed to send your message. Please try again later.",
                    loading: false
                });
            }

        } catch (error) {
            setFormStatus({
                submitted: true,
                success: false,
                message: "Failed to send your message. Please try after sometime.",
                loading: false
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
                                <a 
                                    href="mailto:your-email@gmail.com" 
                                    className={styles.contactLink}
                                    target="_blank"    
                                    rel="noopener noreferrer"
                                >
                                    your-email@gmail.com
                                </a>
                            </div>

                            <div className={styles.contactItem}>
                                <span className={styles.contactLabel}>LinkedIn:</span>
                                <a 
                                    href="your-linkedin" 
                                    className={styles.contactLink}
                                    target="_blank"    
                                    rel="noopener noreferrer"
                                >
                                    LinkedIn
                                </a>
                            </div>

                            <div className={styles.contactItem}>
                                <span className={styles.contactLabel}>GitHub:</span>
                                <a 
                                    href="your-github" 
                                    className={styles.contactLink}
                                    target="_blank"    
                                    rel="noopener noreferrer"
                                >
                                    GitHub
                                </a>
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
                                    disabled={formStatus.loading}
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
                                    disabled={formStatus.loading}
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
                                    disabled={formStatus.loading}
                                />
                            </div>

                            <button 
                                type="submit" 
                                className={styles.submitButton}
                                disabled={formStatus.loading}
                            >
                                {formStatus.loading ? "Sending..." : "Send Message"}
                            </button>

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