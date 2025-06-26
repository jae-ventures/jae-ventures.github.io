---
layout: post
title: Great Charging Needs Green Software
date: 2025-06-26 18:30:00
description: Why are sustainable software solutions important for operating great EV Charging networks? We'll explore how you can you make your EV Charging solution sustainable through the lens of green software practices.
tags: electrifying-transit, coding
categories: 
---

<div class="row mt-3">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/GreatChargingNEedsGreenSoftware_ChatGPT.png" class="img-fluid rounded z-depth-1" %}
    </div>
</div>

<div class="caption">
    Image: ChatGPT's imagery for EV Charging using Green Software. 
</div>

## What is Green Software and How Does it Improve EV Charging Sites?

I've been considering for a while how I as a software developer could better contribute towards decarbonization efforts. What steps could I take to reduce the environmental impact of the software development lifecycle (SDLC)? From the incantation I cast with keystrokes to bring a feature to life, to that feature being introduced to hundreds of users -- the answer is *Green Software*.

*Green Software* is the practice of considering the amount of carbon (CO2eq) over the lifetime of any software. Just as an automobile's emissions should be tracked from the moment the minerals are extracted from the earth, refined during manufacturing, rolling off the assembly line and driven by customers until its "wheels fall off", software produces emissions that should be tracked from cradle to grave as well. The idea of Green Software has been largely popularized by [*The Green Software Foundation*](https://greensoftware.foundation/) who offers resources on how to reduce a software applications overall carbon impact. I recently took their [Green Software Practioner Course](https://learn.greensoftware.foundation/) which is a great introduction to the practice and everyone involved with a software product make more sustainable decisions throughout that product's lifetime and beyond.

Green Software follows a set of core principles that help anyone who has an influence on the lifecycle of a software product, reduce the negative impacts to the environment that software inevitably will have due to the emmissions released during its life. The six core principles are as follows:
1. **Carbon Efficiency**: Emit the least amount of carbon possible.
2. **Energy Efficiency**: Use the least amount of energy possible.
3. **Carbon Awareness**: Do more when the electricity is cleaner and do less when the electricity is dirtier.
4. **Hardware Efficiency**: Use the least amount of embodied carbon possible.
5. **Measurement**: What you can't measure, you can't improve.
6. **Climate Commitments**: Understand the exact mechanism of carbon reduction.

These Green Software principles I believe will also serve as an important framework for building the low-carbon and sustainable EV Charging infrastructure of the near future. The common myth that the electricity charging an EV's batteries is just as dirty as the gas being pumped into the tank, can be further addressed through Green Software principles. While its been largely [agreed upon by researchers](https://www.epa.gov/greenvehicles/electric-vehicle-myths#Myth1) that the overall impact of an EV using *dirty electricity* is still far less harmful than the direct tailpipe emissions of a comparable ICE vehicle, it is still true that those emissions will have a negative impact on our environment and should be considered. *In this blog, we'll explore through the lens of Green Software how charging infrastructure is made low-carbon today and what further solutions we can implement and scale in the near future.*

## Green Software + Charging in Practice 💻⚡

From my perspective as a software developer, public charging stations can be viewed as a software product that facilitates the charging of your vehicle. Some of the best Charge Point Operators (CPOs) today understand the importance of reliable and effortless software experiences that make their charging networks more approachable and help them scale faster. Understanding how a CPO can make the manufacturing, deployment, and public usage of their charging networks more sustainable can be viewed through the lens of Green Software. Each of the principles laid out in the Green Software Foundation's training can help CPOs deploy sustainable Electric Vehicle Supply Equipment (EVSE) solutions throughout their network that help advance decarbonization efforts from cradle to grave. Let's consider how each of these principles can be applied in practice with present day examples and near future opportunities.

### Carbon Efficiency

> Emit the least amount of carbon possible.

