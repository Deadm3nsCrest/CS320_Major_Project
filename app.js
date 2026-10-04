* {
  box-sizing: border-box;
}

:root {
  --bg-dark: #070b08;
  --bg-deep: #0d1712;
  --panel: rgba(15, 29, 22, 0.8);
  --panel-strong: rgba(17, 30, 23, 0.92);
  --green-1: #143d2f;
  --green-2: #205b44;
  --green-3: #78c7a0;
  --green-4: #d3f5df;
  --soft-gold: #d5c27d;
  --text-main: #edf6ee;
  --text-soft: #c9d7ce;
  --danger: #ff5a5f;
  --shadow: rgba(0, 0, 0, 0.28);
}

html {
  scroll-behavior: smooth;
}

body {
  margin: 0;
  min-height: 100vh;
  font-family: 'Inter', sans-serif;
  background:
    linear-gradient(rgba(3, 8, 6, 0.7), rgba(3, 8, 6, 0.7)),
    url('https://images.unsplash.com/photo-1529156069898-49953e39b3ac?auto=format&fit=crop&w=1600&q=80') center/cover no-repeat fixed;
  color: var(--text-main);
}

button,
input,
select,
textarea {
  font: inherit;
}

.page-shell {
  width: min(1200px, 92%);
  margin: 30px auto;
  border: 1px solid rgba(120, 199, 160, 0.3);
  background: rgba(7, 11, 8, 0.72);
  backdrop-filter: blur(6px);
  box-shadow: 0 18px 50px var(--shadow);
}

.top-bar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px 32px;
  border-bottom: 1px solid rgba(120, 199, 160, 0.23);
  background: rgba(9, 18, 13, 0.9);
}

.brand-block {
  display: flex;
  align-items: center;
  gap: 14px;
}

.brand-mark {
  width: 44px;
  height: 44px;
  display: grid;
  place-items: center;
  font-size: 1.5rem;
  font-weight: 800;
  border-radius: 12px;
  color: var(--green-4);
  background: linear-gradient(135deg, rgba(120, 199, 160, 0.22), rgba(21, 64, 48, 0.62));
  border: 1px solid rgba(120, 199, 160, 0.5);
  box-shadow: 0 0 18px rgba(120, 199, 160, 0.58);
}

