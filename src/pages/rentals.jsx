import { useEffect, useState } from "react";
import { Layout } from "../components/layout/layout";
import axios from "axios";
import { CardRentalsCar } from "../components/pages/card-rentals-car";

export const Rentals = () => {
  const [rentals, setRentals] = useState([]);

  useEffect(() => {
    const getRentals = async () => {
      try {
        const result = await axios.get("http://localhost:3000/rentals");
        setRentals(result.data);
      } catch (error) {
        console.error("Error al obtener los datos:", error);
      }
    };
    getRentals();
  }, []);

  return (
    <>
      <Layout>
        <div className="px-5 py-14 flex flex-wrap justify-center gap-5 bg-dark-grey">
          {rentals.map((car) => (
            <CardRentalsCar key={car.id} infoCar={car} />
          ))}
        </div>
      </Layout>
    </>
  );
};
