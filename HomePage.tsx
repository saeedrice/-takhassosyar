import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { MotionDiv } from "@/components/motion-wrapper";
import { useState } from "react";
import { useTranslation } from "react-i18next";

const languages = [
  { code: "fa", label: "🇮🇷 فارسی" },
  { code: "en", label: "🇬🇧 English" },
  { code: "ar", label: "🇸🇦 العربية" }
];

export default function HomePage() {
  const [language, setLanguage] = useState("fa");
  const { t, i18n } = useTranslation();

  const handleLanguageChange = (lang: string) => {
    setLanguage(lang);
    i18n.changeLanguage(lang);
    document.documentElement.dir = lang === "fa" || lang === "ar" ? "rtl" : "ltr";
  };

  return (
    <MotionDiv className={\`min-h-screen bg-white text-gray-900 p-6 \${language === "fa" || language === "ar" ? "rtl" : "ltr"}\`}>
      <header className="max-w-6xl mx-auto text-center py-10">
        <div className="flex justify-end mb-4">
          <LanguageSwitcher language={language} setLanguage={handleLanguageChange} />
        </div>
        <h1 className="text-4xl font-bold mb-4">{t('home.title')}</h1>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          {t('home.subtitle')}
        </p>
        <Separator className="my-6" />
      </header>

      <section className="max-w-6xl mx-auto grid gap-6 grid-cols-1 md:grid-cols-2">
        <AppCard
          name="SayadYar"
          description={t('apps.sayadyar')}
          color="#007BFF"
          href="#sayadyar"
        />
        <AppCard
          name="Nakhlyar"
          description={t('apps.nakhlyar')}
          color="#A67C52"
          href="#nakhlyar"
        />
        <AppCard
          name="Pesteyar"
          description={t('apps.pesteyar')}
          color="#4CAF50"
          href="#pesteyar"
        />
        <AppCard
          name="Saffronyar"
          description={t('apps.saffronyar')}
          color="#9C27B0"
          href="#saffronyar"
        />
      </section>

      <section className="max-w-5xl mx-auto mt-20">
        <h2 className="text-2xl font-bold mb-4 text-center">{t('about.title')}</h2>
        <p className="text-sm text-gray-700 leading-7">
          {t('about.text1')}
        </p>
        <p className="text-sm text-gray-700 leading-7 mt-4">
          {t('about.text2')}
        </p>
      </section>

      <section className="max-w-5xl mx-auto mt-20">
        <h2 className="text-2xl font-bold mb-4 text-center">{t('contact.title')}</h2>
        <p className="text-sm text-gray-700 leading-7 mb-4 text-center">
          {t('contact.description')}
        </p>
        <div className="text-center">
          <p className="text-sm text-gray-800">Email: info@takhassosyar.com</p>
          <p className="text-sm text-gray-800 mt-1">Phone: +98-21-1234-5678</p>
        </div>
      </section>

      <section className="max-w-5xl mx-auto mt-20">
        <h2 className="text-2xl font-bold mb-4 text-center">{t('terms.title')}</h2>
        <p className="text-sm text-gray-700 leading-7">
          {t('terms.text1')}
        </p>
        <p className="text-sm text-gray-700 leading-7 mt-4">
          {t('terms.text2')}
        </p>
      </section>

      <footer className="mt-16 text-center text-sm text-muted-foreground">
        © {new Date().getFullYear()} TakhassosYar | {t('footer.note')}
      </footer>
    </MotionDiv>
  );
}

function AppCard({ name, description, color, href }: { name: string; description: string; color: string; href: string }) {
  return (
    <div className="rounded-2xl shadow-md border border-gray-200 p-5 flex flex-col justify-between">
      <div>
        <h2 className="text-2xl font-bold mb-2" style={{ color }}>{name}</h2>
        <p className="text-sm text-gray-600 mb-4">{description}</p>
      </div>
      <Button style={{ backgroundColor: color }} className="text-white" onClick={() => window.location.href = href}>
        {`Enter ${name}`}
      </Button>
    </div>
  );
}

function LanguageSwitcher({ language, setLanguage }: { language: string; setLanguage: (lang: string) => void }) {
  return (
    <div className="space-x-2">
      {languages.map((lang) => (
        <button
          key={lang.code}
          onClick={() => setLanguage(lang.code)}
          className={\`px-3 py-1 text-sm rounded-full border \${language === lang.code ? "bg-gray-800 text-white" : "bg-white text-gray-800"}\`}
        >
          {lang.label}
        </button>
      ))}
    </div>
  );
}