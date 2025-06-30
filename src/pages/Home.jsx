import React from 'react';
import DropdownCard from '../components/DropdownCard';

const Home = () => {
    return (
        <div className="px-4 md:px-8">
            <section className="flex flex-col md:flex-row items-start md:items-center p-8 md:p-16">
                <div className="md:w-1/3 flex flex-col items-center md:items-start mb-8 md:mb-0">
                    <img
                        src="https://bpb-us-e1.wpmucdn.com/sites.harvard.edu/dist/6/480/files/2023/10/230919-0505-1-edited.jpg"
                        alt="Profile Pic"
                        className="rounded-full w-64 h-64 md:w-80 md:h-80 object-cover mb-4"
                    />
                    <h2 className="text-3xl font-bold mb-2">Marcos Barrozo</h2>
                    <h3 className="text-xl">Assistant Professor of Economics</h3>
                    <h3 className="text-xl">DePaul University</h3>
                </div>
                <div className="mb-4 md:w-2/3 md:ml-8 text-left md:text-left">
                    <p className="mb-4">
                        I am an Assistant Professor of Economics at DePaul University. I work on environmental problems using tools from international economics and industrial organization.
                    </p>
                    <p>
                        You can find my CV <a href="https://drive.google.com/file/d/10nEr5DhwjjrCMMdHtQnDnWDi1Pg9f_6a/view?usp=share_link" className="underline hover:text-maincolor">here</a>.
                    </p>
                    <h2 className="pt-4 text-lg font-bold text-left">Research</h2>
                    <DropdownCard
                        heading="Where is the Beef? Supply Chains and Carbon Emissions in the Amazon (my JMP)"
                        titles={[{ text: 'paper', link: 'https://drive.google.com/file/d/1-MYrwK9pabu8YBjLupf5FivzQCzevrwW/view?usp=sharing' }]}
                        description="Deforestation emissions have global consequences. I develop an empirical framework to study the supply chains driving those emissions, with a focus on how heterogeneous agricultural processing firms organize their production across space. Focusing on the Amazon's beef industry, I show that intermediary monopsony creates substantial misallocation, diverting production away from the most productive firms and the lowest-emitting regions. Exporter-targeted policies can exacerbate these distortions by shifting output toward less productive, informal firms operating in high-emission areas. Alternative policies that better account for equilibrium responses in firm entry and sourcing can reduce abatement costs by an order of magnitude."
                    />
                    <DropdownCard
                        heading="Fidelity in Zero-Deforestation Supply Chains (joint with M. Skidmore, H. Gibbs, L. Rausch)"
                        acceptance="Environmental Research Letters, 2024"
                        titles={[{ text: 'paper', link: 'https://iopscience.iop.org/article/10.1088/1748-9326/ad7a0d' }]}
                        description="Supply chain governance (SCG) is an increasingly important approach to manage environmental protection and human rights in agricultural systems across the tropics. SCG helps relay the preferences of international consumers to producers and fills environmental policy gaps. Brazil's Zero-Deforestation Cattle Agreements (CA) are one of the longest-standing examples of SCG but shortcomings in implementation have reduced their conservation impacts. Chief among the reasons for their limited effect is that slaughterhouses monitor only the suppliers they buy from directly. This does not account for the complex supply network upstream of the direct sale, whose dynamics are also poorly understood.We provide the first comprehensive characterization of the strength and duration of cattle supply chain relationships based on animal transaction records from across the Brazilian Amazon. Whereas direct supply relationships (from ranchers to slaughterhouses) are relatively few and long-lasting, upstream relationships between ranchers are numerous and short-lived. Expanding monitoring to include these upstream suppliers increases the number of monitored transactions by an order of magnitude. However, 1% of the largest direct suppliers sell nearly half of cattle to CA slaughterhouses. More comprehensive upstream monitoring of only these prolific suppliers could greatly increase coverage at a fraction of the cost. While it may be challenging to monitor the entire supply network, significant advancements are within reach."
                    />
                    <DropdownCard
                        heading="Property Rights and Deforestation"
                        titles={[]}
                        description=""
                    />

                </div>
            </section>
        </div>
    );
};

export default Home;
