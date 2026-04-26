import { motion } from 'framer-motion';
import logo from '/src/images/logo.png';
import teamImage from '/src/images/team.png';

const reveal = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0 },
};

const navItems = [
  { label: 'À propos', href: '#about' },
  { label: 'Services', href: '#services' },
  { label: 'Impact', href: '#impact' },
  { label: 'Équipe', href: '#team' },
];

const credibilityStrip = ['Institutions publiques', 'Entreprises privées', 'ONG', 'Partenaires internationaux'];

const missionCards = [
  {
    title: 'Conseil stratégique',
    text: 'Aligner vision, gouvernance et priorités d’investissement autour d’une feuille de route réaliste.',
  },
  {
    title: 'Études & analyses',
    text: 'Produire des diagnostics robustes et des recommandations directement actionnables.',
  },
  {
    title: 'Renforcement des capacités',
    text: 'Outiller durablement les équipes pour exécuter leurs projets avec autonomie et rigueur.',
  },
  {
    title: 'Services opérationnels',
    text: 'Passer de la stratégie à l’action avec une orchestration précise des ressources et partenaires.',
  },
  {
    title: 'Partenariats & networking',
    text: 'Activer les bons écosystèmes pour accélérer l’impact économique et social.',
  },
];

const expertiseAreas = [
  'Gouvernance & politiques publiques',
  'Développement local',
  'Inclusion économique & financière',
  'Études & évaluations d’impact',
  'Communication stratégique',
  'Formation jeunes & femmes',
];

const values = [
  {
    title: 'Intégrité',
    text: 'Une exigence éthique constante dans les décisions, les analyses et l’exécution.',
  },
  {
    title: 'Innovation',
    text: 'Des approches hybrides qui combinent données, intelligence terrain et agilité.',
  },
  {
    title: 'Durabilité',
    text: 'Des solutions conçues pour produire des effets durables au-delà des cycles projets.',
  },
  {
    title: 'Partenariat',
    text: 'Une collaboration ouverte, responsable et orientée résultats avec chaque partie prenante.',
  },
];

const methodSteps = [
  {
    step: '01',
    title: 'Diagnostic',
    text: 'Cartographie stratégique, analyse des parties prenantes et lecture du contexte local.',
  },
  {
    step: '02',
    title: 'Conception',
    text: 'Co-construction des options, scénarios et plans opérationnels à fort impact.',
  },
  {
    step: '03',
    title: 'Coordination',
    text: 'Alignement des acteurs, gouvernance projet et pilotage des ressources clés.',
  },
  {
    step: '04',
    title: 'Mise en œuvre',
    text: 'Déploiement terrain, accompagnement des équipes et ajustements en continu.',
  },
  {
    step: '05',
    title: 'Évaluation d’impact',
    text: 'Mesure des résultats, capitalisation et renforcement des acquis institutionnels.',
  },
];

const impactFigures = [
  { value: '120+', label: 'missions d’appui accompagnées' },
  { value: '18', label: 'territoires africains couverts' },
  { value: '4 500+', label: 'professionnels formés' },
  { value: '92%', label: 'satisfaction partenaires' },
];

const testimonials = [
  {
    quote:
      'FIDES intelligence a structuré notre programme national avec une qualité d’exécution remarquable et un ancrage terrain décisif.',
    author: 'Coordonnatrice, ministère sectoriel',
  },
  {
    quote:
      'Un partenaire crédible pour les bailleurs: capacité analytique, gouvernance projet et résultats mesurables.',
    author: 'Programme Manager, partenaire international',
  },
];

const insights = [
  {
    title: 'Abidjan, hub de transformation publique et privée: opportunités 2026',
    meta: 'Brief stratégique · 6 min',
  },
  {
    title: 'Conduire un portefeuille de projets de développement sans perte d’impact',
    meta: 'Guide exécution · 8 min',
  },
  {
    title: 'Femmes et jeunesse entrepreneuriale: les leviers qui changent l’échelle',
    meta: 'Point de vue · 5 min',
  },
];

