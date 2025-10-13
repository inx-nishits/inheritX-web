import Image from 'next/image'

export default function PortfolioGridSection() {
  return (
    <section className="section-project tf-spacing-2">
      <div className="tf-container">
        <div className="row g-30">
          <div className="col-md-4"><a className="image" href="/porfolio-details"><Image src="/image/project-item/project-item-1.jpg" alt="Project 1" width={600} height={600} sizes="(max-width: 768px) 100vw, 33vw" /></a></div>
          <div className="col-md-4"><a className="image" href="/porfolio-details"><Image src="/image/project-item/project-item-2.jpg" alt="Project 2" width={600} height={600} sizes="(max-width: 768px) 100vw, 33vw" /></a></div>
          <div className="col-md-4"><a className="image" href="/porfolio-details"><Image src="/image/project-item/project-item-3.jpg" alt="Project 3" width={600} height={600} sizes="(max-width: 768px) 100vw, 33vw" /></a></div>
          <div className="col-md-4"><a className="image" href="/porfolio-details"><Image src="/image/project-item/project-item-4.jpg" alt="Project 4" width={600} height={600} sizes="(max-width: 768px) 100vw, 33vw" /></a></div>
          <div className="col-md-4"><a className="image" href="/porfolio-details"><Image src="/image/project-item/project-item-5.jpg" alt="Project 5" width={600} height={600} sizes="(max-width: 768px) 100vw, 33vw" /></a></div>
          <div className="col-md-4"><a className="image" href="/porfolio-details"><Image src="/image/project-item/project-item-6.jpg" alt="Project 6" width={600} height={600} sizes="(max-width: 768px) 100vw, 33vw" /></a></div>
        </div>
      </div>
      <div className="sw-pagination-project sw-pagination mt-70 justify-content-center"></div>
    </section>
  );
}


