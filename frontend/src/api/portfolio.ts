export interface Profile {
  name: string;
  jobTitle: string;
  imageUrl: string;
  githubUrl: string;
  resumeUrl: string;
  personalityTraits: string[];
  aboutTitle: string;
  aboutRole: string;
  aboutParagraphs: string[];
}

export interface SkillCategory {
  name: string;
  proficiency: number;
}

export interface SkillsDetails {
  heading: string;
  proficiencyLabel: string;
  resumeUrl: string;
  categories: SkillCategory[];
}

export interface PortfolioProject {
  name: string;
  description: string;
  imageUrl: string;
  imageAlt: string;
  websiteUrl: string | null;
  technologies: string[];
}

export interface ContactLink {
  name: string;
  url: string;
  iconClass: string;
}

export interface ContactInfo {
  intro: string;
  socialLinks: ContactLink[];
}

function isRecord(value: unknown): value is Record<string, unknown> {
  return typeof value === 'object' && value !== null;
}

function isStringArray(value: unknown): value is string[] {
  return Array.isArray(value) && value.every((item) => typeof item === 'string');
}

export function isStringArrayResponse(value: unknown): value is string[] {
  return isStringArray(value);
}

export function isProfile(value: unknown): value is Profile {
  return (
    isRecord(value) &&
    typeof value.name === 'string' &&
    typeof value.jobTitle === 'string' &&
    typeof value.imageUrl === 'string' &&
    typeof value.githubUrl === 'string' &&
    typeof value.resumeUrl === 'string' &&
    isStringArray(value.personalityTraits) &&
    typeof value.aboutTitle === 'string' &&
    typeof value.aboutRole === 'string' &&
    isStringArray(value.aboutParagraphs)
  );
}

export function isSkillsDetails(value: unknown): value is SkillsDetails {
  return (
    isRecord(value) &&
    typeof value.heading === 'string' &&
    typeof value.proficiencyLabel === 'string' &&
    typeof value.resumeUrl === 'string' &&
    Array.isArray(value.categories) &&
    value.categories.every(
      (category) =>
        isRecord(category) &&
        typeof category.name === 'string' &&
        typeof category.proficiency === 'number',
    )
  );
}

export function isProjects(value: unknown): value is PortfolioProject[] {
  return (
    Array.isArray(value) &&
    value.every(
      (project) =>
        isRecord(project) &&
        typeof project.name === 'string' &&
        typeof project.description === 'string' &&
        typeof project.imageUrl === 'string' &&
        typeof project.imageAlt === 'string' &&
        (typeof project.websiteUrl === 'string' || project.websiteUrl === null) &&
        isStringArray(project.technologies),
    )
  );
}

export function isContactInfo(value: unknown): value is ContactInfo {
  return (
    isRecord(value) &&
    typeof value.intro === 'string' &&
    Array.isArray(value.socialLinks) &&
    value.socialLinks.every(
      (link) =>
        isRecord(link) &&
        typeof link.name === 'string' &&
        typeof link.url === 'string' &&
        typeof link.iconClass === 'string',
    )
  );
}

export function hasNonEmptyArray<T>(value: T[]): boolean {
  return value.length > 0;
}

export function hasProfileData(profile: Profile): boolean {
  return profile.name.trim().length > 0 && profile.jobTitle.trim().length > 0;
}

export function hasSkillsDetailsData(skills: SkillsDetails): boolean {
  return skills.categories.length > 0;
}

export function hasContactData(contact: ContactInfo): boolean {
  return contact.intro.trim().length > 0 && contact.socialLinks.length > 0;
}
