import React from "react";
import { Image, Tag } from "../";
import { StyledPropertyCard, StyledButton } from "./property-card.styles";
import { IHomecard } from "shared/types";

interface ComponentProps {
  data: IHomecard;
}

export const PropertyCard: React.FC<ComponentProps> = props => {
  const { data } = props;

  return (
    <StyledPropertyCard>
      <div className="image">
        <Image src={data.photoUrls.homecardHidpi} />
      </div>
      <div className="description">
        <div className="heading">
          <h3>{data.title}</h3>
          <div className="price">
            <Tag>
              {data.pricePerMonth}
              {data.currencySymbol}
            </Tag>
          </div>
        </div>
        <div className="actions">
          <StyledButton secondary>More details</StyledButton>
          <StyledButton>Book now!</StyledButton>
        </div>
      </div>
    </StyledPropertyCard>
  );
};
