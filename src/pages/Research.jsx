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
            description="Agricultural emissions have global consequences. When local enforcement is absent, governments have turned to indirect regulation, using tariffs or standards on agribusiness exporters. Focusing on the Brazilian Amazon, I find that exporter-focused policies are ineffective for a surprising reason: exporting firms are more productive and relatively clean. The most emissions-intensive production is processed by a competitive fringe of small intermediaries. I use rich data and a structural model to show that exporter-focused policies also distort production in regions most affected by intermediary monopsony power. Alternatively, policies that move output away from small and informal firms can both reduce emissions and increase food production."
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
          heading="Property Rights and the Dynamics of Deforestation"
          titles={[]}
          description="I study how land property rights shape deforestation in the Amazon. Property rights uncertainty has an ex-ante ambiguous effect on resource use, depending on how it changes the shares of costs and benefits internalized by agents. Using novel land tenure data and a rich panel of land use change, I find that deforestation is lower in contested areas. However, contested regions are also more sensitive to fluctuations in cattle prices, creating cycles of deforestation followed by abandonment few years thereafter. These decisions are consistent with a dynamic model of deforestation in which eviction risks decrease expected returns of encroachment on public and disputed private lands. With lower expected returns in the future, contested areas rely more on present returns to base their decisions, thus leading to a higher sensitivity to short-run prices. I then examine the historical record to study the origins of property conflicts today. In the late 19th/early 20th century, a resource boom in natural rubber production had a persistent impact on land tenure, shaping property rights long after the rubber economy collapsed. Today, regions more exposed to the historical rubber boom have more contested land."
        />
      </section>
    </div>
  );
};

export default Research;
