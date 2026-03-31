export type JobStatus = "Saved" | "Applied" | "Interview" | "Offer" | "Rejected";

export interface JobApplication {
  id: string;
  company: string;
  role: string;
  status: JobStatus;
  followUpDate?: string;
  notes?: string;
}
