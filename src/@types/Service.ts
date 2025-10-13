export type ServiceType = "hair" | "beard" | "eyebrow";

export type Service = {
  id: any;
  name: string;
  description: string;
  price: number;
  duration: number;
  type: ServiceType;
  imgUrl: string;
}