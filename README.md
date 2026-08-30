# Matrimony — Frontend

Angular web client for the Matrimony platform. Provides signup/login, profile completion with photo/document upload, and profile search & browsing, backed by the Matrimony REST API.

## Features

- **Signup & Login** — reactive forms for account registration and login; on login, the JWT access token and session info returned by the API are stored client-side.
- **Session handling** — authentication state is persisted in local storage (via `ngx-webstorage`) so the app can check whether a user is logged in.
- **Profile completion** — a form for submitting personal, family, education, and religious details together with an identity document and multiple photos in one request.
- **Profile search** — search/filter profiles by gender, age range, and religion.
- **Search results listing** — displays the list of matching profile summaries (name, age, caste, photo).
- **Individual profile view** — detailed view of a single profile, including photos rendered through a custom `SafeImage` pipe.
- **Header/navigation** — shared header component across the app.
- **Responsive UI** — styled with Bootstrap 5.

## Tech Stack

| Layer | Technology |
|---|---|
| Framework | Angular 17 |
| Language | TypeScript |
| Reactive/async | RxJS |
| Forms | Angular Reactive Forms |
| Styling | Bootstrap 5 |
| Local storage | ngx-webstorage |
| Routing | Angular Router |

## Project Structure

```
src/app/
├── auth/
│   ├── login/           # Login form + payloads
│   └── signup/          # Signup form + payloads
│   └── shared/           # AuthService (signup, login, token handling)
├── header/               # Shared header/navigation component
├── profile/
│   ├── individual-profile/   # Single profile detail view
│   ├── profile-update/       # Profile completion form (details + uploads)
│   ├── profiles-list/        # Search results listing
│   ├── search/                # Search/filter form
│   ├── shared-profile/        # ProfileService
│   └── safe-image.pipe.ts     # Renders stored images safely
├── app.module.ts
└── app-routing.module.ts
```

## Routes

| Path | Component |
|---|---|
| `/sign-up` | Signup |
| `/login` | Login |
| `/header` | Header |
| `/search-profile` | Search |
| `/search-results` | Profiles list |
| `/individualProfile/:id` | Individual profile |
| `/profile-update` | Profile update (registration) |

## Getting Started

### Prerequisites

- Node.js and npm
- Angular CLI (`npm install -g @angular/cli`)
- The [Matrimony backend](../../../Backend) running and reachable (defaults to `http://localhost:8080`)

### Install dependencies

```bash
npm install
```

### Run the dev server

```bash
ng serve
```

Navigate to `http://localhost:4200/`. The app reloads automatically on source changes.

### Build for production

```bash
ng build
```

Build artifacts are output to `dist/`.

### Run unit tests

```bash
ng test
```

## Configuration

API base URLs are currently set directly in the service files (e.g. `AuthService`, `ProfileService`) and point to `http://localhost:8080`. Update these if the backend runs on a different host or port, or move them into Angular environment files (`src/environments/`) for per-environment configuration.
