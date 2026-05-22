# S.Y.S.T.E.M. KC Website

A Next.js-based website for S.Y.S.T.E.M. KC, a Kansas City AI automation consulting firm.

## Project Structure

```
app/
├── globals.css          # Global design system (colors, typography, components)
├── layout.jsx           # Root layout (nav, footer, FAQ accordion)
├── page.jsx             # Homepage
├── about/page.jsx       # About page
├── contact/page.jsx     # Contact form (Formspree integrated)
├── services/            # Service pages (4)
├── industries/          # Industry pages (6 + index)
├── blog/                # Blog pages
├── results/             # Results page
├── faq/                 # FAQ page
├── use-cases/           # Use cases page
├── free-guide/          # Lead gen pages
├── privacy-policy/      # Legal pages
└── [other pages]
public/
├── assets/
│   ├── site.css         # Shared stylesheet
│   ├── system-logo-nav.png
│   ├── system-logo-light.png
│   ├── system-logo.png
│   └── founder-portrait.png
out/                     # Static export output (created by build)
```

## Getting Started

### Development

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to see the site.

### Build for Production

```bash
npm run build
```

Output goes to the `out/` directory. All pages are pre-rendered as static HTML.

## Key Pages

### Contact Page (`/contact/`)

Fully implemented contact form with:
- Form fields: name, business, email, phone, SMS consent checkboxes, message
- Formspree integration at `https://formspree.io/f/xdajgpod`
- Sidebar with contact info, office hours, service area
- Embedded Google Maps iframe
- "What to expect on the call" section with 3-card grid
- Success/error states

### Homepage (`/`)

Includes:
- Hero section
- Stats row (missed calls, response time, competitive advantage, callback rate)
- Process section (3-step S.Y.S.T.E.M.)
- Services overview (4 service cards)
- CTA strip

### About Page (`/about/`)

Features:
- Founder portrait
- Bio and company story
- Principles and values
- Team stats

## Design System

All styles are defined in `app/globals.css` and based on the design tokens:

### Color Palette (S.Y.S.T.E.M. Acronym)
- `--c-s1`: Navy (#1E3A5F)
- `--c-y`: Green (#7BB13C)
- `--c-s2`: Orange (#E88B25)
- `--c-t`: Purple (#6B2E91)
- `--c-e`: Teal (#1F8A99)
- `--c-m`: Red (#D4322E)

### Typography
- **Mono**: Space Mono
- **Sans**: DM Sans
- **Serif**: Fraunces (for italics/accents)

### Responsive Breakpoints
- Desktop: 1280px (`.wrap` max-width)
- Tablet: 780px
- Mobile: 520px

## Deployment

### Vercel (Recommended)
```bash
npm install -g vercel
vercel
```

### Netlify
Drag `out/` folder to Netlify Drop, or connect GitHub repo for auto-deploys.

### Any Static Host
Upload the contents of the `out/` directory to your host (S3, Cloudflare Pages, etc.).

## Forms

### Contact Form
- **Endpoint**: `https://formspree.io/f/xdajgpod`
- **Fields**: name, business, email, phone, sms_consent, marketing_sms_consent, message
- **Response**: JSON with submission details

**Setup Required:**
1. Test form submission
2. In your Formspree dashboard:
   - Enable autoresponder for confirmation emails
   - Set jason@systemkc.com as recipient
   - Customize email template if desired

### Free Guide Form
- Similar to contact form, wired to Formspree
- Include `lead_source="free-guide-landing"` for tracking

## Customization

### Edit Logo
Replace images in `public/assets/`:
- `system-logo.png` - Full logo
- `system-logo-nav.png` - Nav logo (44px height)
- `system-logo-light.png` - Footer logo

### Update Contact Info
Edit `app/layout.jsx` and `app/contact/page.jsx`:
- Phone number: (816) 962-2111
- Email: jason@systemkc.com
- Office hours: Mon–Fri · 8a–6p CT

### Change Color Scheme
Edit `app/globals.css` `:root` variables to change brand colors.

### Add Blog Posts
Create new folders in `app/blog/` for each post:
```
app/blog/[slug]/page.jsx
```

## Content

### Design Prototypes
Original design files are in the design bundle (system-kc/project/). Use them as reference for content and styling.

### Blog Content
12 blog posts are included in the design. To add them:
1. Extract content from design bundle
2. Create page files in `app/blog/[slug]/`
3. Add to navigation if needed

## Navigation

### Auto-generated Pages
The script `scripts/generate-pages.js` created placeholder pages for:
- Services (4)
- Industries (6)
- Results, FAQ, Use Cases
- Legal pages (Privacy, Terms, Cookies, Accessibility)
- Lead gen pages (Free Guide, Free Audit)

These are "coming soon" placeholders. Add real content by editing the respective `page.jsx` files.

## Troubleshooting

### Form not submitting
- Check Formspree endpoint is correct
- Verify field `name` attributes match Formspree form
- Check browser console for errors
- Test with curl: `curl -X POST -d "name=test&email=test@example.com" https://formspree.io/f/xdajgpod`

### Styles not loading
- Ensure `public/assets/site.css` exists (for reference, but globals.css is the source)
- Check `app/globals.css` is imported in `app/layout.jsx`
- Clear `.next/` and rebuild: `rm -rf .next && npm run build`

### Navigation links broken
- Check relative paths in nav (app/layout.jsx)
- Verify page directories match routes
- Test in production build (not dev server)

## Development Notes

### Adding New Pages
1. Create `app/[route]/page.jsx`
2. Add link to nav in `app/layout.jsx`
3. Use the `.page-hero`, `.section`, `.cta-strip` classes for consistency
4. Test responsive behavior at 780px and 520px

### FAQ Accordion
The FAQ accordion is auto-initialized by a script in `app/layout.jsx`. To use it:
```jsx
<div className="faq-list">
  <div className="faq-item">
    <button className="faq-q">
      <span className="qnum">Q1</span>
      <span className="qtxt">Question text</span>
      <span className="qicn">+</span>
    </button>
    <div className="faq-a">Answer text</div>
  </div>
</div>
```

### Form Handling
Forms use client-side submission with the `'use client'` directive. See `app/contact/page.jsx` for example.

## License

© 2026 S.Y.S.T.E.M. KC LLC. All rights reserved.
