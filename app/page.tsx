'use client';

import { useState, FormEvent } from 'react';

type FilterCategory =
  | 'all'
  | 'intermediaria'
  | 'carpentry'
  | 'engenheirada'
  | 'slim'
  | 'woodglass'
  | 'especiais';

type ImageViewMode = 'ambient' | 'product';

interface ModelVariant {
  name: string;
  ambientImage?: string;
  productImage?: string;
}

interface ProductLineCard {
  id: string;
  category: Exclude<FilterCategory, 'all'>;
  eyebrow: string;
  title: string;
  description: string;
  quoteOption: string;
  ctaLabel: string;
  models: ModelVariant[];
}

const PRODUCT_LINES: ProductLineCard[] = [
  {
    id: 'intermediaria-bbb',
    category: 'intermediaria',
    eyebrow: 'Linha Intermediária · Família BBB',
    title: 'Simples · Frisada · Vidro',
    description:
      'Três linguagens versáteis para dormitórios, corredores, cozinhas e ambientes corporativos, com folha lisa, frisos horizontais ou visor vertical.',
    quoteOption: 'Linha Intermediária — BBB',
    ctaLabel: 'Orçar Linha BBB',
    models: [
      {
        name: 'BBB Simples',
        ambientImage: '/assets/catalogo/bbb-simples-amb.jpg',
        productImage: '/assets/catalogo/bbb-simples-prod.avif',
      },
      {
        name: 'BBB Frisada',
        ambientImage: '/assets/catalogo/bbb-frisada-amb.jpg',
        productImage: '/assets/catalogo/bbb-frisada-prod.jpg',
      },
      {
        name: 'BBB Vidro',
        ambientImage: '/assets/catalogo/bbb-vidro-amb.jpg',
        productImage: '/assets/catalogo/bbb-vidro-prod.avif',
      },
    ],
  },
  {
    id: 'intermediaria-ad',
    category: 'intermediaria',
    eyebrow: 'Linha Intermediária · Família AD',
    title: 'AD 01 · AD 02 · AD 03 · AD Vidros',
    description:
      'Minimalismo, frisos demarcados e superfícies contínuas com opção de visores em vidro para projetos de arquitetura contemporânea.',
    quoteOption: 'Linha Intermediária — AD',
    ctaLabel: 'Orçar Linha AD',
    models: [
      {
        name: 'AD 01',
        ambientImage: '/assets/catalogo/ad-01-amb.jpg',
        productImage: '/assets/catalogo/ad-01-prod.avif',
      },
      {
        name: 'AD 02',
        ambientImage: '/assets/catalogo/ad-02-amb.jpg',
        productImage: '/assets/catalogo/ad-02-prod.avif',
      },
      {
        name: 'AD 03',
        ambientImage: '/assets/catalogo/ad-03-amb.jpg',
        productImage: '/assets/catalogo/ad-03-prod.jpg',
      },
      {
        name: 'AD Vidros',
        productImage: '/assets/catalogo/ad-vidros-prod.avif',
        ambientImage: '/assets/catalogo/ad-01-amb.jpg',
      },
    ],
  },
  {
    id: 'intermediaria-classicas',
    category: 'intermediaria',
    eyebrow: 'Linha Intermediária · Clássicas & Vidro',
    title: 'Veneza · Suíça · Roma',
    description:
      'Desenhos com requadros envidraçados e almofadas clássicas que valorizam a iluminação natural, presença e profundidade.',
    quoteOption: 'Linha Intermediária — Clássicas (Veneza, Suíça, Roma)',
    ctaLabel: 'Orçar esta coleção',
    models: [
      {
        name: 'Veneza',
        ambientImage: '/assets/catalogo/veneza-amb.jpg',
        productImage: '/assets/catalogo/veneza-prod.avif',
      },
      {
        name: 'Veneza Inteira Vidro',
        ambientImage: '/assets/catalogo/veneza-vidro-amb.jpg',
        productImage: '/assets/catalogo/veneza-prod.avif',
      },
      {
        name: 'Suíça',
        ambientImage: '/assets/catalogo/suica-amb.jpg',
        productImage: '/assets/catalogo/suica-prod.avif',
      },
      {
        name: 'Roma',
        ambientImage: '/assets/catalogo/roma-amb.jpg',
        productImage: '/assets/catalogo/roma-prod.avif',
      },
    ],
  },
  {
    id: 'intermediaria-internacional',
    category: 'intermediaria',
    eyebrow: 'Linha Intermediária · Internacional',
    title: 'França · Itália · Belga · Mexicana · Malta',
    description:
      'Do envidraçado europeu ao desenho tradicional em madeira com almofadas e frisos de caráter marcante.',
    quoteOption: 'Linha Intermediária — Internacional',
    ctaLabel: 'Orçar esta coleção',
    models: [
      {
        name: 'França',
        ambientImage: '/assets/catalogo/franca-amb.jpg',
        productImage: '/assets/catalogo/franca-prod.avif',
      },
      {
        name: 'Itália',
        ambientImage: '/assets/catalogo/italia-amb.jpg',
        productImage: '/assets/catalogo/italia-prod.avif',
      },
      {
        name: 'Belga',
        ambientImage: '/assets/catalogo/belga-amb.jpg',
        productImage: '/assets/catalogo/belga-prod.avif',
      },
      {
        name: 'Mexicana',
        ambientImage: '/assets/catalogo/mexicana-amb.jpg',
        productImage: '/assets/catalogo/mexicana-prod.avif',
      },
      {
        name: 'Malta',
        productImage: '/assets/catalogo/malta-prod.avif',
        ambientImage: '/assets/catalogo/mexicana-amb.jpg',
      },
    ],
  },
  {
    id: 'intermediaria-destaque',
    category: 'intermediaria',
    eyebrow: 'Linha Intermediária · Entradas & Destaque',
    title: 'Basalto · Zoan',
    description:
      'Soluções de forte apelo arquitetônico para entradas e ambientes sociais, combinando madeira maciça trabalhada e visores verticais.',
    quoteOption: 'Linha Intermediária — Basalto / Zoan',
    ctaLabel: 'Orçar Basalto / Zoan',
    models: [
      {
        name: 'Basalto',
        ambientImage: '/assets/catalogo/basalto-amb.jpg',
        productImage: '/assets/catalogo/basalto-prod.avif',
      },
      {
        name: 'Zoan',
        ambientImage: '/assets/catalogo/zoan-amb.jpg',
        productImage: '/assets/catalogo/basalto-prod.avif',
      },
    ],
  },
  {
    id: 'linha-carpentry',
    category: 'carpentry',
    eyebrow: 'Linha Carpentry · Marcenaria Autoral',
    title: 'Muxarabi · Alteza · Celeiro · Ibiza · Vicenza',
    description:
      'Portas especiais com tramas Muxarabi, venezianas, arcos e desenhos exclusivos de marcenaria para projetos de alto padrão.',
    quoteOption: 'Linha Carpentry',
    ctaLabel: 'Orçar Linha Carpentry',
    models: [
      {
        name: 'Muxarabi',
        productImage: '/assets/catalogo/carpentry-muxarabi-prod.avif',
      },
      {
        name: 'Muxarabi I',
        productImage: '/assets/catalogo/carpentry-muxarabi-1-prod.avif',
      },
      {
        name: 'Alteza',
        productImage: '/assets/catalogo/carpentry-alteza-prod.avif',
      },
      {
        name: 'Celeiro',
        productImage: '/assets/catalogo/carpentry-celeiro-prod.avif',
      },
      {
        name: 'Holandesa',
        productImage: '/assets/catalogo/carpentry-holandesa-prod.avif',
      },
      {
        name: 'Ibiza',
        productImage: '/assets/catalogo/carpentry-ibiza-prod.avif',
      },
      {
        name: 'Modena',
        productImage: '/assets/catalogo/carpentry-modena-prod.avif',
      },
      {
        name: 'Segovia',
        productImage: '/assets/catalogo/carpentry-segovia-prod.avif',
      },
      {
        name: 'Vicenza',
        productImage: '/assets/catalogo/carpentry-vicenza-prod.avif',
      },
    ],
  },
  {
    id: 'linha-engenheirada',
    category: 'engenheirada',
    eyebrow: 'Linha Engenheirada · Estabilidade & Relevo',
    title: 'Bivar · Durango · Novel · Ripada Fuji',
    description:
      'Construção engenheirada de alta estabilidade dimensional com painéis ripados e geometrias contemporâneas de precisão.',
    quoteOption: 'Linha Engenheirada',
    ctaLabel: 'Orçar Linha Engenheirada',
    models: [
      {
        name: 'Bivar',
        productImage: '/assets/catalogo/eng-bivar-prod.avif',
      },
      {
        name: 'Durango',
        productImage: '/assets/catalogo/eng-durango-prod.jpg',
      },
      {
        name: 'Novel',
        productImage: '/assets/catalogo/eng-novel-prod.avif',
      },
      {
        name: 'Ripada Fuji',
        productImage: '/assets/catalogo/eng-fuji-prod.jpg',
      },
    ],
  },
  {
    id: 'linha-slim',
    category: 'slim',
    eyebrow: 'Linha Slim · Giro, Correr & Dupla',
    title: 'PV 08 · PV 10 · PV 12',
    description:
      'Perfis esbeltos e almofadas proporcionais com opções em kit porta de giro, sistemas de correr e folha dupla.',
    quoteOption: 'Linha Slim',
    ctaLabel: 'Orçar Linha Slim',
    models: [
      {
        name: 'PV 08',
        ambientImage: '/assets/catalogo/slim-pv08-amb.jpg',
        productImage: '/assets/catalogo/slim-pv08-prod.avif',
      },
      {
        name: 'PV 10 (Kit de Giro)',
        ambientImage: '/assets/catalogo/slim-pv10-amb.jpg',
        productImage: '/assets/catalogo/slim-pv10-prod.avif',
      },
      {
        name: 'PV 12',
        ambientImage: '/assets/catalogo/slim-pv12-amb.avif',
        productImage: '/assets/catalogo/slim-pv12-prod.jpg',
      },
      {
        name: 'PV 12 Correr',
        productImage: '/assets/catalogo/slim-pv12-correr-prod.jpg',
        ambientImage: '/assets/catalogo/slim-pv10-amb.jpg',
      },
      {
        name: 'PV 12 Dupla',
        productImage: '/assets/catalogo/slim-pv12-dupla-prod.jpg',
        ambientImage: '/assets/catalogo/slim-pv08-amb.jpg',
      },
    ],
  },
  {
    id: 'linha-woodglass',
    category: 'woodglass',
    eyebrow: 'Linha WoodGlass · Madeira & Vidro',
    title: 'Mônaco · Zurique · Milão · Panorâmica',
    description:
      'Integração luminosa entre estrutura em madeira e amplos visores de vidro para cozinhas, varandas gourmet e escritórios.',
    quoteOption: 'Linha WoodGlass',
    ctaLabel: 'Orçar Linha WoodGlass',
    models: [
      {
        name: 'Mônaco',
        ambientImage: '/assets/catalogo/woodglass-monaco-amb.jpg',
        productImage: '/assets/catalogo/woodglass-monaco-prod.avif',
      },
      {
        name: 'Zurique',
        ambientImage: '/assets/catalogo/woodglass-zurique-amb.jpg',
        productImage: '/assets/catalogo/woodglass-zurique-prod.avif',
      },
      {
        name: 'Milão',
        productImage: '/assets/catalogo/woodglass-milao-prod.avif',
        ambientImage: '/assets/catalogo/woodglass-monaco-amb.jpg',
      },
      {
        name: 'Panorâmica',
        productImage: '/assets/catalogo/woodglass-panoramica-prod.avif',
        ambientImage: '/assets/catalogo/woodglass-zurique-amb.jpg',
      },
    ],
  },
  {
    id: 'especiais-jomadi',
    category: 'especiais',
    eyebrow: 'Especiais · Laqueadas & Catálogo Jomadi',
    title: 'Laqueada Preta · Pivotantes · Estruturais',
    description:
      'Portas com pintura laqueada, soluções piso-teto e modelos por código do catálogo Jomadi (maciças, pivotantes e esquadrias).',
    quoteOption: 'Especiais / Catálogo Jomadi',
    ctaLabel: 'Consultar modelos e códigos',
    models: [
      {
        name: 'Preta Laqueada',
        productImage: '/assets/catalogo/especial-laqueada-prod.avif',
        ambientImage: '/assets/interior.jpg',
      },
      {
        name: 'Pivotantes & Estruturais (Jomadi)',
        productImage: '/assets/catalogo/jomadi-1.jpeg',
        ambientImage: '/assets/entrada.jpg',
      },
      {
        name: 'Maciças & Venezianas (Jomadi)',
        productImage: '/assets/catalogo/jomadi-2.jpeg',
        ambientImage: '/assets/entrada-paisagismo.jpg',
      },
    ],
  },
];

