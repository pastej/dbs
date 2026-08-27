---
layout: default
title: Vehicle Settings
category: ux
order: 102
image: /assets/images/mycamper-homepage-tile.png
---

<div id="main">
  <div class="inner mycamper">
    <h1>The Vehicle settings project</h1>

    <section>
      <div class="text-container">
        <p><strong>Internship at MyCamper 2026.</strong></p>

        <p>This project was carried out during my internship at MyCamper, a platform for renting motorhomes and campervans. The task was to redesign the editing pages for vehicle owners, making it easier to find and edit their listing information.</p>

        <p>The work was done together with a classmate during our shared internship period. We each sketched separately at first, presented our proposals to each other, and jointly decided which ideas to develop further. Parts of the design work were divided screen by screen, while the design decisions were made together.</p>

        <p>The aim was to improve the experience for vehicle owners, whether they rent out one vehicle or several. The central question was how restructuring the pages could make it easier for owners to find and edit their listing information.</p>
      </div>
    </section>

    <section>
      <div class="text-container">
        <h2>Design process</h2>

        <p>The work began with a research phase where we wanted to understand both the industry and the users. We carried out a competitor analysis, a design audit of MyCamper's existing pages, and interviews with vehicle owners and customer service. The insights were gathered in an affinity diagram, which helped us spot patterns and prioritize what was most important to solve.</p>

        <p>Based on the research, we mapped the existing structure in a sitemap and then developed a new, hub-based structure that formed the foundation for the design work. We started with paper sketches to explore ideas quickly, moved on to wireframes in Figma focusing on information architecture and flows, and iterated continuously through design critique. Once the structure felt well thought through, we moved to high fidelity, working mobile-first and considering accessibility through contrast, text sizes, tap targets, and cognitive load.</p>
      </div>

      <figure class="project-figure">
        <a href="{{ '/assets/images/mycamper-affinity-diagram.png' | relative_url }}" data-lightbox="projectimages">
          <img src="{{ '/assets/images/mycamper-affinity-diagram.png' | relative_url }}" alt="Research insights organized in an affinity diagram" loading="lazy" />
        </a>
        <figcaption>Research insights gathered in an affinity diagram.</figcaption>
      </figure>

      <div class="box alt project-media">
        <div class="row uniform">
          <div class="12u">
            <span class="image fit">
              <a href="{{ '/assets/images/mycamper-old-sitemap.png' | relative_url }}" data-lightbox="projectimages">
                <img src="{{ '/assets/images/mycamper-old-sitemap.png' | relative_url }}" alt="The existing linear vehicle settings sitemap" loading="lazy" />
              </a>
            </span>
          </div>
          <div class="12u">
            <span class="image fit">
              <a href="{{ '/assets/images/mycamper-new-sitemap-cropped.png' | relative_url }}" data-lightbox="projectimages">
                <img src="{{ '/assets/images/mycamper-new-sitemap-cropped.png' | relative_url }}" alt="The redesigned hub-based vehicle settings sitemap" loading="lazy" />
              </a>
            </span>
          </div>
        </div>
      </div>
      <p class="project-caption">From the existing structure to the new, hub-based sitemap.</p>
    </section>

    <section>
      <h2>Results</h2>

      <div class="text-container">
        <h3>Structural change</h3>

        <p>The biggest change was moving from a linear flow to a hub-based structure. In the existing solution, all editing options sat in one long, ungrouped list, which made it hard to get an overview. Instead, we divided the content into four logical sections, where related information is gathered and the page becomes easier to scan and navigate.</p>
      </div>

      <figure class="project-figure">
        <a href="{{ '/assets/images/mycamper-basic-data.png' | relative_url }}" data-lightbox="projectimages">
          <img src="{{ '/assets/images/mycamper-basic-data.png' | relative_url }}" alt="The previous basic vehicle data editing page" loading="lazy" />
        </a>
      </figure>

      <div class="project-split">
        <div class="text-container">
          <h3>Vehicle overview</h3>

          <p>The solution starts with a vehicle overview that gathers all of an owner's vehicles in one place, something that was missing entirely before. We chose to show it to all owners, even those with a single vehicle, since a consistent interface matters more than the extra click it adds. For owners with more than four vehicles, sorting, status filtering, and a "view more" option appear, so the list stays easy to overview even as it grows.</p>
        </div>

        <figure class="project-figure project-figure--phone">
          <a href="{{ '/assets/images/mycamper-vehicle-list-five-plus.png' | relative_url }}" data-lightbox="projectimages">
            <img src="{{ '/assets/images/mycamper-vehicle-list-five-plus.png' | relative_url }}" alt="Vehicle overview with sorting and filtering for more than four vehicles" loading="lazy" />
          </a>
        </figure>
      </div>

      <div class="project-split">
        <div class="text-container">
          <h3>Vehicle settings</h3>

          <p>The central page is a hub where the owner manages all information about their vehicle. Since the previous linear flow doesn't work well for editing – owners need to jump straight to what they want to change – we built the page as a hub with a clear overview. Progress indicators show how complete the listing is and what's missing.</p>
        </div>

        <figure class="project-figure project-figure--phone project-figure--preview">
          <a href="{{ '/assets/images/mycamper-vehicle-settings.png' | relative_url }}" data-lightbox="projectimages">
            <img src="{{ '/assets/images/mycamper-vehicle-settings.png' | relative_url }}" alt="The redesigned mobile vehicle settings hub" loading="lazy" />
          </a>
          <figcaption>Tap the image to view the complete screen.</figcaption>
        </figure>
      </div>

      <div class="text-container">
        <h3>Subpages</h3>

        <p>Within the sections, we made several smaller but meaningful changes. Radio buttons were replaced in several places with icon cards, which are clearer and have larger tap targets, and add-on equipment and services were broken out into their own sections to make them easier to find. The deactivation function was made more accessible but deliberately understated, with a flow that counteracts hasty decisions: it first suggests blocking dates in the calendar, requires a reason, and is stopped if the vehicle has active bookings.</p>
      </div>

      <div class="box alt project-media">
        <div class="row uniform">
          <div class="6u 12u$(small)">
            <span class="image fit">
              <a href="{{ '/assets/images/mycamper-subpages.png' | relative_url }}" data-lightbox="projectimages">
                <img src="{{ '/assets/images/mycamper-subpages.png' | relative_url }}" alt="Redesigned vehicle settings subpages" loading="lazy" />
              </a>
            </span>
          </div>
          <div class="6u 12u$(small)">
            <span class="image fit">
              <a href="{{ '/assets/images/mycamper-deactivation-flow.png' | relative_url }}" data-lightbox="projectimages">
                <img src="{{ '/assets/images/mycamper-deactivation-flow.png' | relative_url }}" alt="Vehicle deactivation flow with safeguards against accidental deactivation" loading="lazy" />
              </a>
            </span>
          </div>
        </div>
      </div>
    </section>

    <section>
      <div class="text-container">
        <h2>Reflection and learnings</h2>

        <p>One of the clearest lessons was to seek feedback more actively. During a period when our supervisor was away, we waited instead of turning to the product manager and other designers – and earlier feedback could have caught things we needed to adjust later. I've taken away that it's better to ask one time too many than to wait.</p>

        <p>Perhaps the most important insight was learning to balance my own ideas against what the product actually needs. At times we had to make design decisions we didn't always agree with, but that were right given the product's and the company's priorities. It gave me a more realistic picture of what it means to work as a UX designer in a real product environment.</p>
      </div>
    </section>
  </div>
</div>
