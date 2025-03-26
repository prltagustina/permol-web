import { Helmet } from "react-helmet";

const SEO = () => {
  return (
    <Helmet>
      {/* Meta datos básicos */}
      <title>Permol Consultora | Recursos Humanos</title>
      <meta
        name="description"
        content="Consultora en Recursos Humanos especializada en selección de personal y desarrollo organizacional. Potenciamos equipos con estrategias innovadoras."
      />
      <meta name="author" content="Permol Consultora" />
      <meta name="robots" content="index, follow" />
      {/* Open Graph (Facebook, LinkedIn, WhatsApp) */}
      <meta property="og:type" content="website" />{" "}
      {/* <-- Cambiado a 'website' */}
      <meta
        property="og:title"
        content="Permol Consultora | Soluciones en Recursos Humanos"
      />
      <meta
        property="og:description"
        content="Consultora en Recursos Humanos especializada en selección de personal y desarrollo organizacional."
      />
      <meta
        property="og:image"
        content="https://permol-consultora.web.app/seo-image.jpg"
      />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:url" content="https://permol-consultora.web.app/" />
      <meta property="og:site_name" content="Permol Consultora" />
      <meta property="og:locale" content="es_ES" />
      {/* Twitter Cards */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta
        name="twitter:title"
        content="Permol Consultora | Soluciones en Recursos Humanos"
      />
      <meta
        name="twitter:description"
        content="Consultora en Recursos Humanos especializada en selección de personal y desarrollo organizacional."
      />
      <meta
        name="twitter:image"
        content="https://permol-consultora.web.app/seo-image.jpg"
      />
      <meta name="twitter:image:alt" content="Logo de Permol Consultora" />
      <meta name="twitter:url" content="https://permol-consultora.web.app/" />
      {/* Favicon */}
      <link rel="icon" href="/favicon.ico" />
    </Helmet>
  );
};

export default SEO;
