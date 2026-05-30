import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import PageHero from "@/components/ui-custom/PageHero";
import CTASection from "@/components/sections/CTASection";
import { Card } from "@/components/ui-custom/Card";

export const metadata: Metadata = {
  title: "About Us | Ravian Matrix Systems",
  description: "Building IT, web, and geospatial solutions.",
};

const teamMembers = [
  {
    name: "Arslan Saleem",
    role: "Founder & Geospatial Engineer",
    initials: "AS",
    description:
      "Arslan is the founder of Ravian Matrix Systems. His background is in geospatial engineering, with a focus on GIS, remote sensing, spatial data, and technical project coordination.",
  },
  {
    name: "Manisha Kumari",
    role: "Client Relations & Business Development",
    image: "/team-manisha.png",
    initials: "MK",
    description:
      "Manisha leads client relations, business development, and sales communication. She holds an MBA in Sales and Marketing and focuses on client communication, requirement discussions, and business coordination.",
  },
  {
    name: "Haseeb Raza",
    role: "Web Development Lead",
    initials: "HR",
    description:
      "Haseeb holds a Bachelor’s degree in Computer Science and leads web development work, with a focus on modern websites, web systems, responsive interfaces, and technical web implementation.",
  },
  {
    name: "Qamar Raza",
    role: "Application Development Lead",
    initials: "QR",
    description:
      "Qamar leads application development, with a focus on custom applications, backend systems, frontend systems, API integration, and digital platform development.",
  },
  {
    name: "Sidra Noor",
    role: "Geospatial Intelligence Lead",
    initials: "SN",
    description:
      "Sidra leads geospatial and remote sensing work, with specialization in GIS, spatial data processing, mapping, environmental analysis, and remote sensing interpretation.",
  },
  {
    name: "Waqas Mubarik",
    role: "Digital Growth Lead",
    initials: "WM",
    description:
      "Waqas leads digital marketing, online visibility, SEO, content direction, and campaign support. His focus is on helping businesses improve their digital presence and brand communication.",
  },
];

const foundationCards = [
  {
    title: "Our Mission",
    body:
      "To deliver reliable IT, web, geospatial, and digital solutions that help businesses operate better, present themselves professionally, and make smarter use of data and technology.",
  },
  {
    title: "Our Vision",
    body:
      "To become a trusted technical service provider for businesses in Germany, Europe, and international markets by delivering structured, practical, and scalable digital solutions.",
  },
  {
    title: "Our Values",
    body:
      "We focus on clarity, reliability, practical execution, and professional communication. Every project should be useful, understandable, and aligned with the client’s real requirements.",
  },
];

