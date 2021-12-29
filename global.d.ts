type statusType =
  | "backlog"
  | "in_progress"
  | "cant_fix"
  | "awaiting_payment"
  | "paid";

interface WorkOrder {
  id: number;
  contact_name: string;
  contact_phone: string;
  description: string;
  status: statusType;
  price: string;
}
