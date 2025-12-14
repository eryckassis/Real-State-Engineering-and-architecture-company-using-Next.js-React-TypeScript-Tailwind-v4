import type { ImageData } from "./common";

// Aqui representa um review/depoimento de cliente.

export interface Review {
  id: string;
  clientName: string;
  clientRole: string;
  clientCompany?: string;
  clientImage: ImageData;
  quote: string;
  rating?: number;
  projectId?: string;
}
