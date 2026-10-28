'use client';

import { useState, FormEvent } from 'react';

type FilterCategory = 'all' | 'internas' | 'assinatura' | 'especiais';

interface ProductItem {
  category: Exclude<FilterCategory, 'all'>;
  small: string;
  title: string;
  description: string;
  productValue: string;
  ctaLabel: string;
}

const PRODUCTS: ProductItem[] = [
  {
    category: 'internas',
    small: 'Linha BBB',
    title: 'Inteira · Frisada · Vidro',
    description: 'Três linguagens para dormitórios, corredores, cozinhas e ambientes de trabalho.',
    productValue: 'Linha BBB',
    ctaLabel: 'Consultar esta linha ↗',
  },
  {
    category: 'assinatura',
    small: 'Linha Mundo',
    title: 'Veneza · Suíça · Roma',
    description: 'Desenhos ripados e composições com presença, ritmo e profundidade.',
    productValue: 'Linha Mundo',
    ctaLabel: 'Consultar esta linha ↗',
  },
  {
    category: 'assinatura',
    small: 'Linha Mundo',
    title: 'França · Itália · Bélgica · Mexicana',
    description: 'Do envidraçado ao desenho tradicional e à madeira de caráter mais marcante.',
    productValue: 'Linha Mundo',
    ctaLabel: 'Consultar esta linha ↗',
  },
  {
    category: 'internas',
    small: 'Linha AD',
    title: 'AD 01 · AD 02 · AD 03',
    description: 'Minimalismo, frisos e superfícies contínuas para arquitetura contemporânea.',
    productValue: 'Linha AD',
    ctaLabel: 'Consultar esta linha ↗',
  },
  {
    category: 'especiais',
    small: 'Portas maciças',
    title: 'Basalto · Zoan · Inteira Vidro',
    description: 'Soluções de destaque para entradas e vãos especiais, sujeitas à avaliação técnica.',
    productValue: 'Portas maciças',
    ctaLabel: 'Consultar esta linha ↗',
  },
  {
    category: 'especiais',
    small: 'Catálogo por código',
    title: 'Maciças · Venezianas · Pivotantes',
    description: 'Já tem um código de modelo? Informe a referência para avaliação de disponibilidade e execução.',
    productValue: 'Modelo por código',
    ctaLabel: 'Enviar código ↗',
  },
];

export default function HomePage() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeFilter, setActiveFilter] = useState<FilterCategory>('all');

  const [nome, setNome] = useState('');
  const [zap, setZap] = useState('');
  const [cidade, setCidade] = useState('');
  const [perfil, setPerfil] = useState('');
  const [qtd, setQtd] = useState('');
  const [linha, setLinha] = useState('Preciso de orientação');
  const [mensagem, setMensagem] = useState('');

  const closeMenu = () => setMenuOpen(false);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const lines = [
      'Olá, WoodTech! Gostaria de solicitar um orçamento.',
      '',
      `Nome: ${nome.trim()}`,
      `WhatsApp: ${zap.trim()}`,
      `Cidade da obra: ${cidade.trim()}`,
      `Perfil: ${perfil.trim()}`,
      `Quantidade estimada: ${qtd.trim() || 'A definir'}`,
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
            />
            <div className="photo-label">Madeira, arquitetura e precisão</div>
          </div>
        </section>

        <div className="stats">
          <div className="wrap stats-grid">
            <div className="stat">
              <strong>+40</strong>
              <span>modelos por código no catálogo</span>
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
            />
          </div>
        </section>

        <section className="section onwhite" id="catalogo">
          <div className="wrap">
            <div className="section-head">
              <span className="eyebrow">Linhas e soluções</span>
              <h2 className="title">A porta certa para cada projeto.</h2>
              <p className="lead">
                De ambientes internos a entradas de grande presença arquitetônica. Escolha a família
                e conte com nossa equipe para especificar medidas, abertura e acabamento.
              </p>
            </div>
            <div className="filters" role="group" aria-label="Filtrar modelos">
              {(
                [
                  { id: 'all', label: 'Todos' },
                  { id: 'internas', label: 'Interiores' },
                  { id: 'assinatura', label: 'Assinatura' },
                  { id: 'especiais', label: 'Especiais' },
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
            <div className="product-grid" id="products">
              {PRODUCTS.map((item, idx) => {
                const isHidden = activeFilter !== 'all' && item.category !== activeFilter;
                return (
                  <article
                    key={idx}
                    className="product"
                    data-cat={item.category}
                    hidden={isHidden}
                  >
                    <small>{item.small}</small>
                    <h3>{item.title}</h3>
                    <p>{item.description}</p>
                    <a
                      href="#orcamento"
                      data-product={item.productValue}
                      onClick={() => setLinha(item.productValue)}
                    >
                      {item.ctaLabel}
                    </a>
                  </article>
                );
              })}
            </div>
            <p className="disclaimer">
              Modelos, materiais e disponibilidade sujeitos à confirmação no orçamento. Imagens de
              arquitetura usadas como referência visual; não representam necessariamente itens
              fabricados pela WoodTech.
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
              <div className="duo">
                <div className="field">
                  <label htmlFor="qtd">Quantidade estimada</label>
                  <input
                    id="qtd"
                    type="number"
                    min="1"
                    placeholder="Ex.: 12"
                    value={qtd}
                    onChange={(e) => setQtd(e.target.value)}
                  />
                </div>
                <div className="field">
                  <label htmlFor="linha">Linha ou produto</label>
                  <select
                    id="linha"
                    value={linha}
                    onChange={(e) => setLinha(e.target.value)}
                  >
                    <option value="Preciso de orientação">Preciso de orientação</option>
                    <option value="Linha BBB">Linha BBB</option>
                    <option value="Linha Mundo">Linha Mundo</option>
                    <option value="Linha AD">Linha AD</option>
                    <option value="Portas maciças">Portas maciças</option>
                    <option value="Modelo por código">Modelo por código</option>
                    <option value="Esquadrias — consultar">Esquadrias — consultar</option>
                  </select>
                </div>
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
        aria-label="Falar com WoodTech pelo WhatsApp"
      >
        WhatsApp ↗
      </a>
    </>
  );
}
