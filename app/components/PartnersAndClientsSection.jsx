'use client';

import OurPartners from './OurPartners';
import OurValuableClients from './OurValuableClients';

const PartnersAndClientsSection = ({ 
  showPartners = true, 
  showClients = true,
  partnersProps = {},
  clientsProps = {},
  className = ""
}) => {
  return (
    <div className={className}>
      {showPartners && <OurPartners {...partnersProps} />}
      {showClients && <OurValuableClients {...clientsProps} />}
    </div>
  );
};

export default PartnersAndClientsSection;