.brand-name {
  margin: 0;
  font-family: 'Cinzel', serif;
  font-size: clamp(1.4rem, 2vw, 2.1rem);
  letter-spacing: 0.06em;
  color: transparent;
  background: linear-gradient(90deg, var(--green-4), #e9f8ef, var(--soft-gold), var(--green-4));
  background-clip: text;
  -webkit-background-clip: text;
  text-shadow: 0 0 8px rgba(120, 199, 160, 0.7);
}

.top-nav {
  display: flex;
  gap: 18px;
  flex-wrap: wrap;
}

.top-nav a {
  color: var(--text-soft);
  text-decoration: none;
  font-weight: 600;
  transition: all 0.25s ease;
}

.top-nav a:hover,
.top-nav a:focus-visible {
  color: var(--green-4);
  text-shadow: 0 0 10px rgba(120, 199, 160, 0.8);
}

.hero {
  position: relative;
  min-height: 420px;
  display: flex;
  align-items: center;
  padding: 32px;
  background: linear-gradient(135deg, rgba(8, 18, 13, 0.7), rgba(18, 41, 31, 0.45));
  overflow: hidden;
}

.hero::before {
  content: "";
  position: absolute;
  inset: 0;
  background: radial-gradient(circle at top right, rgba(120, 199, 160, 0.25), transparent 38%);
}

.hero-content {
  position: relative;
  z-index: 1;
  max-width: 700px;
}

.eyebrow,
.section-tag {
  margin: 0 0 12px;
  color: var(--green-3);
  text-transform: uppercase;
  letter-spacing: 0.14em;
  font-size: 0.72rem;
  font-weight: 700;
}

.hero-content h2 {
  margin: 0;
  font-size: clamp(2.1rem, 4vw, 4rem);
  line-height: 1.1;
  font-weight: 800;
}

.hero-content p {
  color: var(--text-soft);
  font-size: 1.05rem;
  line-height: 1.8;
  max-width: 660px;
}

.hero-actions {
  display: flex;
  gap: 16px;
  flex-wrap: wrap;
  margin-top: 22px;
}

.primary-btn,
.secondary-btn,
.tribe-item,
.village-card,
button {
  transition: transform 0.25s ease, box-shadow 0.25s ease, opacity 0.25s ease, filter 0.25s ease;
}

.primary-btn,
.secondary-btn {
  border: none;
  border-radius: 12px;
  padding: 0.9rem 1.4rem;
  font-weight: 700;
  cursor: pointer;
}

.primary-btn {
  color: #04130d;
  background: linear-gradient(135deg, var(--green-3), #d5f9e7);
  box-shadow: 0 10px 25px rgba(120, 199, 160, 0.35);
}

.secondary-btn {
  background: rgba(120, 199, 160, 0.07);
  color: var(--text-main);
  border: 1px solid rgba(120, 199, 160, 0.4);
}

.primary-btn:hover,
.primary-btn:focus-visible,
.secondary-btn:hover,
.secondary-btn:focus-visible,
.tribe-item:hover,
.village-card:hover,
button:hover {
  transform: translateY(-2px) scale(1.01);
  box-shadow: 0 12px 28px rgba(120, 199, 160, 0.18);
  filter: brightness(1.08);
}

.section-block {
  padding: 34px 32px 18px;
}

.section-heading {
  margin-bottom: 22px;
}

.section-heading h3 {
  margin: 0;
  font-size: clamp(1.5rem, 2vw, 2.2rem);
}

.village-grid {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 18px;
}

.village-card {
  background: rgba(18, 35, 28, 0.92);
  border: 1px solid rgba(120, 199, 160, 0.2);
  border-radius: 18px;
  padding: 18px;
  cursor: pointer;
}

.village-card.selected {
  border-color: rgba(120, 199, 160, 0.72);
  box-shadow: 0 0 18px rgba(120, 199, 160, 0.2);
}

.card-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 16px;
}

.village-badge {
  display: inline-block;
  background: rgba(120, 199, 160, 0.12);
  border: 1px solid rgba(120, 199, 160, 0.28);
  color: var(--green-4);
  font-size: 0.7rem;
  border-radius: 999px;
  padding: 0.45rem 0.7rem;
  letter-spacing: 0.06em;
}

.status-dot {
  width: 12px;
  height: 12px;
  border-radius: 50%;
  background: linear-gradient(135deg, #90f5b6, #2fb777);
  box-shadow: 0 0 12px rgba(118, 242, 172, 0.7);
}

.village-card h4 {
  margin: 0 0 10px;
  font-size: 1.35rem;
}

.village-card p,
.tribe-item small,
.stat-box span,
.footer-content span {
  color: var(--text-soft);
}

.tribe-list {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 16px;
}

.tribe-item {
  width: 100%;
  text-align: left;
  padding: 20px 18px;
  background: rgba(18, 35, 28, 0.92);
  color: var(--text-main);
  border: 1px solid rgba(120, 199, 160, 0.25);
  border-radius: 16px;
  display: flex;
  flex-direction: column;
  gap: 8px;
  cursor: pointer;
}

.tribe-item.active {
  border-color: rgba(120, 199, 160, 0.75);
  background: rgba(26, 52, 41, 0.96);
}

.tribe-item span {
  font-weight: 700;
  font-size: 1.05rem;
}

.registry-panel {
  margin-top: 8px;
}

.compact {
  margin-bottom: 18px;
}

form {
  background: rgba(10, 19, 15, 0.72);
  border: 1px solid rgba(120, 199, 160, 0.22);
  border-radius: 20px;
  padding: 25px;
}

.form-grid {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 18px;
}

.field-group {
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.full-width {
  grid-column: 1 / -1;
}

label {
  font-weight: 600;
  color: var(--text-main);
}

.required-mark {
  color: var(--danger);
  font-weight: 700;
  margin-left: 2px;
}

input,
select,
textarea {
  background: rgba(245, 255, 248, 0.04);
  border: 1px solid rgba(120, 199, 160, 0.32);
  color: var(--text-main);
  border-radius: 12px;
  padding: 0.9rem 1rem;
  width: 100%;
  outline: none;
}

input:focus,
select:focus,
textarea:focus {
  border-color: rgba(120, 199, 160, 0.8);
  box-shadow: 0 0 0 3px rgba(120, 199, 160, 0.16);
}

.form-actions {
  margin-top: 24px;
  display: flex;
  gap: 14px;
  flex-wrap: wrap;
  align-items: center;
}

button[disabled] {
  opacity: 0.45;
  cursor: not-allowed;
  transform: none !important;
  box-shadow: none !important;
}

.form-message {
  margin-top: 18px;
  min-height: 24px;
  font-weight: 600;
}

.form-message.success {
  color: #a5f1ba;
}

.form-message.error {
  color: #ff9498;
}

.report-card {
  padding-bottom: 32px;
}

.stat-grid {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 18px;
}

.stat-box {
  background: rgba(18, 35, 28, 0.9);
  border: 1px solid rgba(120, 199, 160, 0.22);
  border-radius: 18px;
  padding: 20px;
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.stat-box strong {
  font-size: clamp(1.8rem, 3vw, 2.4rem);
  color: var(--green-4);
}

.site-footer {
  position: relative;
  padding: 30px 32px 42px;
  border-top: 1px solid rgba(120, 199, 160, 0.28);
  background: rgba(4, 10, 7, 0.92);
}

.footer-pattern {
  position: absolute;
  inset: 0;
  background-image:
    repeating-linear-gradient(
      45deg,
      rgba(120, 199, 160, 0.08),
      rgba(120, 199, 160, 0.08) 2px,
      transparent 2px,
      transparent 12px
    );
  opacity: 0.6;
  pointer-events: none;
}

.footer-content {
  position: relative;
  z-index: 1;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 18px;
  flex-wrap: wrap;
}

.footer-content p {
  margin: 0;
  font-weight: 700;
  letter-spacing: 0.08em;
  text-transform: uppercase;
}

@media (max-width: 820px) {
  .top-bar,
  .footer-content {
    flex-direction: column;
    align-items: flex-start;
  }

  .village-grid,
  .tribe-list,
  .form-grid,
  .stat-grid {
    grid-template-columns: 1fr;
  }
}
