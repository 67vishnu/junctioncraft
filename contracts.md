# Integration Contracts — Junctioncraft (JCPL)

## Backend APIs (all prefixed /api)

### POST /api/enquiries
Save an enquiry / quote request.
Body: { name*, email*, phone, service, message*, source, item }
- source: "contact" | "product" | "service"
- item: product/service name (for quote forms)
Returns: { id, name, email, phone, service, message, source, item, created_at }
Stored in Mongo collection `enquiries`.

### GET /api/enquiries
Returns list of enquiries (newest first). Simple admin/testing use.

### GET /api/company-profile.pdf
Auto-generated JCPL company profile PDF (reportlab). Returns application/pdf,
Content-Disposition attachment. Built from company info, services, products,
projects and contact.

## Frontend integration
- Contact.jsx: replace localStorage mock with POST /api/enquiries (source="contact").
- QuoteForm.jsx (new): reusable form used on ProductDetail (source="product") and
  ServiceDetail (source="service"), auto-tags `item`.
- Download Company Profile button (About page + Footer) -> GET /api/company-profile.pdf.
- Uses REACT_APP_BACKEND_URL + /api.

## Notes
- Email delivery to jcpl@junctioncraft.in is NOT active yet (needs SMTP/API creds).
  Enquiries are persisted to MongoDB so nothing is lost.
- Content in mock.js enriched for products/services/projects/about.
