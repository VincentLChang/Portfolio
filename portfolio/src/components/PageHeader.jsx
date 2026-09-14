import './PageHeader.css'

function PageHeader({
  className = '',
  label,
  title,
  description,
  descriptionClassName = '',
  afterTitle,
  children,
}) {
  return (
    <section className={`header ${className}`.trim()}>
      <p className="hero-label">{label}</p>

      <h1>{title}</h1>

      {afterTitle}

      <p className={descriptionClassName}>{description}</p>

      {children}
    </section>
  )
}

export default PageHeader
