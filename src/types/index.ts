export type ProjectCategory = 'web' | 'design' | 'social' | 'packaging';

export interface Project {
  id: string;
  title: string;
  category: ProjectCategory;
  categoryLabel: string;
  image: string;
  gallery?: string[]; // Multiple screenshot previews
  description: string;
  descriptionMl?: string; // Optional Malayalam description
  client?: string;
  year?: string;
  tags: string[];
  link?: string;
  featured?: boolean;
  aspect?: 'portrait' | 'landscape';
}

export interface ServiceItem {
  id: ProjectCategory;
  title: string;
  subtitle: string;
  description: string;
  iconName: string;
  deliverables: string[];
  badge: string;
}