CPOs apply the principle of carbon efficiency by considering how their EVSE is manufactured and what will power it once its deployed. EVSE manufacturer [*Kempower* produce a comprehensive Life Cycle Assessmentn(LCA)](https://kempower.com/news/life-cycle-assessment-kempower-satellite-and-kempower-power-unit/) for its Satellite DC charging system and Power Unit that breaks down the environmental impacts of the company's actions in [Scopes 1, 2, and 3 of emissions produced](https://learn.greensoftware.foundation/measurement#the-ghg-protocol). Their 2024 report cites their Satellite unit has a carbon footprint of 922 kgCO2eq and their Power Unit 27,047 kgCO2eq from cradle-to-grave.

Companies like Rivian make commitments to [match every kilowatt-hour of energy](https://rivian.com/support/article/how-does-rivian-power-its-charging-networks-with-100-renewable-energy) delivered from its charging sites with renewable resources like solar and wind, on an annual basis. They do this through solar and wind projects they develop and through Virtual Power Purchase Agreements that combine to meet or exceed the amount of energy flowing through their charging network.

### Energy Efficiency
> Use the least amount of energy possible.

CPOs implement energy efficiency through sophisticated load balancing systems that ensure optimal power distribution across charging networks. EV charging load balancing maximizes charging site efficiency and customer satisfaction by ensuring that every individual charge point has the right amount of energy to supply each vehicle. Modern charging networks use dynamic load management that can reduce grid overload during peak periods by 20% through advanced demand forecasting and autonomous load adjustments.

**Load Balancing in Practice:**
Companies like ChargePoint and Electrify America use intelligent power management systems that continuously monitor and adjust power allocation based on real-time demand. When multiple vehicles are charging simultaneously, the system dynamically redistributes available power to ensure each vehicle receives optimal charging speeds without exceeding the site's electrical capacity. This prevents energy waste from underutilized connections while maintaining user satisfaction.

**Minimizing Static Power Draw:**
Modern EVSE units are designed with smart standby modes that reduce phantom power consumption when not actively charging. Leading manufacturers implement low-power communication modules that maintain network connectivity while drawing less than 10 watts during idle periods. Some advanced systems can even enter deep sleep modes during extended periods of non-use, waking up instantly when a vehicle connects.

### Carbon Awareness
> Do more when the electricity is cleaner and do less when the electricity is dirtier.

The most innovative CPOs are implementing demand shaping practices that respond to real-time grid carbon intensity. In 2024, ev.energy's platform enabled 760 tonnes of avoided CO₂e emissions by shifting EV charging away from high-carbon grid periods toward cleaner, low-carbon electricity through their flexible load management programs.

**Dynamic Pricing Based on Carbon Intensity:**
Progressive charging networks adjust pricing in real-time based on grid carbon intensity rather than just time-of-use rates. When renewable energy sources like solar and wind are abundant (typically midday for solar, overnight for wind in many regions), charging rates decrease to incentivize usage during cleaner periods. Conversely, during peak carbon intensity periods (often early evening when natural gas peakers come online), rates increase to discourage charging.

**Spatial Shifting for Network Operations:**
Some CPOs are beginning to implement computational load shifting for their network management systems. Non-critical data processing tasks like analytics, reporting, and predictive maintenance algorithms can be moved to data centers in regions with cleaner electricity grids. This practice, borrowed from cloud computing, allows charging networks to reduce their overall carbon footprint beyond just the charging process itself.

### Hardware Efficiency
> Use the least amount of embodied carbon possible.

Leading CPOs are maximizing hardware utilization through predictive maintenance, modular designs, and strategic site placement to extend equipment lifespan and increase utilization rates.

**Maximizing Hardware Utilization:**
Tesla Supercharger sites demonstrate this principle through their high utilization rates (often 20-30% vs industry average of 5-10%) achieved through strategic placement along high-traffic routes and integration with vehicle navigation systems that pre-condition batteries for optimal charging speeds. This higher utilization means the embodied carbon in each charging station serves more charging sessions over its lifetime.

**Modular and Upgradeable Design:**
Companies like Kempower have pioneered modular charging systems where power units can be shared across multiple charging ports and easily upgraded or repaired without replacing entire systems. Their Satellite chargers connect to centralized Power Units, allowing for easier maintenance and the ability to upgrade power capacity without replacing user-facing hardware.

**Future Hardware Efficiency:**
Next-generation EVSE will need increased modularity with easily replaceable components, standardized connection interfaces for different manufacturers, and designs optimized for recycling at end-of-life. This includes using more sustainable materials and designing for disassembly to recover valuable metals and components.

### Measurements
> What you can't measure, you can't improve.

CPOs are beginning to implement comprehensive carbon accounting that tracks Scope 1, 2, and 3 emissions throughout their operations, though standardization remains a challenge.

> **Scope 1-3 Emissions Tracking:**
> - **Scope 1**: Direct emissions from company-owned vehicles and facilities
> - **Scope 2**: Emissions from purchased electricity for charging operations
> - **Scope 3**: Embodied carbon in manufactured EVSE, construction emissions from site development, end-of-life disposal  

**Integration with Charging Protocols:**
Future versions of Open Charge Point Protocol (OCPP) and Open Charge Point Interface (OCPI) could incorporate carbon intensity data, allowing charging sessions to be automatically scheduled or priced based on real-time grid emissions. This would enable system-wide carbon accounting and give users visibility into the carbon impact of their charging decisions.

**Software Carbon Intensity (SCI) for Charging Networks:**
The Green Software Foundation's SCI methodology could be adapted for charging networks, measuring the carbon intensity per charging session or per kWh delivered, including both operational and embodied carbon impacts.

### Climate Commitments
> Understand the exact mechanism of carbon reduction.

When CPOs have optimized all operational aspects, they turn to market-based mechanisms to achieve deeper decarbonization commitments.

**Virtual Power Purchase Agreements (VPPAs):**
Following Rivian's model, CPOs can sign long-term contracts with renewable energy developers to match their annual energy consumption with clean energy generation. These agreements provide price certainty while funding new renewable capacity that might not otherwise be built.

**Renewable Energy Certificates (RECs) and Additionality:**
While RECs can help meet renewable energy commitments, the most impactful approach focuses on "additional" renewable energy - new projects that wouldn't exist without the CPO's commitment. This ensures that climate commitments drive actual decarbonization rather than just accounting exercises.

**Beyond Energy: Systemic Impact:**
Leading CPOs can drive decarbonization beyond their direct operations by:
- Advocating for clean electricity standards in their operating regions
- Partnering with utilities to develop local renewable energy projects
- Supporting electric grid infrastructure improvements that enable more renewable energy integration
- Sharing operational data to help optimize broader transportation electrification

## Venturing Further: What's Next for Sustainable Charging?

<div class="row mt-3">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/GreatChargingNEedsGreenSoftware_Anime3_ChatGPT.png" class="img-fluid rounded z-depth-1" %}
    </div>
</div>

<div class="caption">
    Images: ChatGPT's rendition of EV Charging sites that implement Green Software principles. 
</div>

Here are some thoughts on how EV charging solutions can further implement Green Software principles and remain symbols of sustainability.

<b>**Vehicle-to-Grid (V2G) Integration:**</b>
Future charging sites will transform from simple energy consumers to active grid participants. EVs can store excess renewable energy during peak generation periods and discharge it back to the grid during peak demand, essentially turning charging sites into distributed battery storage systems.

**AI-Optimized Charging Networks:**
Machine learning algorithms will optimize charging schedules not just for individual sites, but across entire networks, predicting demand patterns, weather impacts on renewable generation, and grid conditions to minimize carbon intensity of all charging activities.

**Renewable Energy Co-location:**
Next-generation charging hubs will integrate on-site renewable generation (solar canopies, small wind systems) with battery storage, creating microgrids that can operate independently during grid outages while minimizing transmission losses.

**Technologies Still Needed:**
- Standardized carbon intensity APIs for real-time grid data
- Improved battery technology for cost-effective stationary storage at charging sites
- More sophisticated demand response programs that reward carbon optimization, not just peak demand reduction
- Circular economy solutions for EVSE component recycling and remanufacturing

## A Deeper Dive: Helpful Resources

**Green Software Practices**
- [Green Software Foundation](https://greensoftware.foundation/) - Core principles and practitioner training
- [Software Carbon Intensity Specification](https://grnsft.org/sci) - Framework for measuring software carbon footprint
- [Green Software Patterns](https://patterns.greensoftware.foundation/) - Practical implementation patterns

**Charging Solutions**
- [Kempower Life Cycle Assessment](https://kempower.com/news/life-cycle-assessment-kempower-satellite-and-kempower-power-unit/) - Comprehensive LCA methodology for EVSE
- [ev.energy Carbon Impact Report 2024](https://www.ev.energy/blog/carbon-impact-report-2024-driving-sustainability-with-smart-charging) - Real-world results from demand response programs
- [IEA Global EV Outlook 2024](https://www.iea.org/reports/global-ev-outlook-2024) - Comprehensive analysis of EV charging infrastructure trends

**Discovered During my Curiosities**
- [Eaton + AMP IT Partnership](https://www.linkedin.com/posts/evinfodotnet_evcharging-electricvehicles-activity-7339744670257684480-lC_K?utm_source=share&utm_medium=member_desktop&rcm=ACoAADQyAmgB6Qm_VuQI-nxzZ1cN5dMvPX85I0g) - EV industry collaboration working together to make charging more sustainable and accessible
- [Solar Charging Station](https://www.linkedin.com/posts/win-with-bill-pierce_evcharging-electricvehicles-solar-activity-7340804630353690626-G4-S?utm_source=share&utm_medium=member_desktop&rcm=ACoAADQyAmgB6Qm_VuQI-nxzZ1cN5dMvPX85I0g) - An innovative charging solution that powers the station via solar
- [evroc sustainable servers](https://www.linkedin.com/posts/jordan-a-glover_sustainable-greensoftware-ai-activity-7340046377407729664-8RWh?utm_source=share&utm_medium=member_desktop&rcm=ACoAADQyAmgB6Qm_VuQI-nxzZ1cN5dMvPX85I0g) - A sustainable data center company that embodies the principles of green software well