# Teknolojik Yemekler – Pizza Ordering Application

## 📋 Project Description

**Technological Meals** is an interactive and responsive pizza ordering application built with modern web technologies. The application enables users to easily place pizza orders through an intuitive interface, customize their selections, and validate their orders before submission.

This project demonstrates a **Single Page Application (SPA)** architecture while implementing core web development concepts such as **React Hooks**, **Router-based Navigation**, **Form State Management**, and **Responsive Design**.

---

## 🎯 Core Features

* **Responsive Web Design** – Modern UI/UX compatible with all devices
* **Dynamic Pizza Customization** – Size, dough type, and ingredient options
* **Real-Time Price Calculation** – Dynamic pricing based on selections
* **Comprehensive Form Validation** – User data validation and error handling
* **Seamless Navigation** – SPA experience with React Router
* **Automated Testing** – Cypress E2E test coverage
* **Modern Styling** – Advanced layout with CSS Grid and Flexbox

---

## 🛠️ Technology Stack

| Category               | Technology            |
| ---------------------- | --------------------- |
| **Frontend Framework** | React 18.2            |
| **Build Tool**         | Vite 7.3              |
| **Routing**            | React Router DOM 6.30 |
| **HTTP Client**        | Axios 1.13            |
| **Testing**            | Cypress 14.5          |
| **Linting**            | ESLint                |
| **Styling**            | CSS3                  |

---

## 📦 Installation & Getting Started

### Prerequisites

* Node.js 16+
* npm or yarn package manager

### Steps

```bash
# 1. Clone the repository
git clone <repository-url>
cd pizza-challenge

# 2. Install dependencies
npm install

# 3. Start development server
npm run dev

# 4. Open in browser
# http://localhost:5173 (default Vite port)
```

### Additional Commands

```bash
# Build for production
npm run build

# Run tests
npx cypress open      # Cypress Dashboard
npx cypress run       # Headless mode

# Run lint check
npm run lint
```

---

## 📁 Project Structure

```bash
pizza-challenge/
├── src/
│   ├── pages/                    # Page components
│   │   ├── Home.jsx              # Homepage
│   │   ├── Order.jsx             # Order form
│   │   └── Success.jsx           # Confirmation page
│   ├── components/               # Reusable components
│   │   ├── order/
│   │   │   ├── NameField.jsx
│   │   │   ├── SizeSelector.jsx
│   │   │   ├── IngredientsSelector.jsx
│   │   │   ├── NoteField.jsx
│   │   │   ├── PriceSummary.jsx
│   │   │   └── OrderFooter.jsx
│   │   ├── footer/
│   │   │   └── Footer.jsx
│   │   ├── home/
│   │   │   └── HomeContent.jsx
│   │   └── ScrollToTop.jsx
│   ├── api/
│   │   └── pizza.js              # API calls
│   ├── App.jsx                   # Main application component
│   ├── App.css                   # Global styles
│   └── main.jsx                  # Entry point
├── cypress/                      # End-to-End tests
│   └── e2e/
│       ├── home.cy.js
│       ├── order-price.cy.js
│       ├── order-to-success.cy.js
│       └── order-validation.cy.js
├── public/                       # Static files
├── images/                       # Project images
└── package.json                  # Project configuration
```

---

## 🎨 Interface & User Experience

### Home Page

A welcoming homepage featuring an attractive banner design and a clear call-to-action (CTA) for ordering.

### Order Form

Comprehensive form fields for pizza customization:

* 👤 Customer name (min. 3 characters)
* 📏 Pizza size (S, M, L)
* 🥖 Dough type (Thin, Regular, Thick)
* 🍕 Ingredient selection (4–10 ingredients)
* 📝 Optional note field

### Success Page

A confirmation page verifying that the order has been successfully received.

---

## 💾 Data Flow & State Management

### Architecture Diagram

```
┌─────────────┐
│  Home Page  │
└──────┬──────┘
       │ Navigation
       ▼
┌──────────────────────┐
│  Order Page          │
│ ├─ Form State        │
│ ├─ Validation        │
│ └─ Price Calculation │
└──────┬───────────────┘
       │ Submission + Prop Lifting
       ▼
┌──────────────────┐
│  Success Page    │
│ └─ Order Summary │
└──────────────────┘
```

### Form Validation Rules

| Field       | Rule                     | Requirement |
| ----------- | ------------------------ | ----------- |
| Name        | Min. 3 characters        | Required    |
| Size        | Must be selected (S/M/L) | Required    |
| Dough       | Must be selected         | Required    |
| Ingredients | Between 4–10             | Required    |
| Note        | Optional                 | Optional    |

### Pricing Logic

```
Total Price = (Base Price + Size Extra + Dough Extra + Ingredient Cost) × Quantity

Details:
- Base Price: ₺85.50
- Size Extra: S(-₺10), M(0), L(+₺15)
- Dough Extra: Thin(0), Regular(0), Thick(+₺5)
- Per Ingredient: ₺5
```

---

## 🧪 Testing Strategy

The project includes comprehensive End-to-End (E2E) test coverage:

```bash
cypress/e2e/
├── home.cy.js              # Homepage tests
├── order-price.cy.js       # Pricing tests
├── order-validation.cy.js  # Form validation tests
└── order-to-success.cy.js  # Full flow tests
```

### Running Cypress

```bash
# Interactive mode
npx cypress open

# Headless mode
npx cypress run

# Run a specific test file
npx cypress run --spec "cypress/e2e/order-validation.cy.js"
```

---

## 🔑 Technical Learning Outcomes

This project practices the following React and web development concepts:

1. **React Hooks**

   * `useState` – Local state management
   * `useEffect` – Managing side effects
   * `useMemo` – Performance optimization
   * `useNavigate` – Programmatic navigation

2. **React Router**

   * Route definition and configuration
   * Page navigation
   * Dynamic routing

3. **Form Management**

   * Controlled components
   * Real-time validation
   * Error state handling

4. **State Lifting**

   * Data communication between components
   * Sharing state via props

5. **Responsive Design**

   * Mobile-first approach
   * CSS Grid and Flexbox
   * Media queries

6. **Testing Practice**

   * Writing E2E tests
   * Cypress `data-cy` selectors
   * Simulating user behavior

---

## 🌐 API Integration

```javascript
// Mock API Response (ReqRes Free Trial Expired)
const mockResponse = {
  id: "unique-id",
  name: "Customer Name",
  size: "M",
  dough: "Regular",
  ingredients: [...],
  note: "Special note",
  quantity: 2,
  totalPrice: 195.5
};
```

---

## 📊 Performance & Optimization

* ✓ **Code Splitting** – Automatic with Vite
* ✓ **Lazy Loading** – Route-based with React Router
* ✓ **Memoization** – Ingredient price calculation using useMemo
* ✓ **Minimal Bundle** – Tree-shaking to remove unused code

---

## 🔐 Form Security

* ✓ Whitespace removal with `trim()`
* ✓ Input sanitization
* ✓ Client-side validation
* ✓ CSRF protection (API header-based)

---

## 👨‍💻 Developer Notes

### Best Practices for File Structure

* Each page should be under `/pages`
* Reusable components should be organized under `/components`
* API calls should be centrally managed inside `/api`

### Adding a New Feature

1. Create the component under `/components`
2. Apply state lifting if needed
3. Write Cypress tests for validation
4. Add CSS styles in `App.css` or component-specific CSS

---

**Technological Meals** – If the code is open, the pizza satisfies! 🍕
