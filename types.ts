import { LucideIcon } from 'lucide-react';

export interface NavItem {
  label: string;
  path: string;
}

export interface Pillar {
  letter: string;
  title: string;
  description: string;
  icon: LucideIcon;
}

export interface Service {
  id: string;
  title: string;
  description: string;
  icon: LucideIcon;
}

export interface Stakeholder {
  id: string;
  title: string;
  description: string;
  benefits: string[];
}

export interface BlogPost {
  id: string;
  title: string;
  date: string;
  category: string;
  excerpt: string;
}

export interface Metric {
  label: string;
  value: string;
  trend: string;
  color: string;
}