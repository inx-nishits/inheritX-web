import Link from 'next/link'

export const dynamic = 'force-static'

export default function Page() {
  return (
    <>
      {/* Page-title */}
      <div className='page-title'>
        <div className='tf-container'>
          <div className='page-title-content text-center'>
            <h1 className='title split-text effect-right'>Digital Product</h1>
            <div className='breadkcum'>
              <Link href='/' className='link-breadkcum body-2 fw-7 split-text effect-right'>
                Home
              </Link>
              <span className='dot'></span>
              <span className='page-breadkcum body-2 fw-7 split-text effect-right'> Project Details</span>
            </div>
          </div>
        </div>
      </div>

      {/* Main-content */}
      <div className='main-content tf-spacing-2'>
        <div className='tf-container'>
          <div className='wg-details wg-project-details tf-spacing-2'>
            <div className='image-blog img-1'>
              <img
                src='/image/section/project-details-1.jpg'
                alt=''
                className='lazyload'
              />
            </div>
            <div className='details-content flex justify-content-between g-30 rg-50'>
              <div className='left'>
                <h3 className='title'>We Create digital Product For Business</h3>
                <div className='desc'>
                  <div className='desc-flex flex g-20'>
                    <span className='frame-item fw-7 fs-27'>S</span>
                    <span className='lh-30'>
                      Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque seeney laudantium totam rem aperiam eaque ipsa quae abillo inventore veritatis
                    </span>
                  </div>
                  <p className='lh-30'>
                    Beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aufugit sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam estqui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid consequature
                  </p>
                </div>
                <div className='cols'>
                  <div className='list-benefit'>
                    <div className='benefit-item'>
                      <i className='icon-check'></i>
                      <span className='lh-30 body-2'>Branding & Design</span>
                    </div>
                    <div className='benefit-item'>
                      <i className='icon-check'></i>
                      <span className='lh-30 body-2'>Web Development</span>
                    </div>
                    <div className='benefit-item'>
                      <i className='icon-check'></i>
                      <span className='lh-30 body-2'>Mobile Apps Design</span>
                    </div>
                    <div className='benefit-item'>
                      <i className='icon-check'></i>
                      <span className='lh-30 body-2'>Graphics Design</span>
                    </div>
                  </div>
                  <div className='list-benefit'>
                    <div className='benefit-item'>
                      <i className='icon-check'></i>
                      <span className='lh-30 body-2'>Digital Marketing</span>
                    </div>
                    <div className='benefit-item'>
                      <i className='icon-check'></i>
                      <span className='lh-30 body-2'>Product Design</span>
                    </div>
                    <div className='benefit-item'>
                      <i className='icon-check'></i>
                      <span className='lh-30 body-2'>System & Guide</span>
                    </div>
                    <div className='benefit-item'>
                      <i className='icon-check'></i>
                      <span className='lh-30 body-2'>Content Management</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className='right'>
                <div className='box-info'>
                  <div className='info-item'>
                    <div className='sub-title fw-5'>Category</div>
                    <h5 className='title-info fw-5'>Software Development</h5>
                  </div>
                  <div className='info-item'>
                    <div className='sub-title fw-5'>Clients</div>
                    <h5 className='title-info fw-5'>Design Studio</h5>
                  </div>
                  <div className='info-item'>
                    <div className='sub-title fw-5'>Location</div>
                    <h5 className='title-info fw-5'>Melbourne, Australia</h5>
                  </div>
                  <div className='info-item'>
                    <div className='sub-title fw-5'>Published</div>
                    <h5 className='title-info fw-5'>December 12,2025</h5>
                  </div>
                </div>
              </div>
            </div>
            <div className='list-img grid-3 flex flex-wrap mb-50'>
              <div className='image flex-grow-1'>
                <img
                  src='/image/section/project-details-2.jpg'
                  alt=''
                  className='lazyload'
                />
              </div>
              <div className='image flex-grow-1'>
                <img
                  src='/image/section/project-details-3.jpg'
                  alt=''
                  className='lazyload'
                />
              </div>
              <div className='image flex-grow-1'>
                <img
                  src='/image/section/project-details-4.jpg'
                  alt=''
                  className='lazyload'
                />
              </div>
            </div>
            <div className='details-content content-2'>
              <h3 className='title mb-25'>Project Summary</h3>
              <div className='desc'>
                <p className='lh-30'>
                  There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className='next-prev-details tf-spacing-2'>
          <div className='tf-container'>
            <div className='row rg-50'>
              <div className='col-6'>
                <div className='prev-details next-prev-item'>
                  <Link href='/porfolio-details' className='link'>
                    <i className='icon-arrow-left'></i> Previous
                  </Link>
                  <div className='prev-content-wrapper'>
                    <div className='prev-text-content'>
                      <h5 className='title'>
                        <Link href='/porfolio-details'>Website Design &amp; Development </Link>
                      </h5>
                    </div>
                  </div>
                </div>
              </div>
              <div className='col-6'>
                <div className='next-details next-prev-item'>
                  <Link href='/porfolio-details' className='link'>
                    {' '}Next <i className='icon-arrow-right'></i>
                  </Link>
                  <div className='next-content-wrapper'>
                    <div className='next-text-content'>
                      <h5 className='title'>
                        <Link href='/porfolio-details'>Digital Product Management </Link>
                      </h5>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