export default function HomePage() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeFilter, setActiveFilter] = useState<FilterCategory>('all');
  const [globalViewMode, setGlobalViewMode] = useState<ImageViewMode>('ambient');
  const [selectedModels, setSelectedModels] = useState<Record<string, number>>({});
  const [cardViewOverrides, setCardViewOverrides] = useState<Record<string, ImageViewMode>>({});

  const [nome, setNome] = useState('');
  const [zap, setZap] = useState('');
  const [cidade, setCidade] = useState('');
  const [perfil, setPerfil] = useState('');
  const [linha, setLinha] = useState('Preciso de orientação');
  const [mensagem, setMensagem] = useState('');

  const closeMenu = () => setMenuOpen(false);

  const handleGlobalViewChange = (mode: ImageViewMode) => {
    setGlobalViewMode(mode);
    setCardViewOverrides({});
  };

  const handleCardViewChange = (cardId: string, mode: ImageViewMode) => {
    setCardViewOverrides((prev) => ({ ...prev, [cardId]: mode }));
  };

  const handleSelectModel = (cardId: string, index: number) => {
    setSelectedModels((prev) => ({ ...prev, [cardId]: index }));
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const lines = [
      'Olá, WoodTech! Gostaria de solicitar um orçamento.',
      '',
      `Nome: ${nome.trim()}`,
      `WhatsApp: ${zap.trim()}`,
      `Cidade da obra: ${cidade.trim()}`,
      `Perfil: ${perfil.trim()}`,
      `Linha / produto: ${linha.trim()}`,
      `Detalhes: ${mensagem.trim() || 'Solicito orientação'}`,
    ];
    window.open(
      'https://wa.me/5571996116361?text=' + encodeURIComponent(lines.join('\n')),
      '_blank',
      'noopener,noreferrer'
    );
  };

  const currentYear = new Date().getFullYear();

  return (
    <>
      <header>
        <div className="wrap nav">
          <a href="#inicio" aria-label="WoodTech, início">
            <img
              className="logo"
              src="/assets/woodtech-logo-oficial.jpg"
              alt="WoodTech — Kit Porta Pronta"
              width={188}
              height={66}
            />
          </a>
          <nav
            id="navlinks"
            className={`navlinks${menuOpen ? ' open' : ''}`}
            aria-label="Navegação principal"
          >
            <a href="#solucao" onClick={closeMenu}>
              Kit porta pronta
            </a>
            <a href="#catalogo" onClick={closeMenu}>
              Portas e modelos
            </a>
            <a href="#profissionais" onClick={closeMenu}>
              Profissionais
            </a>
            <a href="#medidas" onClick={closeMenu}>
              Como funciona
            </a>
            <a className="btn btn-main" href="#orcamento" onClick={closeMenu}>
              Solicitar orçamento
            </a>
          </nav>
          <button
            className="hamburger"
            aria-label="Abrir menu"
            aria-expanded={menuOpen}
            id="menu"
            type="button"
            onClick={() => setMenuOpen((prev) => !prev)}
          >
            {menuOpen ? '×' : '☰'}
          </button>
        </div>
      </header>

      <main>
        <section className="hero" id="inicio">
          <div className="hero-copy">
            <div className="eyebrow">WoodTech · Lauro de Freitas, Bahia</div>
            <h1>
              Portas sob medida. <em>Precisão em cada detalhe.</em>
            </h1>
            <p>
              Transformamos projetos em soluções de alto padrão para arquitetos, construtoras e quem
              vai construir ou reformar. Kits completos, acabamento de fábrica e acompanhamento
              técnico do orçamento à entrega.
            </p>
            <div className="hero-actions">
              <a className="btn btn-main" href="#orcamento">
                Solicitar orçamento <span aria-hidden="true">↗</span>
              </a>
              <a className="btn btn-outline" href="#catalogo">
                Conhecer os modelos
              </a>
            </div>
            <div className="hero-meta">
              <span>Produção sob medida</span>
              <span>Atendimento em toda a Bahia</span>
              <span>A partir de 1 porta</span>
            </div>
          </div>
          <div className="hero-media">
            <img
              src="/assets/entrada.jpg"
              alt="Entrada de residência contemporânea com porta de madeira de grandes dimensões"
              fetchPriority="high"
              decoding="async"
              width={900}
              height={1080}
            />
            <div className="photo-label">Madeira, arquitetura e precisão</div>
          </div>
        </section>

        <div className="stats">
          <div className="wrap stats-grid">
            <div className="stat">
              <strong>+40</strong>
              <span>modelos em 6 linhas completas</span>
            </div>
            <div className="stat">
              <strong>7–10</strong>
              <span>dias úteis de produção estimada*</span>
            </div>
            <div className="stat">
              <strong>1 porta</strong>
              <span>pedidos sem quantidade mínima</span>
            </div>
            <div className="stat">
              <strong>Bahia</strong>
              <span>atendimento em todo o estado</span>
            </div>
          </div>
        </div>

        <section className="section" id="solucao">
          <div className="wrap intro-grid">
            <div>
              <span className="eyebrow">A solução completa</span>
              <h2 className="title">Porta pronta é mais do que a folha.</h2>
              <p className="lead">
                É um conjunto pensado para chegar à obra com os principais ajustes já realizados em
                fábrica. Menos etapas, mais previsibilidade e acabamento consistente.
              </p>
              <div className="check-list">
                <div className="check">
                  <span className="number">01</span>
                  <span>
                    <b>Folha</b> no modelo e acabamento escolhidos.
                  </span>
                </div>
                <div className="check">
                  <span className="number">02</span>
                  <span>
                    <b>Aduela</b> dimensionada para a espessura da parede acabada.
                  </span>
                </div>
                <div className="check">
                  <span className="number">03</span>
                  <span>
                    <b>Alizares</b> para o acabamento dos dois lados.
                  </span>
                </div>
                <div className="check">
                  <span className="number">04</span>
                  <span>
                    <b>Ferragens</b> com furações e usinagens previamente executadas conforme
                    especificação.
                  </span>
                </div>
              </div>
              <p className="note">
                A instalação é realizada pelo profissional responsável pela obra, com fixação
                adequada ao sistema e às condições do vão. A WoodTech fornece o kit e a orientação de
                instalação, mas não executa o serviço.
              </p>
              <a href="#orcamento" className="btn btn-main">
                Quero meu kit sob medida
              </a>
            </div>
            <img
              className="large-photo"
              src="/assets/interior.jpg"
              alt="Porta de madeira contemporânea vista pelo interior com acabamento de alto padrão"
              loading="lazy"
              decoding="async"
              width={864}
              height={1080}
            />
          </div>
        </section>

        <section className="section onwhite" id="catalogo">
          <div className="wrap">
            <div className="section-head">
              <span className="eyebrow">Linhas e soluções</span>
              <h2 className="title">A porta certa para cada projeto.</h2>
              <p className="lead">
                Navegue pelas linhas organizadas por família e alterne entre a foto{' '}
                <strong>Ambientada</strong> (aplicada no ambiente) e{' '}
                <strong>Somente o produto</strong> (folha e acabamento em detalhe).
              </p>
            </div>

            <div className="catalogo-toolbar">
              <div className="filters" role="group" aria-label="Filtrar por linha">
                {(
                  [
                    { id: 'all', label: 'Todas as linhas' },
                    { id: 'intermediaria', label: 'Linha Intermediária' },
                    { id: 'carpentry', label: 'Linha Carpentry' },
                    { id: 'engenheirada', label: 'Linha Engenheirada' },
                    { id: 'slim', label: 'Linha Slim' },
                    { id: 'woodglass', label: 'Linha WoodGlass' },
                    { id: 'especiais', label: 'Especiais & Jomadi' },
                  ] as const
                ).map((f) => (
                  <button
                    key={f.id}
                    type="button"
                    className={`filter${activeFilter === f.id ? ' active' : ''}`}
                    data-filter={f.id}
                    onClick={() => setActiveFilter(f.id)}
                  >
                    {f.label}
                  </button>
                ))}
              </div>

              <div className="view-mode-bar" role="group" aria-label="Modo de visualização das imagens">
                <span className="view-mode-label">Vista:</span>
                <button
                  type="button"
                  className={`view-mode-btn${globalViewMode === 'ambient' ? ' active' : ''}`}
                  onClick={() => handleGlobalViewChange('ambient')}
                >
                  Ambientada
                </button>
                <button
                  type="button"
                  className={`view-mode-btn${globalViewMode === 'product' ? ' active' : ''}`}
                  onClick={() => handleGlobalViewChange('product')}
                >
                  Somente o produto
                </button>
              </div>
            </div>

            <div className="product-grid" id="products">
              {PRODUCT_LINES.map((line) => {
                const isHidden = activeFilter !== 'all' && line.category !== activeFilter;
                const selectedIdx = selectedModels[line.id] ?? 0;
                const currentModel = line.models[selectedIdx] ?? line.models[0];

                const hasAmbient = Boolean(currentModel.ambientImage);
                const hasProduct = Boolean(currentModel.productImage);
                const hasBothViews = hasAmbient && hasProduct;

                const requestedMode = cardViewOverrides[line.id] ?? globalViewMode;
                const effectiveMode: ImageViewMode =
                  requestedMode === 'ambient'
                    ? hasAmbient
                      ? 'ambient'
                      : 'product'
                    : hasProduct
                      ? 'product'
                      : 'ambient';

                const imgSrc =
                  effectiveMode === 'ambient'
                    ? currentModel.ambientImage || currentModel.productImage!
                    : currentModel.productImage || currentModel.ambientImage!;

                return (
                  <article
                    key={line.id}
                    className="product"
                    data-cat={line.category}
                    hidden={isHidden}
                  >
                    <div
                      className={`product-media ${
                        effectiveMode === 'ambient' ? 'is-ambient' : 'is-product'
                      }`}
                    >
                      <img
                        src={imgSrc}
                        alt={`${line.eyebrow} — Modelo ${currentModel.name} (${
                          effectiveMode === 'ambient' ? 'Ambientada' : 'Somente o produto'
                        })`}
                        loading="lazy"
                        decoding="async"
                        width={420}
                        height={240}
                      />
                      {hasBothViews && (
                        <div className="media-toggle" role="group" aria-label="Alternar imagem">
                          <button
                            type="button"
                            className={effectiveMode === 'ambient' ? 'active' : ''}
                            onClick={() => handleCardViewChange(line.id, 'ambient')}
                          >
                            Ambientada
                          </button>
                          <button
                            type="button"
                            className={effectiveMode === 'product' ? 'active' : ''}
                            onClick={() => handleCardViewChange(line.id, 'product')}
                          >
                            Produto
                          </button>
                        </div>
                      )}
                      <span className="media-badge">
                        {currentModel.name} ·{' '}
                        {effectiveMode === 'ambient' ? 'Ambientada' : 'Somente o produto'}
                      </span>
                    </div>

                    <div className="product-body">
                      <small>{line.eyebrow}</small>
                      <h3>{line.title}</h3>
                      <p>{line.description}</p>

                      <span className="model-pills-label">
                        Selecione o modelo ({line.models.length}):
                      </span>
                      <div className="model-pills">
                        {line.models.map((m, mIdx) => (
                          <button
                            key={m.name}
                            type="button"
                            className={`model-pill${selectedIdx === mIdx ? ' active' : ''}`}
                            onClick={() => handleSelectModel(line.id, mIdx)}
                          >
                            {m.name}
                          </button>
                        ))}
                      </div>

                      <a
                        href="#orcamento"
                        className="product-cta"
                        data-product={line.quoteOption}
                        onClick={() => {
                          setLinha(line.quoteOption);
                          setMensagem((prev) =>
                            prev
                              ? prev
                              : `Interesse no modelo ${currentModel.name} (${line.eyebrow}).`
                          );
                        }}
                      >
                        <span>
                          {line.ctaLabel} ({currentModel.name})
                        </span>
                        <span aria-hidden="true">↗</span>
                      </a>
                    </div>
                  </article>
                );
              })}
            </div>
            <p className="disclaimer">
              Modelos, materiais e disponibilidade sujeitos à confirmação no orçamento. Imagens
              ambientadas e de produto meramente ilustrativas das linhas trabalhadas sob medida.
            </p>
          </div>
        </section>

        <section className="section" id="profissionais">
          <div className="wrap">
            <div className="section-head">
              <span className="eyebrow">Um atendimento para cada necessidade</span>
              <h2 className="title">Seu projeto, do jeito que precisa acontecer.</h2>
            </div>
            <div className="segments">
              <article className="segment">
                <span className="eyebrow">01 · Residencial</span>
                <h3>Vou construir ou reformar</h3>
                <p>
                  Entenda opções, custos, medidas e etapas. Receba orientação para decidir com
                  segurança, sem precisar dominar termos técnicos.
                </p>
                <a
                  href="#orcamento"
                  data-profile="Construção ou reforma"
                  onClick={() => setPerfil('Construção ou reforma')}
                >
                  Orçar meu projeto ↗
                </a>
              </article>
              <article className="segment">
                <span className="eyebrow">02 · Especificação</span>
                <h3>Sou arquiteto ou designer</h3>
                <p>
                  Você especifica. Nós desenvolvemos a solução com informações técnicas, acabamento,
                  validação do vão e condições para cada projeto.
                </p>
                <a
                  href="#orcamento"
                  data-profile="Arquiteto ou designer de interiores"
                  onClick={() => setPerfil('Arquiteto ou designer de interiores')}
                >
                  Solicitar atendimento técnico ↗
                </a>
              </article>
              <article className="segment">
                <span className="eyebrow">03 · Operação</span>
                <h3>Sou construtor ou incorporador</h3>
                <p>
                  Capacidade para lotes maiores e pedidos fracionados. Planejamento de entregas
                  conforme cronograma e necessidades de cada obra.
                </p>
                <a
                  href="#orcamento"
                  data-profile="Construtora ou incorporadora"
                  onClick={() => setPerfil('Construtora ou incorporadora')}
                >
                  Solicitar proposta ↗
                </a>
              </article>
            </div>
          </div>
        </section>

        <section className="section dark" id="processo">
          <div className="wrap">
            <span className="eyebrow" style={{ color: '#c9ae91' }}>
              Processo WoodTech
            </span>
            <h2 className="title" style={{ maxWidth: '800px' }}>
              Do vão ao kit pronto, com critério técnico.
            </h2>
            <p className="lead">
              Você envia as informações iniciais. Nós orientamos a especificação, validamos as
              medidas e organizamos a produção.
            </p>
            <div className="process">
              <div>
                <b>ETAPA 01</b>
                <h3>Conversa e briefing</h3>
                <p>Modelo, quantidade, cidade da obra, prazo desejado e referências do projeto.</p>
              </div>
              <div>
                <b>ETAPA 02</b>
                <h3>Medição e conferência</h3>
                <p>
                  Orientação por vídeo ou medição presencial a combinar, conforme viabilidade e
                  localização.
                </p>
              </div>
              <div>
                <b>ETAPA 03</b>
                <h3>Orçamento claro</h3>
                <p>
                  Especificação, valores e frete apresentados separadamente, com prazos a confirmar.
                </p>
              </div>
              <div>
                <b>ETAPA 04</b>
                <h3>Produção e entrega</h3>
                <p>Kit usinado sob medida em fábrica e envio para a obra conforme combinado.</p>
              </div>
            </div>
          </div>
        </section>

        <section className="section onwhite" id="medidas">
          <div className="wrap measure-grid">
            <div>
              <span className="eyebrow">Orientação técnica</span>
              <h2 className="title">Nós ajudamos a medir seu vão.</h2>
              <p className="lead">
                A medida correta evita incompatibilidades e retrabalho. Nossa equipe orienta a
                conferência inicial e define a validação técnica necessária antes de produzir.
              </p>
              <p className="note">
                Se houver revestimento de parede ou piso ainda não instalado, informe isso no
                contato. A espessura da aduela considera a parede na condição final do acabamento.
              </p>
              <a className="btn btn-main" href="#orcamento">
                Solicitar orientação de medição
              </a>
            </div>
            <div>
              <div className="check-list">
                <div className="check">
                  <span className="number">01</span>
                  <span>
                    <b>Largura do vão:</b> medir embaixo, no meio e em cima, registrando a menor
                    medida.
                  </span>
                </div>
                <div className="check">
                  <span className="number">02</span>
                  <span>
                    <b>Altura do vão:</b> do piso acabado à parte superior. Avisar quando o piso não
                    estiver concluído.
                  </span>
                </div>
                <div className="check">
                  <span className="number">03</span>
                  <span>
                    <b>Espessura da parede:</b> de uma face à outra, incluindo reboco e
                    revestimentos previstos.
                  </span>
                </div>
                <div className="check">
                  <span className="number">04</span>
                  <span>
                    <b>Sentido de abertura:</b> informe se a porta abre para dentro ou para fora e,
                    ao empurrá-la para abrir, se a folha se desloca à esquerda ou à direita. A
                    equipe confirma dobradiças e mão de abertura no projeto.
                  </span>
                </div>
              </div>
              <p className="small">
                Não produzimos a porta sem a confirmação das dimensões e especificações necessárias.
              </p>
            </div>
          </div>
        </section>

        <section className="section">
          <div className="wrap intro-grid">
            <img
              className="large-photo"
              src="/assets/entrada-paisagismo.jpg"
              alt="Arquitetura contemporânea com porta principal de madeira e jardim integrado"
              loading="lazy"
              decoding="async"
              width={864}
              height={1080}
            />
            <div>
              <span className="eyebrow">WoodTech · Estrutura e agilidade</span>
              <h2 className="title">
                Sua obra não pode parar por falta de prazo ou flexibilidade.
              </h2>
              <p className="lead">
                Especialistas em kit porta pronta em Lauro de Freitas, atendemos projetos
                residenciais e profissionais em toda a Bahia. Nossa proposta combina produção sob
                medida, capacidade para diferentes volumes e atenção aos detalhes de cada entrega.
              </p>
              <p className="lead">
                De uma porta a pedidos em etapas para obras maiores, buscamos soluções compatíveis
                com o cronograma e as especificações de cada cliente.
              </p>
              <a className="btn btn-main" href="#orcamento">
                Conte o que sua obra precisa
              </a>
            </div>
          </div>
        </section>

        <section className="section onwhite">
          <div className="wrap faq">
            <div className="section-head">
              <span className="eyebrow">Dúvidas frequentes</span>
              <h2 className="title">Respostas sem complicação.</h2>
            </div>
            <details>
              <summary>O kit porta pronta inclui quais peças?</summary>
              <p>
                Folha, aduela, alizares e ferragens especificadas, com os serviços de usinagem
                feitos em fábrica. A composição exata consta na proposta comercial.
              </p>
            </details>
            <details>
              <summary>A WoodTech faz a instalação?</summary>
              <p>
                Não. Fornecemos o kit preparado para instalação pelo profissional responsável pela
                obra, acompanhado das orientações necessárias.
              </p>
            </details>
            <details>
              <summary>Posso pedir apenas uma porta?</summary>
              <p>
                Sim. Atendemos a partir de uma unidade, assim como projetos com múltiplas portas e
                entregas planejadas.
              </p>
            </details>
            <details>
              <summary>Qual é o prazo de produção?</summary>
              <p>
                O catálogo informa uma referência de 7 a 10 dias úteis de produção sob medida. O
                prazo efetivo é confirmado após a definição do modelo, medidas, acabamento, volume e
                capacidade da fábrica.
              </p>
            </details>
            <details>
              <summary>Vocês atendem fora de Lauro de Freitas?</summary>
              <p>
                Sim. Atendemos toda a Bahia. Condições de transporte e eventual visita presencial
                dependem da localização e constam na proposta.
              </p>
            </details>
            <details>
              <summary>Vocês fornecem esquadrias de madeira?</summary>
              <p>
                Há soluções de esquadrias em avaliação de catálogo. Para modelos, medidas e
                disponibilidade, consulte a equipe. A publicação da coleção completa depende da
                validação do catálogo Jomadi.
              </p>
            </details>
          </div>
        </section>

        <section className="section" id="orcamento">
          <div className="wrap contact-grid">
            <div>
              <span className="eyebrow">Vamos conversar</span>
              <h2 className="title">Mande o que precisa. Desenvolvemos seu orçamento.</h2>
              <p className="lead">
                Não é necessário ter todas as medidas definidas. Conte onde será a obra e o tipo de
                projeto; nossa equipe orienta os próximos passos.
              </p>
              <p>
                <strong>WoodTech — Kit Porta Pronta</strong>
                <br />
                Rua Jurema, 1135 — Caji/Quingoma
                <br />
                Lauro de Freitas, BA · CEP 42725-430
                <br />
                WhatsApp:{' '}
                <a href="https://wa.me/5571996116361" target="_blank" rel="noopener noreferrer">
                  (71) 99611-6361
                </a>
              </p>
              <p className="small">
                O envio abre uma conversa no WhatsApp com os dados preenchidos. Nenhuma informação é
                salva neste site.
              </p>
            </div>
            <form className="form" id="quote" onSubmit={handleSubmit}>
              <div className="duo">
                <div className="field">
                  <label htmlFor="nome">Nome *</label>
                  <input
                    id="nome"
                    required
                    autoComplete="name"
                    placeholder="Seu nome"
                    value={nome}
                    onChange={(e) => setNome(e.target.value)}
                  />
                </div>
                <div className="field">
                  <label htmlFor="zap">WhatsApp *</label>
                  <input
                    id="zap"
                    required
                    type="tel"
                    autoComplete="tel"
                    placeholder="(71) 99999-9999"
                    value={zap}
                    onChange={(e) => setZap(e.target.value)}
                  />
                </div>
              </div>
              <div className="duo">
                <div className="field">
                  <label htmlFor="cidade">Cidade da obra *</label>
                  <input
                    id="cidade"
                    required
                    placeholder="Ex.: Salvador"
                    value={cidade}
                    onChange={(e) => setCidade(e.target.value)}
                  />
                </div>
                <div className="field">
                  <label htmlFor="perfil">Seu perfil *</label>
                  <select
                    id="perfil"
                    required
                    value={perfil}
                    onChange={(e) => setPerfil(e.target.value)}
                  >
                    <option value="">Selecione</option>
                    <option value="Construção ou reforma">Construção ou reforma</option>
                    <option value="Arquiteto ou designer de interiores">
                      Arquiteto ou designer de interiores
                    </option>
                    <option value="Construtora ou incorporadora">
                      Construtora ou incorporadora
                    </option>
                    <option value="Outro">Outro</option>
                  </select>
                </div>
              </div>
              <div className="field">
                <label htmlFor="linha">Linha ou produto</label>
                <select
                  id="linha"
                  value={linha}
                  onChange={(e) => setLinha(e.target.value)}
                >
                  <option value="Preciso de orientação">Preciso de orientação</option>
                  <option value="Linha Intermediária — BBB">Linha Intermediária — BBB</option>
                  <option value="Linha Intermediária — AD">Linha Intermediária — AD</option>
                  <option value="Linha Intermediária — Clássicas (Veneza, Suíça, Roma)">
                    Linha Intermediária — Clássicas (Veneza, Suíça, Roma)
                  </option>
                  <option value="Linha Intermediária — Internacional">
                    Linha Intermediária — Internacional
                  </option>
                  <option value="Linha Intermediária — Basalto / Zoan">
                    Linha Intermediária — Basalto / Zoan
                  </option>
                  <option value="Linha Carpentry">Linha Carpentry</option>
                  <option value="Linha Engenheirada">Linha Engenheirada</option>
                  <option value="Linha Slim">Linha Slim</option>
                  <option value="Linha WoodGlass">Linha WoodGlass</option>
                  <option value="Especiais / Catálogo Jomadi">
                    Especiais / Catálogo Jomadi
                  </option>
                </select>
              </div>
              <div className="field">
                <label htmlFor="mensagem">Detalhes do projeto</label>
                <textarea
                  id="mensagem"
                  rows={4}
                  placeholder="Conte as medidas, o prazo desejado, o acabamento ou qualquer informação relevante."
                  value={mensagem}
                  onChange={(e) => setMensagem(e.target.value)}
                />
              </div>
              <button className="btn btn-main" type="submit">
                Pedir orçamento pelo WhatsApp ↗
              </button>
              <p className="small">
                Ao continuar, você será direcionado ao WhatsApp e poderá revisar a mensagem antes de
                enviá-la.
              </p>
            </form>
          </div>
        </section>
      </main>

      <footer>
        <div className="wrap footer-grid">
          <div>
            <strong>WOODTECH</strong>
            <p>
              Kit porta pronta, portas maciças e soluções sob medida.
              <br />
              Lauro de Freitas · Atendimento em toda a Bahia.
            </p>
          </div>
          <div>
            <p>
              <a href="#catalogo">Produtos</a> · <a href="#profissionais">Profissionais</a> ·{' '}
              <a href="#orcamento">Orçamento</a>
            </p>
            <p>© {currentYear} WoodTech. Todos os direitos reservados.</p>
          </div>
        </div>
      </footer>

      <a
        className="float-wa"
        href="https://wa.me/5571996116361?text=Ol%C3%A1%2C%20gostaria%20de%20solicitar%20um%20or%C3%A7amento%20WoodTech."
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Olá, em que podemos ajudar? Falar com WoodTech pelo WhatsApp"
      >
        <span className="float-wa-tag">Olá, em que podemos ajudar?</span>
        <span className="float-wa-icon" aria-hidden="true">
          <svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
            <path d="M16.004 3.2c-7.07 0-12.8 5.73-12.8 12.8 0 2.256.59 4.46 1.71 6.404L3.2 28.8l6.56-1.718a12.74 12.74 0 0 0 6.244 1.622h.006c7.068 0 12.79-5.73 12.79-12.8 0-3.42-1.332-6.636-3.75-9.054A12.716 12.716 0 0 0 16.004 3.2zm0 23.344h-.004a10.6 10.6 0 0 1-5.404-1.48l-.388-.23-3.892 1.02 1.038-3.794-.252-.402a10.58 10.58 0 0 1-1.634-5.658c0-5.868 4.774-10.642 10.644-10.642 2.842 0 5.514 1.108 7.524 3.118a10.57 10.57 0 0 1 3.116 7.526c0 5.87-4.776 10.542-10.748 10.542zm5.838-7.968c-.32-.16-1.892-.934-2.186-1.04-.292-.108-.506-.16-.72.16-.212.32-.826 1.04-1.012 1.254-.186.212-.374.24-.694.08-.32-.16-1.35-.498-2.572-1.586-.95-.848-1.592-1.896-1.778-2.216-.186-.32-.02-.492.14-.652.144-.144.32-.374.48-.56.16-.186.212-.32.32-.534.106-.212.054-.4-.026-.56-.08-.16-.72-1.734-.986-2.374-.26-.624-.526-.538-.72-.548l-.614-.01c-.212 0-.56.08-.852.4-.294.32-1.12 1.094-1.12 2.668s1.146 3.094 1.306 3.308c.16.212 2.256 3.444 5.466 4.83.764.33 1.36.526 1.824.674.766.244 1.464.21 2.016.128.614-.092 1.892-.774 2.16-1.52.266-.748.266-1.388.186-1.52-.08-.134-.294-.214-.614-.374z" />
          </svg>
        </span>
      </a>
    </>
  );
}