export default function AboutPage() {
  return (
    <div className="bg-bg-base min-h-screen text-primary">
      <PageHero
        eyebrow="About Ravian Matrix Systems"
        title="Building IT, Web, and Geospatial Solutions"
        description="Ravian Matrix Systems is a technical services business focused on web solutions, software development, geospatial intelligence, and digital growth."
      />

      <section className="py-12 sm:py-20 md:py-32 bg-bg-surface border-b border-line">
        <div className="max-w-[1000px] mx-auto px-6 sm:px-8">
          <div className="grid grid-cols-1 md:grid-cols-[0.8fr_1.2fr] gap-8 md:gap-16 items-start">
            <div>
              <h2 className="text-[28px] sm:text-[34px] tracking-tight font-bold leading-tight">
                Who We Are
              </h2>
            </div>
            <div className="flex flex-col gap-6 text-[15px] sm:text-[16px] leading-[1.65] text-muted">
              <p className="font-semibold text-gold">
                A Technical Service Partner for Digital and Spatial Solutions
              </p>
              <p>
                We combine IT development, web systems, software solutions, geospatial capability, and digital communication under one structured service model.
              </p>
              <p>
                Our work is built around clear requirements, practical delivery, and reliable communication. We help clients move from an idea, business need, or technical challenge to a working digital solution.
              </p>
              <p>
                We support clients in English and German.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 sm:py-20 md:py-32 bg-bg-base border-b border-line">
        <div className="max-w-[1280px] mx-auto px-6 sm:px-8">
          <div className="max-w-[760px] mb-12">
            <h2 className="text-[32px] sm:text-[42px] font-bold tracking-tight">Our Foundation</h2>
            <p className="text-[15px] sm:text-[16px] leading-[1.6] text-muted mt-4">
              Mission, vision, and values from the source material that define how we work and how we communicate.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {foundationCards.map((card) => (
              <div key={card.title} className="flex">
                <Card className="p-6 sm:p-8 bg-bg-surface border-line flex flex-col h-full w-full" glow>
                  <div className="font-mono text-xs tracking-[0.12em] uppercase text-gold mb-4">{card.title}</div>
                  <p className="text-[14.5px] leading-relaxed text-muted">{card.body}</p>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-12 sm:py-20 md:py-32 bg-bg-surface border-b border-line">
        <div className="max-w-[1280px] mx-auto px-6 sm:px-8">
          <div className="max-w-[820px] mb-12">
            <h2 className="text-[32px] sm:text-[42px] font-bold tracking-tight">Our Team</h2>
            <p className="text-[15px] sm:text-[16px] leading-[1.6] text-muted mt-4">
              Our team brings together selected specialists across geospatial intelligence, software development, digital growth, and client communication.
            </p>
            <p className="text-[14px] leading-[1.6] text-muted/80 mt-3">
              Project communication, coordination, and delivery are managed through Ravian Matrix Systems in Munich to ensure clear responsibility, structured execution, and consistent quality.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {teamMembers.map((member) => (
              <div key={member.name} className="flex">
                <Card className="p-6 sm:p-8 bg-bg-base border-line flex flex-col h-full w-full" glow>
                  <div className="mb-6 h-28 w-28 rounded-full border border-line bg-bg-surface overflow-hidden flex items-center justify-center text-gold font-display text-[28px] font-semibold">
                    {member.image ? (
                      <Image
                        src={member.image}
                        alt={member.name}
                        width={160}
                        height={160}
                        className="h-full w-full object-cover object-top"
                      />
                    ) : (
                      <span>{member.initials}</span>
                    )}
                  </div>
                  <div className="font-mono text-xs tracking-[0.12em] uppercase text-gold mb-4">{member.role}</div>
                  <h3 className="text-[20px] font-semibold text-primary mb-4">{member.name}</h3>
                  <p className="text-[14px] leading-relaxed text-muted">{member.description}</p>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-12 sm:py-20 md:py-32 bg-bg-base border-b border-line">
        <div className="max-w-[1000px] mx-auto px-6 sm:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16">
            <div className="space-y-10">
              <div>
                <h3 className="text-[22px] font-bold text-primary mb-4">Project Coordination</h3>
                <p className="text-[14.5px] leading-relaxed text-muted">
                  Ravian Matrix Systems remains the central point of contact for each project. We manage requirement review, communication, coordination, quality control, and delivery through our business structure.
                </p>
              </div>

              <div>
                <h3 className="text-[22px] font-bold text-primary mb-4">Why Work With Us</h3>
                <p className="text-[14.5px] leading-relaxed text-gold font-semibold mb-2">
                  Practical, Flexible, and Requirement-Based
                </p>
                <p className="text-[14.5px] leading-relaxed text-muted">
                  We do not force one fixed technology, template, or service model. Each project is reviewed based on its purpose, users, complexity, and long-term needs.
                </p>
                <p className="text-[14.5px] leading-relaxed text-muted mt-4">
                  Our goal is to deliver digital and technical solutions that are structured, reliable, and useful in real business environments.
                </p>
              </div>
            </div>

            <Card className="p-8 sm:p-10 bg-bg-surface border-line flex flex-col justify-between" glow>
              <div>
                <h3 className="text-[22px] font-bold text-primary mb-4">Communication</h3>
                <p className="text-[14.5px] leading-relaxed text-gold font-semibold mb-2">
                  English and German Support
                </p>
                <p className="text-[14.5px] leading-relaxed text-muted">
                  We communicate with clients in English and German. Initial inquiries are handled through the contact form or email. After reviewing the request, we can arrange a call, virtual meeting, or in-person discussion by appointment.
                </p>
                <p className="text-[14.5px] leading-relaxed text-muted mt-4">
                  We respond within 24 hours on business days with an initial reply or a non-binding quote where possible.
                </p>
              </div>

              <div className="mt-8 pt-6 border-t border-line">
                <Link href="/request-quote" className="btn btn-primary w-full justify-center">
                  Request a Quote <span className="arrow">→</span>
                </Link>
              </div>
            </Card>
          </div>
        </div>
      </section>

      <CTASection />
    </div>
  );
}
