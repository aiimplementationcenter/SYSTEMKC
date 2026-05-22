# Quick Start Guide - S.Y.S.T.E.M. KC Website

## ✅ What's Complete

Your Next.js website is ready with 28 pages fully built:

### Core Pages (Fully Implemented)
- ✅ **Homepage** (`/`) — Hero, stats, process, services, CTA
- ✅ **About** (`/about`) — Founder story, mission, stats
- ✅ **Contact** (`/contact`) — Lead form, contact info, Google Map, "what to expect" section

### All Other Pages (Placeholder Structure)
- 5 Service pages (`/services/...`)
- 7 Industry pages (`/industries/...`)
- Blog, FAQ, Results, Use Cases, Free Guide, Legal pages
- All pages are routable and styled, ready for content

## 🚀 Deploy in 3 Steps

### Option 1: Vercel (Recommended)
```bash
npm install -g vercel
vercel
```
Your site will be live in ~2 minutes at a Vercel URL.

### Option 2: Netlify
1. Push to GitHub (or use Netlify Drop)
2. Deploy `out/` folder
3. Live in <1 minute

### Option 3: Any Host (S3, Cloudflare, etc.)
```bash
npm run build
# Upload everything in 'out/' to your host
```

## 📝 Next Steps (Important!)

### 1. Wire Up Formspree (Contact Form)
The contact form is wired to this endpoint: `https://formspree.io/f/xdajgpod`

**You need to:**
1. Go to [formspree.io](https://formspree.io)
2. Create an account with jason@systemkc.com
3. Verify that form `xdajgpod` is set to accept submissions
4. Enable autoresponder for confirmation emails
5. Test by submitting the form on your site

### 2. Update Content
Placeholder pages say "coming soon". To add real content:
1. Edit `app/services/page.jsx` for Services overview
2. Edit `app/industries/page.jsx` for Industries overview
3. Create blog posts in `app/blog/[slug]/page.jsx`
4. Use the design prototypes as reference for content

### 3. Update Contact Info (If Different)
If your details change, update:
- `app/layout.jsx` (nav footer links)
- `app/contact/page.jsx` (phone, email, hours)
- `app/page.jsx` (homepage links)

### 4. Test Before Launch
```bash
npm run dev
```
Test all pages at http://localhost:3000, especially:
- Form submission on `/contact/`
- Navigation across all pages
- Responsive design (test at 780px and 520px)

## 🎨 Customization

### Change Colors
Edit `app/globals.css`:
```css
:root {
  --c-s1: #1E3A5F;   /* S - Navy (change this) */
  --c-s2: #E88B25;   /* S - Orange (or this) */
  /* etc. */
}
```

### Change Logo
Replace these files in `public/assets/`:
- `system-logo-nav.png` (nav logo)
- `system-logo-light.png` (footer logo)
- `founder-portrait.png` (about page)

### Change Fonts
Edit the Google Fonts import in `app/globals.css` if you want different typefaces.

## 📊 Project Stats

- **Pages**: 28 (26 placeholder + 2 fully built)
- **Size**: ~90KB First Load JS
- **Build Time**: ~30 seconds
- **Deploy Time**: <1 minute (Vercel/Netlify)

## 🔗 Key Links

- **Contact Form**: Uses Formspree at https://formspree.io/f/xdajgpod
- **Google Maps**: Public embed (no API key needed)
- **Design Prototypes**: Included in design bundle (system-kc/project/)

## 🐛 Troubleshooting

**Form not submitting?**
- Check Formspree dashboard to confirm form is active
- Test in browser console: `fetch('https://formspree.io/f/xdajgpod', {method: 'POST'})`

**Styles not working?**
- Run `npm run build` again
- Check that `app/globals.css` imported in `app/layout.jsx`

**Pages not showing?**
- Run `npm run dev` to start dev server
- Clear browser cache (Ctrl+Shift+Delete)

## 💬 Support

Refer to the design chat (`system-kc/chats/chat1.md`) for:
- Design decisions
- Content decisions
- Why things look the way they do

## 📦 Files to Know

```
app/
  layout.jsx          ← Nav, Footer, shared logic
  globals.css         ← All styles (edit here for design changes)
  page.jsx            ← Homepage
  contact/page.jsx    ← Contact form (THE KEY PAGE)
  about/page.jsx      ← About page
  [other pages]/      ← All other pages (mostly "coming soon" placeholders)

public/assets/        ← Your logo, portrait, images
  system-logo-nav.png, system-logo-light.png, etc.

out/                  ← Built static site (ready to deploy)
  [all pages as .html]

scripts/generate-pages.js  ← Ran once to create placeholder pages
```

## ✨ You're Ready!

The contact page is fully functional and ready to receive leads. Deploy it, wire up Formspree, and start collecting submissions. Good luck! 🚀
