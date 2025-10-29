import DevCard from './DevCard'

export default function DevCardFlexbox() {
  // Example data for 6 developers
  const devs = [
    {
      name: 'Tony Wayne',
      title: 'Frontend Developer',
      img: 'https://images.unsplash.com/photo-1603871165848-0aa92c869fa1?auto=format&fit=crop&w=800&q=80',
    },
    {
      name: 'Sarah Miller',
      title: 'Backend Engineer',
      img: 'https://images.unsplash.com/photo-1554151228-14d9def656e4?auto=format&fit=crop&w=800&q=80',
    },
    {
      name: 'Daniel Kim',
      title: 'UI/UX Designer',
      img: 'https://images.unsplash.com/photo-1527980965255-d3b416303d12?auto=format&fit=crop&w=800&q=80',
    },
    {
      name: 'Maria Rodriguez',
      title: 'Full Stack Developer',
      img: 'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=800&q=80',
    },
    {
      name: 'James Liu',
      title: 'Mobile Developer',
      img: 'https://images.unsplash.com/photo-1511367461989-f85a21fda167?auto=format&fit=crop&w=800&q=80',
    },
    {
      name: 'Emma Thompson',
      title: 'DevOps Engineer',
      img: 'https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?auto=format&fit=crop&w=800&q=80',
    },
  ]

  return (
    <section className="bg-gray-50 dark:bg-gray-900 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-gray-800 dark:text-white mb-8 text-center">
          Meet Our Developers
        </h2>

        {/* Flexbox layout */}
        <div className="flex flex-wrap justify-center gap-6">
          {devs.map((dev, i) => (
            <div key={i} className="w-full sm:w-[45%] lg:w-[30%]">
              <DevCard {...dev} />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
