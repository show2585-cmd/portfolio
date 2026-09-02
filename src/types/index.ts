export interface SkillCategory {
  title: string
  items: string[]
}

export interface Project {
  title: string
  type: string
  client?: string
  contribution: string
  description: string
  responsibilities: string[]
  stack: string[]
}

export interface Experience {
  company: string
  period: string
  projects: Project[]
}

export interface SideProject {
  title: string
  period: string
  description: string
  features: string[]
  stack: string[]
  image?: string
  link?: string
}

export interface AgentBoundary {
  always: string[]
  confirm: string[]
  never: string[]
}

export interface Agent {
  handle: string
  name: string
  description: string
  persona: string[]
  knowledge: string[]
  boundary: AgentBoundary
}
