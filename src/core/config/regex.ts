export const user = {
  name: /^[a-zA-Z]+(([',. -][a-zA-Z ])?[a-zA-Z]*)*$/, // pattern: John Doe, John, John-Doe
  userName: /^[a-zA-Z0-9]+$/, // pattern: john_doe, johnDoe, john
  email: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
  phone: /^\d{10,11}$/, // pattern: 11999998888, 1199999888
  password: /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$/, // pattern: 1Aa123456
};

export const product = {
  name: /^[a-zA-Z0-9]{3,30}$/, // pattern: Product 1, Product-1
  description: /^[a-zA-Z0-9]{3,500}$/, // pattern: Product description 1, Product-description-1
  batch: /^[a-zA-Z0-9]{3,30}$/, // pattern: Batch 1, Batch-1
};
