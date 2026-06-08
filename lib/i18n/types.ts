export interface CommonTranslations {
  home: string;
  aboutUs: string;
  services: string;
  contact: string;
  contactUs: string;
  requestQuote: string;
  requestNonBindingQuote: string;
  exploreServices: string;
  submitQuoteRequest: string;
  sendMessage: string;
  sending: string;
  submitting: string;
  scroll: string;
  viewServicePage: string;
  email: string;
  phone: string;
  location: string;
  responseNote: string;
  allRightsReserved: string;
  impressum: string;
  privacyPolicy: string;
  chevronBackToHome: string;
  error404: string;
  signalLost: string;
  notFoundDesc: string;
  returnToGlobalView: string;
  toggleMenu: string;
  changeLanguage: string;
  switchToEnglish: string;
  switchToGerman: string;
}

export interface HeroTranslations {
  eyebrow: string;
  titleHtml: string; // supports HTML tags like <span class="text-gold">Munich</span>
  description: string;
}

export interface KpiTranslations {
  coreServices: { label: string; detail: string };
  languages: { label: string; detail: string };
  responseTime: { label: string; detail: string };
}

export interface ServiceStripTranslations {
  eyebrow: string;
  title: string;
}

export interface IntroTranslations {
  eyebrow: string;
  titleHtml: string;
  desc: string;
  p1: string;
  p2: string;
}

export interface CoreServiceItem {
  id: string;
  title: string;
  description: string;
  tags: string[];
}

export interface CoreServicesTranslations {
  titleHtml: string;
  desc: string;
  exploreService: string;
  services: CoreServiceItem[];
}

export interface WhyWorkWithUsItem {
  title: string;
  desc: string;
}

export interface WhyWorkWithUsTranslations {
  titleHtml: string;
  desc: string;
  reasons: WhyWorkWithUsItem[];
}

export interface ValueDeliverTranslations {
  eyebrow: string;
  titleHtml: string;
  description: string;
  items: string[];
}

export interface ServiceHighlightItem {
  title: string;
  description: string;
}

export interface ServiceHighlightsTranslations {
  title: string;
  items: ServiceHighlightItem[];
  languagesTitle: string;
  languagesLead: string;
  languagesBody1: string;
  languagesBody2: string;
  appointmentLabel: string;
}

export interface ProcessStep {
  num: string;
  title: string;
  desc: string;
}

export interface ProcessSectionTranslations {
  eyebrow: string;
  title: string;
  steps: ProcessStep[];
}

export interface CtaSectionTranslations {
  eyebrow: string;
  title: string;
  desc: string;
  button: string;
}

export interface FooterTranslations {
  slogan: string;
  description: string;
  quickLinks: string;
  ourServices: string;
  getInTouch: string;
  locationLabel: string;
  emailLabel: string;
  hoursLabel: string;
  hoursDesc: string;
  languageLabel: string;
  languagesSupported: string;
  quoteLabel: string;
  quoteDesc: string;
}

export interface TeamMember {
  name: string;
  role: string;
  initials: string;
  description: string;
}

export interface FoundationCard {
  title: string;
  body: string;
}

export interface AboutTranslations {
  eyebrow: string;
  title: string;
  description: string;
  whoWeAreTitle: string;
  whoWeAreSubhead: string;
  whoWeAreParagraphs: string[];
  foundationTitle: string;
  foundationDesc: string;
  foundationCards: FoundationCard[];
  teamTitle: string;
  teamDesc: string;
  teamCoordinationNote: string;
  teamMembers: TeamMember[];
  coordinationTitle: string;
  coordinationDesc: string;
  whyWorkWithUsTitle: string;
  whyWorkWithUsSubhead: string;
  whyWorkWithUsParagraphs: string[];
  communicationTitle: string;
  communicationSubhead: string;
  communicationDesc: string;
}

