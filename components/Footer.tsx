export default function Footer() {
  return (
    <section className="flex w-full justify-between px-4 py-3">
      <aside className="flex items-center">
        <p className="text-[13px] leading-5 text-muted-foreground">
          A{' '}
          <a
            href="https://worldassociation.org"
            target="_blank"
            rel="noreferrer"
            className="font-semibold"
          >
            World Association
          </a>{' '}
          campaign.
        </p>
      </aside>
      <a
        href="https://github.com/worldassociation/raised-by-humanity"
        target="_blank"
        rel="noreferrer"
        className="text-[13px] font-medium leading-5 text-muted-foreground"
      >
        GitHub
      </a>
    </section>
  );
}
