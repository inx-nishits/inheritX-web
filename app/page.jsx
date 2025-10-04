import HomeContent from './components/home/HomeContent';

export const dynamic = 'force-static';

export default function Home() {
  return (
    <main>
      <div className="main-content">
        <HomeContent />
      </div>
    </main>
  );
}
