
import Header from '../content/Content-header';
import ContentWrapper from '../content/Content-wrapper';

function Content() {
  return (<main id="main" className='w-1/2 h-screen bg-secondary relative'>
    <Header />
    <ContentWrapper />
  </main>);
}

export default Content;