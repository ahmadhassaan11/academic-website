import React from 'react';
import DropdownCard from '../components/DropdownCard';

const Research = () => {
  return (
    <div className="p-8">
      {/* <h1 className="text-xl text-maincolor font-bold mb-4">Research</h1> */}
      <section className="mb-8">
        <h2 className="text-lg font-bold mb-2">Working Papers:</h2>
        <div className="mb-4">
          <DropdownCard
            heading="Where is the Beef? Supply Chains and Carbon Emissions in the Amazon"
            titles={[{ text: 'paper', link: 'https://drive.google.com/file/d/1-MYrwK9pabu8YBjLupf5FivzQCzevrwW/view?usp=sharing' }]}
            description="Deforestation emissions have global consequences. I develop an empirical framework to study the supply chains driving those emissions, with a focus on how heterogeneous agricultural processing firms organize their production across space. Focusing on the Amazon's beef industry, I show that intermediary monopsony creates substantial misallocation, diverting production away from the most productive firms and the lowest-emitting regions. Exporter-targeted policies can exacerbate these distortions by shifting output toward less productive, informal firms operating in high-emission areas. Alternative policies that better account for equilibrium responses in firm entry and sourcing can reduce abatement costs by an order of magnitude."
          />
          <DropdownCard
            heading="Fidelity in Zero-Deforestation Supply Chains (joint with M. Skidmore, H. Gibbs, L. Rausch)"
            acceptance="Environmental Research Letters, 2024"
            titles={[{ text: 'paper', link: 'https://iopscience.iop.org/article/10.1088/1748-9326/ad7a0d' }]}
            description="Supply chain governance (SCG) is an increasingly important approach to manage environmental protection and human rights in agricultural systems across the tropics. SCG helps relay the preferences of international consumers to producers and fills environmental policy gaps. Brazil’s Zero-Deforestation Cattle Agreements (CA) are one of the longest-standing examples of SCG but implementation limitations have reduced their conservation impacts. For example, slaughterhouses monitor only the suppliers they buy from directly and ignore the complex network of transactions that occur upstream of the direct sale. Previous work has documented that deforestation rates are higher on these unmonitored suppliers, and Brazil’s cattle sector is working towards expanded monitoring. However, little is known about the strength and dynamics of these buying and selling relationships, which makes it challenging to implement monitoring in earlier stages. We provide the first comprehensive characterization of the strength and duration of cattle supply chain relationships based on animal transaction records from across the Brazilian Amazon. Our results reveal high fidelity relationships between direct suppliers and the slaughterhouses they sell to, with a relatively small number of relationships based on high-volume transactions that repeat over time. However, relationships between upstream suppliers display the opposite pattern with high numbers of low-fidelity links between ranches and their indirect suppliers.  Expanding monitoring to include these upstream suppliers increases the number of supply chain relationships that must be monitored by an order of magnitude.  A small set of prolific direct suppliers account for 1\% of suppliers but sell 45\% of the cattle to CA slaughterhouses; enabling them to monitor their indirect suppliers could provide a key starting place to address deforestation in upstream suppliers and increase the supply chain coverage of the CA. Our results suggest that while it may be challenging to monitor every single supplier with current approaches, significant advancements are within reach."
          />

        </div>
      </section>
      <section className="mb-8">
        <h2 className="text-lg font-bold mb-2">In Progress:</h2>
        <DropdownCard
          heading="Property Rights and Deforestation"
          titles={[]}
          description=""
        />
      </section>
    </div>
  );
};

export default Research;
