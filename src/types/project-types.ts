export interface ProjectDetails {
  title: string;
  description: string;
  image: string;
  github: string;
}

export interface Project {
  id: number;
  details: ProjectDetails;
}
