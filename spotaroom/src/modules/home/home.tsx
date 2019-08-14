import React, { useEffect, useState } from "react";
import { homecardsService } from "shared/services";
import { PropertyCard, Container } from "shared/components";
import { IHomecard } from "shared/types";

export const Home: React.FC = () => {
  const [homecards, setHomecards] = useState<IHomecard[]>([]);
  useEffect(() => {
    async function getHomecards() {
      const _homecards = await homecardsService.getHomecards();
      setHomecards(_homecards);
    }
    getHomecards();
  }, []);

  return (
    <div className="home">
      <Container>
        {homecards.map((homecard: IHomecard, index: number) => (
          <PropertyCard key={`${homecard.adId}-${index}`} data={homecard} />
        ))}
        {!homecards.length && "Loading..."}
      </Container>
    </div>
  );
};
