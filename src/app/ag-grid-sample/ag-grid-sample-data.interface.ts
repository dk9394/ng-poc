export interface IAgGridSampleData {
  accounts: IAgGridAccount[];
  customers: IAgGridCustomer[];
  orderItems: IAgGridOrderItem[];
  orders: IAgGridOrder[];
  products: IAgGridProduct[];
}

export interface IAgGridAccount {
  id: number;
  customerId: number;
  amount: string;
  name: string;
  accountNumber: string;
}

export interface IAgGridCustomer {
  id: number;
  avatar: string;
  catchPhrase: string;
  name: string;
  address: {
    city: string;
    state: string;
    street1: string;
    zip: string;
  };
}

export interface IAgGridOrderItem {
  orderId: number;
  productId: number;
  quantity: number;
}

export interface IAgGridOrder {
  accountId: number;
  customerId: number;
  dateOfOrder: string;
  id: number;
}

export interface IAgGridProduct {
  id: number;
  name: string;
  price: string;
  imageUrl: string;
  details: string;
  color: string;
}
