import { Component, HostListener, OnInit } from '@angular/core';
import { FilterService } from 'src/app/Services/filter.service';

@Component({
  selector: 'app-proposals',
  templateUrl: './proposals.component.html',
  styleUrls: ['./proposals.component.css']
})
export class ProposalsComponent implements OnInit {
  ngOnInit(): void {
    
  }
  selectedCategory = '';
  selectedSort = '';
  selectedRaise = '';
  proposals = [
    {
      widgetImage: 'https://images.unsplash.com/photo-1560493676-04071c5f467b?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      profile_PitchTitle: 'AgriTech Revolution',
      profile_PitchShortSummary: 'Bringing AI to Agriculture.',
      smE_firstName: 'Ayesha',
      smE_lastName: 'Khan',
      country_flag: 'https://flagcdn.com/w40/pk.png',
      profile_country_name: 'Pakistan',
      progressLbl: '75% funded',
      progressWidth: 75,
      category: 'Agriculture',
      sortKey: 'recent',
      stage: 'live'
    },
    {
      widgetImage: 'https://images.unsplash.com/photo-1494976388531-d1058494cdd8?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      profile_PitchTitle: 'NextGen Car Mods',
      profile_PitchShortSummary: 'Redefining vehicle performance.',
      smE_firstName: 'Ali',
      smE_lastName: 'Raza',
      country_flag: 'https://flagcdn.com/w40/us.png',
      profile_country_name: 'USA',
      progressLbl: '45% funded',
      progressWidth: 45,
      category: 'Automotive',
      sortKey: 'popularity',
      stage: 'early'
    },
    {
      widgetImage: 'https://plus.unsplash.com/premium_photo-1733342521996-ca67cbc76c48?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      profile_PitchTitle: 'Smart Water Bottle',
      profile_PitchShortSummary: 'Stay hydrated with tech.',
      smE_firstName: 'Sara',
      smE_lastName: 'Iqbal',
      country_flag: 'https://flagcdn.com/w40/gb.png',
      profile_country_name: 'UK',
      progressLbl: '60% funded',
      progressWidth: 60,
      category: 'Product',
      sortKey: 'amount',
      stage: 'live'
    },
    {
      widgetImage: 'https://plus.unsplash.com/premium_photo-1661382011487-cd3d6b1d9dff?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      profile_PitchTitle: 'Creative Studio 9',
      profile_PitchShortSummary: 'Designs that speak louder.',
      smE_firstName: 'Junaid',
      smE_lastName: 'Akram',
      country_flag: 'https://flagcdn.com/w40/ca.png',
      profile_country_name: 'Canada',
      progressLbl: '30% funded',
      progressWidth: 30,
      category: 'Design',
      sortKey: 'recent',
      stage: 'early'
    },
    {
      widgetImage: 'https://images.unsplash.com/photo-1589391886645-d51941baf7fb?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      profile_PitchTitle: 'AI Legal Advisor',
      profile_PitchShortSummary: 'Affordable legal guidance.',
      smE_firstName: 'Mehak',
      smE_lastName: 'Zahid',
      country_flag: 'https://flagcdn.com/w40/au.png',
      profile_country_name: 'Australia',
      progressLbl: 'Coming Soon',
      progressWidth: 0,
      category: 'comingSoon',
      sortKey: '',
      stage: 'allraises'
    },
    {
      widgetImage: 'https://plus.unsplash.com/premium_photo-1663945779302-b46b12b6d811?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      profile_PitchTitle: 'CropCare Analytics',
      profile_PitchShortSummary: 'Smart analysis for farmers.',
      smE_firstName: 'Usman',
      smE_lastName: 'Saeed',
      country_flag: 'https://flagcdn.com/w40/in.png',
      profile_country_name: 'India',
      progressLbl: '90% funded',
      progressWidth: 90,
      category: 'Agriculture',
      sortKey: 'popularity',
      stage: 'live'
    },
    {
      widgetImage: 'https://images.unsplash.com/photo-1619641805634-b867f535071c?q=80&w=2084&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      profile_PitchTitle: 'EV Battery Booster',
      profile_PitchShortSummary: 'Power up your EV range.',
      smE_firstName: 'Zain',
      smE_lastName: 'Shahid',
      country_flag: 'https://flagcdn.com/w40/de.png',
      profile_country_name: 'Germany',
      progressLbl: '20% funded',
      progressWidth: 20,
      category: 'Automotive',
      sortKey: 'recent',
      stage: 'early'
    },
    {
      widgetImage: 'https://images.unsplash.com/photo-1525547719571-a2d4ac8945e2?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      profile_PitchTitle: 'Modular Laptop',
      profile_PitchShortSummary: 'Upgrade anytime, anywhere.',
      smE_firstName: 'Fariha',
      smE_lastName: 'Malik',
      country_flag: 'https://flagcdn.com/w40/jp.png',
      profile_country_name: 'Japan',
      progressLbl: '65% funded',
      progressWidth: 65,
      category: 'Product',
      sortKey: 'amount',
      stage: 'completed'
    },
    {
      widgetImage: 'https://images.unsplash.com/photo-1587440871875-191322ee64b0?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      profile_PitchTitle: 'UX Wave',
      profile_PitchShortSummary: 'Better experiences for all.',
      smE_firstName: 'Hamza',
      smE_lastName: 'Naeem',
      country_flag: 'https://flagcdn.com/w40/fr.png',
      profile_country_name: 'France',
      progressLbl: '80% funded',
      progressWidth: 80,
      category: 'Design',
      sortKey: 'popularity',
      stage: 'live'
    },
    {
      widgetImage: 'https://images.unsplash.com/photo-1677691824304-279660ceece3?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      profile_PitchTitle: 'EduGPT',
      profile_PitchShortSummary: 'AI-powered learning assistant.',
      smE_firstName: 'Nimra',
      smE_lastName: 'Faisal',
      country_flag: 'https://flagcdn.com/w40/br.png',
      profile_country_name: 'Brazil',
      progressLbl: 'Coming Soon',
      progressWidth: 0,
      category: 'comingSoon',
      sortKey: '',
      stage: 'allraises'
    }
  ];
  
  

  // Filtered list for ngFor
  filteredProposals = [...this.proposals];

  // Category Filter
  applyCategoryFilter() {
    this.filteredProposals = this.proposals.filter(proposal =>
      this.selectedCategory ? proposal.category === this.selectedCategory : true
    );
    this.onFilterChange(); // Apply other filters too
  }

  // Apply sort and raise stage filter
  onFilterChange() {
    let filtered = [...this.proposals];

    if (this.selectedCategory) {
      filtered = filtered.filter(p => p.category === this.selectedCategory);
    }

    if (this.selectedRaise) {
      filtered = filtered.filter(p => 
        this.selectedRaise === 'allraises' ? true : p.stage === this.selectedRaise
      );
    }

    if (this.selectedSort) {
      switch (this.selectedSort) {
        case 'expiry':
          // You can add a date field to sort here
          break;
        case 'recent':
          filtered = filtered.sort((a, b) => a.sortKey === 'recent' ? -1 : 1);
          break;
        case 'popularity':
          filtered = filtered.sort((a, b) => b.progressWidth - a.progressWidth);
          break;
        case 'amount':
          // You could use a `raisedAmount` field if present
          break;
      }
    }

    this.filteredProposals = filtered;
  }
  


}
  
  