export interface ContactTranslations {
  eyebrow: string;
  title: string;
  description: string;
  infoTitle: string;
  infoDesc: string;
  formEyebrow: string;
  formTitle: string;
  formDesc: string;
  processEyebrow: string;
  processTitle: string;
  processSteps: { title: string; desc: string }[];
  estimateEyebrow: string;
  estimateTitle: string;
}

export interface QuoteTranslations {
  eyebrow: string;
  title: string;
  description: string;
  formEyebrow: string;
  formTitle: string;
  formDesc: string;
  processEyebrow: string;
  processTitle: string;
  processSteps: { title: string; desc: string }[];
  generalEyebrow: string;
  generalTitle: string;
}

export interface FormTranslations {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  phoneOptional: string;
  subject: string;
  inquiryType: string;
  message: string;
  messagePlaceholder: string;
  attachment: string;
  attachmentOptional: string;
  attachmentLimit: string;
  attachmentNotePlaceholder: string;
  company: string;
  serviceRequired: string;
  projectType: string;
  projectDetails: string;
  projectDetailsPlaceholder: string;
  expectedTimeline: string;
  estimatedBudget: string;
  consentPrefix: string;
  consentLink: string;
  consentSuffix: string;
  successContact: string;
  successQuote: string;
  servicesList: string[];
  projectTypeList: string[];
  timelineList: string[];
  budgetList: string[];
  inquiryTypeList: string[];
}

export interface ServicePageItemTranslations {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  eyebrow: string;
  introTitle: string;
  introParagraphs: string[];
  problemWeSolve: string;
  deliverables: { title: string; description: string }[];
  tools: { name: string; context: string }[];
  useCases: { title: string; description: string }[];
  providesTitle: string;
  providesItems: { title: string; description: string; includes: string[] }[];
  approachTitle: string;
  approachItems: { title: string; description: string }[];
  suitableTitle: string;
  suitableItems: string[];
  howWeWorkTitle: string;
  howWeWorkSteps: { number: number; title: string; description: string }[];
  ctaTitle: string;
  ctaDescription: string;
  slogan: string;
}

export interface ServiceDetailContainerTranslations {
  builtAroundRequirements: string;
  whatWeProvide: string;
  approach: string;
  suitableFor: string;
  howWeWork: string;
  requestQuote: string;
  stepLabel: string;
}

export interface ServicesOverviewTranslations {
  eyebrow: string;
  title: string;
  description: string;
  sectionTitle: string;
  paragraphs: string[];
  chooseService: string;
  viewServicePage: string;
}

export interface WorkProjectTranslation {
  id: string;
  title: string;
  category: string;
  client: string;
  role: string;
  metric: string;
  desc: string;
  tags: string[];
}

export interface WorkTranslations {
  eyebrow: string;
  title: string;
  description: string;
  categories: string[];
  requestDetails: string;
  projects: WorkProjectTranslation[];
}

export interface SeoMetadata {
  title: string;
  description: string;
}

export interface SeoTranslations {
  home: SeoMetadata;
  about: SeoMetadata;
  services: SeoMetadata;
  work: SeoMetadata;
  contact: SeoMetadata;
  requestQuote: SeoMetadata;
  impressum: SeoMetadata;
  privacyPolicy: SeoMetadata;
}

export interface Translations {
  common: CommonTranslations;
  hero: HeroTranslations;
  kpi: KpiTranslations;
  serviceStrip: ServiceStripTranslations;
  intro: IntroTranslations;
  coreServices: CoreServicesTranslations;
  whyWorkWithUs: WhyWorkWithUsTranslations;
  valueDeliver: ValueDeliverTranslations;
  serviceHighlights: ServiceHighlightsTranslations;
  processSection: ProcessSectionTranslations;
  cta: CtaSectionTranslations;
  footer: FooterTranslations;
  about: AboutTranslations;
  contact: ContactTranslations;
  quote: QuoteTranslations;
  form: FormTranslations;
  servicesData: Record<string, ServicePageItemTranslations>;
  serviceDetail: ServiceDetailContainerTranslations;
  servicesOverview: ServicesOverviewTranslations;
  work: WorkTranslations;
  seo: SeoTranslations;
}
