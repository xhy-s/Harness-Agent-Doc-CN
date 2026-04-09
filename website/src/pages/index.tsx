import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import styles from './index.module.css';

interface FeatureCardProps {
  to: string;
  icon: string;
  title: string;
  description: string;
  delay: string;
}

function FeatureCard({ to, icon, title, description, delay }: FeatureCardProps) {
  return (
    <Link to={to} className={styles.featureCard} style={{ animationDelay: delay }}>
      <div className={styles.featureIcon}>{icon}</div>
      <h3 className={styles.featureTitle}>{title}</h3>
      <p className={styles.featureDesc}>{description}</p>
      <div className={styles.featureArrow}>→</div>
    </Link>
  );
}

function NeuralBackground() {
  return (
    <div className={styles.neuralBg}>
      <canvas id="neuralCanvas" className={styles.neuralCanvas} />
    </div>
  );
}

export default function Home(): JSX.Element {
  const { siteConfig } = useDocusaurusContext();

  return (
    <Layout
      title={siteConfig.title}
      description="Harness 官方 AI Agent 中文文档"
    >
      <NeuralBackground />

      <main className={styles.main}>
        {/* Hero Section */}
        <section className={styles.hero}>
          <div className={styles.heroContent}>
            <div className={styles.badge}>Harness AI</div>
            <h1 className={styles.heroTitle}>
              <span className={styles.titleLine}>Harness</span>
              <span className={styles.titleLineAccent}>Agents</span>
            </h1>
            <p className={styles.heroSubtitle}>
              在 Harness Pipelines 中运行的 AI 自主代理<br />
              <span className={styles.highlight}>Pipeline 原生</span> · <span className={styles.highlight}>安全可控</span> · <span className={styles.highlight}>企业级</span>
            </p>
            <div className={styles.heroCta}>
              <Link to="/docs/platform/harness-ai/harness-agents" className={styles.btnPrimary}>
                <span>了解 Agents</span>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </Link>
              <Link to="/docs/platform/harness-ai/overview" className={styles.btnSecondary}>
                Harness AI 概述
              </Link>
            </div>
          </div>

          <div className={styles.heroVisual}>
            <div className={styles.orbContainer}>
              <div className={styles.orb} />
              <div className={styles.orbRing} />
              <div className={styles.orbRing2} />
              <div className={styles.orbGlow} />
            </div>
          </div>
        </section>

        {/* Features Grid */}
        <section className={styles.features}>
          <h2 className={styles.sectionTitle}>核心能力</h2>
          <div className={styles.featureGrid}>
            <FeatureCard
              to="/docs/platform/harness-ai/harness-agents"
              icon="⚡"
              title="Harness Agents"
              description="Pipeline 原生的 AI 代理，在 Harness 中执行 DevOps 任务"
              delay="0ms"
            />
            <FeatureCard
              to="/docs/platform/harness-ai/code-agent"
              icon="🔧"
              title="Code Agent"
              description="IDE 扩展，提供智能代码生成和实时代码建议"
              delay="100ms"
            />
            <FeatureCard
              to="/docs/platform/harness-ai/harness-skills"
              icon="📝"
              title="Harness Skills"
              description="AI 编码助手与 Harness 平台交互的专业技能模板"
              delay="200ms"
            />
            <FeatureCard
              to="/docs/platform/harness-ai/devops-agent"
              icon="🤖"
              title="DevOps Agent"
              description="通过自然语言创建和管理 Pipelines、Stages、Steps"
              delay="300ms"
            />
            <FeatureCard
              to="/docs/platform/harness-ai/ci-agent"
              icon="🔍"
              title="CI Agent"
              description="AI 驱动的 CI/CD 构建故障排除和修复"
              delay="400ms"
            />
            <FeatureCard
              to="/docs/platform/harness-ai/overview"
              icon="📊"
              title="Harness AI 概述"
              description="完整的 Harness AI 功能平台概览"
              delay="500ms"
            />
          </div>
        </section>

        {/* Stats Section */}
        <section className={styles.stats}>
          <div className={styles.statItem}>
            <span className={styles.statNumber}>10+</span>
            <span className={styles.statLabel}>System Agents</span>
          </div>
          <div className={styles.statDivider} />
          <div className={styles.statItem}>
            <span className={styles.statNumber}>3</span>
            <span className={styles.statLabel}>LLM 支持</span>
          </div>
          <div className={styles.statDivider} />
          <div className={styles.statItem}>
            <span className={styles.statNumber}>OPA</span>
            <span className={styles.statLabel}>Governance</span>
          </div>
        </section>

        {/* CTA Section */}
        <section className={styles.ctaSection}>
          <div className={styles.ctaContent}>
            <h2>准备好开始了吗？</h2>
            <p>探索 Harness Agents 如何革新您的 DevOps 工作流</p>
            <Link to="/docs/platform/harness-ai/harness-agents" className={styles.ctaButton}>
              开始探索 →
            </Link>
          </div>
        </section>

        {/* Footer */}
        <footer className={styles.footer}>
          <div className={styles.footerContent}>
            <div className={styles.footerBrand}>
              <span className={styles.footerLogo}>Harness Agents 中文文档</span>
              <span className={styles.footerTagline}>基于官方文档翻译</span>
            </div>
            <div className={styles.footerLinks}>
              <a href="https://developer.harness.io/docs/platform/harness-ai/harness-agents" target="_blank" rel="noopener noreferrer">官方文档</a>
              <a href="https://github.com/harness/harness-skills" target="_blank" rel="noopener noreferrer">GitHub</a>
              <a href="/docs/platform/harness-ai/overview">文档</a>
            </div>
          </div>
        </footer>
      </main>

      <script
        dangerouslySetInnerHTML={{
          __html: `
            (function() {
              const canvas = document.getElementById('neuralCanvas');
              const ctx = canvas.getContext('2d');
              let width, height;
              let particles = [];
              const particleCount = 80;
              const connectionDistance = 150;

              function resize() {
                width = canvas.width = window.innerWidth;
                height = canvas.height = window.innerHeight;
              }

              function createParticle() {
                return {
                  x: Math.random() * width,
                  y: Math.random() * height,
                  vx: (Math.random() - 0.5) * 0.5,
                  vy: (Math.random() - 0.5) * 0.5,
                  radius: Math.random() * 2 + 1,
                  opacity: Math.random() * 0.5 + 0.2
                };
              }

              function init() {
                resize();
                particles = [];
                for (let i = 0; i < particleCount; i++) {
                  particles.push(createParticle());
                }
              }

              function animate() {
                ctx.clearRect(0, 0, width, height);

                particles.forEach((p, i) => {
                  p.x += p.vx;
                  p.y += p.vy;

                  if (p.x < 0 || p.x > width) p.vx *= -1;
                  if (p.y < 0 || p.y > height) p.vy *= -1;

                  ctx.beginPath();
                  ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
                  ctx.fillStyle = 'rgba(34, 211, 238, ' + p.opacity + ')';
                  ctx.fill();

                  particles.slice(i + 1).forEach(p2 => {
                    const dx = p.x - p2.x;
                    const dy = p.y - p2.y;
                    const dist = Math.sqrt(dx * dx + dy * dy);

                    if (dist < connectionDistance) {
                      ctx.beginPath();
                      ctx.moveTo(p.x, p.y);
                      ctx.lineTo(p2.x, p2.y);
                      ctx.strokeStyle = 'rgba(34, 211, 238, ' + (0.15 * (1 - dist / connectionDistance)) + ')';
                      ctx.lineWidth = 0.5;
                      ctx.stroke();
                    }
                  });
                });

                requestAnimationFrame(animate);
              }

              window.addEventListener('resize', resize);
              init();
              animate();
            })();
          `
        }}
      />
    </Layout>
  );
}
