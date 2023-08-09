import dynamic from 'next/dynamic';

const DynamicComponent = dynamic(() => import('remote/REMOTE'), {
  loading: () => <p>Loading...</p>,
  ssr: false
})

export default function Home() {
  return (
    <main>
      <h1>MAIN COMPONENT</h1>
      <DynamicComponent />
    </main>
  )
}
