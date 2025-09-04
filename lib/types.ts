export type Product = {
  id: number;
  title: string;
  description: string;
  category: string;
  price: number;
  discountPercentage: number;
  rating: number;
  stock: number;
  tags: string[];
  brand: string;
  sku: string;
  weight: number;
  dimensions: Dimensions;
  warrantyInformation: '1 week warranty';
  shippingInformation: 'Ships in 3-5 business days';
  availabilityStatus: 'In Stock';
  reviews: Review[];
  returnPolicy: 'No return policy';
  minimumOrderQuantity: 48;
  meta: Meta;
  images: string[];
  thumbnail: string;
};

type Review = {
  rating: number;
  comment: string;
  date: string;
  reviewerName: string;
  reviewerEmail: string;
};

type Meta = {
  createdAt: string;
  updatedAt: string;
  barcode: string;
  qrCode: string;
};

type Dimensions = {
  width: number;
  height: number;
  depth: number;
};

export type ProductsResponse = {
  products: Product[];
  total: number;
  skip: number;
  limit: number;
};

export type User = {
  id: number;
  username: string;
  firstName: string;
  lastName: string;
  email: string;
};

export type LoginResponse = {
  accessToken: string;
  refreshToken: string;
  id: number;
  username: string;
  email: string;
  firstName: string;
  lastName: string;
  gender: string;
  image: string;
};
