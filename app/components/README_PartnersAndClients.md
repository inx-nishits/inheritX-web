# Partners and Clients Components

This directory contains reusable components for displaying company partners and clients in a marquee-style layout.

## Components

### 1. OurPartners
Displays a scrolling marquee of partner company logos.

### 2. OurValuableClients  
Displays a scrolling marquee of client company logos.

### 3. PartnersAndClientsSection
A combined component that can display both partners and clients sections.

## Usage Examples

### Basic Usage

```jsx
import OurPartners from '../components/OurPartners';
import OurValuableClients from '../components/OurValuableClients';

// In your component
<OurPartners />
<OurValuableClients />
```

### Custom Configuration

```jsx
import OurPartners from '../components/OurPartners';
import OurValuableClients from '../components/OurValuableClients';

// Custom partners section
<OurPartners 
  title="Our Technology Partners"
  subtitle="We collaborate with leading technology companies worldwide."
  className="custom-partners-section"
/>

// Custom clients section
<OurValuableClients 
  title="Our Valued Clients"
  subtitle="Trusted by companies across various industries."
  className="custom-clients-section"
/>
```

### Using Combined Component

```jsx
import PartnersAndClientsSection from '../components/PartnersAndClientsSection';

// Display both sections
<PartnersAndClientsSection />

// Display only partners
<PartnersAndClientsSection 
  showClients={false}
  partnersProps={{
    title: "Our Partners",
    subtitle: "We work with the best in the industry."
  }}
/>

// Display only clients
<PartnersAndClientsSection 
  showPartners={false}
  clientsProps={{
    title: "Our Clients",
    subtitle: "Serving companies worldwide."
  }}
/>
```

### Custom Data

```jsx
import OurPartners from '../components/OurPartners';

const customPartners = [
  { src: '/image/partners/custom1.png', alt: 'Custom Partner 1' },
  { src: '/image/partners/custom2.png', alt: 'Custom Partner 2' },
];

<OurPartners 
  partners={customPartners}
  title="Custom Partners"
  subtitle="Our custom partner list."
/>
```

## Data Files

### partnersData.js
Contains the default partner data and configuration:
- `partnersData`: Array of partner objects with `src` and `alt` properties
- `partnersConfig`: Default title and subtitle configuration

### clientsData.js
Contains the default client data and configuration:
- `clientsData`: Array of client objects with `src` and `alt` properties  
- `clientsConfig`: Default title and subtitle configuration

## Props

### OurPartners Props
- `title` (string): Section title (default: "Our Partners")
- `subtitle` (string): Section subtitle
- `partners` (array): Array of partner objects with `src` and `alt` properties
- `className` (string): Additional CSS classes

### OurValuableClients Props
- `title` (string): Section title (default: "Our Valuable Clients")
- `subtitle` (string): Section subtitle
- `clients` (array): Array of client objects with `src` and `alt` properties
- `className` (string): Additional CSS classes

### PartnersAndClientsSection Props
- `showPartners` (boolean): Whether to show partners section (default: true)
- `showClients` (boolean): Whether to show clients section (default: true)
- `partnersProps` (object): Props to pass to OurPartners component
- `clientsProps` (object): Props to pass to OurValuableClients component
- `className` (string): Additional CSS classes

## Styling

The components use the existing CSS classes from the website:
- `section-about tf-spacing-2`: Main section styling
- `tf-marquee`: Marquee container
- `marquee-wrapper logos-marquee-wrapper`: Marquee wrapper
- `big-text fs-initial`: Individual logo container

## Implementation Status

✅ **Completed:**
- OurPartners component created and implemented in HomeContent.jsx
- OurValuableClients component created and implemented in HomeContent.jsx
- Data files created for maintainability
- Combined component created for easy usage
- Documentation created

## Files Created/Modified

### New Files:
- `app/components/OurPartners.jsx`
- `app/components/OurValuableClients.jsx`
- `app/components/PartnersAndClientsSection.jsx`
- `app/data/partnersData.js`
- `app/data/clientsData.js`
- `app/components/README_PartnersAndClients.md`

### Modified Files:
- `app/components/home/HomeContent.jsx` - Replaced hardcoded sections with new components
