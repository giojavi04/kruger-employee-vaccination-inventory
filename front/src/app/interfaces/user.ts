export interface User {
  id?: number;
  identification: number;
  firstName: string;
  lastName: string;
  email: string;
  birthDate?: string | null;
  direction?: string | null;
  phone?: string | null;
  isVaccine: boolean;
  vaccine?: string | null;
  vaccineDate?: string | null;
  vaccineTimes?: number | null;
  isAdmin?: boolean;
  createdAt?: string;
}
