import { NextPage } from "next";

interface Product {
  id: number;
  name: string;
  price: number;
  image: string;
  description: string;
  category: string;
  isNew?: boolean;
}

const ShopPage: NextPage = () => {
  return (
    <div className="h-[100dvh] snap-start overflow-hidden">
      <div className="min-h-screen  flex items-center justify-center">
        <h1 className="text-3xl font-bold text-primary">
          Coming Soon, Stay Tuned.
        </h1>
      </div>
    </div>
  );
};

export default ShopPage;