function SectionTitle({ kicker, title, description, light = false }) {
  const headingClass = light ? 'text-white' : 'text-slateBrand';
  const textClass = light ? 'text-slate-200' : 'text-slate-600';

  return (
    <div className="max-w-3xl">
      <p className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-emeraldBrand/95">{kicker}</p>
      <h2 className={`text-3xl font-bold leading-tight sm:text-4xl ${headingClass}`}>{title}</h2>
      {description ? <p className={`mt-4 text-base leading-relaxed ${textClass}`}>{description}</p> : null}
    </div>
  );
}

function App() {
  return (
    <main className="overflow-x-hidden pb-8">
      <div className="sticky top-0 z-50 border-b border-white/20 bg-slate-900/85 backdrop-blur-xl">
        <div className="section-shell flex h-16 items-center justify-between">
          <a href="#" className="text-white">
            <div className="flex items-center gap-3">
              <img
                src={logo}
                alt="FIDES intelligence logo"
                className="h-8 w-auto object-contain drop-shadow-[0_2px_8px_rgba(0,0,0,0.35)] transition-transform duration-200 hover:scale-105 sm:h-9 md:h-10 lg:h-11"
              />
              <span className="text-lg font-semibold tracking-tight">
                <span className="font-bold">FIDES</span> intelligence
              </span>
            </div>
          </a>
          <nav className="hidden items-center gap-6 md:flex">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="text-sm font-medium text-slate-200 transition hover:text-white"
              >
                {item.label}
              </a>
            ))}
          </nav>
          <a
            href="#contact"
            className="rounded-full bg-emeraldBrand px-4 py-2 text-xs font-semibold text-white transition hover:bg-[#00886a] sm:text-sm"
          >
            Contactez-nous
          </a>
        </div>
      </div>

      <header
        className="relative isolate overflow-hidden bg-slate-950 bg-cover bg-center text-white"
        style={{
          backgroundImage:
            "linear-gradient(112deg, rgba(10,15,24,0.82) 4%, rgba(13,22,35,0.68) 52%, rgba(0,155,119,0.33) 100%), url('https://images.unsplash.com/photo-1593697820824-6cddd5f83311?auto=format&fit=crop&w=2200&q=80')",
        }}
      >
        <div className="section-shell relative py-16 sm:py-24 lg:py-28">
          <motion.div
            variants={reveal}
            initial="hidden"
            animate="show"
            transition={{ duration: 0.8 }}
            className="max-w-4xl"
          >
            <p className="mb-6 inline-flex rounded-full border border-white/30 bg-white/10 px-4 py-1 text-xs uppercase tracking-[0.16em] text-slate-100">
              Cabinet d’appui au développement · Abidjan & N’Djamena
            </p>
            <h1 className="text-4xl font-bold leading-tight sm:text-5xl lg:text-6xl">
              Construire des solutions durables pour transformer l’Afrique
            </h1>
            <p className="mt-6 max-w-3xl text-lg leading-relaxed text-slate-200">
              Conseil stratégique, innovation et accompagnement opérationnel au service du développement. Nous aidons
              institutions, entreprises et partenaires à convertir leur ambition en trajectoires mesurables.
            </p>
            <div className="mt-10 flex flex-wrap gap-4">
              <a
                href="#contact"
                className="rounded-full bg-emeraldBrand px-7 py-3 text-sm font-semibold text-white transition hover:bg-[#00886a]"
              >
                Nous contacter
              </a>
              <a
                href="#services"
                className="rounded-full border border-white/45 px-7 py-3 text-sm font-semibold text-white transition hover:bg-white/10"
              >
                Découvrir nos services
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mt-14 grid gap-3 rounded-2xl border border-white/20 bg-white/10 p-4 backdrop-blur md:grid-cols-4"
          >
            {credibilityStrip.map((item) => (
              <p key={item} className="text-center text-xs font-medium uppercase tracking-[0.14em] text-slate-100">
                {item}
              </p>
            ))}
          </motion.div>
        </div>
      </header>

      <section id="about" className="py-24">
        <div className="section-shell grid gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
          <motion.div
            variants={reveal}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.6 }}
          >
            <SectionTitle
              kicker="À propos"
              title="Nous sommes des bâtisseurs d’avenir"
              description="FIDES intelligence est un cabinet d’appui au développement qui combine expertise locale africaine et standards internationaux pour orchestrer des transformations socio-économiques durables."
            />
            <p className="mt-5 leading-relaxed text-slate-600">
              Notre différence réside dans notre capacité à connecter la vision stratégique des décideurs à la réalité
              opérationnelle du terrain: gouvernance, exécution, impact et transfert de compétences.
            </p>
            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-soft">
                <p className="text-3xl font-bold text-slateBrand">Locale + Global</p>
                <p className="mt-2 text-sm text-slate-600">Lecture fine des contextes africains + rigueur internationale.</p>
              </div>
              <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-soft">
                <p className="text-3xl font-bold text-slateBrand">Impact réel</p>
                <p className="mt-2 text-sm text-slate-600">Des résultats pilotables pour bailleurs, institutions et communautés.</p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.97 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.7 }}
            className="relative"
          >
            <img
              src="https://images.unsplash.com/photo-1593697820824-6cddd5f83311?auto=format&fit=crop&w=1400&q=80"
              onError={(event) => {
                event.currentTarget.src =
                  'https://images.pexels.com/photos/323780/pexels-photo-323780.jpeg?auto=compress&cs=tinysrgb&w=1600';
              }}
              alt="Skyline moderne d'Abidjan"
              className="h-[460px] w-full rounded-3xl object-cover shadow-soft"
            />
            <div className="absolute -bottom-6 -left-4 max-w-xs rounded-2xl border border-white/60 bg-white/95 p-5 shadow-soft">
              <p className="text-sm font-semibold uppercase tracking-[0.14em] text-emeraldBrand">Positionnement premium</p>
              <p className="mt-2 text-sm leading-relaxed text-slate-600">
                Un cabinet de référence pour conduire des agendas de développement ambitieux en Afrique.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      <section id="services" className="bg-white/75 py-24">
        <div className="section-shell">
          <SectionTitle
            kicker="Vision & mission"
            title="De la vision stratégique à la transformation concrète"
            description="Notre vision: être un acteur de référence dans la transformation socio-économique en Afrique. Notre mission: structurer des solutions robustes, inclusives et exécutables à grande échelle."
          />

          <div className="mt-12 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {missionCards.map((item, index) => (
              <motion.article
                key={item.title}
                variants={reveal}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.45, delay: index * 0.05 }}
                className="group rounded-2xl border border-slate-200 bg-white p-6 shadow-soft transition hover:-translate-y-1 hover:border-emeraldBrand/35"
              >
                <p className="mb-3 inline-flex h-10 w-10 items-center justify-center rounded-xl bg-emeraldBrand/10 text-sm font-bold text-emeraldBrand">
                  0{index + 1}
                </p>
                <h3 className="text-xl font-semibold text-slateBrand">{item.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-slate-600">{item.text}</p>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24">
        <div className="section-shell">
          <SectionTitle
            kicker="Domaines d’expertise"
            title="Des expertises ciblées pour les enjeux prioritaires"
            description="Une offre pensée pour les décideurs publics, les acteurs privés et les organisations à impact."
          />
          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {expertiseAreas.map((area, index) => (
              <motion.div
                key={area}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.25 }}
                transition={{ duration: 0.45, delay: index * 0.04 }}
                className="rounded-2xl border border-slate-200 bg-white p-6 shadow-soft transition hover:-translate-y-1"
              >
                <h3 className="text-lg font-semibold text-slateBrand">{area}</h3>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-slateBrand py-24 text-white">
        <div className="section-shell grid gap-10 lg:grid-cols-[1fr_1.1fr] lg:items-start">
          <SectionTitle
            kicker="Valeurs"
            title="Des principes qui sécurisent vos décisions"
            description="Nous cultivons une relation de confiance durable avec chaque client, en alliant exigence, transparence et orientation impact."
            light
          />
          <div className="grid gap-4 sm:grid-cols-2">
            {values.map((value, index) => (
              <motion.article
                key={value.title}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.4, delay: index * 0.06 }}
                className="rounded-2xl border border-white/15 bg-white/10 p-5"
              >
                <p className="mb-3 text-xs font-semibold uppercase tracking-[0.15em] text-sky-200">{value.title}</p>
                <p className="text-sm leading-relaxed text-slate-100">{value.text}</p>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24">
        <div className="section-shell">
          <SectionTitle
            kicker="Approche"
            title="Une méthodologie claire, pilotée par la preuve"
            description="Chaque mission suit une séquence structurée garantissant l’alignement stratégique et la qualité d’exécution."
          />
          <div className="mt-12 space-y-4">
            {methodSteps.map((step, index) => (
              <motion.article
                key={step.step}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.4, delay: index * 0.06 }}
                className="grid gap-4 rounded-2xl border border-slate-200 bg-white p-5 shadow-soft sm:grid-cols-[90px_1fr] sm:items-center"
              >
                <p className="text-3xl font-bold text-skyBrand">{step.step}</p>
                <div>
                  <h3 className="text-lg font-semibold text-slateBrand">{step.title}</h3>
                  <p className="mt-1 text-sm text-slate-600">{step.text}</p>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      <section id="impact" className="bg-white/80 py-24">
        <div className="section-shell">
          <SectionTitle
            kicker="Impact"
            title="Des résultats qui rassurent les bailleurs et accélèrent les décideurs"
          />
          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {impactFigures.map((item, index) => (
              <motion.article
                key={item.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.25 }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                className="rounded-2xl border border-slate-200 bg-white p-6 text-center shadow-soft"
              >
                <p className="text-4xl font-extrabold text-emeraldBrand">{item.value}</p>
                <p className="mt-2 text-sm text-slate-600">{item.label}</p>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      <section id="team" className="py-24">
        <div className="section-shell grid gap-12 lg:grid-cols-[1.02fr_0.98fr] lg:items-center">
          <div>
            <SectionTitle
              kicker="Équipe"
              title="Un leadership reconnu, une force multidisciplinaire"
              description="Sous la direction du Dr Aime Robeye Rirangar, FIDES intelligence rassemble des profils experts en gouvernance, stratégie, suivi-évaluation, finance et conduite du changement."
            />
            <div className="mt-8 rounded-2xl border border-slate-200 bg-white p-6 shadow-soft">
              <h3 className="text-xl font-semibold text-slateBrand">Dr Aime Robeye Rirangar</h3>
              <p className="mt-2 text-sm font-semibold text-skyBrand">Leadership stratégique & accompagnement institutionnel</p>
              <p className="mt-3 text-sm leading-relaxed text-slate-600">
                Il conduit des missions complexes auprès d’institutions publiques, de partenaires internationaux et
                d’acteurs privés, avec une approche orientée résultats, transfert de compétences et durabilité.
              </p>
            </div>
          </div>

          <motion.img
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.65 }}
            src={teamImage}
            alt="Réunion de travail d'une équipe africaine multidisciplinaire"
            className="h-[450px] w-full rounded-3xl object-cover shadow-soft"
          />
        </div>
      </section>

      <section className="bg-slate-950 py-24 text-white">
        <div className="section-shell grid gap-12 lg:grid-cols-2">
          <div>
            <SectionTitle
              kicker="Témoignages"
              title="Un partenaire reconnu pour sa fiabilité"
              description="La qualité de notre accompagnement est validée par des institutions et partenaires engagés à long terme."
              light
            />
            <div className="mt-8 space-y-4">
              {testimonials.map((item, index) => (
                <motion.blockquote
                  key={item.author}
                  initial={{ opacity: 0, y: 18 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ duration: 0.45, delay: index * 0.08 }}
                  className="rounded-xl border border-white/15 bg-white/5 p-5"
                >
                  <p className="text-sm leading-relaxed text-slate-100">“{item.quote}”</p>
                  <footer className="mt-3 text-xs uppercase tracking-[0.11em] text-sky-200">{item.author}</footer>
                </motion.blockquote>
              ))}
            </div>
          </div>

          <div>
            <SectionTitle
              kicker="Insights"
              title="Analyses et perspectives"
              description="Des contenus conçus pour éclairer les décisions des dirigeants, bailleurs et équipes projet."
              light
            />
            <div className="mt-8 space-y-4">
              {insights.map((item, index) => (
                <motion.article
                  key={item.title}
                  initial={{ opacity: 0, y: 18 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ duration: 0.45, delay: index * 0.08 }}
                  className="rounded-xl border border-white/15 bg-white/5 p-5 transition hover:border-sky-300/45"
                >
                  <p className="text-xs uppercase tracking-[0.14em] text-sky-200">{item.meta}</p>
                  <h3 className="mt-2 text-base font-semibold">{item.title}</h3>
                </motion.article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-24">
        <div className="section-shell">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6 }}
            className="rounded-[2rem] bg-gradient-to-r from-emeraldBrand to-skyBrand p-10 text-white md:p-14"
          >
            <h2 className="text-3xl font-bold leading-tight sm:text-4xl">Vous avez un projet de développement ? Parlons-en.</h2>
            <p className="mt-4 max-w-2xl text-sky-50">
              Nous vous aidons à sécuriser votre trajectoire stratégique, à mobiliser les bons partenaires et à maximiser
              l’impact de vos interventions.
            </p>
            <a
              href="#contact"
              className="mt-8 inline-flex rounded-full bg-white px-7 py-3 text-sm font-semibold text-slateBrand transition hover:bg-slate-100"
            >
              Contactez-nous
            </a>
          </motion.div>
        </div>
      </section>

      <section id="contact" className="bg-white/80 py-24">
        <div className="section-shell grid gap-10 lg:grid-cols-[1fr_1.1fr]">
          <div>
            <SectionTitle
              kicker="Contact"
              title="Discutons de vos priorités de transformation"
              description="Basés à Abidjan et N’Djamena, nous accompagnons des acteurs qui recherchent un cabinet fiable, agile et orienté impact."
            />
          </div>
          <div className="rounded-3xl border border-slate-200 bg-white p-7 shadow-soft md:p-8">
            <p className="text-xs font-semibold uppercase tracking-[0.16em] text-slate-500">Email</p>
            <a className="mt-1 block text-lg font-semibold text-slateBrand" href="mailto:fidesintelligencechad@gmail.com">
              fidesintelligencechad@gmail.com
            </a>

            <p className="mt-6 text-xs font-semibold uppercase tracking-[0.16em] text-slate-500">Téléphones</p>
            <div className="mt-2 space-y-1 text-slateBrand">
              <p>+235 67 00 02 48</p>
              <p>+235 60 20 15 02</p>
              <p>+225 05 84 05 85 26</p>
            </div>

            <p className="mt-6 text-xs font-semibold uppercase tracking-[0.16em] text-slate-500">Localisation</p>
            <p className="mt-1 text-slateBrand">Abidjan / N’Djamena</p>
          </div>
        </div>
      </section>

      <footer className="border-t border-slate-200 bg-[#f6faf9] py-10">
        <div className="section-shell flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-lg tracking-tight text-slateBrand">
            <span className="font-extrabold">FIDES</span> <span className="font-normal">intelligence</span>
          </p>
          <nav className="flex flex-wrap gap-x-6 gap-y-2 text-sm text-slate-600">
            <a href="#about" className="hover:text-emeraldBrand">
              À propos
            </a>
            <a href="#services" className="hover:text-emeraldBrand">
              Services
            </a>
            <a href="#impact" className="hover:text-emeraldBrand">
              Impact
            </a>
            <a href="#contact" className="hover:text-emeraldBrand">
              Contact
            </a>
            <a href="#" className="hover:text-emeraldBrand">
              LinkedIn
            </a>
          </nav>
        </div>
      </footer>
    </main>
  );
}

export default App;
